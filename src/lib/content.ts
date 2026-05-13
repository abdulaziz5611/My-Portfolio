import { createSupabaseServerClient } from "./supabase/server";

export type SiteContent = {
  profile: {
    name: string;
    title: string;
    tagline: string;
    profileImage: string;
    initials: string;
  };
  hero: {
    headline: string[];
    highlight: string[];
    subtitle: string;
    stats: { value: string; label: string }[];
  };
  about: {
    heading: string[];
    highlight: string;
    paragraphs: string[];
    skills: string[];
    metrics: { value: string; label: string }[];
  };
  services: {
    title: string;
    desc: string;
    tags: string[];
    color: string;
  }[];
  experience: {
    period: string;
    role: string;
    company: string;
    desc: string;
  }[];
  education: { period: string; title: string; org: string; desc: string }[];
  technicalSkills: { name: string; value: number }[];
  languages: { name: string; value: number }[];
  projects: {
    title: string;
    desc: string;
    tag: string;
    color: string;
    image: string;
  }[];
  projectFilters: string[];
  contact: {
    email: string;
    location: string;
    responseTime: string;
    intro: string;
  };
  socials: {
    youtube: string;
    github: string;
    linkedin: string;
    instagram: string;
  };
  resumeUrl: string;
};

export async function getSiteContent(): Promise<SiteContent> {
  const supabase = await createSupabaseServerClient();
  const { data, error } = await supabase
    .from("site_content")
    .select("data")
    .eq("id", 1)
    .single();

  if (error || !data) {
    throw new Error(
      `Failed to load site content: ${error?.message ?? "no row"}`,
    );
  }
  return data.data as SiteContent;
}
