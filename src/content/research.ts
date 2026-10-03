import type { SourcedContent } from "./types";

export interface ResearchArea extends SourcedContent { title: string; description: string; }

export const researchAreas: ResearchArea[] = [
  { id: "research-healthcare-analytics", source: "Updated CV", title: "Healthcare AI and analytics", description: "Clinical NLP, EHR data, healthcare analytics, and decision-support systems." },
  { id: "research-language-reasoning", source: "Updated CV", title: "Language, knowledge, and reasoning", description: "NLP, commonsense reasoning, knowledge graphs, question answering, and retrieval systems." },
  { id: "research-graph-learning", source: "Updated CV", title: "Graph and deep learning", description: "GNNs, deep learning, model evaluation, and risk prediction with sparse time-series EHR data." },
  { id: "research-biomedical-ml", source: "Updated CV", title: "Biomedical and biological ML", description: "Infectious disease forecasting, genome classification, and bioinformatics analysis." },
];