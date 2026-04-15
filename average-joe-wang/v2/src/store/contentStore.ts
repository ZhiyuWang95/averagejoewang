import type { JobEntry, StudyNote, Book, Photo } from "../types";
import { jobs as staticJobs } from "../data/resumeData";
import { notes as staticNotes } from "../data/notesData";
import { books as staticBooks } from "../data/booksData";
import { photos as staticPhotos } from "../data/photosData";

const KEYS = {
  jobs: "ajw_jobs",
  notes: "ajw_notes",
  books: "ajw_books",
  photos: "ajw_photos",
};

function load<T>(key: string): T[] {
  try {
    const raw = localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T[]) : [];
  } catch {
    return [];
  }
}

function save<T>(key: string, items: T[]): void {
  localStorage.setItem(key, JSON.stringify(items));
}

// ── Jobs ──────────────────────────────────────────────────────────────────────

export function getJobs(): JobEntry[] {
  const extra = load<JobEntry>(KEYS.jobs);
  return [...extra, ...staticJobs];
}

export function addJob(job: JobEntry): void {
  const extra = load<JobEntry>(KEYS.jobs);
  save(KEYS.jobs, [job, ...extra]);
}

export function updateJob(updated: JobEntry): void {
  const extra = load<JobEntry>(KEYS.jobs);
  const idx = extra.findIndex((j) => j.id === updated.id);
  if (idx !== -1) {
    extra[idx] = updated;
    save(KEYS.jobs, extra);
  }
}

export function deleteJob(id: string): void {
  const extra = load<JobEntry>(KEYS.jobs);
  save(KEYS.jobs, extra.filter((j) => j.id !== id));
}

// ── Notes ─────────────────────────────────────────────────────────────────────

export function getNotes(): StudyNote[] {
  const extra = load<StudyNote>(KEYS.notes);
  return [...extra, ...staticNotes];
}

export function addNote(note: StudyNote): void {
  const extra = load<StudyNote>(KEYS.notes);
  save(KEYS.notes, [note, ...extra]);
}

export function updateNote(updated: StudyNote): void {
  const extra = load<StudyNote>(KEYS.notes);
  const idx = extra.findIndex((n) => n.id === updated.id);
  if (idx !== -1) {
    extra[idx] = updated;
    save(KEYS.notes, extra);
  }
}

export function deleteNote(id: string): void {
  const extra = load<StudyNote>(KEYS.notes);
  save(KEYS.notes, extra.filter((n) => n.id !== id));
}

// ── Books ─────────────────────────────────────────────────────────────────────

export function getBooks(): Book[] {
  const extra = load<Book>(KEYS.books);
  return [...extra, ...staticBooks];
}

export function addBook(book: Book): void {
  const extra = load<Book>(KEYS.books);
  save(KEYS.books, [book, ...extra]);
}

export function updateBook(updated: Book): void {
  const extra = load<Book>(KEYS.books);
  const idx = extra.findIndex((b) => b.id === updated.id);
  if (idx !== -1) {
    extra[idx] = updated;
    save(KEYS.books, extra);
  }
}

export function deleteBook(id: string): void {
  const extra = load<Book>(KEYS.books);
  save(KEYS.books, extra.filter((b) => b.id !== id));
}

// ── Photos ────────────────────────────────────────────────────────────────────

export function getPhotos(): Photo[] {
  const extra = load<Photo>(KEYS.photos);
  return [...extra, ...staticPhotos];
}

export function addPhoto(photo: Photo): void {
  const extra = load<Photo>(KEYS.photos);
  save(KEYS.photos, [photo, ...extra]);
}

export function deletePhoto(id: string): void {
  const extra = load<Photo>(KEYS.photos);
  save(KEYS.photos, extra.filter((p) => p.id !== id));
}

// ── Export (for copy-paste into data files) ───────────────────────────────────

export function exportAllAsJson(): string {
  return JSON.stringify(
    {
      jobs: load<JobEntry>(KEYS.jobs),
      notes: load<StudyNote>(KEYS.notes),
      books: load<Book>(KEYS.books),
      photos: load<Photo>(KEYS.photos),
    },
    null,
    2
  );
}
