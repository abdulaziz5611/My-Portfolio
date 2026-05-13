-- Run this once after schema.sql to populate the initial portfolio content.

insert into public.site_content (id, data)
values (
  1,
  $${
    "profile": {
      "name": "Abdul Aziz",
      "title": "Flutter Software Engineer",
      "tagline": "Helping founders successfully test their Android & iOS apps Flutter, Node.js & open source contributor. YouTube educator with thousands of students.",
      "profileImage": "/profile.png",
      "initials": "AA"
    },
    "hero": {
      "headline": ["I Build", "Apps", "That Scale", "& Impress."],
      "highlight": ["Scale", "Impress."],
      "subtitle": "Flutter Software Engineer with 5+ years of experience. I help founders launch stunning Android & iOS apps — from MVP to App Store.",
      "stats": [
        { "value": "40+", "label": "APPS BUILT" },
        { "value": "5+", "label": "YEARS EXP" },
        { "value": "30+", "label": "HAPPY CLIENTS" }
      ]
    },
    "about": {
      "heading": ["Flutter Engineer", "& Open Source", "Contributor"],
      "highlight": "Open Source",
      "paragraphs": [
        "With over five years of experience, I've built 40+ apps and contributed to the Flutter open source community through packages, plugins and mentorship. My work extends beyond development — I actively share knowledge through YouTube tutorials and as mentor.",
        "I specialize in integrating Flutter with native functionalities to push the platform's boundaries. I'm also experienced in Firebase, Node.js and cloud technologies, helping businesses bring their Android and iOS apps to market efficiently."
      ],
      "skills": [
        "Flutter & Dart",
        "Firebase",
        "Node.js",
        "REST APIs",
        "Clean Architecture",
        "Google Play & AppStore"
      ],
      "metrics": [
        { "value": "40+", "label": "Apps Developed" },
        { "value": "5yr", "label": "Industry Experience" },
        { "value": "12k", "label": "YouTube Students" },
        { "value": "8+", "label": "Open source Packages" }
      ]
    },
    "services": [
      { "title": "Flutter App Development", "desc": "Full-cycle mobile app development for Android & iOS using Flutter, from architecture to publishing on Play Store & App Store.", "tags": ["Flutter", "Dart", "Cross-platform"], "color": "rose" },
      { "title": "Firebase & Backend", "desc": "Scalable backend services using Firebase Auth, Firestore, Cloud Functions and Node.js REST APIs integrated seamlessly with your app.", "tags": ["Firebase", "Node.js", "REST API"], "color": "amber" },
      { "title": "Packages & Plugins", "desc": "Custom Flutter packages and native plugins that bridge platform capabilities — published on pub.dev and used by thousands of developers.", "tags": ["pub.dev", "Native bridges"], "color": "emerald" },
      { "title": "UI/UX Implementation", "desc": "Pixel-perfect Flutter UI from Figma or design specs — smooth animations, responsive layouts and delightful micro-interactions.", "tags": ["Figma to Flutter", "Animations"], "color": "violet" },
      { "title": "Cloud & DevOps", "desc": "CI/CD pipelines, cloud deployment and app maintenance. GitHub Actions, Fastlane and automated testing to ship faster.", "tags": ["CI/CD", "GitHub Actions", "Fastlane"], "color": "sky" },
      { "title": "Mentorship & Courses", "desc": "Free content on YouTube, bootcamps and 1-on-1 coaching for Flutter developers. Covering everything from basics to advanced architectures.", "tags": ["YouTube", "Bootcamps", "1-on-1"], "color": "fuchsia" }
    ],
    "experience": [
      { "period": "2022 — Present", "role": "Senior Flutter Engineer", "company": "ElectricVeil LLC", "desc": "Leading mobile development for multiple client apps. Architecting scalable Flutter solutions and mentoring junior team members." },
      { "period": "2020 — 2022", "role": "Flutter Developer", "company": "Freelance", "desc": "Built 30+ apps for international clients spanning healthcare, social media, productivity and e-commerce verticals." },
      { "period": "2019 — 2020", "role": "Junior Mobile Developer", "company": "Startup PK", "desc": "Developed Android apps using Java/Kotlin before transitioning to Flutter. Gained skills providing in mobile fundamentals." }
    ],
    "education": [
      { "period": "2017 — 2021", "title": "B.Sc. Computer Science", "org": "COMSATS University", "desc": "Focused on software engineering, algorithms and mobile computing. Graduated with distinction." },
      { "period": "2023", "title": "Google Flutter Certified", "org": "Google", "desc": "Completed advanced Flutter development certification covering state management, performance and production deployment." },
      { "period": "2022", "title": "Firebase Expert Certification", "org": "Firebase / Google", "desc": "Advanced certification in Firebase ecosystem including Cloud Functions, Firestore, Auth, and Cloud Messaging." }
    ],
    "technicalSkills": [
      { "name": "Flutter / Dart", "value": 95 },
      { "name": "Firebase", "value": 90 },
      { "name": "Node.js / REST APIs", "value": 80 },
      { "name": "CI/CD Implementation", "value": 75 },
      { "name": "Clean Architecture", "value": 88 }
    ],
    "languages": [
      { "name": "Urdu (Native)", "value": 100 },
      { "name": "English (Professional)", "value": 90 },
      { "name": "Pashto", "value": 60 }
    ],
    "projects": [
      { "title": "Granda / App", "desc": "Flutter-powered events app with Google Maps integration — create, discover and join events near you in seconds.", "tag": "Productivity", "color": "sky", "image": "" },
      { "title": "MintPort AI / App", "desc": "AI-powered plant identification and care-tracking app — snap any plant, get care tips and build a digital garden journal.", "tag": "Productivity", "color": "emerald", "image": "" }
    ],
    "projectFilters": ["All", "Productivity", "Medical", "Social", "Music & Arts"],
    "contact": {
      "email": "adnan@electricveil.com",
      "location": "Peshawar, Pakistan",
      "responseTime": "Within 24 hours",
      "intro": "Have a project in mind or want to discuss a collaboration? I'd love to hear from you. Fill in the form or reach out directly through any channel below."
    },
    "socials": {
      "youtube": "#",
      "github": "#",
      "linkedin": "#",
      "instagram": "#"
    },
    "resumeUrl": "#"
  }$$::jsonb
)
on conflict (id) do update set data = excluded.data, updated_at = now();
