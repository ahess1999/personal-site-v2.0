export default interface Project {
  name: string;
  description: string;
  html_url?: string;
  homepage?: string;
  languages: Languages;
}

export interface Languages {
  "C#": number;
  TypeScript: number;
  JavaScript: number;
  Java: number;
  Python: number;
  HTML: number;
  CSS: number;
  C: number;
}
