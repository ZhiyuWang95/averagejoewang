import type { StudyNote } from "../types";

export const notes: StudyNote[] = [
  {
    id: "deep_learning",
    category: "Machine Learning",
    title: "Deep Learning",
    content: "",
    links: [
      {
        label: "MIT 6.S191 Introduction to Deep Learning",
        url: "https://introtodeeplearning.com/",
      },
    ],
    dateAdded: "2025-03-01",
  },
  {
    id: "docker",
    category: "Distributed Computing",
    title: "Container – Docker",
    content: "",
    links: [
      {
        label: "CKAD: Container and Container Orchestration Fundamentals",
        url: "https://www.coursera.org/learn/ckad-container-and-container-orchestration-fundamentals/home/week/2",
      },
    ],
    dateAdded: "2025-03-01",
  },
  {
    id: "kubernetes",
    category: "Distributed Computing",
    title: "Container Orchestration – Kubernetes",
    content: `Two weeks into my journey at Adobe, and it's been a smooth and thoughtful onboarding experience so far. I joined the Firefly organization and have been gradually settling in—spending most of my time learning and getting familiar with the systems and tools the team uses.

One of my main focuses has been refreshing my Python skills. After years of working primarily with Java at Amazon, I'd almost forgotten both the quirks and the charm of Python. It's been a fun process shaking off the rust—rewiring my brain for Pythonic thinking and writing small bits of code to get back into the flow. GitHub Copilot has definitely been a helpful companion along the way.

On the infrastructure side, I've also started picking up Kubernetes. To get a basic understanding, I took a short course on Coursera – shout out to the instructor, Bogdan Stashchuk 🇺🇦. The hands-on examples gave me just enough context to feel less lost when reading internal docs or YAML files. Highly recommend it for a quick jump start.`,
    links: [
      {
        label: "Kubernetes for Beginners by Packt",
        url: "https://www.coursera.org/learn/packt-kubernetes-for-beginners-pj7v5/home/welcome",
      },
    ],
    dateAdded: "2025-03-15",
  },
  {
    id: "frontend",
    category: "Web Development",
    title: "Frontend Development",
    content: `I'm currently exploring frontend engineering fundamentals through Meta's Front-End Developer Professional Certificate on Coursera. Not sure if I'll have time for it, but it's on my 2025 to-do list.`,
    links: [
      {
        label: "Meta Front-End Developer Professional Certificate",
        url: "https://www.coursera.org/professional-certificates/meta-front-end-developer",
      },
    ],
    dateAdded: "2025-03-01",
  },
];
