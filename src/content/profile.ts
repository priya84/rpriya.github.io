import type { SourcedContent } from "./types";

interface EducationRecord extends SourcedContent {
  institution: string;
  degree: string;
  year?: string;
  detail?: string;
}

interface ContactRecord extends SourcedContent {
  label: string;
  value: string;
  href: string | null;
  placeholder?: string;
}

interface ProfileRecord extends SourcedContent {
  name: string;
  title: string;
  summary: string;
  experienceSummary: string;
  researchFocus: string;
  email: string;
  phone: string;
  cvPath: string;
  education: EducationRecord[];
  links: ContactRecord[];
}

export const profile: ProfileRecord = {
  id: "profile-priyadharsini-ramamurthy",
  source: "Updated CV",
  name: "Priyadharsini Ramamurthy",
  title: "AI/ML Scientist and Engineer",
  summary: "Seasoned AI/ML Scientist and Engineer with 11+ years of enterprise technology experience and 6+ years of applied AI/ML research, delivering production-grade intelligent solutions across healthcare, biopharma, retail, banking, and manufacturing.",
  experienceSummary: "11+ years in enterprise technology / 6+ years in applied AI/ML research",
  researchFocus: "Natural language processing, machine learning and deep learning, AI and healthcare analytics",
  email: "pramamu@ostatemail.okstate.edu",
  phone: "331-315-1645",
  cvPath: "/priya-ramamurthy-cv.pdf",
  education: [
    { id: "education-osu-phd", source: "Updated CV", institution: "Oklahoma State University", degree: "Ph.D. Candidate, Computer Science", detail: "Research major: NLP, machine learning and deep learning. Specialization: AI and healthcare analytics. GPA: 3.9/4." },
    { id: "education-osu-ms", source: "Updated CV", institution: "Oklahoma State University", degree: "M.S. in Computer Science", year: "2022" },
    { id: "education-itu-ms", source: "Updated CV", institution: "International Technological University", degree: "M.S. in Engineering Management", year: "2017" },
    { id: "education-anna-bs", source: "Updated CV", institution: "Anna University", degree: "B.S. in Computer Science", year: "2006" },
  ],
  links: [
    { id: "contact-linkedin", source: "Updated CV", label: "LinkedIn", value: "URL to add", href: null, placeholder: "Add LinkedIn URL" },
    { id: "contact-website", source: "Updated CV", label: "Website", value: "URL to add", href: null, placeholder: "Add website URL" },
  ],
};