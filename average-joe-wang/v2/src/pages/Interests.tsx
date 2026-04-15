import { useState, useEffect } from "react";
import { getPhotos, getBooks } from "../store/contentStore";
import type { Photo, Book } from "../types";
import styles from "./Interests.module.css";

function PhotoGallery({ photos }: { photos: Photo[] }) {
  const [lightbox, setLightbox] = useState<Photo | null>(null);

  return (
    <>
      <div className={styles.scrollRow}>
        {photos.map((photo) => (
          <button
            key={photo.id}
            className={styles.polaroidBtn}
            onClick={() => setLightbox(photo)}
          >
            <div className={styles.polaroid}>
              <img src={photo.src} alt={photo.caption} />
              <div className={styles.caption}>
                {photo.caption} {photo.date}
              </div>
            </div>
          </button>
        ))}
      </div>

      {lightbox && (
        <div
          className={styles.lightbox}
          onClick={() => setLightbox(null)}
          role="dialog"
          aria-modal="true"
        >
          <img src={lightbox.src} alt={lightbox.caption} />
          <span className={styles.close}>✕</span>
        </div>
      )}
    </>
  );
}

const STATUS_LABEL: Record<Book["status"], string> = {
  reading: "📖 Currently Reading",
  completed: "✅ Completed",
  "want-to-read": "🔖 Want to Read",
};

function BookShelf({ books }: { books: Book[] }) {
  return (
    <div className={styles.bookShelf}>
      {books.map((book) => (
        <div key={book.id} className={styles.bookItem}>
          {book.reviewUrl ? (
            <a href={book.reviewUrl} target="_blank" rel="noreferrer">
              <img src={book.coverUrl} alt={book.title} className={styles.bookCover} />
            </a>
          ) : (
            <img src={book.coverUrl} alt={book.title} className={styles.bookCover} />
          )}
          <div className={styles.bookMeta}>
            <p className={styles.bookTitle}>{book.title}</p>
            <p className={styles.bookAuthor}>{book.author}</p>
            <span className={styles.bookStatus}>{STATUS_LABEL[book.status]}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function Interests() {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    setPhotos(getPhotos());
    setBooks(getBooks());
  }, []);

  return (
    <section className={styles.card}>
      <h2 className={styles.pageTitle}>Personal Interests</h2>
      <p className={styles.intro}>A little about what I enjoy outside of work and study:</p>

      <div className={styles.block}>
        <h3 className={styles.blockTitle}>📷 Photography</h3>
        <p>I love capturing candid moments, natural light, and scenic landscapes.</p>
        <PhotoGallery photos={photos} />
      </div>

      <div className={styles.block}>
        <h3 className={styles.blockTitle}>✈️ Travel</h3>
        <p>Exploring new cultures, cuisines, and architecture always inspires me.</p>
      </div>

      <div className={styles.block}>
        <h3 className={styles.blockTitle}>📚 Reading</h3>
        <p>I'm drawn to non-fiction, sci-fi, and books on emerging technologies.</p>
        <BookShelf books={books} />
      </div>
    </section>
  );
}
