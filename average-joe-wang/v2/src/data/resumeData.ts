import type { JobEntry, School, Certification } from "../types";

export const jobs: JobEntry[] = [
  {
    id: "adobe",
    company: "Adobe",
    companyUrl: "https://www.adobe.com",
    role: "Software Development Engineer – AI/ML",
    dateRange: "March 2025 – Present",
    logoUrl: "/materials/resume/adobefirefly-color.png",
    teams: [
      {
        name: "Firefly Platforms",
        url: "https://firefly.adobe.com",
        bullets: [
          "Founding engineer on Adobe Firefly's new inference server — built a framework-agnostic alternative to an overburdened production system, designing the control plane, Redis-based request queue, and custom scale-to-zero autoscaler; integrated parallel weight download via s5cmd into a purpose-built sidecar and leveraged filesystem snapshots to minimize cold start latency, enabling researchers to self-serve model deployments across multiple generative models on Kubernetes.",
          "Led end-to-end design and delivery of a GPU capacity management system within a team of 4 — spanning a time-series forecasting pipeline for daily GPU demand prediction, an ops control plane, a self-serve UI, and a Grafana dashboard suite for monitoring, reporting, and prediction visualization — standardizing GPU resource management across the org and scaling supported model launches from 5 to 20 simultaneously.",
          "Standardized on-call practices for Adobe Firefly's production inference platform — building runbooks, structured incident note templates, and knowledge-sharing processes to improve response consistency and reduce tribal knowledge dependencies.",
        ],
      },
    ],
  },
  {
    id: "aws",
    company: "AWS",
    companyUrl: "https://aws.amazon.com",
    role: "Software Development Engineer",
    dateRange: "April 2024 – March 2025",
    logoUrl: "/materials/resume/aws.png",
    teams: [
      {
        name: "Amazon Translate",
        url: "https://aws.amazon.com/translate/",
        bullets: [
          "Led the build and rollout of core Machine Translation inference image upgrades — managing end-to-end dependency upgrades (PyTorch, CUDA), accuracy tests, and production deployment.",
          "Developed new test scripts for image accuracy and performance load testing.",
          "Co-mentored an intern on a proof-of-concept project leveraging Amazon Bedrock for Machine Translation.",
        ],
      },
      {
        name: "Amazon Bedrock",
        url: "https://aws.amazon.com/bedrock/",
        bullets: [
          "Contributed to the launch of batch inference for Amazon Bedrock, owning key components including batch prompt preprocessing workflows.",
          "Led the initiation and design of the provisioned throughput metrics dashboard — implemented metrics emitting, aggregating, and visualization for GPU resource utilization, serving as the single source of truth for resource tracking and cost metering.",
        ],
      },
    ],
  },
  {
    id: "amazon",
    company: "Amazon",
    companyUrl: "https://www.amazon.com",
    role: "Software Development Engineer",
    dateRange: "April 2021 – April 2024",
    logoUrl: "/materials/resume/amazon.png",
    teams: [
      {
        name: "",
        bullets: [
          "Led development of a financial data processing platform for Amazon Stores and Fulfillment Centers Finance.",
          "Led a performance optimization project reducing processing duration from 2 hours to 5 minutes — migrated to a serverless OLAP engine, designed and implemented a workflow orchestrator in Java, and modularized business logic in SQL.",
          "Initiated and led development of a data exporting feature with flexible granularity and seamless aggregation, reducing processing time from 3 hours to under 10 minutes via Java multi-threading parallelization.",
        ],
      },
    ],
  },
  {
    id: "digi",
    company: "Digi International",
    companyUrl: "https://www.digi.com",
    role: "Software Engineer",
    dateRange: "July 2019 – April 2021",
    logoUrl: "/materials/resume/digi_int.png",
    teams: [
      {
        name: "",
        bullets: [
          "Contributed to Digi Accelerated Linux OS for transportation routers, including network features and WebUI.",
        ],
      },
    ],
  },
];

export const schools: School[] = [
  {
    id: "bu",
    name: "Boston University",
    url: "https://www.bu.edu/eng/",
    location: "Boston, MA",
    logoUrl: "/materials/resume/Boston_University.png",
    dateRange: "Sep 2017 – May 2019",
    degree: "Master of Science in Electrical and Computer Engineering, Graduate with Intern Practice",
    gpa: "3.60",
    coursework:
      "Data Structures and Algorithms, Object-Oriented Programming, Embedded Systems, Computer Networks, Advanced Database Systems, Artificial Intelligence, Digital Image Processing",
  },
];

export const skills = {
  languages: "Python, Java, Rust, TypeScript, SQL, Bash",
  databases: "PostgreSQL, Redis, AWS DynamoDB, AWS Redshift",
  technologies:
    "Kubernetes, Ollama, React, MUI, S3, AWS Lambda, Amazon QuickSight, PyTorch, Glue, Athena, CloudWatch, Docker, boto3, Jupyter Notebook, Git",
};

export const certifications: Certification[] = [
  {
    name: "Kubernetes for the Absolute Beginners with Hands-on Labs",
    issuer: "KodeKloud",
    issued: "Jan 2026",
    url: "https://coursera.org/account/accomplishments/records/32C864GCAGJ7",
  },
  {
    name: "Introduction to Front-End Development",
    issuer: "Meta",
    issued: "Sep 2025",
    url: "https://coursera.org/account/accomplishments/verify/ZMMJ5BQVZ62I",
  },
  {
    name: "Advanced Learning Algorithms",
    issuer: "DeepLearning.AI",
    issued: "Sep 2024",
    url: "https://coursera.org/account/accomplishments/records/XG357OXA5GIY",
  },
  {
    name: "Supervised Machine Learning: Regression and Classification",
    issuer: "Stanford Online",
    issued: "Aug 2024",
    url: "https://coursera.org/account/accomplishments/verify/2C27L7I58IRK",
  },
  {
    name: "AWS Certified Solutions Architect – Associate",
    issuer: "Amazon Web Services (AWS)",
    issued: "Jun 2022",
    expires: "Jun 2025",
    url: "https://aw.certmetrics.com/amazon/public/verification.aspx",
  },
];
