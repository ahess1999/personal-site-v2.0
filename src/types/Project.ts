export default interface Project {
  name: string;
  description: string;
  htmlUrl?: string;
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
