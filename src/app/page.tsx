import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Resume", href: "#resume" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const services = [
  {
    title: "Flutter App Development",
    desc: "Full-cycle mobile app development for Android & iOS using Flutter, from architecture to publishing on Play Store & App Store.",
    tags: ["Flutter", "Dart", "Cross-platform"],
    color: "from-rose-100 to-rose-50",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="2" width="18" height="20" rx="3" stroke="#ff4d4d" strokeWidth="1.8" />
        <path d="M9 18h6" stroke="#ff4d4d" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Firebase & Backend",
    desc: "Scalable backend services using Firebase Auth, Firestore, Cloud Functions and Node.js REST APIs integrated seamlessly with your app.",
    tags: ["Firebase", "Node.js", "REST API"],
    color: "from-amber-100 to-amber-50",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M4 17 12 3l3 7-5 10z" stroke="#ff9b2f" strokeWidth="1.8" strokeLinejoin="round" />
        <path d="M4 17l8 4 8-6-3-8-5 10z" stroke="#ff9b2f" strokeWidth="1.8" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Packages & Plugins",
    desc: "Custom Flutter packages and native plugins that bridge platform capabilities — published on pub.dev and used by thousands of developers.",
    tags: ["pub.dev", "Native bridges"],
    color: "from-emerald-100 to-emerald-50",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M12 3l8 4v10l-8 4-8-4V7z" stroke="#10b981" strokeWidth="1.8" strokeLinejoin="round" />
        <path d="M4 7l8 4 8-4M12 11v10" stroke="#10b981" strokeWidth="1.8" />
      </svg>
    ),
  },
  {
    title: "UI/UX Implementation",
    desc: "Pixel-perfect Flutter UI from Figma or design specs — smooth animations, responsive layouts and delightful micro-interactions.",
    tags: ["Figma to Flutter", "Animations"],
    color: "from-violet-100 to-violet-50",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="9" stroke="#8b5cf6" strokeWidth="1.8" />
        <path d="M12 3v18M3 12h18" stroke="#8b5cf6" strokeWidth="1.8" />
      </svg>
    ),
  },
  {
    title: "Cloud & DevOps",
    desc: "CI/CD pipelines, cloud deployment and app maintenance. GitHub Actions, Fastlane and automated testing to ship faster.",
    tags: ["CI/CD", "GitHub Actions", "Fastlane"],
    color: "from-sky-100 to-sky-50",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M7 18a5 5 0 110-10 6 6 0 0111.7 2A4 4 0 0118 18H7z" stroke="#0ea5e9" strokeWidth="1.8" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Mentorship & Courses",
    desc: "Free content on YouTube, bootcamps and 1-on-1 coaching for Flutter developers. Covering everything from basics to advanced architectures.",
    tags: ["YouTube", "Bootcamps", "1-on-1"],
    color: "from-fuchsia-100 to-fuchsia-50",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M3 7l9-4 9 4-9 4-9-4z" stroke="#d946ef" strokeWidth="1.8" strokeLinejoin="round" />
        <path d="M7 10v5c0 1.5 2.5 3 5 3s5-1.5 5-3v-5" stroke="#d946ef" strokeWidth="1.8" />
      </svg>
    ),
  },
];

const experience = [
  {
    period: "2022 — Present",
    role: "Senior Flutter Engineer",
    company: "ElectricVeil LLC",
    desc: "Leading mobile development for multiple client apps. Architecting scalable Flutter solutions and mentoring junior team members.",
  },
  {
    period: "2020 — 2022",
    role: "Flutter Developer",
    company: "Freelance",
    desc: "Built 30+ apps for international clients spanning healthcare, social media, productivity and e-commerce verticals.",
  },
  {
    period: "2019 — 2020",
    role: "Junior Mobile Developer",
    company: "Startup PK",
    desc: "Developed Android apps using Java/Kotlin before transitioning to Flutter. Gained skills providing in mobile fundamentals.",
  },
];

const education = [
  {
    period: "2017 — 2021",
    title: "B.Sc. Computer Science",
    org: "COMSATS University",
    desc: "Focused on software engineering, algorithms and mobile computing. Graduated with distinction.",
  },
  {
    period: "2023",
    title: "Google Flutter Certified",
    org: "Google",
    desc: "Completed advanced Flutter development certification covering state management, performance and production deployment.",
  },
  {
    period: "2022",
    title: "Firebase Expert Certification",
    org: "Firebase / Google",
    desc: "Advanced certification in Firebase ecosystem including Cloud Functions, Firestore, Auth, and Cloud Messaging.",
  },
];

