import { useState, useEffect, type FormEvent } from "react";
import { login, logout, isLoggedIn } from "../admin/auth";
import {
  addJob, addNote, addBook, addPhoto,
  getJobs, getNotes, getBooks, getPhotos,
  deleteJob, deleteNote, deleteBook, deletePhoto,
  exportAllAsJson,
} from "../store/contentStore";
import type { JobEntry, StudyNote, Book, Photo } from "../types";
import styles from "./Admin.module.css";

// ── Login ─────────────────────────────────────────────────────────────────────

function LoginForm({ onSuccess }: { onSuccess: () => void }) {
  const [pw, setPw] = useState("");
  const [error, setError] = useState("");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const ok = await login(pw);
    if (ok) {
      onSuccess();
    } else {
      setError("Wrong password.");
      setPw("");
    }
  }

  return (
    <div className={styles.loginWrap}>
      <h2>Admin Login</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="password"
          placeholder="Password"
          value={pw}
          onChange={(e) => setPw(e.target.value)}
          className={styles.input}
          autoFocus
        />
        <button type="submit" className={styles.btn}>Log In</button>
      </form>
      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
}

// ── Add Job Form ──────────────────────────────────────────────────────────────

function AddJobForm({ onDone }: { onDone: () => void }) {
  const [company, setCompany] = useState("");
  const [role, setRole] = useState("");
  const [dateRange, setDateRange] = useState("");
  const [logoUrl, setLogoUrl] = useState("");
  const [teamName, setTeamName] = useState("");
  const [bullets, setBullets] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const job: JobEntry = {
      id: `job_${Date.now()}`,
      company,
      role,
      dateRange,
      logoUrl,
      teams: [
        {
          name: teamName,
          bullets: bullets.split("\n").map((b) => b.trim()).filter(Boolean),
        },
      ],
    };
    addJob(job);
    onDone();
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <h3>Add Job Entry</h3>
      <label>Company</label>
      <input className={styles.input} value={company} onChange={(e) => setCompany(e.target.value)} required />
      <label>Role</label>
      <input className={styles.input} value={role} onChange={(e) => setRole(e.target.value)} required />
      <label>Date Range (e.g. "March 2025 – Present")</label>
      <input className={styles.input} value={dateRange} onChange={(e) => setDateRange(e.target.value)} required />
      <label>Logo URL (e.g. /materials/resume/adobe.png)</label>
      <input className={styles.input} value={logoUrl} onChange={(e) => setLogoUrl(e.target.value)} />
      <label>Team / Sub-project name (optional)</label>
      <input className={styles.input} value={teamName} onChange={(e) => setTeamName(e.target.value)} />
      <label>Bullet points (one per line)</label>
      <textarea className={styles.textarea} value={bullets} onChange={(e) => setBullets(e.target.value)} rows={5} />
      <button type="submit" className={styles.btn}>Add Job</button>
    </form>
  );
}

// ── Add Note Form ─────────────────────────────────────────────────────────────

function AddNoteForm({ onDone }: { onDone: () => void }) {
  const [category, setCategory] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [linkLabel, setLinkLabel] = useState("");
  const [linkUrl, setLinkUrl] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const note: StudyNote = {
      id: `note_${Date.now()}`,
      category,
      title,
      content,
      links: linkUrl ? [{ label: linkLabel || linkUrl, url: linkUrl }] : [],
      dateAdded: new Date().toISOString().slice(0, 10),
    };
    addNote(note);
    onDone();
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <h3>Add Study Note</h3>
      <label>Category (e.g. "Machine Learning")</label>
      <input className={styles.input} value={category} onChange={(e) => setCategory(e.target.value)} required />
      <label>Title</label>
      <input className={styles.input} value={title} onChange={(e) => setTitle(e.target.value)} required />
      <label>Content (paragraphs separated by blank lines)</label>
      <textarea className={styles.textarea} value={content} onChange={(e) => setContent(e.target.value)} rows={6} />
      <label>Link label (optional)</label>
      <input className={styles.input} value={linkLabel} onChange={(e) => setLinkLabel(e.target.value)} />
      <label>Link URL (optional)</label>
      <input className={styles.input} type="url" value={linkUrl} onChange={(e) => setLinkUrl(e.target.value)} />
      <button type="submit" className={styles.btn}>Add Note</button>
    </form>
  );
}

