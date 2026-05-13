"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { createSupabaseBrowserClient } from "@/lib/supabase/client";
import type { SiteContent } from "@/lib/content";

export function AdminDashboard({ initial }: { initial: SiteContent }) {
  const router = useRouter();
  const [content, setContent] = useState<SiteContent>(initial);
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [toast, setToast] = useState<{ kind: "ok" | "err"; msg: string } | null>(null);

  function flash(kind: "ok" | "err", msg: string) {
    setToast({ kind, msg });
    setTimeout(() => setToast(null), 3500);
  }

  function update<K extends keyof SiteContent>(key: K, value: SiteContent[K]) {
    setContent((c) => ({ ...c, [key]: value }));
  }

  async function save() {
    setSaving(true);
    const res = await fetch("/api/content", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(content),
    });
    setSaving(false);
    if (!res.ok) {
      const { error } = await res.json().catch(() => ({ error: "Save failed" }));
      flash("err", error || "Save failed");
      return;
    }
    flash("ok", "Saved. Public site updated.");
    router.refresh();
  }

  async function logout() {
    const supabase = createSupabaseBrowserClient();
    await supabase.auth.signOut();
    router.push("/admin/login");
    router.refresh();
  }

  async function uploadImage(file: File): Promise<string | null> {
    setUploading(true);
    const fd = new FormData();
    fd.append("file", file);
    const res = await fetch("/api/upload", { method: "POST", body: fd });
    setUploading(false);
    if (!res.ok) {
      const { error } = await res.json().catch(() => ({ error: "Upload failed" }));
      flash("err", error || "Upload failed");
      return null;
    }
    const { url } = await res.json();
    return url as string;
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <header className="sticky top-0 z-30 bg-white border-b border-slate-100">
        <div className="mx-auto max-w-5xl px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2 font-extrabold">
            <Image src="/logo.png" alt="Logo" width={32} height={32} className="object-contain" />
            <span className="block w-6 h-[3px] bg-[#ff4d4d] rounded-full" />
            <span className="text-sm font-medium text-slate-500 ml-2">/ Admin</span>
          </div>
          <div className="flex items-center gap-2">
            <a href="/" target="_blank" className="text-sm text-slate-600 hover:text-[#ff4d4d]">
              View site ↗
            </a>
            <button
              onClick={save}
              disabled={saving}
              className="brand-gradient text-white text-sm font-semibold px-4 py-2 rounded-full disabled:opacity-60"
            >
              {saving ? "Saving..." : "Save Changes"}
            </button>
            <button
              onClick={logout}
              className="text-sm text-slate-500 hover:text-rose-600 px-3 py-2"
            >
              Sign out
            </button>
          </div>
        </div>
      </header>

      {toast && (
        <div
          className={`fixed top-20 right-6 z-50 px-4 py-3 rounded-lg shadow-lg text-sm font-medium ${
            toast.kind === "ok"
              ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
              : "bg-rose-50 text-rose-700 border border-rose-200"
          }`}
        >
          {toast.msg}
        </div>
      )}

      <main className="mx-auto max-w-5xl px-6 py-8 space-y-6">
        {/* PROFILE */}
        <Section title="Profile">
          <div className="grid sm:grid-cols-[140px_1fr] gap-5 items-start">
            <div>
              <div className="relative w-32 h-32 rounded-2xl overflow-hidden bg-slate-100 border border-slate-200">
                {content.profile.profileImage && (
                  <Image
                    src={content.profile.profileImage}
                    alt="Profile"
                    fill
                    sizes="128px"
                    className="object-cover"
                  />
                )}
              </div>
              <label className="mt-3 inline-flex items-center justify-center gap-1 text-xs font-semibold text-slate-700 cursor-pointer bg-white border border-slate-200 rounded-full px-3 py-1.5 hover:border-[#ff4d4d]">
                {uploading ? "Uploading..." : "Change photo"}
                <input
                  type="file"
                  accept="image/*"
                  hidden
                  disabled={uploading}
                  onChange={async (e) => {
                    const f = e.target.files?.[0];
                    if (!f) return;
                    const url = await uploadImage(f);
                    if (url) {
                      update("profile", { ...content.profile, profileImage: url });
                      flash("ok", "Image uploaded. Don't forget to Save.");
                    }
                    e.target.value = "";
                  }}
                />
              </label>
            </div>
            <div className="grid sm:grid-cols-2 gap-3">
              <TextField label="Name" value={content.profile.name} onChange={(v) => update("profile", { ...content.profile, name: v })} />
              <TextField label="Initials" value={content.profile.initials} onChange={(v) => update("profile", { ...content.profile, initials: v })} />
              <TextField label="Title" value={content.profile.title} onChange={(v) => update("profile", { ...content.profile, title: v })} className="sm:col-span-2" />
              <TextArea label="Tagline" value={content.profile.tagline} onChange={(v) => update("profile", { ...content.profile, tagline: v })} className="sm:col-span-2" />
            </div>
          </div>
        </Section>

        {/* HERO */}
        <Section title="Hero">
          <div className="grid gap-3">
            <ListField
              label="Headline (one line per row)"
              values={content.hero.headline}
              onChange={(v) => update("hero", { ...content.hero, headline: v })}
            />
            <ListField
              label="Words to highlight in red"
              values={content.hero.highlight}
              onChange={(v) => update("hero", { ...content.hero, highlight: v })}
            />
            <TextArea label="Subtitle" value={content.hero.subtitle} onChange={(v) => update("hero", { ...content.hero, subtitle: v })} />
            <ItemArray
              label="Stats"
              items={content.hero.stats}
              empty={{ value: "", label: "" }}
              onChange={(v) => update("hero", { ...content.hero, stats: v })}
              render={(s, set) => (
                <>
                  <TextField label="Value" value={s.value} onChange={(v) => set({ ...s, value: v })} />
                  <TextField label="Label" value={s.label} onChange={(v) => set({ ...s, label: v })} />
                </>
              )}
            />
          </div>
        </Section>

        {/* ABOUT */}
        <Section title="About">
          <div className="grid gap-3">
            <ListField
              label="Heading (one line per row)"
              values={content.about.heading}
              onChange={(v) => update("about", { ...content.about, heading: v })}
            />
            <TextField
              label="Word to highlight in heading"
              value={content.about.highlight}
              onChange={(v) => update("about", { ...content.about, highlight: v })}
            />
            <ListField
              label="Paragraphs"
              values={content.about.paragraphs}
              onChange={(v) => update("about", { ...content.about, paragraphs: v })}
              textarea
            />
            <ListField
              label="Skill bullets"
              values={content.about.skills}
              onChange={(v) => update("about", { ...content.about, skills: v })}
            />
            <ItemArray
              label="Metrics"
              items={content.about.metrics}
              empty={{ value: "", label: "" }}
              onChange={(v) => update("about", { ...content.about, metrics: v })}
              render={(s, set) => (
                <>
                  <TextField label="Value" value={s.value} onChange={(v) => set({ ...s, value: v })} />
                  <TextField label="Label" value={s.label} onChange={(v) => set({ ...s, label: v })} />
                </>
              )}
            />
          </div>
        </Section>

        {/* SERVICES */}
        <Section title="Services">
          <ItemArray
            label=""
            items={content.services}
            empty={{ title: "", desc: "", tags: [], color: "rose" }}
            onChange={(v) => update("services", v)}
            render={(s, set) => (
              <>
                <TextField label="Title" value={s.title} onChange={(v) => set({ ...s, title: v })} />
                <ColorSelect value={s.color} onChange={(v) => set({ ...s, color: v })} options={["rose", "amber", "emerald", "violet", "sky", "fuchsia"]} />
                <TextArea label="Description" value={s.desc} onChange={(v) => set({ ...s, desc: v })} className="sm:col-span-2" />
                <TagsField label="Tags" values={s.tags} onChange={(v) => set({ ...s, tags: v })} className="sm:col-span-2" />
              </>
            )}
          />
        </Section>

        {/* EXPERIENCE */}
        <Section title="Work Experience">
          <ItemArray
            label=""
            items={content.experience}
            empty={{ period: "", role: "", company: "", desc: "" }}
            onChange={(v) => update("experience", v)}
            render={(e, set) => (
              <>
                <TextField label="Period" value={e.period} onChange={(v) => set({ ...e, period: v })} />
                <TextField label="Role" value={e.role} onChange={(v) => set({ ...e, role: v })} />
                <TextField label="Company" value={e.company} onChange={(v) => set({ ...e, company: v })} />
                <TextArea label="Description" value={e.desc} onChange={(v) => set({ ...e, desc: v })} className="sm:col-span-2" />
              </>
            )}
          />
        </Section>

        {/* EDUCATION */}
        <Section title="Education & Certifications">
          <ItemArray
            label=""
            items={content.education}
            empty={{ period: "", title: "", org: "", desc: "" }}
            onChange={(v) => update("education", v)}
            render={(e, set) => (
              <>
                <TextField label="Period" value={e.period} onChange={(v) => set({ ...e, period: v })} />
                <TextField label="Title" value={e.title} onChange={(v) => set({ ...e, title: v })} />
                <TextField label="Organization" value={e.org} onChange={(v) => set({ ...e, org: v })} />
                <TextArea label="Description" value={e.desc} onChange={(v) => set({ ...e, desc: v })} className="sm:col-span-2" />
              </>
            )}
          />
        </Section>

        {/* SKILLS */}
        <Section title="Technical Skills">
          <ItemArray
            label=""
            items={content.technicalSkills}
            empty={{ name: "", value: 80 }}
            onChange={(v) => update("technicalSkills", v)}
            render={(s, set) => (
              <>
                <TextField label="Skill" value={s.name} onChange={(v) => set({ ...s, name: v })} />
                <NumberField label="% (0-100)" value={s.value} onChange={(v) => set({ ...s, value: v })} />
              </>
            )}
          />
        </Section>

        {/* LANGUAGES */}
        <Section title="Languages">
          <ItemArray
            label=""
            items={content.languages}
            empty={{ name: "", value: 80 }}
            onChange={(v) => update("languages", v)}
            render={(s, set) => (
              <>
                <TextField label="Language" value={s.name} onChange={(v) => set({ ...s, name: v })} />
                <NumberField label="% (0-100)" value={s.value} onChange={(v) => set({ ...s, value: v })} />
              </>
            )}
          />
        </Section>

        {/* PROJECTS */}
        <Section title="Projects">
          <ListField
            label="Filter chips"
            values={content.projectFilters}
            onChange={(v) => update("projectFilters", v)}
          />
          <ItemArray
            label="Project list"
            items={content.projects}
            empty={{ title: "", desc: "", tag: "Productivity", color: "sky", image: "" }}
            onChange={(v) => update("projects", v)}
            render={(p, set) => (
              <>
                <TextField label="Title" value={p.title} onChange={(v) => set({ ...p, title: v })} />
                <TextField label="Tag" value={p.tag} onChange={(v) => set({ ...p, tag: v })} />
                <ColorSelect value={p.color} onChange={(v) => set({ ...p, color: v })} options={["sky", "emerald", "rose", "violet", "amber"]} />
                <ImageUploadField
                  label="Cover image"
                  value={p.image}
                  uploading={uploading}
                  onUpload={async (f) => {
                    const url = await uploadImage(f);
                    if (url) set({ ...p, image: url });
                  }}
                  onClear={() => set({ ...p, image: "" })}
                />
                <TextArea label="Description" value={p.desc} onChange={(v) => set({ ...p, desc: v })} className="sm:col-span-2" />
              </>
            )}
          />
        </Section>

        {/* CONTACT */}
        <Section title="Contact">
          <div className="grid sm:grid-cols-2 gap-3">
            <TextField label="Email" value={content.contact.email} onChange={(v) => update("contact", { ...content.contact, email: v })} />
            <TextField label="Location" value={content.contact.location} onChange={(v) => update("contact", { ...content.contact, location: v })} />
            <TextField label="Response time" value={content.contact.responseTime} onChange={(v) => update("contact", { ...content.contact, responseTime: v })} />
            <TextField label="Resume URL" value={content.resumeUrl} onChange={(v) => update("resumeUrl", v)} />
            <TextArea label="Intro" value={content.contact.intro} onChange={(v) => update("contact", { ...content.contact, intro: v })} className="sm:col-span-2" />
          </div>
        </Section>

        {/* SOCIALS */}
        <Section title="Social Links">
          <div className="grid sm:grid-cols-2 gap-3">
            <TextField label="YouTube" value={content.socials.youtube} onChange={(v) => update("socials", { ...content.socials, youtube: v })} />
            <TextField label="GitHub" value={content.socials.github} onChange={(v) => update("socials", { ...content.socials, github: v })} />
            <TextField label="LinkedIn" value={content.socials.linkedin} onChange={(v) => update("socials", { ...content.socials, linkedin: v })} />
            <TextField label="Instagram" value={content.socials.instagram} onChange={(v) => update("socials", { ...content.socials, instagram: v })} />
          </div>
        </Section>

        <div className="sticky bottom-4 flex justify-end">
          <button
            onClick={save}
            disabled={saving}
            className="brand-gradient text-white font-semibold px-6 py-3 rounded-full shadow-lg disabled:opacity-60"
          >
            {saving ? "Saving..." : "Save Changes"}
          </button>
        </div>
      </main>
    </div>
  );
}

