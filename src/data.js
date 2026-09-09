const assetPath = (path) => `${import.meta.env.BASE_URL}${path}`;

export const contact = {
  email: "vishwa.balasubramanian@outlook.com",
  location: "Erlangen Metropolitan Region, Germany",
  linkedin: "https://www.linkedin.com/in/vishwa-balasubramanian-857388200/",
  gitlab: "https://gitlab.rrze.fau.de/gi60wedo",
};

export const navItems = [
  { label: "Projects", id: "projects" },
  { label: "Experience", id: "experience" },
  { label: "Skills", id: "skills" },
  { label: "Background", id: "background" },
  { label: "Contact", id: "contact" },
];

export const metrics = [
  {
    value: "0.94",
    unit: "R²",
    label: "Hotspot temperature prediction",
  },
  {
    value: "40",
    unit: "%",
    label: "Less manual research review",
  },
  {
    value: "98.09",
    unit: "%",
    label: "Handwriting sequence accuracy",
  },
];

export const projects = [
  {
    number: "01",
    area: "Time-series forecasting",
    period: "Apr — Jun 2026",
    title: "Stratification for Reliable Forecast Evaluation",
    summary:
      "Addressed unreliable time-series evaluation caused by unbalanced cross-validation splits.",
    methods: [
      "Benchmarked 8 stratification strategies across 7 forecasting models, including LSTM, Informer, PatchTST, DLinear, and iTransformer.",
      "Built a model-independent framework to create more representative cross-validation folds.",
      "Analysed distribution similarity using Maximum Mean Discrepancy, feature z-difference, and fold variance.",
      "Improved evaluation stability and reduced metric variance across NN5, CIF 2016, and Kaggle time-series datasets.",
    ],
    result: "MAE 3.27 · RMSE 4.86 · sMAPE 19.71%",
    resultLabel: "Best NN5 LSTM result",
    tech: ["LSTM", "Informer", "PatchTST", "DLinear", "iTransformer"],
    image: assetPath("project-images/forecast-evaluation.jpg"),
    imageAlt: "Layered time-series signals divided into representative forecasting folds",
    accent: "cobalt",
    links: [
      {
        label: "Explore GitLab",
        href: "https://gitlab.rrze.fau.de/gi60wedo/strat_master_thesis",
        external: true,
      },
    ],
  },
  {
    number: "02",
    area: "Medical AI · Computer vision",
    period: "Oct 2025 — Mar 2026",
    title: "Robust SAM Segmentation with LoRA",
    summary:
      "Evaluated the Segment Anything Model across five medical imaging datasets using Python and PyTorch.",
    methods: [
      "Built an end-to-end pipeline for prompt perturbation, segmentation evaluation, and parameter-efficient fine-tuning.",
      "Fine-tuned SAM using LoRA, improving Dice from 0.69 to 0.75 and reducing Hausdorff Distance from 67.95 to 45.70 on CVC-ClinicDB.",
      "Achieved a Dice score of 0.88 on Kvasir-SEG with perturbed prompts up to ±30 pixels.",
    ],
    result: "0.75 CVC Dice · 0.88 Kvasir Dice · 45.70 HD",
    resultLabel: "Segmentation performance",
    tech: ["SAM", "LoRA / PEFT", "PyTorch", "Medical imaging"],
    image: assetPath("project-images/medical-segmentation.jpg"),
    imageAlt: "Medical scan with a mint segmentation mask and prompt markers",
    accent: "mint",
    links: [
      {
        label: "View report",
        href: "https://drive.google.com/file/d/1oewiFb_FnQ1DgWSKvJQ1AodvOYkCLzSg/view?usp=sharing",
        external: true,
      },
    ],
  },
  {
    number: "03",
    area: "Sequence modelling",
    period: "Nov 2025 — Feb 2026",
    title: "Writer Identification with Neural ODEs",
    summary:
      "Developed a sequence-learning pipeline to identify writers from variable-length handwriting trajectories.",
    methods: [
      "Designed preprocessing with normalization, downsampling, padding, and sequence-aware batching.",
      "Benchmarked BiLSTM and ODE-RNN models using 5-fold cross-validation.",
      "Achieved 98.09% accuracy on equations and 98.01% on words with BiLSTM, outperforming Neural ODE variants.",
    ],
    result: "98.09% equations · 98.01% words",
    resultLabel: "BiLSTM accuracy",
    tech: ["BiLSTM", "Neural ODE", "ODE-RNN", "RK4"],
    image: assetPath("project-images/handwriting-neural-ode.jpg"),
    imageAlt: "Handwriting trajectory flowing through a neural dynamics field",
    accent: "violet",
    links: [
      {
        label: "Explore GitLab",
        href: "https://gitlab.rrze.fau.de/gi60wedo/lstm_ode_handwriting",
        external: true,
      },
      {
        label: "View report",
        href: "https://drive.google.com/file/d/14t8oY3PTzOfegwavElHsDPpI2OTVd54q/view?usp=sharing",
        external: true,
      },
    ],
  },
  {
    number: "04",
    area: "Federated learning · Video AI",
    period: "May — Aug 2025",
    title: "Privacy-Aware Video Anomaly Detection",
    summary:
      "Built a privacy-aware federated learning pipeline for video anomaly detection on UCF-Crime.",
    methods: [
      "Extracted frozen CLIP ViT-B/16 features and distributed training across three heterogeneous clients.",
      "Implemented AsyncFed and proposed HybridFed, combining asynchronous updates with periodic FedAvg.",
      "Improved AP from 0.1901 to 0.2110 and ROC from 0.8039 to 0.8152; prompt ablation achieved a ROC of 0.8209.",
    ],
    result: "AP 0.2110 · ROC 0.8152 · Ablation ROC 0.8209",
    resultLabel: "HybridFed improvement",
    tech: ["CLIP", "AsyncFed", "FedAvg", "UCF-Crime"],
    image: assetPath("project-images/federated-video-ai.jpg"),
    imageAlt: "Distributed video-analysis clients securely connected to a shared model",
    accent: "amber",
    links: [
      {
        label: "Explore GitLab",
        href: "https://gitlab.rrze.fau.de/gi60wedo/anomaly_detection",
        external: true,
      },
      {
        label: "View report",
        href: "https://drive.google.com/file/d/1jiA_P81BTFvqBeAbrB5rz9ABpPL0Ghfm/view",
        external: true,
      },
    ],
  },
];