// ── Add Book Form ─────────────────────────────────────────────────────────────

function AddBookForm({ onDone }: { onDone: () => void }) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [coverUrl, setCoverUrl] = useState("");
  const [status, setStatus] = useState<Book["status"]>("reading");
  const [notes, setNotes] = useState("");
  const [reviewUrl, setReviewUrl] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const book: Book = {
      id: `book_${Date.now()}`,
      title,
      author,
      coverUrl,
      status,
      notes: notes || undefined,
      reviewUrl: reviewUrl || undefined,
      dateAdded: new Date().toISOString().slice(0, 10),
    };
    addBook(book);
    onDone();
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <h3>Add Book</h3>
      <label>Title</label>
      <input className={styles.input} value={title} onChange={(e) => setTitle(e.target.value)} required />
      <label>Author</label>
      <input className={styles.input} value={author} onChange={(e) => setAuthor(e.target.value)} required />
      <label>Cover image URL (e.g. /materials/interests/reading/cover.jpg)</label>
      <input className={styles.input} value={coverUrl} onChange={(e) => setCoverUrl(e.target.value)} />
      <label>Status</label>
      <select
        className={styles.input}
        value={status}
        onChange={(e) => setStatus(e.target.value as Book["status"])}
      >
        <option value="reading">Currently Reading</option>
        <option value="completed">Completed</option>
        <option value="want-to-read">Want to Read</option>
      </select>
      <label>Notes (optional)</label>
      <textarea className={styles.textarea} value={notes} onChange={(e) => setNotes(e.target.value)} rows={3} />
      <label>Review URL (optional)</label>
      <input className={styles.input} type="url" value={reviewUrl} onChange={(e) => setReviewUrl(e.target.value)} />
      <button type="submit" className={styles.btn}>Add Book</button>
    </form>
  );
}

// ── Add Photo Form ────────────────────────────────────────────────────────────

function AddPhotoForm({ onDone }: { onDone: () => void }) {
  const [src, setSrc] = useState("");
  const [caption, setCaption] = useState("");
  const [date, setDate] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const photo: Photo = {
      id: `photo_${Date.now()}`,
      src,
      caption,
      date,
    };
    addPhoto(photo);
    onDone();
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <h3>Add Photo</h3>
      <label>Image URL (e.g. /materials/interests/photos/my_photo.jpg)</label>
      <input className={styles.input} value={src} onChange={(e) => setSrc(e.target.value)} required />
      <label>Caption</label>
      <input className={styles.input} value={caption} onChange={(e) => setCaption(e.target.value)} required />
      <label>Date (e.g. 04/12/2025)</label>
      <input className={styles.input} value={date} onChange={(e) => setDate(e.target.value)} />
      <button type="submit" className={styles.btn}>Add Photo</button>
    </form>
  );
}

// ── Admin Panel ───────────────────────────────────────────────────────────────

type Tab = "jobs" | "notes" | "books" | "photos";