/* ---------------- Form primitives ---------------- */

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
      <h2 className="text-lg font-extrabold mb-4">{title}</h2>
      <div className="space-y-3">{children}</div>
    </section>
  );
}

function TextField({
  label,
  value,
  onChange,
  className = "",
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  className?: string;
}) {
  return (
    <div className={className}>
      <label className="text-[10px] font-semibold tracking-widest text-slate-500">{label}</label>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:border-[#ff4d4d]"
      />
    </div>
  );
}

function TextArea({
  label,
  value,
  onChange,
  className = "",
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  className?: string;
}) {
  return (
    <div className={className}>
      <label className="text-[10px] font-semibold tracking-widest text-slate-500">{label}</label>
      <textarea
        rows={3}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:border-[#ff4d4d]"
      />
    </div>
  );
}

function NumberField({
  label,
  value,
  onChange,
}: {
  label: string;
  value: number;
  onChange: (v: number) => void;
}) {
  return (
    <div>
      <label className="text-[10px] font-semibold tracking-widest text-slate-500">{label}</label>
      <input
        type="number"
        min={0}
        max={100}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:border-[#ff4d4d]"
      />
    </div>
  );
}

function ColorSelect({
  value,
  onChange,
  options,
}: {
  value: string;
  onChange: (v: string) => void;
  options: string[];
}) {
  return (
    <div>
      <label className="text-[10px] font-semibold tracking-widest text-slate-500">Accent color</label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm bg-white focus:outline-none focus:border-[#ff4d4d]"
      >
        {options.map((o) => (
          <option key={o} value={o}>{o}</option>
        ))}
      </select>
    </div>
  );
}

function ListField({
  label,
  values,
  onChange,
  textarea = false,
}: {
  label: string;
  values: string[];
  onChange: (v: string[]) => void;
  textarea?: boolean;
}) {
  return (
    <div>
      <div className="flex items-center justify-between">
        <label className="text-[10px] font-semibold tracking-widest text-slate-500">{label}</label>
        <button
          type="button"
          onClick={() => onChange([...values, ""])}
          className="text-xs font-semibold text-[#ff4d4d] hover:underline"
        >
          + Add row
        </button>
      </div>
      <div className="mt-1 space-y-2">
        {values.map((v, i) => (
          <div key={i} className="flex gap-2">
            {textarea ? (
              <textarea
                rows={2}
                value={v}
                onChange={(e) => onChange(values.map((x, j) => (i === j ? e.target.value : x)))}
                className="flex-1 rounded-lg border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:border-[#ff4d4d]"
              />
            ) : (
              <input
                value={v}
                onChange={(e) => onChange(values.map((x, j) => (i === j ? e.target.value : x)))}
                className="flex-1 rounded-lg border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:border-[#ff4d4d]"
              />
            )}
            <button
              type="button"
              onClick={() => onChange(values.filter((_, j) => j !== i))}
              className="text-xs text-slate-500 hover:text-rose-600 px-2"
            >
              ✕
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

function TagsField({
  label,
  values,
  onChange,
  className = "",
}: {
  label: string;
  values: string[];
  onChange: (v: string[]) => void;
  className?: string;
}) {
  return (
    <div className={className}>
      <label className="text-[10px] font-semibold tracking-widest text-slate-500">{label} (comma-separated)</label>
      <input
        value={values.join(", ")}
        onChange={(e) =>
          onChange(
            e.target.value
              .split(",")
              .map((s) => s.trim())
              .filter(Boolean),
          )
        }
        className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:border-[#ff4d4d]"
      />
    </div>
  );
}

function ItemArray<T>({
  label,
  items,
  empty,
  onChange,
  render,
}: {
  label: string;
  items: T[];
  empty: T;
  onChange: (v: T[]) => void;
  render: (item: T, set: (next: T) => void) => React.ReactNode;
}) {
  return (
    <div>
      {label && (
        <div className="flex items-center justify-between mb-2">
          <label className="text-[10px] font-semibold tracking-widest text-slate-500">{label}</label>
        </div>
      )}
      <div className="space-y-3">
        {items.map((it, i) => (
          <div key={i} className="rounded-xl border border-slate-200 p-4 relative">
            <div className="absolute -top-2 right-2 flex gap-1">
              <button
                type="button"
                onClick={() => {
                  if (i === 0) return;
                  const next = [...items];
                  [next[i - 1], next[i]] = [next[i], next[i - 1]];
                  onChange(next);
                }}
                className="text-xs bg-white border border-slate-200 rounded px-1.5 py-0.5 hover:border-[#ff4d4d]"
              >
                ↑
              </button>
              <button
                type="button"
                onClick={() => {
                  if (i === items.length - 1) return;
                  const next = [...items];
                  [next[i + 1], next[i]] = [next[i], next[i + 1]];
                  onChange(next);
                }}
                className="text-xs bg-white border border-slate-200 rounded px-1.5 py-0.5 hover:border-[#ff4d4d]"
              >
                ↓
              </button>
              <button
                type="button"
                onClick={() => onChange(items.filter((_, j) => j !== i))}
                className="text-xs bg-white border border-rose-200 text-rose-600 rounded px-1.5 py-0.5"
              >
                Delete
              </button>
            </div>
            <div className="grid sm:grid-cols-2 gap-3 mt-2">
              {render(it, (next) => onChange(items.map((x, j) => (i === j ? next : x))))}
            </div>
          </div>
        ))}
        <button
          type="button"
          onClick={() => onChange([...items, { ...empty }])}
          className="w-full border border-dashed border-slate-300 rounded-xl py-3 text-sm text-slate-500 hover:border-[#ff4d4d] hover:text-[#ff4d4d]"
        >
          + Add new
        </button>
      </div>
    </div>
  );
}

function ImageUploadField({
  label,
  value,
  uploading,
  onUpload,
  onClear,
}: {
  label: string;
  value: string;
  uploading: boolean;
  onUpload: (f: File) => Promise<void>;
  onClear: () => void;
}) {
  return (
    <div>
      <label className="text-[10px] font-semibold tracking-widest text-slate-500">{label}</label>
      <div className="mt-1 flex items-center gap-3">
        <div className="relative w-20 h-20 rounded-lg overflow-hidden bg-slate-100 border border-slate-200">
          {value && <Image src={value} alt="" fill sizes="80px" className="object-cover" />}
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-xs font-semibold cursor-pointer bg-white border border-slate-200 rounded-full px-3 py-1.5 hover:border-[#ff4d4d]">
            {uploading ? "Uploading..." : value ? "Replace" : "Upload"}
            <input
              type="file"
              accept="image/*"
              hidden
              disabled={uploading}
              onChange={async (e) => {
                const f = e.target.files?.[0];
                if (!f) return;
                await onUpload(f);
                e.target.value = "";
              }}
            />
          </label>
          {value && (
            <button
              type="button"
              onClick={onClear}
              className="text-xs text-rose-600 hover:underline"
            >
              Clear
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
