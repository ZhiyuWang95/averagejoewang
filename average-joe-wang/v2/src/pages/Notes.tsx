import { useState, useEffect } from "react";
import { getNotes } from "../store/contentStore";
import type { StudyNote } from "../types";
import styles from "./Notes.module.css";

function groupByCategory(notes: StudyNote[]): Record<string, StudyNote[]> {
  return notes.reduce<Record<string, StudyNote[]>>((acc, note) => {
    (acc[note.category] ??= []).push(note);
    return acc;
  }, {});
}

export default function Notes() {
  const [notes, setNotes] = useState<StudyNote[]>([]);

  useEffect(() => {
    setNotes(getNotes());
  }, []);

  const grouped = groupByCategory(notes);

  return (
    <section className={styles.card}>
      <h1 className={styles.pageTitle}>Study Notes</h1>
      <p className={styles.intro}>
        Here are some of my personal study notes on topics I find interesting and useful.
      </p>

      {Object.entries(grouped).map(([category, items]) => (
        <div key={category} className={styles.category}>
          <h2 className={styles.categoryTitle}>{category}</h2>
          {items.map((note) => (
            <article key={note.id} className={styles.note}>
              <h3 className={styles.noteTitle}>{note.title}</h3>
              {note.content && (
                <div className={styles.noteContent}>
                  {note.content.split("\n\n").map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>
              )}
              {note.links.length > 0 && (
                <p className={styles.exploring}>
                  🔧 Currently exploring:{" "}
                  {note.links.map((link, i) => (
                    <span key={i}>
                      {i > 0 && ", "}
                      <a href={link.url} target="_blank" rel="noreferrer">
                        {link.label}
                      </a>
                    </span>
                  ))}
                </p>
              )}
            </article>
          ))}
        </div>
      ))}
    </section>
  );
}