function AdminPanel() {
  const [tab, setTab] = useState<Tab>("jobs");
  const [jobs, setJobs] = useState<JobEntry[]>([]);
  const [notes, setNotes] = useState<StudyNote[]>([]);
  const [books, setBooks] = useState<Book[]>([]);
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [exported, setExported] = useState(false);

  function refresh() {
    setJobs(getJobs());
    setNotes(getNotes());
    setBooks(getBooks());
    setPhotos(getPhotos());
    setShowForm(false);
  }

  useEffect(refresh, []);

  function handleExport() {
    navigator.clipboard.writeText(exportAllAsJson());
    setExported(true);
    setTimeout(() => setExported(false), 2500);
  }

  const TABS: { id: Tab; label: string }[] = [
    { id: "jobs", label: "Jobs" },
    { id: "notes", label: "Notes" },
    { id: "books", label: "Books" },
    { id: "photos", label: "Photos" },
  ];

  return (
    <div className={styles.panel}>
      <div className={styles.panelHeader}>
        <h2>Admin Panel</h2>
        <div className={styles.headerActions}>
          <button className={styles.btnSecondary} onClick={handleExport}>
            {exported ? "Copied!" : "Export JSON"}
          </button>
          <button className={styles.btnDanger} onClick={logout}>
            Log Out
          </button>
        </div>
      </div>

      <p className={styles.hint}>
        Additions are saved in your browser's localStorage and visible immediately.
        Use <strong>Export JSON</strong> to copy the data and paste it into the static data files
        for changes to persist for all visitors.
      </p>

      <div className={styles.tabs}>
        {TABS.map((t) => (
          <button
            key={t.id}
            className={tab === t.id ? styles.tabActive : styles.tabBtn}
            onClick={() => { setTab(t.id); setShowForm(false); }}
          >
            {t.label}
          </button>
        ))}
      </div>

      <div className={styles.tabContent}>
        {/* ── Jobs tab ── */}
        {tab === "jobs" && (
          <>
            <button className={styles.btn} onClick={() => setShowForm(!showForm)}>
              {showForm ? "Cancel" : "+ Add Job"}
            </button>
            {showForm && <AddJobForm onDone={refresh} />}
            <ul className={styles.itemList}>
              {jobs.map((j) => (
                <li key={j.id} className={styles.item}>
                  <span>{j.role} @ {j.company} ({j.dateRange})</span>
                  <button
                    className={styles.deleteBtn}
                    onClick={() => { deleteJob(j.id); refresh(); }}
                  >
                    Delete
                  </button>
                </li>
              ))}
            </ul>
          </>
        )}

        {/* ── Notes tab ── */}
        {tab === "notes" && (
          <>
            <button className={styles.btn} onClick={() => setShowForm(!showForm)}>
              {showForm ? "Cancel" : "+ Add Note"}
            </button>
            {showForm && <AddNoteForm onDone={refresh} />}
            <ul className={styles.itemList}>
              {notes.map((n) => (
                <li key={n.id} className={styles.item}>
                  <span>[{n.category}] {n.title}</span>
                  <button
                    className={styles.deleteBtn}
                    onClick={() => { deleteNote(n.id); refresh(); }}
                  >
                    Delete
                  </button>
                </li>
              ))}
            </ul>
          </>
        )}

        {/* ── Books tab ── */}
        {tab === "books" && (
          <>
            <button className={styles.btn} onClick={() => setShowForm(!showForm)}>
              {showForm ? "Cancel" : "+ Add Book"}
            </button>
            {showForm && <AddBookForm onDone={refresh} />}
            <ul className={styles.itemList}>
              {books.map((b) => (
                <li key={b.id} className={styles.item}>
                  <span>{b.title} — {b.author} ({b.status})</span>
                  <button
                    className={styles.deleteBtn}
                    onClick={() => { deleteBook(b.id); refresh(); }}
                  >
                    Delete
                  </button>
                </li>
              ))}
            </ul>
          </>
        )}

        {/* ── Photos tab ── */}
        {tab === "photos" && (
          <>
            <button className={styles.btn} onClick={() => setShowForm(!showForm)}>
              {showForm ? "Cancel" : "+ Add Photo"}
            </button>
            {showForm && <AddPhotoForm onDone={refresh} />}
            <ul className={styles.itemList}>
              {photos.map((p) => (
                <li key={p.id} className={styles.item}>
                  <span>{p.caption} ({p.date})</span>
                  <button
                    className={styles.deleteBtn}
                    onClick={() => { deletePhoto(p.id); refresh(); }}
                  >
                    Delete
                  </button>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </div>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function Admin() {
  const [loggedIn, setLoggedIn] = useState(isLoggedIn());

  return loggedIn ? (
    <AdminPanel />
  ) : (
    <LoginForm onSuccess={() => setLoggedIn(true)} />
  );
}
