import type { SourcedContent } from "./types";

export interface ServiceRecord extends SourcedContent { title: string; detail: string; period?: string; }

export const service: ServiceRecord[] = [
  { id: "service-reviewer-chair", source: "Updated CV", title: "Conference reviewer and session chair", detail: "Reviewed submissions in NLP, machine learning, deep learning, and medical image retrieval for ICPR, ICMLA, ISES, IEEE ASIAN, JMIR, ACM, and TMIR. Session Chair for IEEE AIDML and IEEE INCECT.", period: "2021-2026" },
  { id: "service-wids-ambassador-2024", source: "Updated CV", title: "Women in Data Science Ambassador", detail: "Assisted the Oklahoma State University Computer Science Grandparent University Program.", period: "2024" },
  { id: "service-ecml-pkdd-2020", source: "Updated CV", title: "Volunteer, ECML-PKDD", detail: "European Conference on Machine Learning and Principles and Practice of Knowledge Discovery in Databases.", period: "2020" },
  { id: "service-scrs-fellow-2026", source: "Updated CV", title: "Distinguished Fellow, Soft Computing Research Society", detail: "Professional membership and recognition.", period: "2026" },
  { id: "service-ieee-member-2026-2027", source: "Updated CV", title: "Graduate Student Member, IEEE", detail: "Professional membership.", period: "2026-2027" },
];