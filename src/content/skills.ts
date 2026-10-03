import type { SourcedContent } from "./types";

export interface SkillGroup extends SourcedContent { category: string; skills: string[]; }

export const skillGroups: SkillGroup[] = [
  { id: "skills-programming", source: "Updated CV", category: "Programming", skills: ["Python", "SQL", "Java", "JavaScript"] },
  { id: "skills-ml-ai", source: "Updated CV", category: "ML / AI", skills: ["Supervised and unsupervised learning", "Deep learning", "NLP", "GNNs", "XAI", "Statistical modeling", "Time-series analysis", "Feature engineering", "Model evaluation"] },
  { id: "skills-generative-ai", source: "Updated CV", category: "Generative AI", skills: ["LLMs", "Retrieval-augmented generation", "Agentic AI", "Prompt engineering", "Knowledge graphs", "Vector search"] },
  { id: "skills-frameworks", source: "Updated CV", category: "Frameworks", skills: ["PyTorch", "TensorFlow", "Hugging Face Transformers", "scikit-learn", "LangChain", "LangGraph", "spaCy"] },
  { id: "skills-data-engineering", source: "Updated CV", category: "Data engineering", skills: ["Apache Spark", "PySpark", "Spark SQL", "ETL pipelines", "Distributed computing"] },
  { id: "skills-cloud-deployment", source: "Updated CV", category: "Cloud and deployment", skills: ["AWS", "GCP", "Docker", "Kubernetes", "FastAPI", "Git", "CI/CD"] },
  { id: "skills-databases", source: "Updated CV", category: "Databases", skills: ["Oracle", "PostgreSQL", "ChromaDB", "DuckDB"] },
];