import type { JobEntry, School } from "../types";

export const jobs: JobEntry[] = [
  {
    id: "adobe",
    company: "Adobe",
    role: "Machine Learning Engineer",
    dateRange: "March 2025 – Present",
    logoUrl: "/materials/resume/adobefirefly-color.png",
    teams: [
      {
        name: "Adobe Firefly",
        bullets: ["Adobe Firefly Inference Platform Team"],
      },
    ],
  },
  {
    id: "aws",
    company: "AWS",
    role: "Software Development Engineer",
    dateRange: "April 2024 – March 2025",
    logoUrl: "/materials/resume/aws.png",
    teams: [
      {
        name: "Amazon Translate",
        bullets: [
          "Led the upgrade of core Machine Translation inference image stack: upgraded PyTorch, CUDA, tested accuracy, and deployed to production.",
          "Co-mentored an intern to explore Amazon Bedrock as a PoC for Machine Translation.",
          "Co-led expansion of Amazon Translate into new AWS regions.",
        ],
      },
      {
        name: "Amazon Bedrock",
        bullets: [
          "Owned and launched batch inference components, including batch prompt preprocessing workflows.",
          "Initiated and helped build the GPU resource dashboard, centralizing provisioning metrics and enabling cost tracking via single source of truth.",
        ],
      },
    ],
  },
  {
    id: "amazon",
    company: "Amazon",
    role: "Software Development Engineer",
    dateRange: "April 2021 – April 2024",
    logoUrl: "/materials/resume/amazon.png",
    teams: [
      {
        name: "",
        bullets: [
          "Built internal tools to process and present financial data for fulfillment cost planning.",
          "Unified architecture to support expansion into capex, opex, and real estate workflows.",
          "Optimized performance by applying parallelism and moving to serverless queries—cutting runtime from 2h to 5m.",
          "Enhanced data exchange and export, reducing time from 3h to under 10m.",
          "Scrum Master: drove agile rituals, improving team velocity by 50% in 6 months.",
        ],
      },
    ],
  },
  {
    id: "digi",
    company: "Digi International",
    role: "Software Engineer",
    dateRange: "July 2019 – April 2021",
    logoUrl: "/materials/resume/digi_int.png",
    teams: [
      {
        name: "",
        bullets: [
          "Worked on embedded Linux-based router systems in a 10-person team.",
          "Contributed to firmware features (Hotspot, Failover, GPS) and WebUIs / CLI tooling.",
        ],
      },
    ],
  },
];

export const schools: School[] = [
  {
    id: "bu",
    name: "Boston University",
    location: "Boston, MA",
    logoUrl: "/materials/resume/Boston_University.png",
    dateRange: "Sep 2017 – May 2019",
    degree: "MSc in Electrical and Computer Engineering, Graduate with Intern Practice",
    gpa: "3.60",
    coursework:
      "Data Structures and Algorithms, Object-Oriented Programming, Embedded Systems, Computer Networks, Advanced Database Systems, Artificial Intelligence, Digital Image Processing",
  },
  {
    id: "whut",
    name: "Wuhan University of Technology",
    location: "Hubei, China",
    logoUrl: "/materials/resume/WHUT.png",
    dateRange: "Sep 2013 – June 2017",
    degree: "BEng in Automation, Excellent Graduate Award, Top 5% of Graduates",
    gpa: "3.67",
  },
];

export const skills = {
  languages: "Java, Python, C/C++, SQL, Bash, TypeScript, C#",
  databases: "AWS DynamoDB, AWS Redshift, MySQL, MongoDB, PostgreSQL",
  technologies:
    "AWS Lambda, Amazon Quicksight, SageMaker, S3, Glue, Athena, CloudWatch, Docker, Bedrock, boto3, Google Guice, Dagger, Jupyter Notebook, Git",
};

export const certifications = [
  "AWS Certified Solutions Architect – Associate (Issued June 2022, Expires June 2025)",
  "Supervised Machine Learning: Regression and Classification (Issued August 2024)",
];