const technicalSkills = [
  { name: "Flutter / Dart", value: 95 },
  { name: "Firebase", value: 90 },
  { name: "Node.js / REST APIs", value: 80 },
  { name: "CI/CD Implementation", value: 75 },
  { name: "Clean Architecture", value: 88 },
];

const languages = [
  { name: "Urdu (Native)", value: 100 },
  { name: "English (Professional)", value: 90 },
  { name: "Pashto", value: 60 },
];

const projects = [
  {
    title: "Granda / App",
    desc: "Flutter-powered events app with Google Maps integration — create, discover and join events near you in seconds.",
    tag: "Productivity",
    color: "from-sky-400 to-sky-600",
  },
  {
    title: "MintPort AI / App",
    desc: "AI-powered plant identification and care-tracking app — snap any plant, get care tips and build a digital garden journal.",
    tag: "Productivity",
    color: "from-emerald-400 to-emerald-600",
  },
];

function NavBar() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-white/80 border-b border-slate-100">
      <div className="mx-auto max-w-6xl flex items-center justify-between px-6 py-4">
        <Link href="#home" className="flex items-center gap-1 font-extrabold text-xl">
          <span className="text-slate-900">AA</span>
          <span className="block w-6 h-[3px] bg-[#ff4d4d] rounded-full ml-1" />
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="hover:text-[#ff4d4d] transition-colors"
            >
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

function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #fff6f4 0%, #ffffff 100%)",
      }}
    >
      <div className="mx-auto max-w-6xl px-6 pt-16 pb-24 grid lg:grid-cols-2 gap-12 items-start">
        <div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight">
            I Build
            <br />
            Apps
            <br />
            That <span className="brand-text">Scale</span>
            <br />
            &amp; <span className="brand-text">Impress.</span>
          </h1>
          <p className="mt-6 max-w-md text-slate-600 leading-relaxed">
            Flutter Software Engineer with 5+ years of experience. I help
            founders launch stunning Android & iOS apps — from MVP to App Store.
          </p>
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
            <Stat value="40+" label="APPS BUILT" />
            <Stat value="5+" label="YEARS EXP" />
            <Stat value="30+" label="HAPPY CLIENTS" />
          </div>
        </div>

        <div className="relative">
          <div className="bg-white rounded-3xl shadow-xl border border-slate-100 p-6">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full overflow-hidden ring-2 ring-rose-200">
                <Image
                  src="/profile.png"
                  alt="Abdul Aziz"
                  width={56}
                  height={56}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <div className="font-bold text-lg">Abdul Aziz</div>
                <div className="text-sm brand-text font-medium">
                  Flutter Software Engineer
                </div>
              </div>
            </div>
            <p className="mt-4 text-sm text-slate-600 leading-relaxed">
              Helping founders successfully test their Android & iOS apps
              Flutter, Node.js & open source contributor. YouTube educator
              with thousands of students.
            </p>
            <div className="mt-5 grid grid-cols-2 gap-3">
              <SocialCard
                icon={<YouTubeIcon />}
                label="YouTube"
                sub="/AdnanTechLLC"
              />
              <SocialCard
                icon={<GitHubIcon />}
                label="GitHub"
                sub="/AdnanTechLLC"
              />
              <SocialCard
                icon={<LinkedInIcon />}
                label="LinkedIn"
                sub="Connect with me"
              />
              <SocialCard
                icon={<InstagramIcon />}
                label="Instagram"
                sub="@adnan.flutter"
              />
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
      <div className="text-[10px] font-semibold tracking-widest text-slate-500 mt-1">
        {label}
      </div>
    </div>
  );
}

function SocialCard({
  icon,
  label,
  sub,
}: {
  icon: React.ReactNode;
  label: string;
  sub: string;
}) {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-slate-100 px-3 py-2.5 bg-white">
      <div className="w-9 h-9 rounded-lg bg-slate-50 grid place-items-center">
        {icon}
      </div>
      <div className="min-w-0">
        <div className="text-xs font-semibold text-slate-900">{label}</div>
        <div className="text-[11px] text-slate-500 truncate">{sub}</div>
      </div>
    </div>
  );
}