export const experience = [
  {
    period: "Apr — Jun 2026",
    role: "Talent Program Intern",
    company: "ZOLLHOF",
    location: "Nuremberg, Germany",
    certificate: "https://drive.google.com/file/d/1MdfnSPpr-gbwZFPuyBQ_lgOmrUUgoBfV/view?usp=sharing",
    bullets: [
      "Selected as one of the top 6 talents from more than 200 applicants for the program.",
      "Built an NLP system to consolidate research data, reducing manual review time by 40%.",
      "Designed a make / buy / partner decision framework for R&D investments using Technology Readiness Levels.",
      "Delivered the system end-to-end—from stakeholder requirements to production deployment—and presented it to research teams and decision-makers.",
    ],
    tech: ["NLP", "Research automation", "TRL framework", "Deployment"],
  },
  {
    period: "Feb — Mar 2026",
    role: "Working Student · Data Scientist",
    company: "Hermiad GmbH",
    location: "Berlin, Germany",
    certificate: "https://drive.google.com/file/d/1_kbz0-5KDyjQctQzW2NFjD5NC7V_4ml9/view?usp=sharing",
    bullets: [
      "Built a multilingual AI FAQ assistant for reliable access to medical information.",
      "Improved response reliability and reduced medical misinformation through exact-answer routing.",
      "Automated an end-to-end Notion-to-chatbot data pipeline, reducing manual preparation.",
      "Developed multimodal response workflows supporting text, images, and video.",
    ],
    tech: ["AI assistant", "Exact-answer routing", "Notion", "Multimodal AI"],
  },
  {
    period: "Feb — Aug 2025",
    role: "Working Student · Artificial Intelligence",
    company: "Siemens Mobility GmbH",
    location: "Erlangen, Germany",
    certificate: "https://drive.google.com/file/d/1xdr1Dk4Ab3X-C_HlFRef4w0ExGXWxbSC/view?usp=sharing",
    bullets: [
      "Built an end-to-end multivariate time-series pipeline to predict magnet hotspot temperatures from sensor data.",
      "Engineered temporally synchronized features from current, voltage, speed, and velocity signals.",
      "Applied symbolic regression to produce explainable equations for temperature prediction and equipment monitoring.",
      "Validated predictions against laboratory measurements, achieving an R² of 0.94 and an MAE of 2.1°C.",
    ],
    tech: ["Time series", "Symbolic regression", "Sensor data", "Feature engineering"],
  },
  {
    period: "May 2022 — May 2024",
    role: "Research Assistant · Data Science",
    company: "Bannari Amman Institute of Technology",
    location: "Erode, India",
    certificate: "https://drive.google.com/file/d/1DGZjdRjmE_QI_fdGqxPEQ88WZ39yQoXc/view?usp=sharing",
    bullets: [
      "Applied CNN and ResNet architectures for automated crack detection.",
      "Developed and compared Logistic Regression, Random Forest, SVM, and XGBoost models for cardiovascular disease prediction.",
      "Evaluated anomaly-detection methods, including Isolation Forest, One-Class SVM, and autoencoders.",
      "Documented experimental findings using classification and detection metrics, visualisations, and research presentations.",
      "Supported machine-learning courses by preparing lecture materials, practical examples, and assignments.",
    ],
    tech: ["CNN / ResNet", "XGBoost", "Anomaly detection", "Research"],
  },
];

