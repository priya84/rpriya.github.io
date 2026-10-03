import type { SourcedContent } from "./types";

export interface ProjectRecord extends SourcedContent { title: string; description: string; tags: string[]; }

export const projects: ProjectRecord[] = [
  { id: "project-federated-healthcare", source: "Updated CV", title: "Federated healthcare decision support", description: "Delivered AI, LLM, and agentic decision-support solutions in federated healthcare environments supporting 1.95M+ patients and 90K+ clinical features; model performance reached 0.916 AUC.", tags: ["Healthcare AI", "LLMs", "Agentic systems"] },
  { id: "project-browser-local-inference", source: "Updated CV", title: "Browser-based local inference", description: "Translated Python ML workflows into JavaScript for browser-based deployment, retaining 100% of inference data locally and eliminating external model-serving data transfers.", tags: ["JavaScript", "Local inference", "Privacy"] },
  { id: "project-ehr-spark-pipelines", source: "Updated CV", title: "Scalable EHR Spark ML/NLP pipelines", description: "Built pipelines on Oracle-Cerner EHR data, improving operational efficiency by 15%, processing speed by 20%, storage utilization by 20%, and reducing model training time by 25%.", tags: ["Apache Spark", "EHR", "NLP"] },
  { id: "project-epilepsy-gnn", source: "Updated CV", title: "Post-traumatic epilepsy risk prediction", description: "Led attention-based GNN models on large-scale sparse EHR data to support risk stratification and clinical decision support.", tags: ["GNN", "Time series", "Healthcare"] },
  { id: "project-knowledge-graph-qa", source: "Updated CV", title: "Knowledge-graph-enhanced question answering", description: "Designed agentic QA and decision-support systems using ConceptNet, dependency parsing, and POS tagging across 1M+ records; improved answer quality by 15%.", tags: ["Knowledge graphs", "Question answering", "NLP"] },
  { id: "project-zero-shot-genome", source: "Updated CV", title: "Zero-shot genome classification", description: "Developed taxonomy-aware zero-shot machine learning for biological sequence classification in limited-label settings.", tags: ["Bioinformatics", "Zero-shot ML", "Classification"] },
];