function About() {
  return (
    <section id="about" className="section-pad">
      <div className="mx-auto max-w-6xl px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div className="relative">
          <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-slate-100 relative">
            <Image
              src="/profile.png"
              alt="Abdul Aziz"
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
            Flutter Engineer
            <br />& <span className="brand-text">Open Source</span>
            <br />
            Contributor
          </h2>
          <p className="mt-5 text-slate-600 leading-relaxed">
            With over five years of experience, I&apos;ve built 40+ apps and
            contributed to the Flutter open source community through packages,
            plugins and mentorship. My work extends beyond development — I
            actively share knowledge through YouTube tutorials and as mentor.
          </p>
          <p className="mt-4 text-slate-600 leading-relaxed">
            I specialize in integrating Flutter with native functionalities to
            push the platform&apos;s boundaries. I&apos;m also experienced in
            Firebase, Node.js and cloud technologies, helping businesses bring
            their Android and iOS apps to market efficiently.
          </p>

          <div className="mt-6 grid sm:grid-cols-2 gap-2">
            {[
              "Flutter & Dart",
              "Firebase",
              "Node.js",
              "REST APIs",
              "Clean Architecture",
              "Google Play & AppStore",
            ].map((s) => (
              <div
                key={s}
                className="flex items-center gap-2 text-sm text-slate-700"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#ff4d4d]" />
                {s}
              </div>
            ))}
          </div>

          <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-6">
            <Metric value="40+" label="Apps Developed" />
            <Metric value="5yr" label="Industry Experience" />
            <Metric value="12k" label="YouTube Students" />
            <Metric value="8+" label="Open source Packages" />
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

function Services() {
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
            <div
              key={s.title}
              className="bg-white rounded-2xl p-6 border border-slate-100 hover:shadow-lg transition"
            >
              <div
                className={`w-12 h-12 rounded-xl grid place-items-center bg-gradient-to-br ${s.color} mb-4`}
              >
                {s.icon}
              </div>
              <h3 className="font-bold text-lg">{s.title}</h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                {s.desc}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {s.tags.map((t) => (
                  <span key={t} className="tag">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Resume() {
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
            items={experience.map((e) => ({
              period: e.period,
              title: e.role,
              org: e.company,
              desc: e.desc,
            }))}
          />
          <TimelineColumn
            title="Education & Certifications"
            icon={<GraduationIcon />}
            items={education.map((e) => ({
              period: e.period,
              title: e.title,
              org: e.org,
              desc: e.desc,
            }))}
          />
        </div>

        <div className="grid lg:grid-cols-2 gap-10 mt-16">
          <div>
            <h3 className="text-xl font-extrabold mb-5">Technical Skills</h3>
            <div className="space-y-4">
              {technicalSkills.map((s) => (
                <SkillBar key={s.name} {...s} />
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-xl font-extrabold mb-5">Languages</h3>
            <div className="space-y-4">
              {languages.map((s) => (
                <SkillBar key={s.name} {...s} />
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <a
            href="#"
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
          <div key={it.title} className="relative">
            <span className="absolute -left-[27px] top-1 w-3 h-3 rounded-full bg-[#ff4d4d] ring-4 ring-rose-100" />
            <div className="text-xs font-semibold brand-text">{it.period}</div>
            <div className="mt-1 font-bold">{it.title}</div>
            <div className="text-sm text-slate-500">{it.org}</div>
            <p className="mt-1.5 text-sm text-slate-600 leading-relaxed">
              {it.desc}
            </p>
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

function Projects() {
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
          {["All", "Productivity", "Medical", "Social", "Music & Arts"].map(
            (f, i) => (
              <button
                key={f}
                className={`px-4 py-1.5 text-sm rounded-full font-medium ${
                  i === 1
                    ? "brand-gradient text-white"
                    : "bg-white/10 text-white/80 hover:bg-white/20"
                }`}
              >
                {f}
              </button>
            ),
          )}
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {projects.map((p) => (
            <div
              key={p.title}
              className="rounded-2xl overflow-hidden bg-white/5 border border-white/10"
            >
              <div
                className={`h-56 bg-gradient-to-br ${p.color} relative flex items-center justify-center`}
              >
                <span className="absolute top-4 left-4 text-[10px] font-semibold tracking-widest uppercase bg-white/20 backdrop-blur px-2 py-1 rounded-full">
                  {p.tag}
                </span>
                <div className="w-16 h-16 rounded-2xl bg-white/30 backdrop-blur grid place-items-center text-3xl">
                  📍
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-bold text-lg">{p.title}</h3>
                <p className="mt-1.5 text-sm text-white/70 leading-relaxed">
                  {p.desc}
                </p>
                <a
                  href="#"
                  className="mt-3 inline-flex items-center gap-1 text-sm font-semibold brand-text"
                >
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

function Contact() {
  return (
    <section id="contact" className="section-pad">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center mb-12">
          <span className="tag tag-brand">+ CONTACT</span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-extrabold leading-tight">
            Let&apos;s Work <span className="brand-text">Together</span>
          </h2>
          <p className="mt-3 text-slate-600 max-w-xl mx-auto">
            Have a project in mind or want to discuss a collaboration?
            I&apos;d love to hear from you. Fill in the form or reach out
            directly through any channel below.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="space-y-3">
            <ContactRow
              icon={<MailIcon />}
              title="EMAIL"
              value="adnan@electricveil.com"
            />
            <ContactRow
              icon={<PinIcon />}
              title="LOCATION"
              value="Peshawar, Pakistan"
            />
            <ContactRow
              icon={<ClockIcon />}
              title="STARTUP/PK"
              value="Within 24 hours"
            />
            <div className="flex gap-3 pt-2">
              {[<YouTubeIcon key="y" />, <GitHubIcon key="g" />, <LinkedInIcon key="l" />, <InstagramIcon key="i" />].map(
                (icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="w-10 h-10 rounded-lg bg-slate-100 grid place-items-center hover:bg-rose-100"
                  >
                    {icon}
                  </a>
                ),
              )}
            </div>
          </div>

          <form className="bg-white rounded-2xl border border-slate-100 p-6 shadow-sm space-y-4">
            <div className="grid grid-cols-2 gap-3">
              <Field label="FIRST NAME" placeholder="Abdul" />
              <Field label="LAST NAME" placeholder="Aziz" />
            </div>
            <Field
              label="EMAIL ADDRESS"
              placeholder="you@example.com"
              type="email"
            />
            <SelectField
              label="SERVICE NEEDED"
              options={[
                "Flutter App Development",
                "Firebase & Backend",
                "Packages & Plugins",
                "UI/UX Implementation",
                "Cloud & DevOps",
                "Mentorship & Courses",
              ]}
            />
            <div>
              <label className="text-[10px] font-semibold tracking-widest text-slate-500">
                MESSAGE
              </label>
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

function Field({
  label,
  placeholder,
  type = "text",
}: {
  label: string;
  placeholder: string;
  type?: string;
}) {
  return (
    <div>
      <label className="text-[10px] font-semibold tracking-widest text-slate-500">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2.5 text-sm focus:outline-none focus:border-[#ff4d4d]"
      />
    </div>
  );
}

function SelectField({
  label,
  options,
}: {
  label: string;
  options: string[];
}) {
  return (
    <div>
      <label className="text-[10px] font-semibold tracking-widest text-slate-500">
        {label}
      </label>
      <select
        defaultValue=""
        className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2.5 text-sm focus:outline-none focus:border-[#ff4d4d] bg-white"
      >
        <option value="" disabled>
          Select a service
        </option>
        {options.map((o) => (
          <option key={o}>{o}</option>
        ))}
      </select>
    </div>
  );
}

function ContactRow({
  icon,
  title,
  value,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
}) {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-slate-100 p-4">
      <div className="w-10 h-10 rounded-lg bg-rose-50 grid place-items-center text-[#ff4d4d]">
        {icon}
      </div>
      <div>
        <div className="text-[10px] font-semibold tracking-widest text-slate-500">
          {title}
        </div>
        <div className="text-sm font-semibold text-slate-900">{value}</div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="border-t border-slate-100 py-8">
      <div className="mx-auto max-w-6xl px-6 flex flex-col md:flex-row gap-4 items-center justify-between">
        <p className="text-sm text-slate-500 text-center md:text-left">
          © 2026 Abdul Aziz. Designed with{" "}
          <span className="text-[#ff4d4d]">♥</span> in Peshawar, Pakistan.
        </p>
        <div className="flex gap-3">
          <SocialDot icon={<YouTubeIcon />} />
          <SocialDot icon={<GitHubIcon />} />
          <SocialDot icon={<LinkedInIcon />} />
          <SocialDot icon={<InstagramIcon />} />
        </div>
      </div>
    </footer>
  );
}

function SocialDot({ icon }: { icon: React.ReactNode }) {
  return (
    <a
      href="#"
      className="w-9 h-9 rounded-full bg-slate-100 grid place-items-center hover:bg-rose-100"
    >
      {icon}
    </a>
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

export default function Home() {
  return (
    <>
      <NavBar />
      <main>
        <Hero />
        <About />
        <Services />
        <Resume />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
