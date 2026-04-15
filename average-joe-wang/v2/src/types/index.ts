export interface JobTeam {
  name: string;
  bullets: string[];
}

export interface JobEntry {
  id: string;
  company: string;
  role: string;
  dateRange: string;
  logoUrl: string;
  teams: JobTeam[];
}

export interface School {
  id: string;
  name: string;
  location: string;
  logoUrl: string;
  dateRange: string;
  degree: string;
  gpa: string;
  coursework?: string;
  note?: string;
}

export interface NoteLink {
  label: string;
  url: string;
}

export interface StudyNote {
  id: string;
  category: string;
  title: string;
  content: string;
  links: NoteLink[];
  dateAdded: string;
}

export interface Book {
  id: string;
  title: string;
  author: string;
  coverUrl: string;
  status: "reading" | "completed" | "want-to-read";
  notes?: string;
  reviewUrl?: string;
  dateAdded: string;
}

export interface Photo {
  id: string;
  src: string;
  caption: string;
  date: string;
}