export const skillGroups = [
  {
    title: "Programming & data",
    icon: "code",
    lead: "Building clean, reproducible data workflows.",
    items: ["Python", "SQL", "Pandas", "NumPy", "PostgreSQL"],
  },
  {
    title: "Machine learning",
    icon: "brain",
    lead: "From baselines to carefully validated predictive systems.",
    items: [
      "scikit-learn",
      "XGBoost",
      "Anomaly detection",
      "Feature engineering",
      "Hyperparameter tuning",
      "Cross-validation",
    ],
  },
  {
    title: "Deep learning",
    icon: "network",
    lead: "Learning representations across images and sequences.",
    items: ["PyTorch", "TensorFlow / Keras", "CNNs", "Transformers", "LSTM / BiLSTM", "Autoencoders", "Neural ODEs"],
  },
  {
    title: "Computer vision & medical AI",
    icon: "vision",
    lead: "Robust visual systems for high-stakes domains.",
    items: ["SAM", "CLIP", "LoRA / PEFT", "Medical segmentation", "Video anomaly detection", "Multimodal learning"],
  },
  {
    title: "Time series & federated AI",
    icon: "chart",
    lead: "Modelling temporal signals without ignoring deployment constraints.",
    items: ["Forecasting", "Sequence modelling", "Multivariate time series", "FedAvg", "AsyncFed", "Distributed training"],
  },
  {
    title: "Engineering & compute",
    icon: "compute",
    lead: "Practical tooling for experiments and delivery.",
    items: ["Git", "GitHub / GitLab", "Docker", "Slurm / HPC", "Matplotlib", "Seaborn", "Plotly"],
  },
];

export const education = [
  {
    period: "Oct 2024 — Present",
    degree: "M.Sc. Data Science",
    school: "Friedrich-Alexander-Universität Erlangen–Nürnberg",
    location: "Erlangen, Germany",
    details: "Machine Learning · Deep Learning · Artificial Intelligence",
    grade: "Grade 2.4",
  },
  {
    period: "Nov 2020 — May 2024",
    degree: "B.E. Computer Science and Engineering",
    school: "Anna University",
    location: "Chennai, India",
    details: "First Class with Distinction",
    grade: "German-equivalent grade 2.0",
  },
];

export const publication = {
  date: "20 Nov 2023",
  journal: "IJARIIE",
  title: "Diagnosing Cardiovascular Diseases Using a Classification Algorithm",
  description:
    "A study of support vector machine classification for cardiovascular disease prediction.",
};

export const languages = [
  { name: "English", level: "CEFR C1", fill: "92%" },
  { name: "German", level: "Goethe-Institut B1", fill: "58%" },
];
