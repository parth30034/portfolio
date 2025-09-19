import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Parth Shrivastava",
  initials: "PS",
  url: "http://localhost:3000",
  location: "Pune, MH, India",
  locationLink: "https://www.google.com/maps/place/pune",
  description:
    "I love creating software that goes beyond code, building tools that solve real-world challenges and improve day-to-day life.",
  summary:
    "My journey into tech began with a love for math and problem-solving, which led me from [robotics in college to research in AI](/#education) and eventually a career in [data engineering](/#work). I’ve co-authored a biomedical AI research chapter, published a patent on drone-based geospatial optimization, and [built scalable pipelines at Mediaocean using PySpark, Databricks, and Delta Lake](/#work). Today, I combine my expertise in data engineering with a passion for AI-driven solutions, focusing on building systems that solve real-world problems and deliver measurable impact.",
  avatarUrl: "/me.png",
  skills: [
    "PySpark",
    "SQL",
    "Delta Lake",
    "Kafka",
    "Airflow",
    "Azure/AWS",
    "Databricks",
    "Kubernetes",
    "Docker",
    "Python",
    "Java"
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "https://medium.com/@parth.shrivastava51", icon: Icons.medium, label: "Medium" },
  ],
  contact: {
    email: "parth.r.shrivastava@gmail.com",
    tel: "+919860468498",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/parth30034",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/parth-shrivastava51",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/parthshv",
        icon: Icons.x,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "parth.r.shrivastava@gmail.com",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Mediaocean Asia Pvt.Ltd",
      href: "https://www.mediaocean.com/",
      badges: [],
      location: "Remote",
      title: "Data Engineer",
      logoUrl: "/logo-blue.png",
      start: "July 2022",
      end: "July 2025",
      description:
        "At Mediaocean, I engineered data pipelines that kept millions of ad records flowing smoothly every single day. Working with PySpark, Databricks, Kafka, and Delta Lake, I designed both batch and real-time workflows that transformed raw ad logs into analytics-ready datasets.One highlight was implementing Change Data Capture (CDC) with Redshift, which made incremental data loads faster and more efficient. I also optimized data lakes with the Medallion Architecture, reducing query times and improving reliability for business-critical reporting",
    },
    {
      company: "Connection Loops",
      badges: [],
      href: "https://www.connectionloops.com/",
      location: "On-Site",
      title: "Software Engineer Intern",
      logoUrl: "/connection-loops-logo.png",
      start: "May 2021",
      end: "May 2022",
      description:
        "During my internship at Connection Loops, I got my first taste of research based application at the industry level. I built CNN + TCN deep learning model to predict arrhythmia,improved accuracy by training on synthetic data generated via guassian noise.It was here that I strengthened my foundations in Python, SQL, and cloud-based pipelines, and learned the importance of making data both accurate and accessible",
    }, 
  ],
  education: [
    {
      school: "Savitribai Phule Pune University",
      href: "https://www.unipune.ac.in/",
      degree: "Bachelor's Degree in Computer Science",
      logoUrl: "/sppu.png",
      start: "2018",
      end: "2022",
    },
  ],
  projects: [
    {
      title: "AI-Powered Job Aggregator & Resume Tailoring Platform",
      href: "https://github.com/parth30034/JobAggregator",
      dates: "Jan 2025 - Feb 2025",
      active: true,
      description:
        "Designed an AI-driven job platform that ingests and enriches 10K+ listings weekly, powers real-time analytics with Delta Lake, and tailors resumes using GPT-4 for smarter job discovery",
   technologies: [
  "PySpark",
  "Databricks",
  "Delta Lake",
  "AWS S3",
  "SerpAPI",
  "NLP",
  "GPT-4",
  "Tableau",
  "Sisense",
      ],
      links: [
       {
          type: "Source",
          href: "https://github.com/parth30034/JobAggregator",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Detection of Heart Abnormalities using ECG",
      href: "https://github.com/parth30034/Cardiac-Arrhythmia-ML",
      dates: "June 2021 - May 2022",
      active: true,
      description:
        "ECG Pre-processing and Denoising Feature Extraction of ECG Signals by Adaptive ThresholdBuilt a deep learning model utilizing Convolutional Neural Network and Temporal Convolutional Neural Network.Improved model accuracy for prediction of ventricular fibrillation (V-fib) by 8%",
    technologies: [
  "Python",
  "SQL",
  "Deep Learning",
  "ETL Workflows",
  "Data Cleansing",
  "Data Standardization",
  "Healthcare Datasets",
     "CNN",
    "TCN",
  ],
      links: [
        {
          type: "Source",
          href: "https://github.com/parth30034/Cardiac-Arrhythmia-ML",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
  ],
  // hackathons: [
  //   {
  //     title: "Hack Western 5",
  //     dates: "November 23rd - 25th, 2018",
  //     location: "London, Ontario",
  //     description:
  //       "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
  //     mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
  //     links: [],
  //   },
  //   {
  //     title: "Hack The North",
  //     dates: "September 14th - 16th, 2018",
  //     location: "Waterloo, Ontario",
  //     description:
  //       "Developed a mobile application which delivers university campus wide events in real time to all students.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
  //     mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
  //     links: [],
  //   },
  //   {
  //     title: "FirstNet Public Safety Hackathon",
  //     dates: "March 23rd - 24th, 2018",
  //     location: "San Francisco, California",
  //     description:
  //       "Developed a mobile application which communcicates a victims medical data from inside an ambulance to doctors at hospital.",
  //     icon: "public",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/firstnet.png",
  //     links: [],
  //   },
  //   {
  //     title: "DeveloperWeek Hackathon",
  //     dates: "February 3rd - 4th, 2018",
  //     location: "San Francisco, California",
  //     description:
  //       "Developed a web application which aggregates social media data regarding cryptocurrencies and predicts future prices.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/developer-week.jpg",
  //     links: [
  //       {
  //         title: "Github",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/cryptotrends/cryptotrends",
  //       },
  //     ],
  //   },
  //   {
  //     title: "Portal Hackathon",
  //     dates: "October 29, 2016",
  //     location: "Kingston, Ontario",
  //     description:
  //       "Developed an internal widget for uploading assignments using Waterloo's portal app",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/portal-hackathon.png",
  //     links: [
  //       {
  //         title: "Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/UWPortalSDK/crowmark",
  //       },
  //     ],
  //   },
  // ],
} as const;
