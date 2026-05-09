import { useState, useEffect } from "react";
import { getJobs } from "../store/contentStore";
import { schools, skills, certifications } from "../data/resumeData";
import type { JobEntry } from "../types";
import styles from "./Resume.module.css";

export default function Resume() {
  const [jobs, setJobs] = useState<JobEntry[]>([]);

  useEffect(() => {
    setJobs(getJobs());
  }, []);

  return (
    <div className={styles.page}>
      {/* Contact */}
      <section className={styles.card}>
        <h1 className={styles.name}>Zhiyu (Joe) Wang</h1>
        <div className={styles.contactRow}>
          <p><strong>Cell:</strong> (857) 869-4147</p>
          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto:avgjoewang@gmail.com">avgjoewang@gmail.com</a>
          </p>
          <p>
            <strong>LinkedIn:</strong>{" "}
            <a
              href="https://www.linkedin.com/in/zhiyu-wang-joey/"
              target="_blank"
              rel="noreferrer"
            >
              linkedin.com/in/zhiyu-wang-joey/
            </a>
          </p>
        </div>
      </section>

      {/* Work Experience */}
      <section className={styles.card}>
        <h2 className={styles.sectionTitle}>Work Experience</h2>
        {jobs.map((job) => (
          <div key={job.id} className={styles.job}>
            <img src={job.logoUrl} alt={`${job.company} logo`} className={styles.logo} />
            <div className={styles.jobContent}>
              <h3 className={styles.jobRole}>
                {job.role},{" "}
                {job.companyUrl ? (
                  <a href={job.companyUrl} target="_blank" rel="noreferrer">
                    {job.company}
                  </a>
                ) : (
                  job.company
                )}
              </h3>
              <p className={styles.date}>{job.dateRange}</p>
              {job.teams.map((team, i) => (
                <div key={i}>
                  {team.name && (
                    <h4 className={styles.teamName}>
                      {team.url ? (
                        <a href={team.url} target="_blank" rel="noreferrer">
                          {team.name}
                        </a>
                      ) : (
                        team.name
                      )}
                    </h4>
                  )}
                  <ul className={styles.bullets}>
                    {team.bullets.map((b, j) => (
                      <li key={j}>{b}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* Education */}
      <section className={styles.card}>
        <h2 className={styles.sectionTitle}>Education</h2>
        {schools.map((school) => (
          <div key={school.id} className={styles.school}>
            <div className={styles.schoolHeader}>
              <img src={school.logoUrl} alt={`${school.name} logo`} className={styles.schoolLogo} />
              <div>
                <h3 className={styles.schoolName}>
                  {school.url ? (
                    <a href={school.url} target="_blank" rel="noreferrer">
                      {school.name}
                    </a>
                  ) : (
                    school.name
                  )}{" "}
                  <span className={styles.location}>— {school.location}</span>
                </h3>
                <span className={styles.date}>{school.dateRange}</span>
              </div>
            </div>
            <p className={styles.degree}>{school.degree}</p>
            <p className={styles.gpa}>GPA: {school.gpa}</p>
            {school.coursework && (
              <p className={styles.coursework}>
                <strong>Coursework:</strong> {school.coursework}
              </p>
            )}
          </div>
        ))}
      </section>

      {/* Skills */}
      <section className={styles.card}>
        <h2 className={styles.sectionTitle}>Skills</h2>
        <ul className={styles.list}>
          <li><strong>Programming Languages:</strong> {skills.languages}</li>
          <li><strong>Databases:</strong> {skills.databases}</li>
          <li><strong>Technologies / Frameworks:</strong> {skills.technologies}</li>
        </ul>
      </section>

      {/* Certifications */}
      <section className={styles.card}>
        <h2 className={styles.sectionTitle}>Certifications</h2>
        <ul className={styles.list}>
          {certifications.map((cert, i) => (
            <li key={i}>
              {cert.url ? (
                <a href={cert.url} target="_blank" rel="noreferrer">
                  {cert.name}
                </a>
              ) : (
                cert.name
              )}
              {" — "}<em>{cert.issuer}</em>
              {" · Issued "}{cert.issued}
              {cert.expires && <span className={styles.expired}> · Expired {cert.expires}</span>}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
