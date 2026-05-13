import Image from "next/image";
import Link from "next/link";
import { getSiteContent, type SiteContent } from "@/lib/content";

export const revalidate = 60;

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Resume", href: "#resume" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const serviceColorMap: Record<string, { bg: string; stroke: string }> = {
  rose: { bg: "from-rose-100 to-rose-50", stroke: "#ff4d4d" },
  amber: { bg: "from-amber-100 to-amber-50", stroke: "#ff9b2f" },
  emerald: { bg: "from-emerald-100 to-emerald-50", stroke: "#10b981" },
  violet: { bg: "from-violet-100 to-violet-50", stroke: "#8b5cf6" },
  sky: { bg: "from-sky-100 to-sky-50", stroke: "#0ea5e9" },
  fuchsia: { bg: "from-fuchsia-100 to-fuchsia-50", stroke: "#d946ef" },
};

const projectColorMap: Record<string, string> = {
  sky: "from-sky-400 to-sky-600",
  emerald: "from-emerald-400 to-emerald-600",
  rose: "from-rose-400 to-rose-600",
  violet: "from-violet-400 to-violet-600",
  amber: "from-amber-400 to-amber-600",
};

function ServiceIcon({ color }: { color: string }) {
  const stroke = serviceColorMap[color]?.stroke ?? "#ff4d4d";
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <rect x="3" y="2" width="18" height="20" rx="3" stroke={stroke} strokeWidth="1.8" />
      <path d="M9 18h6" stroke={stroke} strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function highlightWords(text: string, highlights: string[]) {
  const parts = text.split(" ");
  return parts.map((p, i) => {
    const isHighlight = highlights.some((h) => p.includes(h));
    return (
      <span key={i} className={isHighlight ? "brand-text" : undefined}>
        {p}
        {i < parts.length - 1 ? " " : ""}
      </span>
    );
  });
}

function NavBar({ initials }: { initials: string }) {
  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-white/80 border-b border-slate-100">
      <div className="mx-auto max-w-6xl flex items-center justify-between px-6 py-4">
        <Link href="#home" className="flex items-center gap-1 font-extrabold text-xl">
          <span className="text-slate-900">{initials}</span>
          <span className="block w-6 h-[3px] bg-[#ff4d4d] rounded-full ml-1" />
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-[#ff4d4d] transition-colors">
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="inline-flex items-center gap-2 brand-gradient text-white text-sm font-semibold px-5 py-2.5 rounded-full shadow-sm hover:opacity-95"
        >
          Let&apos;s Talk
        </a>
      </div>
    </header>
  );
}

function Hero({ content }: { content: SiteContent }) {
  const { hero, profile, socials } = content;
  return (
    <section
      id="home"
      className="relative overflow-hidden"
      style={{ background: "linear-gradient(180deg, #fff6f4 0%, #ffffff 100%)" }}
    >
      <div className="mx-auto max-w-6xl px-6 pt-16 pb-24 grid lg:grid-cols-2 gap-12 items-start">
        <div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight">
            {hero.headline.map((line, i) => (
              <span key={i} className="block">
                {highlightWords(line, hero.highlight)}
              </span>
            ))}
          </h1>
          <p className="mt-6 max-w-md text-slate-600 leading-relaxed">{hero.subtitle}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="brand-gradient text-white font-semibold px-6 py-3 rounded-full shadow-md hover:opacity-95"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="bg-white border border-slate-200 text-slate-800 font-semibold px-6 py-3 rounded-full hover:border-[#ff4d4d] hover:text-[#ff4d4d]"
            >
              Hire Me
            </a>
          </div>
          <div className="mt-10 flex gap-10">
            {hero.stats.map((s) => (
              <Stat key={s.label} value={s.value} label={s.label} />
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="bg-white rounded-3xl shadow-xl border border-slate-100 p-6">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full overflow-hidden ring-2 ring-rose-200 relative bg-slate-100">
                <Image
                  src={profile.profileImage}
                  alt={profile.name}
                  fill
                  sizes="56px"
                  className="object-cover"
                />
              </div>
              <div>
                <div className="font-bold text-lg">{profile.name}</div>
                <div className="text-sm brand-text font-medium">{profile.title}</div>
              </div>
            </div>
            <p className="mt-4 text-sm text-slate-600 leading-relaxed">{profile.tagline}</p>
            <div className="mt-5 grid grid-cols-2 gap-3">
              <SocialCard icon={<YouTubeIcon />} label="YouTube" sub={socials.youtube} />
              <SocialCard icon={<GitHubIcon />} label="GitHub" sub={socials.github} />
              <SocialCard icon={<LinkedInIcon />} label="LinkedIn" sub={socials.linkedin} />
              <SocialCard icon={<InstagramIcon />} label="Instagram" sub={socials.instagram} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div className="text-2xl font-extrabold brand-text">{value}</div>
      <div className="text-[10px] font-semibold tracking-widest text-slate-500 mt-1">{label}</div>
    </div>
  );
}

function SocialCard({ icon, label, sub }: { icon: React.ReactNode; label: string; sub: string }) {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-slate-100 px-3 py-2.5 bg-white">
      <div className="w-9 h-9 rounded-lg bg-slate-50 grid place-items-center">{icon}</div>
      <div className="min-w-0">
        <div className="text-xs font-semibold text-slate-900">{label}</div>
        <div className="text-[11px] text-slate-500 truncate">{sub}</div>
      </div>
    </div>
  );
}

function About({ content }: { content: SiteContent }) {
  const { about, profile } = content;
  return (
    <section id="about" className="section-pad">
      <div className="mx-auto max-w-6xl px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div className="relative">
          <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-slate-100 relative">
            <Image
              src={profile.profileImage}
              alt={profile.name}
              fill
              sizes="(min-width: 1024px) 480px, 100vw"
              className="object-cover"
              priority
            />
          </div>
          <div className="absolute -bottom-4 left-6 bg-white rounded-full shadow-md px-4 py-2 text-sm font-semibold flex items-center gap-2 border border-slate-100">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            Flutter Expert
          </div>
        </div>
        <div>
          <span className="tag tag-brand">+ ABOUT ME</span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-extrabold leading-tight">
            {about.heading.map((line, i) => (
              <span key={i} className="block">
                {line.split(" ").map((w, j) => (
                  <span key={j} className={w.includes(about.highlight.split(" ")[0]) || (about.highlight.split(" ")[1] && w.includes(about.highlight.split(" ")[1])) ? "brand-text" : undefined}>
                    {w}
                    {j < line.split(" ").length - 1 ? " " : ""}
                  </span>
                ))}
              </span>
            ))}
          </h2>
          {about.paragraphs.map((p, i) => (
            <p key={i} className={`${i === 0 ? "mt-5" : "mt-4"} text-slate-600 leading-relaxed`}>
              {p}
            </p>
          ))}

          <div className="mt-6 grid sm:grid-cols-2 gap-2">
            {about.skills.map((s) => (
              <div key={s} className="flex items-center gap-2 text-sm text-slate-700">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ff4d4d]" />
                {s}
              </div>
            ))}
          </div>

          <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-6">
            {about.metrics.map((m) => (
              <Metric key={m.label} value={m.value} label={m.label} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Metric({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div className="text-3xl font-extrabold brand-text">{value}</div>
      <div className="text-xs text-slate-500 mt-1">{label}</div>
    </div>
  );
}

function Services({ services }: { services: SiteContent["services"] }) {
  return (
    <section id="services" className="section-pad bg-slate-50">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
          <div>
            <span className="tag tag-brand">+ SERVICES</span>
            <h2 className="mt-3 text-4xl sm:text-5xl font-extrabold leading-tight">
              What I <span className="brand-text">Offer</span>
            </h2>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 border border-[#ff4d4d] text-[#ff4d4d] font-semibold px-5 py-2.5 rounded-full hover:bg-[#ff4d4d] hover:text-white transition"
          >
            Start a Project
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s) => (
            <div key={s.title} className="bg-white rounded-2xl p-6 border border-slate-100 hover:shadow-lg transition">
              <div className={`w-12 h-12 rounded-xl grid place-items-center bg-gradient-to-br ${serviceColorMap[s.color]?.bg ?? "from-rose-100 to-rose-50"} mb-4`}>
                <ServiceIcon color={s.color} />
              </div>
              <h3 className="font-bold text-lg">{s.title}</h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">{s.desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {s.tags.map((t) => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Resume({ content }: { content: SiteContent }) {
  return (
    <section id="resume" className="section-pad">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center mb-12">
          <span className="tag tag-brand">+ RESUME</span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-extrabold leading-tight">
            Experience & <span className="brand-text">Education</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          <TimelineColumn
            title="Work Experience"
            icon={<BriefcaseIcon />}
            items={content.experience.map((e) => ({
              period: e.period,
              title: e.role,
              org: e.company,
              desc: e.desc,
            }))}
          />
          <TimelineColumn
            title="Education & Certifications"
            icon={<GraduationIcon />}
            items={content.education}
          />
        </div>

        <div className="grid lg:grid-cols-2 gap-10 mt-16">
          <div>
            <h3 className="text-xl font-extrabold mb-5">Technical Skills</h3>
            <div className="space-y-4">
              {content.technicalSkills.map((s) => (
                <SkillBar key={s.name} {...s} />
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-xl font-extrabold mb-5">Languages</h3>
            <div className="space-y-4">
              {content.languages.map((s) => (
                <SkillBar key={s.name} {...s} />
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <a
            href={content.resumeUrl}
            className="inline-flex items-center gap-2 brand-gradient text-white font-semibold px-6 py-3 rounded-full shadow-md hover:opacity-95"
          >
            <DownloadIcon /> Download Full Resume
          </a>
        </div>
      </div>
    </section>
  );
}

function TimelineColumn({
  title,
  icon,
  items,
}: {
  title: string;
  icon: React.ReactNode;
  items: { period: string; title: string; org: string; desc: string }[];
}) {
  return (
    <div>
      <div className="flex items-center gap-2 mb-5">
        <span className="text-[#ff4d4d]">{icon}</span>
        <h3 className="text-xl font-extrabold">{title}</h3>
      </div>
      <div className="relative pl-5 border-l-2 border-slate-100 space-y-7">
        {items.map((it) => (
          <div key={it.title + it.period} className="relative">
            <span className="absolute -left-[27px] top-1 w-3 h-3 rounded-full bg-[#ff4d4d] ring-4 ring-rose-100" />
            <div className="text-xs font-semibold brand-text">{it.period}</div>
            <div className="mt-1 font-bold">{it.title}</div>
            <div className="text-sm text-slate-500">{it.org}</div>
            <p className="mt-1.5 text-sm text-slate-600 leading-relaxed">{it.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function SkillBar({ name, value }: { name: string; value: number }) {
  return (
    <div>
      <div className="flex justify-between text-sm font-medium mb-1.5">
        <span className="text-slate-700">{name}</span>
        <span className="brand-text">{value}%</span>
      </div>
      <div className="bar-track">
        <div className="bar-fill" style={{ width: `${value}%` }} />
      </div>
    </div>
  );
}

function Projects({ content }: { content: SiteContent }) {
  return (
    <section id="projects" className="section-pad bg-[#0b1437] text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10">
          <span className="tag" style={{ background: "rgba(255,255,255,0.08)", color: "#fff" }}>
            + PROJECTS
          </span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-extrabold leading-tight">
            Real-time Work &amp;
            <br />
            <span className="brand-text">Achievements</span>
          </h2>
        </div>

        <div className="flex flex-wrap gap-2 mb-8">
          {content.projectFilters.map((f, i) => (
            <button
              key={f}
              className={`px-4 py-1.5 text-sm rounded-full font-medium ${
                i === 1 ? "brand-gradient text-white" : "bg-white/10 text-white/80 hover:bg-white/20"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {content.projects.map((p) => (
            <div key={p.title} className="rounded-2xl overflow-hidden bg-white/5 border border-white/10">
              <div className={`h-56 bg-gradient-to-br ${projectColorMap[p.color] ?? "from-sky-400 to-sky-600"} relative flex items-center justify-center`}>
                <span className="absolute top-4 left-4 text-[10px] font-semibold tracking-widest uppercase bg-white/20 backdrop-blur px-2 py-1 rounded-full">
                  {p.tag}
                </span>
                {p.image ? (
                  <Image src={p.image} alt={p.title} fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" />
                ) : (
                  <div className="w-16 h-16 rounded-2xl bg-white/30 backdrop-blur grid place-items-center text-3xl">
                    📍
                  </div>
                )}
              </div>
              <div className="p-5">
                <h3 className="font-bold text-lg">{p.title}</h3>
                <p className="mt-1.5 text-sm text-white/70 leading-relaxed">{p.desc}</p>
                <a href="#" className="mt-3 inline-flex items-center gap-1 text-sm font-semibold brand-text">
                  View project →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact({ content }: { content: SiteContent }) {
  const { contact, socials } = content;
  return (
    <section id="contact" className="section-pad">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center mb-12">
          <span className="tag tag-brand">+ CONTACT</span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-extrabold leading-tight">
            Let&apos;s Work <span className="brand-text">Together</span>
          </h2>
          <p className="mt-3 text-slate-600 max-w-xl mx-auto">{contact.intro}</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="space-y-3">
            <ContactRow icon={<MailIcon />} title="EMAIL" value={contact.email} />
            <ContactRow icon={<PinIcon />} title="LOCATION" value={contact.location} />
            <ContactRow icon={<ClockIcon />} title="RESPONSE TIME" value={contact.responseTime} />
            <div className="flex gap-3 pt-2">
              <a href={socials.youtube} className="w-10 h-10 rounded-lg bg-slate-100 grid place-items-center hover:bg-rose-100"><YouTubeIcon /></a>
              <a href={socials.github} className="w-10 h-10 rounded-lg bg-slate-100 grid place-items-center hover:bg-rose-100"><GitHubIcon /></a>
              <a href={socials.linkedin} className="w-10 h-10 rounded-lg bg-slate-100 grid place-items-center hover:bg-rose-100"><LinkedInIcon /></a>
              <a href={socials.instagram} className="w-10 h-10 rounded-lg bg-slate-100 grid place-items-center hover:bg-rose-100"><InstagramIcon /></a>
            </div>
          </div>

          <form className="bg-white rounded-2xl border border-slate-100 p-6 shadow-sm space-y-4">
            <div className="grid grid-cols-2 gap-3">
              <Field label="FIRST NAME" placeholder="Abdul" />
              <Field label="LAST NAME" placeholder="Aziz" />
            </div>
            <Field label="EMAIL ADDRESS" placeholder="you@example.com" type="email" />
            <SelectField label="SERVICE NEEDED" options={content.services.map((s) => s.title)} />
            <div>
              <label className="text-[10px] font-semibold tracking-widest text-slate-500">MESSAGE</label>
              <textarea
                rows={4}
                placeholder="Tell me about your project..."
                className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2.5 text-sm focus:outline-none focus:border-[#ff4d4d]"
              />
            </div>
            <button
              type="button"
              className="w-full brand-gradient text-white font-semibold py-3 rounded-full shadow-md hover:opacity-95"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({ label, placeholder, type = "text" }: { label: string; placeholder: string; type?: string }) {
  return (
    <div>
      <label className="text-[10px] font-semibold tracking-widest text-slate-500">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2.5 text-sm focus:outline-none focus:border-[#ff4d4d]"
      />
    </div>
  );
}

function SelectField({ label, options }: { label: string; options: string[] }) {
  return (
    <div>
      <label className="text-[10px] font-semibold tracking-widest text-slate-500">{label}</label>
      <select
        defaultValue=""
        className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2.5 text-sm focus:outline-none focus:border-[#ff4d4d] bg-white"
      >
        <option value="" disabled>Select a service</option>
        {options.map((o) => (
          <option key={o}>{o}</option>
        ))}
      </select>
    </div>
  );
}

function ContactRow({ icon, title, value }: { icon: React.ReactNode; title: string; value: string }) {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-slate-100 p-4">
      <div className="w-10 h-10 rounded-lg bg-rose-50 grid place-items-center text-[#ff4d4d]">{icon}</div>
      <div>
        <div className="text-[10px] font-semibold tracking-widest text-slate-500">{title}</div>
        <div className="text-sm font-semibold text-slate-900">{value}</div>
      </div>
    </div>
  );
}

function Footer({ name, socials }: { name: string; socials: SiteContent["socials"] }) {
  return (
    <footer className="border-t border-slate-100 py-8">
      <div className="mx-auto max-w-6xl px-6 flex flex-col md:flex-row gap-4 items-center justify-between">
        <p className="text-sm text-slate-500 text-center md:text-left">
          © {new Date().getFullYear()} {name}. Designed with <span className="text-[#ff4d4d]">♥</span>.
        </p>
        <div className="flex gap-3">
          <a href={socials.youtube} className="w-9 h-9 rounded-full bg-slate-100 grid place-items-center hover:bg-rose-100"><YouTubeIcon /></a>
          <a href={socials.github} className="w-9 h-9 rounded-full bg-slate-100 grid place-items-center hover:bg-rose-100"><GitHubIcon /></a>
          <a href={socials.linkedin} className="w-9 h-9 rounded-full bg-slate-100 grid place-items-center hover:bg-rose-100"><LinkedInIcon /></a>
          <a href={socials.instagram} className="w-9 h-9 rounded-full bg-slate-100 grid place-items-center hover:bg-rose-100"><InstagramIcon /></a>
        </div>
      </div>
    </footer>
  );
}

/* ---------------- Icons ---------------- */
function YouTubeIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="#ff0000">
      <path d="M21.6 7.2a2.5 2.5 0 0 0-1.8-1.8C18.2 5 12 5 12 5s-6.2 0-7.8.4A2.5 2.5 0 0 0 2.4 7.2 26 26 0 0 0 2 12a26 26 0 0 0 .4 4.8 2.5 2.5 0 0 0 1.8 1.8C5.8 19 12 19 12 19s6.2 0 7.8-.4a2.5 2.5 0 0 0 1.8-1.8 26 26 0 0 0 .4-4.8 26 26 0 0 0-.4-4.8zM10 15V9l5 3z" />
    </svg>
  );
}
function GitHubIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="#0f172a">
      <path d="M12 .5C5.7.5.6 5.6.6 12c0 5 3.3 9.3 7.8 10.8.6.1.8-.2.8-.6v-2c-3.2.7-3.9-1.5-3.9-1.5-.5-1.3-1.3-1.7-1.3-1.7-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.6-.3-5.3-1.3-5.3-5.7 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.2 1.2.9-.3 1.9-.4 2.9-.4s2 .1 2.9.4c2.2-1.5 3.2-1.2 3.2-1.2.6 1.6.2 2.8.1 3.1.7.8 1.2 1.8 1.2 3.1 0 4.4-2.7 5.4-5.3 5.7.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6 4.5-1.5 7.8-5.8 7.8-10.8C23.4 5.6 18.3.5 12 .5z" />
    </svg>
  );
}
function LinkedInIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="#0a66c2">
      <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.13 1 2.5 1s2.48 1.12 2.48 2.5zM.2 8h4.6v14H.2zM8 8h4.4v2h.1c.6-1 2.1-2.2 4.3-2.2 4.6 0 5.5 3 5.5 6.9V22h-4.6v-6.2c0-1.5 0-3.4-2.1-3.4-2.1 0-2.4 1.6-2.4 3.3V22H8z" />
    </svg>
  );
}
function InstagramIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="#e1306c">
      <path d="M12 2.2c3.2 0 3.6 0 4.8.1 1.2.1 1.8.2 2.2.4.6.2 1 .5 1.4.9.5.5.8.9.9 1.4.2.4.4 1 .4 2.2.1 1.2.1 1.6.1 4.8s0 3.6-.1 4.8c-.1 1.2-.2 1.8-.4 2.2-.2.6-.5 1-.9 1.4-.5.5-.9.8-1.4.9-.4.2-1 .4-2.2.4-1.2.1-1.6.1-4.8.1s-3.6 0-4.8-.1c-1.2-.1-1.8-.2-2.2-.4-.6-.2-1-.5-1.4-.9-.5-.5-.8-.9-.9-1.4-.2-.4-.4-1-.4-2.2C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.8c.1-1.2.2-1.8.4-2.2.2-.6.5-1 .9-1.4.5-.5.9-.8 1.4-.9.4-.2 1-.4 2.2-.4C8.4 2.2 8.8 2.2 12 2.2zM12 0C8.7 0 8.3 0 7 .1 5.8.2 4.9.3 4.2.6c-.8.3-1.5.7-2.1 1.4C1.4 2.7 1 3.4.7 4.2.4 4.9.2 5.8.1 7 0 8.3 0 8.7 0 12s0 3.7.1 5c.1 1.2.3 2.1.6 2.8.3.8.7 1.5 1.4 2.1.6.7 1.3 1.1 2.1 1.4.7.3 1.6.5 2.8.6 1.3.1 1.7.1 5 .1s3.7 0 5-.1c1.2-.1 2.1-.3 2.8-.6.8-.3 1.5-.7 2.1-1.4.7-.6 1.1-1.3 1.4-2.1.3-.7.5-1.6.6-2.8.1-1.3.1-1.7.1-5s0-3.7-.1-5c-.1-1.2-.3-2.1-.6-2.8-.3-.8-.7-1.5-1.4-2.1-.6-.7-1.3-1.1-2.1-1.4-.7-.3-1.6-.5-2.8-.6C15.7 0 15.3 0 12 0zm0 5.8a6.2 6.2 0 1 0 0 12.4 6.2 6.2 0 0 0 0-12.4zm0 10.2A4 4 0 1 1 12 8a4 4 0 0 1 0 8zm6.4-11.8a1.4 1.4 0 1 0 0 2.8 1.4 1.4 0 0 0 0-2.8z" />
    </svg>
  );
}
function BriefcaseIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <rect x="3" y="7" width="18" height="13" rx="2" stroke="currentColor" strokeWidth="1.8" />
      <path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}
function GraduationIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path d="M2 9l10-5 10 5-10 5L2 9z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M6 11v5c2 1 4 1.5 6 1.5s4-.5 6-1.5v-5" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}
function DownloadIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path d="M12 4v12m0 0l-4-4m4 4l4-4M4 20h16" stroke="white" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
function MailIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.8" />
      <path d="M3 7l9 6 9-6" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}
function PinIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path d="M12 22s7-6.5 7-12a7 7 0 1 0-14 0c0 5.5 7 12 7 12z" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}
function ClockIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
      <path d="M12 7v5l3 2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export default async function Home() {
  const content = await getSiteContent();
  return (
    <>
      <NavBar initials={content.profile.initials} />
      <main>
        <Hero content={content} />
        <About content={content} />
        <Services services={content.services} />
        <Resume content={content} />
        <Projects content={content} />
        <Contact content={content} />
      </main>
      <Footer name={content.profile.name} socials={content.socials} />
    </>
  );
}
