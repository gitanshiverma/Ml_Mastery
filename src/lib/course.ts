export const PLAYLIST_ID = "PLKnIA16_Rmvbr7zKYQuBfsVkjoLcJgxHH";

export type Lesson = {
  id: string;
  index: number; // position in the YouTube playlist (1-based)
  videoId: string;
  title: string;
  summary: string;
  minutes: number;
  module: string;
  notes: string[];
};

type RawLesson = {
  title: string;
  summary: string;
  minutes: number;
  videoId: string;
  notes: string[];
};

const MODULES: { name: string; lessons: RawLesson[] }[] = [
  {
    "name": "Foundations & ML Basics",
    "lessons": [
      {
        "title": "What is Machine Learning?",
        "summary": "An intuitive introduction to Machine Learning, understanding how systems learn from data without explicit programming, and core real-world applications.",
        "minutes": 20,
        "videoId": "ZftI2fEz0Fw",
        "notes": [
          "Machine learning enables programs to learn patterns from experience (E) with respect to tasks (T) and performance measure (P).",
          "Traditional programming: Rules + Data → Answers.",
          "Machine learning: Data + Answers → Rules (Learned Model).",
          "Key applications: Spam filters, medical diagnosis, computer vision, speech recognition, recommendation systems."
        ]
      },
      {
        "title": "AI Vs ML Vs DL for Beginners in Hindi",
        "summary": "Comprehensive comparison between Artificial Intelligence (AI), Machine Learning (ML), and Deep Learning (DL) with practical mental models.",
        "minutes": 16,
        "videoId": "1v3_AQ26jZ0",
        "notes": [
          "Artificial Intelligence (AI): The broad umbrella of creating smart machines capable of performing tasks that require human intelligence.",
          "Machine Learning (ML): A subset of AI providing machines the ability to learn from data without explicit programming.",
          "Deep Learning (DL): A specialized subset of ML based on multi-layered Artificial Neural Networks (ANNs) inspired by human biology.",
          "Data Science: An interdisciplinary field combining ML, statistics, data analytics, and domain expertise."
        ]
      },
      {
        "title": "Types of Machine Learning for Beginners | Types of Machine learning in Hindi | Types of ML in Depth",
        "summary": "In-depth taxonomy of Machine Learning: Supervised, Unsupervised, Semi-Supervised, and Reinforcement Learning paradigms.",
        "minutes": 28,
        "videoId": "81ymPYEtFOw",
        "notes": [
          "Supervised Learning: Algorithms trained on labeled data (Regression for continuous values, Classification for discrete categories).",
          "Unsupervised Learning: Finding hidden patterns or intrinsic structures in unlabeled data (Clustering, Dimensionality Reduction, Association Rule Mining).",
          "Semi-Supervised Learning: Combining small amounts of labeled data with large amounts of unlabeled data.",
          "Reinforcement Learning: Agents interacting with an environment, learning optimal policies via rewards and penalties."
        ]
      },
      {
        "title": "Batch Machine Learning | Offline Vs Online Learning | Machine Learning Types",
        "summary": "Understanding Batch (Offline) Machine Learning systems, data throughput, model retraining lifecycles, and scalability tradeoffs.",
        "minutes": 11,
        "videoId": "nPrhFxEuTYU",
        "notes": [
          "Batch (Offline) Learning: The model is trained on all available data at once offline, and deployed statically.",
          "Characteristics: Requires high compute/memory for training, slow retraining cycles, and cannot adapt to streaming data on the fly.",
          "Model drift: Models degrade over time as real-world data distributions change."
        ]
      },
      {
        "title": "Online Machine Learning | Online Learning | Online Vs Offline Machine Learning",
        "summary": "Online (Incremental) Machine Learning systems, real-time model updating, learning rates, concept drift, and catastrophic forgetting.",
        "minutes": 19,
        "videoId": "3oOipgCbLIk",
        "notes": [
          "Online Learning: The model ingests data sequentially, either individually or in small batches (mini-batches), updating its parameters in real-time.",
          "Ideal for streaming data, resource-constrained devices, and dynamic systems (e.g. stock prices, real-time fraud).",
          "Learning Rate: Determines how quickly the model adapts to new data vs retaining past knowledge.",
          "Challenge: Susceptible to bad data or anomalies throwing off the model quickly."
        ]
      },
      {
        "title": "Instance-Based Vs Model-Based Learning | Types of Machine Learning",
        "summary": "Instance-Based learning vs. Model-Based learning approaches, similarity metrics, memorization vs. generalization.",
        "minutes": 17,
        "videoId": "ntAOq1ioTKo",
        "notes": [
          "Instance-Based Learning: The system memorizes training instances and generalizes to new cases using similarity measures (e.g., KNN).",
          "Model-Based Learning: The system builds an explicit mathematical model from training examples and uses the parameterized model for inference (e.g., Linear/Logistic Regression, Neural Networks).",
          "Tradeoff: Instance-based has zero training time but high inference cost; model-based has high training time but ultra-fast inference."
        ]
      },
      {
        "title": "Challenges in Machine Learning | Problems in Machine Learning",
        "summary": "Key challenges and failure modes in Machine Learning: insufficient training data, poor data quality, irrelevant features, overfitting, and underfitting.",
        "minutes": 24,
        "videoId": "WGUNAJki2S4",
        "notes": [
          "Insufficient quantity of training data leads to poor generalization.",
          "Non-representative training data leads to sampling noise and sampling bias.",
          "Poor data quality: Outliers, noise, and missing values distort model learning.",
          "Irrelevant features: Garbage in, garbage out — feature selection and feature engineering are critical.",
          "Overfitting and Underfitting: Balancing model capacity against data complexity."
        ]
      },
      {
        "title": "Application of Machine Learning | Real Life Machine Learning Applications",
        "summary": "Practical applications and business impact of Machine Learning across computer vision, NLP, recommendation engines, and predictive analytics.",
        "minutes": 29,
        "videoId": "UZio8TcTMrI",
        "notes": [
          "Natural Language Processing (NLP): Machine translation, sentiment analysis, chatbots, and text summarization.",
          "Computer Vision (CV): Object detection, facial recognition, autonomous driving, and medical image segmentation.",
          "Tabular Predictive Systems: Credit scoring, churn prediction, inventory forecasting, fraud detection.",
          "Recommendation Engines: Collaborative and content-based filtering (Netflix, Spotify, Amazon)."
        ]
      },
      {
        "title": "Machine Learning Development Life Cycle | MLDLC in Data Science",
        "summary": "The complete 7-stage Machine Learning Development Life Cycle (MLDLC): from problem framing to data pipeline, modeling, deployment, and monitoring.",
        "minutes": 25,
        "videoId": "iDbhQGz_rEo",
        "notes": [
          "Phase 1: Problem Framing & Requirement Gathering.",
          "Phase 2: Data Gathering & Ingestion (Databases, APIs, Web Scraping, Logs).",
          "Phase 3: Data Preprocessing, Cleaning & Exploratory Data Analysis (EDA).",
          "Phase 4: Feature Engineering & Feature Selection.",
          "Phase 5: Model Training, Evaluation & Hyperparameter Tuning.",
          "Phase 6: Deployment & Serving (REST API, Batch, Edge).",
          "Phase 7: Monitoring, Logging & Retraining Pipelines."
        ]
      },
      {
        "title": "Data Engineer Vs Data Analyst Vs Data Scientist Vs ML Engineer | Data Science Job Roles",
        "summary": "Clarifying roles and responsibilities across Data Engineering, Data Analysis, Data Science, and Machine Learning Engineering.",
        "minutes": 26,
        "videoId": "93rKZs0MkgU",
        "notes": [
          "Data Engineer: Builds and maintains data infrastructure, ETL pipelines, distributed warehouses (Spark, Airflow, SQL, Kafka).",
          "Data Analyst: Translates historical data into business insights, dashboards, and KPI metrics (SQL, Tableau, PowerBI, Excel).",
          "Data Scientist: Formulates statistical hypotheses, runs experiments, builds predictive ML models (Python, R, Scikit-Learn, Statistics).",
          "Machine Learning Engineer (MLE): Bridges ML models with production software engineering, scaling, CI/CD, and MLOps."
        ]
      },
      {
        "title": "What are Tensors | Tensor In-depth Explanation | Tensor in Machine Learning",
        "summary": "Complete understanding of Tensors: 0D scalars, 1D vectors, 2D matrices, 3D/nD tensors, shapes, ranks, and array representations.",
        "minutes": 41,
        "videoId": "vVhD2EyS41Y",
        "notes": [
          "0D Tensor: Scalar (a single number, rank 0).",
          "1D Tensor: Vector (an array of numbers, rank 1, representing a sample with features).",
          "2D Tensor: Matrix (a table of data, rows = samples, columns = features).",
          "3D Tensor: Vector of matrices (e.g., time-series data or grayscale images).",
          "4D Tensor: Batch of RGB color images (samples, height, width, channels).",
          "5D Tensor: Batch of videos (samples, frames, height, width, channels)."
        ]
      },
      {
        "title": "Installing Anaconda For Data Science | Jupyter Notebook for Machine Learning | Google Colab for ML",
        "summary": "Setting up a professional data science workspace with Anaconda, Jupyter Notebook environments, and Google Colab GPUs.",
        "minutes": 37,
        "videoId": "82P5N2m41jE",
        "notes": [
          "Anaconda distribution includes Python, Conda package manager, and standard data science packages (NumPy, Pandas, Matplotlib, Scikit-Learn).",
          "Jupyter Notebook: Interactive REPL for step-by-step experimentation and rich data visualizations.",
          "Google Colab: Free cloud Jupyter environment with access to NVIDIA GPUs and TPUs.",
          "Virtual environments: Isolating project dependencies to avoid library version conflicts."
        ]
      },
      {
        "title": "End to End Toy Project | Day 13",
        "summary": "Building an end-to-end toy Machine Learning web application from dataset to scikit-learn model, serialization with pickle, and Streamlit deployment.",
        "minutes": 31,
        "videoId": "dr7z7a_8lQw",
        "notes": [
          "Project Workflow: Dataset Ingestion → EDA → Model Training → Pickle serialization → UI Application.",
          "Serializing trained models and encoders using pickle / joblib for production persistence.",
          "Building a clean interactive web UI with Streamlit or Flask.",
          "Deploying the interactive application on cloud hosting platforms."
        ]
      },
      {
        "title": "How to Frame a Machine Learning Problem | How to plan a Data Science Project Effectively",
        "summary": "How to frame business problems into well-defined Machine Learning objectives, defining target metrics and performance baselines.",
        "minutes": 22,
        "videoId": "A9SezQlvakw",
        "notes": [
          "Translate business metrics into measurable machine learning optimization targets.",
          "Identify the learning paradigm: Supervised vs Unsupervised, Regression vs Classification vs Ranking.",
          "Define baseline performance using simple heuristics before building complex models.",
          "Determine latency requirements: Real-time inference (sub-100ms) vs Batch scoring."
        ]
      }
    ]
  },
  {
    "name": "Data Gathering & EDA",
    "lessons": [
      {
        "title": "Working with CSV files | Day 15",
        "summary": "Efficiently loading and manipulating CSV files with Pandas: handling encodings, parsing dates, chunking large datasets, and error bad lines.",
        "minutes": 37,
        "videoId": "a_XrmKlaGTs",
        "notes": [
          "pd.read_csv() parameters: sep, header, names, index_col, usecols, dtype.",
          "Handling encoding issues with encoding='latin-1' or 'utf-8'.",
          "Parsing date columns on ingestion using parse_dates parameter.",
          "Handling corrupted rows using on_bad_lines='skip' or custom parsers.",
          "Processing large files exceeding RAM with chunksize iterator."
        ]
      },
      {
        "title": "Working with JSON/SQL | Day 16",
        "summary": "Querying relational SQL databases using Python and SQLAlchemy, and parsing nested JSON structures into clean Pandas DataFrames.",
        "minutes": 17,
        "videoId": "fFwRC-fapIU",
        "notes": [
          "Querying SQL databases directly using pd.read_sql_query(query, connection).",
          "Using SQLAlchemy engines to connect to PostgreSQL, MySQL, and SQLite.",
          "Parsing nested JSON records using pd.read_json() and pd.json_normalize().",
          "Exporting transformed DataFrames back to SQL tables using df.to_sql()."
        ]
      },
      {
        "title": "Fetching Data From an API | Day 17",
        "summary": "Connecting to REST APIs, handling pagination and authorization headers, and converting real-time JSON responses to DataFrames.",
        "minutes": 23,
        "videoId": "roTZJaxjnJc",
        "notes": [
          "Using requests.get(url, headers=headers, params=params) to fetch live data.",
          "Handling authentication API keys and OAuth tokens.",
          "Managing API pagination using loops and response status codes.",
          "Converting JSON response payloads into tabular Pandas DataFrames."
        ]
      },
      {
        "title": "Fetching data using Web Scraping | Day 18",
        "summary": "Web scraping fundamentals using BeautifulSoup and requests to extract tabular datasets from dynamic web pages.",
        "minutes": 38,
        "videoId": "8NOdgjC1988",
        "notes": [
          "HTML Document Object Model (DOM) structure: tags, attributes, classes, and IDs.",
          "Parsing HTML trees using BeautifulSoup: soup.find() and soup.find_all().",
          "Handling User-Agent headers to avoid request throttling.",
          "Constructing structured tabular datasets from scraped web page elements."
        ]
      },
      {
        "title": "Understanding Your Data | Day 19",
        "summary": "Exploratory data analysis foundations: inspecting shapes, data types, missing values, duplicated entries, and descriptive statistics with describe().",
        "minutes": 15,
        "videoId": "mJlRTUuVr04",
        "notes": [
          "Inspecting dataset metadata: df.shape, df.columns, df.info(), df.dtypes.",
          "Descriptive statistics for numeric features: mean, median, standard deviation, min, max, quartiles.",
          "Categorical summary: df.describe(include='object'), unique counts, and value_counts().",
          "Checking for missing values (df.isnull().sum()) and duplicate rows (df.duplicated().sum())."
        ]
      },
      {
        "title": "EDA using Univariate Analysis | Day 20",
        "summary": "Univariate Analysis: visualizing individual categorical and numerical features using histograms, KDE plots, bar charts, and frequency distributions.",
        "minutes": 31,
        "videoId": "4HyTlbHUKSw",
        "notes": [
          "Numerical univariate analysis: Histogram (sns.histplot), Kernel Density Estimate (sns.kdeplot), Boxplot (sns.boxplot).",
          "Skewness: Positive (right-tailed) vs Negative (left-tailed) vs Normal distributions.",
          "Categorical univariate analysis: Frequency tables, Bar plots (sns.countplot), Pie charts.",
          "Identifying anomalies, zero-variance features, and dominant categories."
        ]
      },
      {
        "title": "EDA using Bivariate and Multivariate Analysis | Day 21",
        "summary": "Bivariate and Multivariate Analysis: uncovering relationships using scatter plots, pair plots, heatmap correlation matrices, and box plots.",
        "minutes": 38,
        "videoId": "6D3VtEfCw7w",
        "notes": [
          "Numerical vs Numerical: Scatter plots (sns.scatterplot), correlation matrices (sns.heatmap), pair plots (sns.pairplot).",
          "Categorical vs Numerical: Box plots (sns.boxplot), Violin plots, Bar plots comparing means.",
          "Categorical vs Categorical: Contingency cross-tabulation (pd.crosstab), stacked bar charts, and Heatmaps.",
          "Multivariate visualizations using hue, size, and style dimensions in Seaborn."
        ]
      },
      {
        "title": "Pandas Profiling | Day 22",
        "summary": "Generating automated, production-ready interactive EDA profiling reports using the pandas-profiling library.",
        "minutes": 13,
        "videoId": "E69Lg2ZgOxg",
        "notes": [
          "Automated EDA with ydata-profiling (formerly pandas-profiling).",
          "One-line generation of comprehensive reports: ProfileReport(df, title='EDA Report').",
          "Automated alerts for high cardinality, multicollinearity, skewness, missing data, and constant columns.",
          "Exporting interactive HTML reports for stakeholder sharing."
        ]
      }
    ]
  },
  {
    "name": "Feature Engineering & Preprocessing",
    "lessons": [
      {
        "title": "What is Feature Engineering | Day 23",
        "summary": "The art of Feature Engineering: transforming raw domain data into informative features that boost algorithm accuracy.",
        "minutes": 25,
        "videoId": "sluoVhT0ehg",
        "notes": [
          "Feature Engineering is the process of using domain knowledge to extract features from raw data via data mining techniques.",
          "Core branches: Feature Transformation (scaling, encoding), Feature Construction, Feature Extraction (PCA), Feature Selection.",
          "The performance of ML algorithms often depends more on feature quality than algorithm choice."
        ]
      },
      {
        "title": "Feature Scaling - Standardization | Day 24",
        "summary": "Feature Scaling with Standardization (Z-score scaling): centering mean at 0 and variance at 1, and when gradient-based models require it.",
        "minutes": 33,
        "videoId": "1Yw9sC0PNwY",
        "notes": [
          "Standardization formula: z = (x - μ) / σ (Mean = 0, Standard Deviation = 1).",
          "Why it matters: Gradient Descent converges faster, distance metrics (KNN, SVM, K-Means) treat all features equally.",
          "When to use: Linear models, Logistic Regression, SVM, KNN, Neural Networks, PCA.",
          "Tree-based algorithms (Decision Trees, Random Forest, XGBoost) are invariant to feature scaling.",
          "Always fit StandardScaler on the training set only to prevent data leakage: scaler.fit_transform(X_train), scaler.transform(X_test)."
        ]
      },
      {
        "title": "Feature Scaling - Normalization | MinMaxScaling | MaxAbsScaling | RobustScaling",
        "summary": "Feature Normalization techniques: MinMaxScaler (0 to 1), MaxAbsScaler, and RobustScaler for outlier-resilient feature scaling.",
        "minutes": 24,
        "videoId": "eBrGyuA2MIg",
        "notes": [
          "Min-Max Normalization: x' = (x - x_min) / (x_max - x_min), scaling data to [0, 1].",
          "MaxAbsScaler: Scales each feature by its maximum absolute value to [-1, 1], preserving sparsity.",
          "RobustScaler: Uses median and Interquartile Range (IQR): x' = (x - Q2) / (Q3 - Q1), resilient to extreme outliers."
        ]
      },
      {
        "title": "Encoding Categorical Data | Ordinal Encoding | Label Encoding",
        "summary": "Encoding Categorical Features: OrdinalEncoding for ordered categories and LabelEncoding for target variables.",
        "minutes": 20,
        "videoId": "w2GglmYHfmM",
        "notes": [
          "Ordinal Categorical Data: Categories with inherent order (e.g. Education: High School < Bachelor < Master < PhD).",
          "OrdinalEncoder: Maps ordered categories to ordered integer ranks.",
          "LabelEncoder: Designed specifically for the target variable (y), not input features (X).",
          "Assigning custom ranking dictionaries for precise domain ordering."
        ]
      },
      {
        "title": "One Hot Encoding | Handling Categorical Data | Day 27",
        "summary": "One-Hot Encoding nominal categorical variables, preventing dummy variable trap (multicollinearity), and using OneHotEncoder with handle_unknown.",
        "minutes": 30,
        "videoId": "U5oCv3JKWKA",
        "notes": [
          "One-Hot Encoding: Creates binary columns (0 or 1) for each category in nominal variables.",
          "Dummy Variable Trap: Multicollinearity caused when one binary column can be perfectly predicted from the others.",
          "Solution: Drop the first column using drop='first' in OneHotEncoder.",
          "Handling unseen categories in test data using handle_unknown='ignore'."
        ]
      },
      {
        "title": "Column Transformer in Machine Learning | How to use ColumnTransformer in Sklearn",
        "summary": "Transforming mixed tabular columns simultaneously using Scikit-Learn's ColumnTransformer for clean preprocessing pipelines.",
        "minutes": 16,
        "videoId": "5TVj6iEBR4I",
        "notes": [
          "ColumnTransformer allows applying different transformers to different subsets of columns in a single step.",
          "Syntax: ColumnTransformer(transformers=[('num', StandardScaler(), num_cols), ('cat', OneHotEncoder(), cat_cols)], remainder='passthrough').",
          "Ensures zero data leakage and keeps preprocessing clean and maintainable."
        ]
      },
      {
        "title": "Machine Learning Pipelines A-Z | Day 29",
        "summary": "Building end-to-end, leak-free Scikit-Learn Pipelines chaining transformers, scalers, encoders, and estimators together.",
        "minutes": 46,
        "videoId": "xOccYkgRV4Q",
        "notes": [
          "Scikit-Learn Pipeline chains preprocessing steps and the final estimator into a single unified object.",
          "Syntax: Pipeline(steps=[('preprocessor', col_transformer), ('model', RandomForestClassifier())]).",
          "Benefits: Prevents data leakage during cross-validation, simplifies model serialization, and enables grid search across the entire pipeline."
        ]
      },
      {
        "title": "Function Transformer | Log Transform | Reciprocal Transform | Square Root Transform",
        "summary": "Applying mathematical transformations using FunctionTransformer: Log transform, Reciprocal transform, and Square Root transforms for skewness.",
        "minutes": 32,
        "videoId": "cTjj3LE8E90",
        "notes": [
          "FunctionTransformer applies arbitrary custom mathematical transformations to features.",
          "Log Transform: np.log1p(x) converts heavily right-skewed positive features into normal-like bell curves.",
          "Reciprocal Transform: 1 / x for inverse proportional relationships.",
          "Square Root Transform: np.sqrt(x) for moderately skewed count data."
        ]
      },
      {
        "title": "Power Transformer | Box - Cox Transform | Yeo - Johnson Transform",
        "summary": "Power Transformers: Box-Cox and Yeo-Johnson transformations to stabilize variance and normalize skewed distributions.",
        "minutes": 21,
        "videoId": "lV_Z4HbNAx0",
        "notes": [
          "Power Transformers map non-Gaussian data to Gaussian distributions using parameterized power functions.",
          "Box-Cox Transform: Applicable only to strictly positive data (x > 0); optimizes parameter λ via maximum likelihood.",
          "Yeo-Johnson Transform: Generalization of Box-Cox that supports zero and negative values.",
          "Implementation: PowerTransformer(method='yeo-johnson')."
        ]
      },
      {
        "title": "Binning and Binarization | Discretization | Quantile Binning | KMeans Binning",
        "summary": "Feature Discretization: Binning continuous data into discrete intervals using uniform, quantile, and K-Means binning.",
        "minutes": 38,
        "videoId": "kKWsJGKcMvo",
        "notes": [
          "Binning (Discretization) converts continuous numerical variables into discrete intervals/buckets.",
          "Uniform Binning: Splits range into equal-width bins (KBinsDiscretizer(strategy='uniform')).",
          "Quantile Binning: Splits data so each bin contains equal number of observations (strategy='quantile').",
          "K-Means Binning: Uses 1D K-Means cluster centroids as bin boundaries (strategy='kmeans').",
          "Binarization: Transforms numerical values into binary 0 or 1 based on a threshold (Binarizer(threshold=k))."
        ]
      },
      {
        "title": "Handling Mixed Variables | Feature Engineering",
        "summary": "Strategies for engineering features from mixed variables containing both numerical values and string/categorical tags.",
        "minutes": 12,
        "videoId": "9xiX-I5_LQY",
        "notes": [
          "Mixed variables contain both numbers and strings (e.g., Ticket numbers 'CA2144', Cabin numbers 'C85', Seat '12B').",
          "Strategy 1: Split into two separate features (e.g., Letter prefix feature + Numerical integer feature).",
          "Strategy 2: Extract boolean flags (e.g., has_number, is_alphanumeric).",
          "Using regex and string manipulation in Pandas for feature extraction."
        ]
      },
      {
        "title": "Handling Date and Time Variables | Day 34",
        "summary": "Extracting temporal features from Date and Time fields: timestamps, day of week, cyclical sine/cosine encodings, and duration deltas.",
        "minutes": 14,
        "videoId": "J73mvgG9fFs",
        "notes": [
          "Extracting calendar components: Year, Month, Day, Day of Week, Quarter, Is_Weekend, Is_Month_End.",
          "Extracting time components: Hour, Minute, Second, Time of Day (Morning, Afternoon, Evening, Night).",
          "Elapsed time calculations: Difference between two dates (e.g., Account_Age = Current_Date - Signup_Date).",
          "Cyclical feature encoding: Encoding periodic features (Hour 0-23, Month 1-12) using sin and cos transformations: sin(2π * x / max_val)."
        ]
      }
    ]
  },
  {
    "name": "Missing Data & Outlier Handling",
    "lessons": [
      {
        "title": "Handling Missing Data | Part 1 | Complete Case Analysis",
        "summary": "Handling missing values using Complete Case Analysis (CCA): assumptions, deletion thresholds, and impact on sample distributions.",
        "minutes": 25,
        "videoId": "aUnNWZorGmk",
        "notes": [
          "Complete Case Analysis (CCA) discards all rows containing one or more missing values.",
          "Assumption: Data must be Missing Completely at Random (MCAR).",
          "Rule of thumb: Acceptable only if missing data represents less than 5% of total dataset rows.",
          "Drawbacks: Loss of sample size, potential sample bias if data is Missing Not at Random (MNAR)."
        ]
      },
      {
        "title": "Handling missing data | Numerical Data | Simple Imputer",
        "summary": "Imputing missing numerical values using Mean, Median, and Arbitrary value strategies with Scikit-Learn SimpleImputer.",
        "minutes": 31,
        "videoId": "mCL2xLBDw8M",
        "notes": [
          "Mean Imputation: Replaces missing values with feature mean; best for normally distributed features.",
          "Median Imputation: Replaces missing values with feature median; robust against outliers and skewed features.",
          "Arbitrary Value Imputation: Imputes with an out-of-distribution constant (e.g. -999, 9999).",
          "Implementation: SimpleImputer(strategy='median').",
          "Note: Imputation alters feature variance and covariance with other features."
        ]
      },
      {
        "title": "Handling Missing Categorical Data | Simple Imputer | Most Frequent Imputation | Missing Category Imp",
        "summary": "Handling missing categorical features: Mode (Most Frequent) imputation and adding a dedicated 'Missing' category flag.",
        "minutes": 14,
        "videoId": "l_Wip8bEDFQ",
        "notes": [
          "Frequent Category (Mode) Imputation: Replaces NaN with the most common categorical class.",
          "Missing Category Imputation: Treats 'Missing' / 'Unknown' as a distinct, informative new category.",
          "Recommended when missingness is substantial (>10%) or carries domain meaning."
        ]
      },
      {
        "title": "Missing Indicator | Random Sample Imputation | Handling Missing Data Part 4",
        "summary": "Missing Indicator features and Random Sample Imputation preserving the original variable variance.",
        "minutes": 37,
        "videoId": "Ratcir3p03w",
        "notes": [
          "Missing Indicator: Adds a companion binary feature (0 or 1) indicating whether the original value was missing.",
          "Enables the model to learn if missingness itself is predictive of the target (MissingIndicator).",
          "Random Sample Imputation: Replaces missing values with randomly sampled observations from the same feature, preserving the original variance and distribution."
        ]
      },
      {
        "title": "KNN Imputer | Multivariate Imputation | Handling Missing Data Part 5",
        "summary": "Multivariate missing data imputation using K-Nearest Neighbors (KNNImputer) based on Euclidean feature distances.",
        "minutes": 24,
        "videoId": "-fK-xEev2I8",
        "notes": [
          "KNNImputer replaces missing values using the mean of the K-nearest neighbors found in the dataset.",
          "Distance metric: Nan-Euclidean distance that computes Euclidean distance ignoring missing coordinates.",
          "Advantage: Multivariate method that preserves relationships between features.",
          "Tradeoff: Computationally expensive on large datasets (O(n²) distance matrix)."
        ]
      },
      {
        "title": "Multivariate Imputation by Chained Equations for Missing Value | MICE Algorithm | Iterative Imputer",
        "summary": "Iterative Imputer (MICE algorithm): Multivariate Imputation by Chained Equations modeling each feature with missing values as a function of others.",
        "minutes": 19,
        "videoId": "a38ehxv3kyk",
        "notes": [
          "Multivariate Imputation by Chained Equations (MICE / IterativeImputer):",
          "Treats each feature with missing values as a dependent target variable predicted by all other features.",
          "Iteratively trains regression models (e.g. BayesianRidge, RandomForest) across multiple imputation rounds until convergence.",
          "State-of-the-art technique for preserving complex multivariate distributions."
        ]
      },
      {
        "title": "What are Outliers | Outliers in Machine Learning",
        "summary": "Understanding outliers: causes, nature of extreme values, and their destructive influence on regression lines and distance-based models.",
        "minutes": 17,
        "videoId": "Lln1PKgGr_M",
        "notes": [
          "Outliers are observations that deviate drastically from the overall pattern of the data.",
          "Causes: Data entry errors, sensor malfunctions, extreme natural phenomena (true outliers).",
          "Impact: Heavily distorts Mean, Variance, Linear Regression slopes, and distance metrics in KNN and K-Means.",
          "Algorithms robust to outliers: Decision Trees, Random Forest, AdaBoost, XGBoost, Median-based metrics."
        ]
      },
      {
        "title": "Outlier Detection and Removal using Z-score Method | Handling Outliers Part 2",
        "summary": "Detecting and trimming/capping outliers in normally distributed features using the 3-Sigma / Z-Score technique.",
        "minutes": 18,
        "videoId": "OnPE-Z8jtqM",
        "notes": [
          "Z-Score method assumes a normal / Gaussian distribution.",
          "Formula: Z = (x - μ) / σ.",
          "Criterion: Data points with |Z| > 3 (beyond 3 standard deviations, ~99.7% of data) are classified as outliers.",
          "Trimming (dropping rows) vs Capping (Winsorizing values to μ ± 3σ)."
        ]
      },
      {
        "title": "Outlier Detection and Removal using the IQR Method | Handing Outliers Part 3",
        "summary": "Outlier detection and removal using the Interquartile Range (IQR) method and Tukey box-plot fences (Q1 - 1.5*IQR, Q3 + 1.5*IQR).",
        "minutes": 14,
        "videoId": "Ccv1-W5ilak",
        "notes": [
          "IQR (Interquartile Range) Method is non-parametric and does not assume a normal distribution.",
          "Calculate IQR = Q3 (75th percentile) - Q1 (25th percentile).",
          "Lower Fence = Q1 - 1.5 * IQR.",
          "Upper Fence = Q3 + 1.5 * IQR.",
          "Extreme Outliers Fence = Q1 - 3 * IQR and Q3 + 3 * IQR."
        ]
      },
      {
        "title": "Outlier Detection using the Percentile Method | Winsorization Technique",
        "summary": "Outlier handling using percentiles and Winsorization: capping upper and lower percentile limits without data loss.",
        "minutes": 16,
        "videoId": "bcXA4CqRXvM",
        "notes": [
          "Percentile Capping: Clamping extreme values to custom upper and lower percentiles (e.g., 1st and 99th percentiles).",
          "Winsorization: Replaces extreme values with the specified percentile value, avoiding dropping sample rows.",
          "Implementation using np.clip(df['col'], lower_limit, upper_limit)."
        ]
      }
    ]
  },
  {
    "name": "Dimensionality Reduction & PCA",
    "lessons": [
      {
        "title": "Feature Construction | Feature Splitting",
        "summary": "Feature Construction and Splitting: deriving impactful domain features and decomposing composite fields into rich predictors.",
        "minutes": 12,
        "videoId": "ma-h30PoFms",
        "notes": [
          "Feature Construction: Creating new domain-specific features by combining existing ones (e.g. Family_Size = SibSp + Parch + 1).",
          "Feature Splitting: Decomposing single strings into multiple informative features (e.g. Name → Title: 'Mr', 'Mrs', 'Dr').",
          "Domain heuristics often provide higher performance gains than model hyperparameter tuning."
        ]
      },
      {
        "title": "Curse of Dimensionality",
        "summary": "The Curse of Dimensionality: exponential volume growth, sparsity of high-dimensional space, and distance metric degradation.",
        "minutes": 15,
        "videoId": "ToGuhynu-No",
        "notes": [
          "The Curse of Dimensionality: As the number of features (d) grows, the volume of feature space grows exponentially (O(nᵈ)).",
          "Data becomes extremely sparse, and all points become equidistant from one another.",
          "Distance metrics lose discrimination power, causing KNN, K-Means, and SVM to struggle without dimensionality reduction."
        ]
      },
      {
        "title": "Principle Component Analysis  (PCA) | Part 1 | Geometric Intuition",
        "summary": "Principal Component Analysis (PCA): geometric intuition of finding orthogonal axes of maximum variance and projection lines.",
        "minutes": 34,
        "videoId": "iRbsBi5W0-c",
        "notes": [
          "Principal Component Analysis (PCA) is an unsupervised linear dimensionality reduction technique.",
          "Finds orthogonal axes (Principal Components) along which data variance is maximized.",
          "PC1 captures the maximum possible variance; PC2 is perpendicular to PC1 and captures the second highest variance.",
          "Projects n-dimensional data onto a lower k-dimensional subspace while minimizing reconstruction error."
        ]
      },
      {
        "title": "Principle Component Analysis (PCA) | Part 2 | Problem Formulation and Step by Step Solution",
        "summary": "Mathematical formulation of PCA: covariance matrix computation, eigenvalues, eigenvectors, and explained variance ratios.",
        "minutes": 56,
        "videoId": "tXXnxjj2wM4",
        "notes": [
          "PCA Mathematics Step-by-Step:",
          "1. Standardize the data matrix X (mean = 0, variance = 1).",
          "2. Compute the Covariance Matrix: C = (XᵀX) / (n - 1).",
          "3. Compute Eigenvalues (λ) and Eigenvectors (v) of C: Cv = λv.",
          "4. Sort Eigenvectors by Eigenvalues in descending order.",
          "5. Construct projection matrix W and project data: Z = X * W.",
          "Explained Variance Ratio: λᵢ / ∑λ."
        ]
      },
      {
        "title": "Principle Component Analysis(PCA) | Part 3 | Code Example and Visualization",
        "summary": "Hands-on PCA implementation in Scikit-Learn: dimensional reduction on high-dimensional datasets and 2D/3D visualization.",
        "minutes": 43,
        "videoId": "tofVCUDrg4M",
        "notes": [
          "Scikit-Learn implementation: from sklearn.decomposition import PCA.",
          "Selecting components by explained variance threshold: PCA(n_components=0.95) retains 95% of total variance.",
          "Visualizing high-dimensional datasets (e.g., MNIST digit images) in 2D and 3D scatter plots.",
          "Interpreting PCA component loadings to understand feature contributions."
        ]
      }
    ]
  },
  {
    "name": "Linear & Polynomial Regression",
    "lessons": [
      {
        "title": "Simple Linear Regression | Code + Intuition",
        "summary": "Simple Linear Regression: best-fit line intuition, slope (m), intercept (b), residual sum of squares (RSS), and Scikit-Learn code.",
        "minutes": 34,
        "videoId": "UZPfbG0jNec",
        "notes": [
          "Simple Linear Regression models the relationship between a single predictor x and continuous target y.",
          "Equation: y = mx + b (where m = slope, b = y-intercept).",
          "Cost Function: Residual Sum of Squares (RSS) = ∑(yᵢ - ŷᵢ)².",
          "Scikit-Learn implementation: LinearRegression().fit(X, y), inspecting .coef_ and .intercept_."
        ]
      },
      {
        "title": "Simple Linear Regression | Mathematical Formulation | Coding from Scratch",
        "summary": "Mathematical derivation of Simple Linear Regression using Ordinary Least Squares (OLS) closed-form formulas.",
        "minutes": 54,
        "videoId": "dXHIDLPKdmA",
        "notes": [
          "Deriving Ordinary Least Squares (OLS) closed-form solution using calculus:",
          "Minimizing Cost Function J(m, b) = ∑(yᵢ - (mxᵢ + b))².",
          "Taking partial derivatives ∂J/∂m = 0 and ∂J/∂b = 0.",
          "Slope: m = ∑((xᵢ - x̄)(yᵢ - ȳ)) / ∑(xᵢ - x̄)² = Cov(X, Y) / Var(X).",
          "Intercept: b = ȳ - m * x̄.",
          "Coding custom LinearRegression class from scratch in Python."
        ]
      },
      {
        "title": "Regression Metrics | MSE, MAE & RMSE | R2 Score & Adjusted R2 Score",
        "summary": "Comprehensive regression metrics: Mean Absolute Error (MAE), Mean Squared Error (MSE), Root Mean Squared Error (RMSE), R² Score, and Adjusted R².",
        "minutes": 44,
        "videoId": "Ti7c-Hz7GSM",
        "notes": [
          "Mean Absolute Error (MAE) = (1/n)∑|yᵢ - ŷᵢ| (same units as target, robust to outliers).",
          "Mean Squared Error (MSE) = (1/n)∑(yᵢ - ŷᵢ)² (punishes large errors heavily).",
          "Root Mean Squared Error (RMSE) = √MSE (interpretable units, sensitive to outliers).",
          "R² Score = 1 - (SS_res / SS_tot) = variance explained by model (1.0 = perfect, 0.0 = baseline mean, <0 = worse than mean).",
          "Adjusted R² = 1 - [(1 - R²)(n - 1) / (n - k - 1)] (penalizes addition of non-predictive features)."
        ]
      },
      {
        "title": "Multiple Linear Regression | Geometric Intuition & Code",
        "summary": "Multiple Linear Regression: hyperplanes in n-dimensional space, multi-feature equations, and Scikit-Learn implementation.",
        "minutes": 21,
        "videoId": "ashGekqstl8",
        "notes": [
          "Multiple Linear Regression models y as a linear combination of p features: y = β₀ + β₁x₁ + β₂x₂ + ... + βₚxₚ.",
          "Geometry: A 2D plane in 3D space, and a hyperplane in n-dimensional space.",
          "Interpreting coefficients: βⱼ represents the change in y per unit change in xⱼ, holding all other features constant."
        ]
      },
      {
        "title": "Multiple Linear Regression | Part 2 | Mathematical Formulation From Scratch",
        "summary": "Mathematical derivation of Multiple Linear Regression using Matrix calculus and the Normal Equation: β = (XᵀX)⁻¹Xᵀy.",
        "minutes": 48,
        "videoId": "NU37mF5q8VE",
        "notes": [
          "Matrix Formulation of Multiple Linear Regression:",
          "Target vector Y (n×1), Feature matrix X (n×(p+1)), Coefficient vector β ((p+1)×1).",
          "Loss function in matrix form: L(β) = (Y - Xβ)ᵀ(Y - Xβ).",
          "Taking matrix gradient ∂L/∂β = -2XᵀY + 2XᵀXβ = 0.",
          "The Normal Equation: β = (XᵀX)⁻¹XᵀY.",
          "Computational complexity: O(p³) for matrix inversion."
        ]
      },
      {
        "title": "Multiple Linear Regression | Part 3 | Code From Scratch",
        "summary": "Coding Multiple Linear Regression completely from scratch in Python with custom fit() and predict() methods.",
        "minutes": 16,
        "videoId": "VmZWXzxmNrE",
        "notes": [
          "Coding custom Multiple Linear Regression class using NumPy matrix operations:",
          "Adding bias column of ones: X_b = np.c_[np.ones((X.shape[0], 1)), X].",
          "Computing coefficients: beta = np.linalg.inv(X_b.T.dot(X_b)).dot(X_b.T).dot(y).",
          "Predict method: y_pred = X_b.dot(beta).",
          "Validating results against Scikit-Learn LinearRegression."
        ]
      },
      {
        "title": "What are the main Assumptions of Linear Regression? | Top 5 Assumptions of Linear Regression",
        "summary": "The 5 critical assumptions of Linear Regression: Linearity, Independence of errors, Homoscedasticity, Normality of residuals, and No Multicollinearity.",
        "minutes": 18,
        "videoId": "EmSNAtcHLm8",
        "notes": [
          "1. Linearity: Relationship between predictors and target is linear.",
          "2. Homoscedasticity: Constant variance of error terms across all levels of predictors (checked via residual scatter plot).",
          "3. Independence of residuals: No autocorrelation among residuals (Durbin-Watson test).",
          "4. Normality of residuals: Error terms follow a normal distribution (Q-Q plot / Shapiro-Wilk test).",
          "5. No Multicollinearity: Predictors are not highly correlated with each other (Variance Inflation Factor VIF < 5)."
        ]
      },
      {
        "title": "Gradient Descent From Scratch | End to End Gradient Descent | Gradient Descent Animation",
        "summary": "Complete intuition and animated step-by-step mechanics of Gradient Descent optimization algorithm.",
        "minutes": 2,
        "videoId": "ORyfPJypKuU",
        "notes": [
          "Gradient Descent is a generic optimization algorithm capable of finding optimal solutions to a wide range of problems.",
          "Intuition: Rolling a ball downhill along the path of steepest descent until reaching the global minimum.",
          "Update rule: θ_new = θ_old - η * ∇J(θ) (where η is the learning rate).",
          "If η is too small: Convergence is painfully slow.",
          "If η is too large: Algorithm oscillates and may diverge."
        ]
      },
      {
        "title": "Batch Gradient Descent with Code Demo | Simple Explanation in Hindi",
        "summary": "Batch Gradient Descent: full-dataset cost function gradients, learning rate selection, convergence criteria, and Python implementation.",
        "minutes": 1,
        "videoId": "Jyo53pAyVAM",
        "notes": [
          "Batch Gradient Descent uses the entire training dataset to compute the gradient at every iteration.",
          "Gradients: ∂J/∂m = (-2/n)∑(yᵢ - (mxᵢ + b))xᵢ, ∂J/∂b = (-2/n)∑(yᵢ - (mxᵢ + b)).",
          "Guaranteed to converge to the global minimum for convex loss surfaces.",
          "Limitation: Extremely slow on massive datasets that do not fit in RAM."
        ]
      },
      {
        "title": "Stochastic Gradient Descent",
        "summary": "Stochastic Gradient Descent (SGD): single-sample parameter updates, escaping local minima, and fast optimization on large datasets.",
        "minutes": 50,
        "videoId": "V7KBAa_gh4c",
        "notes": [
          "Stochastic Gradient Descent (SGD) picks a random single instance at each step to compute gradients and update parameters.",
          "Much faster and can handle streaming data / out-of-core training (SGDRegressor in Scikit-Learn).",
          "Cost function bounces up and down instead of decreasing smoothly, helping escape local minima.",
          "Learning rate schedule (simulated annealing): Gradually reducing η over time to settle at the minimum."
        ]
      },
      {
        "title": "Mini-Batch Gradient Descent",
        "summary": "Mini-Batch Gradient Descent: combining stability of Batch GD and computational speed of SGD using mini-batches.",
        "minutes": 22,
        "videoId": "_scscQ4HVTY",
        "notes": [
          "Mini-Batch Gradient Descent computes gradients on small random subsets (mini-batches, e.g. 32, 64, 128 samples).",
          "Combines parameter update stability of Batch GD with the computational efficiency of SGD.",
          "Allows vectorization hardware acceleration on GPUs and CPUs.",
          "The default optimization algorithm in deep learning and modern ML systems."
        ]
      },
      {
        "title": "Polynomial Regression | Machine Learning",
        "summary": "Polynomial Regression: modeling non-linear curves using PolynomialFeatures transformation and degree selection.",
        "minutes": 27,
        "videoId": "BNWLf3cKdbQ",
        "notes": [
          "Polynomial Regression fits non-linear relationships by adding polynomial powers of existing features.",
          "Equation: y = β₀ + β₁x + β₂x² + ... + βₔxᵈ.",
          "Implementation: Pipeline([('poly', PolynomialFeatures(degree=d)), ('linear', LinearRegression())]).",
          "Risk: Higher degrees (d ≥ 4) lead to severe overfitting and erratic boundary oscillations."
        ]
      },
      {
        "title": "Bias Variance Trade-off | Overfitting and Underfitting in Machine Learning",
        "summary": "The Bias-Variance Tradeoff: balancing underfitting (high bias) vs overfitting (high variance) to achieve minimal generalization error.",
        "minutes": 8,
        "videoId": "74DU02Fyrhk",
        "notes": [
          "Bias: Error introduced by approximating a real-world complex problem by a much simpler model (High Bias = Underfitting).",
          "Variance: Sensitivity to small fluctuations in the training set (High Variance = Overfitting).",
          "Total Error = Bias² + Variance + Irreducible Error.",
          "Goal: Find the model complexity sweet spot that minimizes total generalization error on unseen data."
        ]
      }
    ]
  },
  {
    "name": "Regularized Linear Models",
    "lessons": [
      {
        "title": "Ridge Regression Part 1 | Geometric Intuition and Code | Regularized Linear Models",
        "summary": "Ridge Regression (L2 Regularization): adding squared coefficient penalty (λ∑w²) to shrink weights and control multicollinearity.",
        "minutes": 20,
        "videoId": "aEow1QoTLo0",
        "notes": [
          "Ridge Regression adds an L2 regularization penalty to the Ordinary Least Squares loss function.",
          "Loss Function: J(w) = MSE + λ ∑(wⱼ)² (where λ ≥ 0 is the regularization strength).",
          "Effect: Shrinks regression coefficients towards zero, preventing any single feature from dominating.",
          "Crucial: Always scale features before applying Ridge Regression because the L2 penalty is scale-sensitive."
        ]
      },
      {
        "title": "Ridge Regression Part 2 | Mathematical Formulation & Code from scratch | Regularized Linear Models",
        "summary": "Mathematical derivation and closed-form solution of Ridge Regression: β = (XᵀX + λI)⁻¹Xᵀy.",
        "minutes": 44,
        "videoId": "oDlZBQjk_3A",
        "notes": [
          "Closed-Form Analytical Solution of Ridge Regression:",
          "Loss in matrix notation: J(β) = (Y - Xβ)ᵀ(Y - Xβ) + λ βᵀβ.",
          "Setting matrix derivative to 0: -2XᵀY + 2XᵀXβ + 2λIβ = 0.",
          "Ridge Normal Equation: β = (XᵀX + λI)⁻¹XᵀY.",
          "Because (XᵀX + λI) is always non-singular (invertible), Ridge works even when p > n or in the presence of severe multicollinearity."
        ]
      },
      {
        "title": "Ridge Regression Part 3 | Gradient Descent | Regularized Linear Models",
        "summary": "Implementing Ridge Regression optimization using Gradient Descent and comparing parameter trajectory against OLS.",
        "minutes": 19,
        "videoId": "Fci_wwMp8G8",
        "notes": [
          "Ridge Regression with Gradient Descent update rule:",
          "Gradient: ∇J(w) = (2/n)Xᵀ(Xw - y) + 2λw.",
          "Update: w_new = w - η * ((2/n)Xᵀ(Xw - y) + 2λw) = w(1 - 2λη) - η * (2/n)Xᵀ(Xw - y).",
          "The factor (1 - 2λη) applies weight decay at every iteration."
        ]
      },
      {
        "title": "5 Key Points - Ridge Regression | Part 4 | Regularized Linear Models",
        "summary": "5 key insights into Ridge Regression: shrinkage behavior, alpha tuning, handling multicollinear features, and model stability.",
        "minutes": 30,
        "videoId": "8osKeShYVRQ",
        "notes": [
          "1. Shrinkage: Coefficients shrink smoothly as λ increases, approaching zero asymptotically.",
          "2. Multicollinearity: Correlated features share weights equally rather than having wild exploding coefficients.",
          "3. Bias-Variance: Higher λ increases bias and reduces variance.",
          "4. Invertibility: (XᵀX + λI) is always invertible even with singular XᵀX.",
          "5. Tuning: Use RidgeCV to automatically find optimal alpha across cross-validation folds."
        ]
      },
      {
        "title": "Lasso Regression | Intuition and Code Sample | Regularized Linear Models",
        "summary": "Lasso Regression (L1 Regularization): adding absolute weight penalty (λ∑|w|) and performing automatic feature selection.",
        "minutes": 29,
        "videoId": "HLF4bFbBgwk",
        "notes": [
          "Lasso (Least Absolute Shrinkage and Selection Operator) adds an L1 regularization penalty.",
          "Loss Function: J(w) = MSE + λ ∑|wⱼ|.",
          "Unique property: Lasso drives weak and redundant feature weights to EXACTLY zero.",
          "Acts as an automatic feature selection mechanism, producing sparse, highly interpretable models."
        ]
      },
      {
        "title": "Why Lasso Regression creates sparsity?",
        "summary": "Geometric intuition of why Lasso creates exact zero coefficients: diamond constraint boundary corners vs circular L2 contours.",
        "minutes": 25,
        "videoId": "FN4aZPIAfI4",
        "notes": [
          "Why Lasso creates exact zeros (sparsity):",
          "The L1 constraint region is a diamond / hyper-octahedron with sharp corners on the coordinate axes.",
          "The elliptical contours of the RSS cost function are mathematically most likely to intersect the L1 diamond at a corner.",
          "At any corner, one or more coordinate coefficients are identically zero.",
          "In contrast, L2 regularization has smooth spherical contours that shrink weights without touching zero."
        ]
      },
      {
        "title": "ElasticNet Regression | Intuition and Code Example | Regularized Linear Models",
        "summary": "ElasticNet Regression: blending L1 (Lasso) and L2 (Ridge) penalties with alpha and l1_ratio parameters for robust regularized modeling.",
        "minutes": 12,
        "videoId": "2g2DBkFhTTY",
        "notes": [
          "ElasticNet combines both L1 (Lasso) and L2 (Ridge) penalties:",
          "Loss: J(w) = MSE + r * λ ∑|wⱼ| + ((1 - r)/2) * λ ∑(wⱼ)² (where r is l1_ratio ∈ [0, 1]).",
          "Combines feature selection of Lasso with group selection of Ridge when features are correlated.",
          "Implementation: ElasticNet(alpha=0.1, l1_ratio=0.5)."
        ]
      }
    ]
  },
  {
    "name": "Logistic Regression & Classification",
    "lessons": [
      {
        "title": "Logistic Regression Part 1 | Perceptron Trick",
        "summary": "Logistic Regression: Perceptron learning rule, linear decision boundaries, and step function activation.",
        "minutes": 47,
        "videoId": "XNXzVfItWGY",
        "notes": [
          "The Perceptron is the foundational linear binary classification algorithm.",
          "Linear combination: z = w₁x₁ + w₂x₂ + ... + wₚxₚ + b = WᵀX + b.",
          "Step activation function: ŷ = 1 if z ≥ 0, else 0.",
          "Perceptron learning trick: If positive point classified negative, rotate line towards point (W_new = W + η*X); if negative point classified positive, rotate away (W_new = W - η*X)."
        ]
      },
      {
        "title": "Logistic Regression Part 2 | Perceptron Trick Code",
        "summary": "Coding the Perceptron Trick algorithm from scratch in Python with iterative weight updating on misclassified points.",
        "minutes": 17,
        "videoId": "tLezwPKvPK4",
        "notes": [
          "Coding custom Perceptron classification algorithm from scratch in Python.",
          "Iterating through epochs, tracking misclassifications, and animating the decision boundary shifting towards convergence.",
          "Perceptron convergence theorem: Guaranteed to find separating hyperplane if data is linearly separable."
        ]
      },
      {
        "title": "Logistic Regression Part 3 | Sigmoid Function",
        "summary": "The Sigmoid Activation Function: mapping linear outputs (-∞, +∞) to probability values [0, 1] for binary classification.",
        "minutes": 41,
        "videoId": "ehO0-6i9qD4",
        "notes": [
          "The Sigmoid (Logistic) Function: σ(z) = 1 / (1 + e⁻ᶻ).",
          "Properties: Output range is strictly bounded between (0, 1), continuous and differentiable everywhere.",
          "Interpreting output: P(y=1|X) = σ(WᵀX + b).",
          "Decision boundary: Predict class 1 if P(y=1) ≥ 0.5 (which corresponds to z ≥ 0)."
        ]
      },
      {
        "title": "Logistic Regression Part 4 | Loss Function | Maximum Likelihood | Binary Cross Entropy",
        "summary": "Logistic Regression Loss Function: deriving Maximum Likelihood Estimation (MLE) and Binary Cross-Entropy (Log-Loss).",
        "minutes": 29,
        "videoId": "6bXOo0sxY5c",
        "notes": [
          "Why MSE fails for Logistic Regression: Produces a non-convex loss surface with many local minima.",
          "Binary Cross-Entropy / Log-Loss (Maximum Likelihood Estimation):",
          "Loss: L(y, ŷ) = - [y * log(ŷ) + (1 - y) * log(1 - ŷ)].",
          "If y = 1: Loss = -log(ŷ) (approaches ∞ as ŷ → 0).",
          "If y = 0: Loss = -log(1 - ŷ) (approaches ∞ as ŷ → 1).",
          "Log-loss is strictly convex, ensuring gradient descent converges to global minimum."
        ]
      },
      {
        "title": "Derivative of Sigmoid Function",
        "summary": "Step-by-step mathematical derivative of the Sigmoid function: σ'(z) = σ(z)(1 - σ(z)) for backpropagation and gradient updates.",
        "minutes": 6,
        "videoId": "awjXaFR1jOM",
        "notes": [
          "Deriving Sigmoid derivative step-by-step:",
          "σ(z) = (1 + e⁻ᶻ)⁻¹.",
          "dσ/dz = -1 * (1 + e⁻ᶻ)⁻² * (-e⁻ᶻ) = (e⁻ᶻ) / (1 + e⁻ᶻ)² = [1 / (1 + e⁻ᶻ)] * [e⁻ᶻ / (1 + e⁻ᶻ)].",
          "Result: dσ/dz = σ(z) * (1 - σ(z)).",
          "This elegant derivative simplifies backpropagation gradient calculations."
        ]
      },
      {
        "title": "Logistic Regression Part 5 | Gradient Descent & Code From Scratch",
        "summary": "Implementing Logistic Regression with Gradient Descent completely from scratch in Python.",
        "minutes": 37,
        "videoId": "ABrrSwMYWSg",
        "notes": [
          "Gradient of Log-Loss with respect to weights: ∇J(W) = (1/n) Xᵀ (σ(XW) - y).",
          "Weight update rule: W_new = W - η * (1/n) Xᵀ (ŷ - y).",
          "Notice the gradient formula is mathematically identical in form to Linear Regression, but with ŷ = σ(XW).",
          "Building a custom LogisticRegressionFromScratch class in NumPy."
        ]
      },
      {
        "title": "Accuracy and Confusion Matrix | Type 1 and Type 2 Errors | Classification Metrics Part 1",
        "summary": "Evaluating classification models: Confusion Matrix, True/False Positives/Negatives, Type I (alpha) and Type II (beta) errors.",
        "minutes": 34,
        "videoId": "c09drtuCS3c",
        "notes": [
          "Confusion Matrix Structure:",
          "True Positive (TP): Correctly predicted positive class.",
          "True Negative (TN): Correctly predicted negative class.",
          "False Positive (FP): Type I Error (False Alarm - predicted positive, actually negative).",
          "False Negative (FN): Type II Error (Missed Detection - predicted negative, actually positive).",
          "Accuracy = (TP + TN) / (TP + TN + FP + FN) (misleading on imbalanced datasets)."
        ]
      },
      {
        "title": "Precision, Recall and F1 Score | Classification Metrics Part 2",
        "summary": "Precision, Recall, Specificity, and F1-Score (Macro, Micro, Weighted) for balanced and imbalanced evaluation.",
        "minutes": 43,
        "videoId": "iK-kdhJ-7yI",
        "notes": [
          "Precision = TP / (TP + FP) (Out of all positive predictions, how many were correct? Key for spam detection).",
          "Recall (Sensitivity / True Positive Rate) = TP / (TP + FN) (Out of all actual positive cases, how many did we catch? Critical in disease diagnosis).",
          "Specificity = TN / (TN + FP) (True Negative Rate).",
          "F1-Score = 2 * (Precision * Recall) / (Precision + Recall) (Harmonic mean balancing precision and recall)."
        ]
      },
      {
        "title": "ROC Curve in Machine Learning | ROC-AUC in Machine Learning Simplified",
        "summary": "Receiver Operating Characteristic (ROC) curve, True Positive Rate vs False Positive Rate, and ROC-AUC score interpretation.",
        "minutes": 1,
        "videoId": "gdW6hj9IXaA",
        "notes": [
          "ROC Curve plots True Positive Rate (TPR / Recall) vs False Positive Rate (FPR = 1 - Specificity) across all possible classification thresholds.",
          "A random guessing classifier produces a diagonal line (AUC = 0.50).",
          "A perfect classifier achieves AUC = 1.00.",
          "ROC-AUC score is threshold-independent and measures the model's ability to rank positive instances above negative instances."
        ]
      },
      {
        "title": "Softmax Regression || Multinomial Logistic Regression || Logistic Regression Part 6",
        "summary": "Multinomial Logistic Regression & Softmax Regression: generalizing binary logistic regression to multi-class classification.",
        "minutes": 38,
        "videoId": "Z8noL_0M4tw",
        "notes": [
          "Softmax Regression (Multinomial Logistic Regression) handles K > 2 discrete classes.",
          "Softmax formula: P(y = k | x) = e^(z_k) / ∑_{j=1}^K e^(z_j).",
          "Categorical Cross-Entropy Loss: L = - ∑_{k=1}^K y_k * log(p_k).",
          "Scikit-Learn implementation: LogisticRegression(multi_class='multinomial', solver='lbfgs')."
        ]
      },
      {
        "title": "Polynomial Features in Logistic Regression | Non Linear Logistic Regression | Logistic Regression 7",
        "summary": "Creating non-linear classification decision boundaries in Logistic Regression using Polynomial feature mappings.",
        "minutes": 9,
        "videoId": "WnBYW_DX3sM",
        "notes": [
          "Non-linear decision boundaries using Polynomial features in Logistic Regression.",
          "Transforming feature space [x₁, x₂] into [x₁, x₂, x₁², x₂², x₁x₂].",
          "Allows Logistic Regression to separate circular, elliptical, and complex boundary shapes without changing the underlying linear classification algorithm."
        ]
      },
      {
        "title": "Logistic Regression Hyperparameters || Logistic Regression Part 8",
        "summary": "Hyperparameter tuning in Logistic Regression: penalty (l1, l2, elasticnet), regularization strength C, and solver algorithms (lbfgs, saga).",
        "minutes": 13,
        "videoId": "ay_OcblJasE",
        "notes": [
          "Logistic Regression Hyperparameters:",
          "penalty: 'l1', 'l2', 'elasticnet', 'none'.",
          "C: Inverse of regularization strength (smaller C = stronger regularization, preventing overfitting).",
          "solver: 'lbfgs' (default, multi-class), 'saga' (fast on large data, supports L1/ElasticNet), 'liblinear' (small datasets).",
          "class_weight: 'balanced' automatically adjusts weights inversely proportional to class frequencies."
        ]
      }
    ]
  },
  {
    "name": "Naive Bayes, KNN & Support Vector Machines",
    "lessons": [
      {
        "title": "Naive Bayes Classifier | Part 1 | Conditional Probability",
        "summary": "Probability foundations for Naive Bayes: Conditional Probability P(A|B) and Joint Probability P(A ∩ B).",
        "minutes": 9,
        "videoId": "Ty7knppVo9E",
        "notes": [
          "Conditional Probability P(A|B) is the probability of event A occurring given that event B has already occurred.",
          "Formula: P(A|B) = P(A ∩ B) / P(B).",
          "Multiplication Rule: P(A ∩ B) = P(A|B) * P(B) = P(B|A) * P(A).",
          "Understanding sample space reduction under given evidence."
        ]
      },
      {
        "title": "Naive Bayes Classifier | Part 2 | Independent Events in Probability",
        "summary": "Independent events in probability theory: mathematical definitions, multiplicative rules, and real-world examples.",
        "minutes": 8,
        "videoId": "0GD480CnrO4",
        "notes": [
          "Independent Events: The occurrence of event A has zero effect on the probability of event B.",
          "Mathematical definition: P(A|B) = P(A) and P(B|A) = P(B).",
          "Product rule for independent events: P(A ∩ B) = P(A) * P(B).",
          "Testing for independence in contingency tables."
        ]
      },
      {
        "title": "Naive Bayes Classifier | Part 3 | Mutually Exclusive Events",
        "summary": "Mutually exclusive vs non-mutually exclusive events in probability theory and addition rules.",
        "minutes": 2,
        "videoId": "nneTjTYikBE",
        "notes": [
          "Mutually Exclusive (Disjoint) Events: Two events that cannot occur simultaneously (A ∩ B = ∅).",
          "P(A ∩ B) = 0.",
          "Addition Rule for mutually exclusive events: P(A ∪ B) = P(A) + P(B).",
          "General Addition Rule: P(A ∪ B) = P(A) + P(B) - P(A ∩ B)."
        ]
      },
      {
        "title": "Naive Bayes Classifier | Part 4 | Bayes Theorem in Probability",
        "summary": "Derivation and intuition of Bayes' Theorem: Prior probability, Likelihood, Evidence, and Posterior probability P(Y|X).",
        "minutes": 4,
        "videoId": "Oqw-v-Z7PuU",
        "notes": [
          "Deriving Bayes' Theorem from the definition of conditional probability:",
          "P(A|B) * P(B) = P(B|A) * P(A).",
          "Bayes' Rule: P(A|B) = [P(B|A) * P(A)] / P(B).",
          "Posterior Probability = (Likelihood * Prior) / Evidence.",
          "Total Probability Theorem for expanding the denominator P(B)."
        ]
      },
      {
        "title": "Naive Bayes Classifier | Part 5 | Problem based upon Bayes Theorem",
        "summary": "Working through classic numerical word problems step by step using Bayes' Theorem.",
        "minutes": 9,
        "videoId": "aAEHjXDHtbE",
        "notes": [
          "Solving classic medical diagnosis problem: Rare disease prevalence, test sensitivity, and false positive rates.",
          "Why a 99% accurate test on a 0.1% rare disease yields a surprising posterior probability.",
          "Bayesian updating: How new evidence iteratively refines prior beliefs into updated posteriors."
        ]
      },
      {
        "title": "Naive Bayes Classifier | Part 6 | Intuition",
        "summary": "The Naive Bayes Classifier: why the feature independence assumption is 'Naive' and why it performs remarkably well in practice.",
        "minutes": 15,
        "videoId": "ZR1_QtLk_4U",
        "notes": [
          "Naive Bayes classification formulation: P(y | x₁, x₂, ..., xₚ) ∝ P(y) * ∏ P(xᵢ | y).",
          "The 'Naive' assumption: All features xᵢ are conditionally independent given the class label y.",
          "Why it works: Even when independence is violated, ranking ordering of probabilities often remains accurate for classification.",
          "Extremely fast training (single pass through data) and robust against high dimensionality."
        ]
      },
      {
        "title": "Naive Bayes Classifier | Part 7 | Mathematics behind Naive Bayes Algorithm",
        "summary": "Mathematical formulations of Gaussian Naive Bayes, Multinomial Naive Bayes, and Bernoulli Naive Bayes.",
        "minutes": 19,
        "videoId": "2PVRG45eVrY",
        "notes": [
          "Gaussian Naive Bayes: Assumes continuous features follow a normal distribution; calculates mean μ_c and variance σ_c² for each class.",
          "Multinomial Naive Bayes: Designed for discrete frequency counts (e.g. word occurrences in text classification).",
          "Bernoulli Naive Bayes: Designed for binary/boolean feature indicators (e.g. word presence/absence)."
        ]
      },
      {
        "title": "Naive Bayes Classifier | Part 8 | Simple Example Code",
        "summary": "Hands-on Python implementation of Naive Bayes for SMS text spam classification and Laplace Smoothing (additive smoothing).",
        "minutes": 16,
        "videoId": "DeeWsqoY4Eo",
        "notes": [
          "Hands-on text classification pipeline: TF-IDF Vectorizer + MultinomialNB.",
          "The Zero-Frequency Problem: If a word never appeared in a class in training data, P(word|class) = 0, zeroing out the entire posterior probability.",
          "Laplace Smoothing (Additive Smoothing): P(xᵢ|y) = (count + α) / (total_count + α * V), where α = 1."
        ]
      },
      {
        "title": "Naive Bayes Part 9 | Handling Numerical Data",
        "summary": "Handling continuous numerical features in Naive Bayes using Gaussian probability density functions (PDF).",
        "minutes": 9,
        "videoId": "TCgK2nBJx9o",
        "notes": [
          "Handling continuous features in GaussianNB without discretization.",
          "Calculating class-conditional Gaussian probability density function (PDF): P(xᵢ|y=c) = (1 / √(2πσ_c²)) * exp(-(xᵢ - μ_c)² / (2σ_c²)).",
          "Handling numerical stability with log-probabilities: log P(y|X) = log P(y) + ∑ log P(xᵢ|y)."
        ]
      },
      {
        "title": "What is K Nearest Neighbors? | KNN Explained in Hindi | Simple Overview in 1 Video",
        "summary": "K-Nearest Neighbors (KNN) algorithm: majority voting, distance metrics (Euclidean, Manhattan, Minkowski), and optimal K selection.",
        "minutes": 52,
        "videoId": "abnL_GUGub4",
        "notes": [
          "K-Nearest Neighbors (KNN) is a non-parametric, instance-based lazy learning algorithm.",
          "Algorithm: Compute distance from query point to all training points, select K closest, take majority vote (classification) or average (regression).",
          "Distance metrics: Euclidean (L2), Manhattan (L1), Minkowski (L_p).",
          "Choosing K: Small K leads to overfitting (high variance); large K leads to underfitting (high bias). Use odd K to prevent ties in binary classification."
        ]
      },
      {
        "title": "Support Vector Machines | Geometric Intuition",
        "summary": "Support Vector Machines (SVM): geometric intuition of maximum margin hyperplanes, support vectors, and separation margins.",
        "minutes": 12,
        "videoId": "ugTxMLjLS8M",
        "notes": [
          "Support Vector Machines (SVM) finds the optimal hyperplane that separates classes with the maximum geometric margin.",
          "Margin: The perpendicular distance between the decision boundary hyperplane and the closest training points.",
          "Support Vectors: The critical data points lying exactly on the margin boundaries; removing other points leaves the boundary unchanged.",
          "Maximum margin provides the best theoretical guarantee against overfitting."
        ]
      },
      {
        "title": "Mathematics of SVM | Support Vector Machines | Hard margin SVM",
        "summary": "Mathematical formulation of Hard-Margin SVM: convex quadratic programming, primal formulation, and Lagrange Multipliers.",
        "minutes": 35,
        "videoId": "yCAlHPDgWtM",
        "notes": [
          "Hard-Margin SVM Mathematics:",
          "Hyperplane equation: wᵀx + b = 0.",
          "Margin width: 2 / ||w||.",
          "Optimization Objective: Minimize (1/2)||w||² subject to yᵢ(wᵀxᵢ + b) ≥ 1 for all i.",
          "Formulating Lagrangian Dual with multipliers αᵢ: L(w, b, α) = (1/2)||w||² - ∑ αᵢ [yᵢ(wᵀxᵢ + b) - 1]."
        ]
      },
      {
        "title": "Mathematics of Support Vector Machine | Soft Margin SVM",
        "summary": "Mathematics of Soft-Margin SVM: introducing slack variables (ξᵢ), hinge loss, and the C regularization trade-off.",
        "minutes": 15,
        "videoId": "utqrvIFAE1k",
        "notes": [
          "Soft-Margin SVM allows controlled margin violations for non-linearly separable data.",
          "Introducing Slack Variables ξᵢ ≥ 0: yᵢ(wᵀxᵢ + b) ≥ 1 - ξᵢ.",
          "Objective: Minimize (1/2)||w||² + C ∑ ξᵢ.",
          "The C hyperparameter controls the trade-off between maximizing margin width and minimizing classification errors.",
          "Large C = narrow margin, penalizes mistakes heavily (risk of overfitting); Small C = wide margin, tolerates more misclassifications."
        ]
      },
      {
        "title": "Kernel Trick in SVM | Geometric Intuition",
        "summary": "The Kernel Trick in SVM: implicit mapping into infinite-dimensional Hilbert space without explicit coordinate computation.",
        "minutes": 6,
        "videoId": "egxjT0p7_K8",
        "notes": [
          "The Kernel Trick maps input vectors into a higher-dimensional feature space Φ(x) where non-linear data becomes linearly separable.",
          "Kernel Function K(xᵢ, xⱼ) = ⟨Φ(xᵢ), Φ(xⱼ)⟩ computes inner products in high-dimensional space without explicitly calculating coordinates.",
          "Avoids the computational explosion of high-dimensional transformations (Mercer's Theorem)."
        ]
      },
      {
        "title": "Kernel Trick in SVM | Code Example",
        "summary": "SVM Kernels in Python: Linear, Polynomial, Radial Basis Function (RBF / Gaussian), and Sigmoid kernels with gamma tuning.",
        "minutes": 14,
        "videoId": "pjvmVMDrzVU",
        "notes": [
          "SVM Kernels in Scikit-Learn (SVC):",
          "1. Linear Kernel: K(x, z) = xᵀz (fast, best for high-dimensional text data).",
          "2. Polynomial Kernel: K(x, z) = (γ xᵀz + r)ᵈ (models feature interactions up to degree d).",
          "3. Radial Basis Function (RBF / Gaussian): K(x, z) = exp(-γ ||x - z||²) (maps to infinite dimensions; γ controls bell-curve influence width).",
          "4. Sigmoid Kernel: K(x, z) = tanh(γ xᵀz + r)."
        ]
      }
    ]
  },
  {
    "name": "Decision Trees",
    "lessons": [
      {
        "title": "Decision Trees Geometric Intuition | Entropy | Gini impurity | Information Gain",
        "summary": "Decision Trees: recursive binary partitioning, Entropy, Information Gain, and Gini Impurity calculations from scratch.",
        "minutes": 58,
        "videoId": "IZnno-dKgVQ",
        "notes": [
          "Decision Trees recursively partition feature space into axis-aligned rectangular regions.",
          "Entropy (Measure of impurity/disorder): H(S) = - ∑ pᵢ log₂(pᵢ).",
          "Information Gain = Entropy(Parent) - ∑ (|Sᵥ| / |S|) * Entropy(Child).",
          "Gini Impurity = 1 - ∑ pᵢ² (computationally faster than Entropy because it avoids logarithmic operations, used in CART algorithm)."
        ]
      },
      {
        "title": "Decision Trees - Hyperparameters | Overfitting and Underfitting in Decision Trees",
        "summary": "Decision Tree Hyperparameters: controlling tree depth (max_depth), min_samples_split, min_samples_leaf, and CCP alpha pruning.",
        "minutes": 27,
        "videoId": "mDEV0Iucwz0",
        "notes": [
          "Decision Trees are highly prone to overfitting because they can grow arbitrarily deep until every leaf is pure.",
          "Pre-Pruning Hyperparameters: max_depth, min_samples_split, min_samples_leaf, max_leaf_nodes, max_features.",
          "Post-Pruning: Cost Complexity Pruning (ccp_alpha) pruning weak subtrees with minimal penalty trade-off."
        ]
      },
      {
        "title": "Regression Trees | Decision Trees Part 3",
        "summary": "Decision Trees for Regression: predicting continuous values, variance reduction splitting criterion, and step-wise predictions.",
        "minutes": 35,
        "videoId": "RANHxyAvtM4",
        "notes": [
          "DecisionTreeRegressor predicts continuous values for samples landing in each leaf node.",
          "Splitting criterion: Variance Reduction / Mean Squared Error (MSE).",
          "Prediction: The mean target value of all training samples assigned to that leaf.",
          "Output produces a step-wise piecewise constant approximation function."
        ]
      },
      {
        "title": "Awesome Decision Tree Visualization using dtreeviz library",
        "summary": "Interactive and publication-quality Decision Tree visualization using the dtreeviz library in Python.",
        "minutes": 19,
        "videoId": "SlMZqfvl5uw",
        "notes": [
          "Advanced Decision Tree Visualization using dtreeviz and graphviz.",
          "Visualizing feature distribution histograms at each split decision node.",
          "Plotting 2D classification decision space colored by class densities.",
          "Tracing inference paths of individual sample predictions through tree branches."
        ]
      }
    ]
  },
  {
    "name": "Ensemble Learning & Random Forest",
    "lessons": [
      {
        "title": "Introduction to Ensemble Learning | Ensemble Techniques in Machine Learning",
        "summary": "Introduction to Ensemble Learning: the wisdom of the crowd, error reduction, and overview of Voting, Bagging, Boosting, and Stacking.",
        "minutes": 38,
        "videoId": "bHK1fE_BUms",
        "notes": [
          "Ensemble Learning combines predictions from multiple base models to produce a single superior predictive model.",
          "Condorcet's Jury Theorem: If individual models have accuracy > 50% and are independent, ensemble accuracy approaches 100% as model count increases.",
          "Major families: Voting/Averaging, Bagging (Variance reduction), Boosting (Bias reduction), Stacking (Multi-level meta-learning)."
        ]
      },
      {
        "title": "Voting Ensemble |  Introduction and Core Idea | Part 1",
        "summary": "Voting Ensembles: combining diverse weak learners to construct high-accuracy meta-predictors.",
        "minutes": 16,
        "videoId": "_W1i-c_6rOk",
        "notes": [
          "Voting Ensemble combines diverse models (e.g., Logistic Regression + SVM + Decision Tree + KNN).",
          "Key requirement: Base models should make errors on different regions of data (low error correlation).",
          "Regression: Weighted average of individual predictions (ŷ = ∑ wᵢ ŷᵢ)."
        ]
      },
      {
        "title": "Voting Ensemble | Classification | Voting Classifier | Hard Voting Vs Soft Voting | Part 2",
        "summary": "Scikit-Learn VotingClassifier: practical implementation comparing Hard Voting (majority rule) vs Soft Voting (predicted probabilities).",
        "minutes": 24,
        "videoId": "pGQnNYdPTvY",
        "notes": [
          "Hard Voting: Majority rule classification — the class with the most votes across estimators wins.",
          "Soft Voting: Averages predicted class probabilities from all calibrated estimators and picks the highest probability.",
          "Soft voting generally outperforms hard voting because it gives more weight to confident predictions.",
          "Implementation: VotingClassifier(estimators=[('lr', lr), ('rf', rf), ('svc', svc)], voting='soft')."
        ]
      },
      {
        "title": "Voting Ensemble | Regression | Part 3",
        "summary": "Scikit-Learn VotingRegressor: combining continuous predictions from diverse regression algorithms using weighted averages.",
        "minutes": 11,
        "videoId": "ut4vh59rGkw",
        "notes": [
          "Scikit-Learn VotingRegressor implementation combining diverse continuous regression algorithms.",
          "Tuning estimator weights parameter to emphasize superior baseline models.",
          "Evaluating ensemble performance against individual standalone regressors."
        ]
      },
      {
        "title": "Bagging | Introduction | Part 1",
        "summary": "Bagging (Bootstrap Aggregating): bootstrap sampling with replacement, parallel training, and variance reduction mechanics.",
        "minutes": 31,
        "videoId": "LUiBOAy7x6Y",
        "notes": [
          "Bagging (Bootstrap Aggregating):",
          "1. Bootstrap: Generates M new datasets of size N by sampling with replacement from original data (each bag contains ~63.2% unique samples).",
          "2. Aggregate: Trains a separate base estimator on each bootstrap sample in parallel.",
          "3. Aggregates predictions by majority vote (classification) or average (regression).",
          "Primary benefit: Significantly reduces model variance without increasing bias."
        ]
      },
      {
        "title": "Bagging Ensemble | Part 2 | Bagging Classifiers",
        "summary": "Implementing BaggingClassifier in Scikit-Learn: tuning base estimators, max_samples, and max_features (Random Patches & Subspaces).",
        "minutes": 23,
        "videoId": "-1T54G_E-ys",
        "notes": [
          "Scikit-Learn BaggingClassifier:",
          "base_estimator: Defaults to DecisionTreeClassifier.",
          "max_samples: Fraction of samples drawn to train each base estimator.",
          "max_features (Random Subspaces): Fraction of columns randomly sampled for each estimator.",
          "Random Patches: Sampling both subsets of rows and subsets of columns."
        ]
      },
      {
        "title": "Bagging Ensemble | Part 3 | Bagging Regressor",
        "summary": "Implementing BaggingRegressor in Scikit-Learn for continuous target variables.",
        "minutes": 11,
        "videoId": "HYVzrETXbkE",
        "notes": [
          "Scikit-Learn BaggingRegressor implementation for continuous target prediction.",
          "Comparing regression tree variance before and after bootstrap aggregation.",
          "Parallel execution with n_jobs=-1 utilizing all available CPU cores."
        ]
      },
      {
        "title": "Introduction to Random Forest | Intuition behind the Algorithm",
        "summary": "Random Forest: combining Bagging with random feature subspace sampling at every node split for decorrelated decision trees.",
        "minutes": 34,
        "videoId": "F9uESCHGjhA",
        "notes": [
          "Random Forest is a specialized bagging ensemble of randomized Decision Trees.",
          "Double Randomization:",
          "1. Row Randomization: Each tree trained on a random bootstrap sample.",
          "2. Feature Randomization: At every node split, only a random subset of features (typically √p for classification, p/3 for regression) is considered.",
          "Decorrelates trees, ensuring one dominant feature does not make all trees identical."
        ]
      },
      {
        "title": "How Random Forest Performs So Well? Bias Variance Trade-Off in Random Forest",
        "summary": "Why Random Forests achieve superior generalization: mathematical Bias-Variance decomposition and correlation reduction among trees.",
        "minutes": 13,
        "videoId": "jHgG4gjuFAk",
        "notes": [
          "Why Random Forest achieves high generalization performance:",
          "Ensemble Variance = ρ * σ² + ((1 - ρ)/M) * σ² (where ρ is tree correlation, M is tree count).",
          "By decreasing correlation ρ through random feature subsets, ensemble variance drops dramatically while maintaining low individual tree bias."
        ]
      },
      {
        "title": "Bagging Vs Random Forest | What is the difference between Bagging and Random Forest | Very Important",
        "summary": "In-depth comparison: Bagging vs Random Forest differences in tree correlation, feature selection, and computation speed.",
        "minutes": 12,
        "videoId": "l93jRojZMqU",
        "notes": [
          "Bagging vs Random Forest comparison:",
          "Bagging considers all features at every node split unless max_features is set globally for the tree.",
          "Random Forest randomly samples new features at EACH individual split within every tree.",
          "Random Forest produces more diverse, decorrelated trees and faster training."
        ]
      },
      {
        "title": "Random Forest Hyper-parameters",
        "summary": "Comprehensive breakdown of Random Forest hyperparameters: n_estimators, criterion, max_features, bootstrap, and n_jobs.",
        "minutes": 15,
        "videoId": "WOFVY_wQ9wU",
        "notes": [
          "Random Forest Hyperparameters:",
          "n_estimators: Number of trees in the forest (more is better until performance plateaus).",
          "max_features: Number of features to consider at each split ('sqrt', 'log2', float).",
          "max_depth, min_samples_split, min_samples_leaf: Tree regularization controls.",
          "oob_score: Set to True for free out-of-bag validation.",
          "n_jobs: Parallel CPU threads."
        ]
      },
      {
        "title": "Hyperparameter Tuning Random Forest using GridSearchCV and RandomizedSearchCV | Code Example",
        "summary": "Hyperparameter tuning Random Forest models using GridSearchCV and RandomizedSearchCV for peak validation accuracy.",
        "minutes": 12,
        "videoId": "4Im0CT43QxY",
        "notes": [
          "Hyperparameter optimization of Random Forest using GridSearchCV and RandomizedSearchCV.",
          "Defining search grids across n_estimators, max_features, max_depth, and min_samples_split.",
          "Comparing computation time vs optimization quality between exhaustive grid search and random search."
        ]
      },
      {
        "title": "OOB Score | Out of Bag Evaluation in Random Forest | Machine Learning",
        "summary": "Out-Of-Bag (OOB) evaluation in Random Forest: free cross-validation score on unused bootstrap samples without a test split.",
        "minutes": 7,
        "videoId": "tdDhyFoSG94",
        "notes": [
          "Out-Of-Bag (OOB) Evaluation:",
          "Each bootstrap sample omits approximately 36.8% of the training instances (OOB instances).",
          "Each tree is evaluated only on the OOB samples it never saw during training.",
          "Averaging OOB predictions across all trees yields the OOB score.",
          "Provides an unbiased validation metric without needing a separate validation split."
        ]
      },
      {
        "title": "Feature Importance using Random Forest and Decision Trees | How is Feature Importance calculated",
        "summary": "Computing and interpreting Feature Importance using Mean Decrease in Impurity (Gini Importance) and Permutation Feature Importance.",
        "minutes": 27,
        "videoId": "R47JAob1xBY",
        "notes": [
          "Feature Importance in Tree Ensembles:",
          "1. Mean Decrease in Impurity (MDI / Gini Importance): Sum of impurity reductions achieved by splits on that feature across all trees (can be biased towards high-cardinality features).",
          "2. Permutation Feature Importance: Measures drop in model performance when values of a feature are randomly shuffled on test data (model-agnostic, reliable).",
          "Plotting feature importance bar charts using model.feature_importances_."
        ]
      }
    ]
  },
  {
    "name": "Boosting (AdaBoost, Gradient Boosting & XGBoost)",
    "lessons": [
      {
        "title": "How Adaboost Classifier Works? | Geometric Intuition",
        "summary": "AdaBoost (Adaptive Boosting): sequential ensemble intuition, sample reweighting, and focusing on hard-to-classify samples.",
        "minutes": 17,
        "videoId": "sFKnP0iP0K0",
        "notes": [
          "AdaBoost (Adaptive Boosting) trains base estimators sequentially rather than in parallel.",
          "Core Mechanism: Each subsequent estimator focuses more on the mistakes made by previous estimators by increasing the weights of misclassified instances.",
          "Base learner: Decision Stumps (Decision Trees with max_depth=1).",
          "Final prediction: Weighted majority vote where more accurate estimators have greater voting power."
        ]
      },
      {
        "title": "AdaBoost - A Step by Step Explanation",
        "summary": "Step-by-step mathematical derivation of AdaBoost: decision stump error rates, stage weights (α), and sample weight updates.",
        "minutes": 19,
        "videoId": "RT0t9a3Xnfw",
        "notes": [
          "Step-by-Step Mathematical Derivation of AdaBoost:",
          "1. Initialize sample weights wᵢ = 1/N.",
          "2. For m = 1 to M:",
          "   a. Fit weak classifier h_m(x) minimizing weighted error ε_m = ∑_{yᵢ ≠ h_m(xᵢ)} wᵢ.",
          "   b. Compute estimator weight α_m = (1/2) * ln((1 - ε_m) / ε_m).",
          "   c. Update sample weights: wᵢ ← wᵢ * exp(-α_m * yᵢ * h_m(xᵢ)).",
          "   d. Normalize weights so ∑ wᵢ = 1.",
          "3. Final output: H(x) = sign(∑ α_m * h_m(x))."
        ]
      },
      {
        "title": "AdaBoost Algorithm | Code from Scratch",
        "summary": "Coding the complete AdaBoost classifier from scratch in Python with custom decision stumps and weight updates.",
        "minutes": 16,
        "videoId": "a20TaKNsriE",
        "notes": [
          "Coding custom AdaBoost classifier from scratch in Python:",
          "Implementing custom DecisionStump class with polarity, feature threshold, and weighted error calculation.",
          "Implementing AdaBoost update loop with alpha weight tracking.",
          "Validating predictions and decision boundaries against sklearn.ensemble.AdaBoostClassifier."
        ]
      },
      {
        "title": "AdaBoost Hyperparameters | GridSearchCV in Adaboost",
        "summary": "AdaBoost hyperparameters: n_estimators, learning_rate, base_estimator, and hyperparameter tuning with GridSearchCV.",
        "minutes": 11,
        "videoId": "JmXnztjULnQ",
        "notes": [
          "AdaBoost Hyperparameters:",
          "n_estimators: Number of boosting stages.",
          "learning_rate: Shrinks the contribution of each classifier (trade-off with n_estimators).",
          "algorithm: 'SAMME' (discrete) vs 'SAMME.R' (real, probability-based).",
          "Tuning with GridSearchCV to prevent overfitting on noisy datasets."
        ]
      },
      {
        "title": "Bagging Vs Boosting | What is the difference between Bagging and Boosting",
        "summary": "Bagging vs Boosting: fundamental architectural comparison, variance reduction vs bias reduction, and parallel vs sequential execution.",
        "minutes": 6,
        "videoId": "7M5oWXCpDEw",
        "notes": [
          "Bagging vs Boosting Comprehensive Comparison:",
          "Execution: Bagging runs in parallel; Boosting runs sequentially.",
          "Objective: Bagging reduces variance (uses complex deep trees); Boosting reduces bias (uses simple shallow trees).",
          "Sample weights: Bagging uses equal uniform weights; Boosting uses dynamic adaptive weights.",
          "Sensitivity: Boosting is more sensitive to outliers and noisy data than Bagging."
        ]
      },
      {
        "title": "Gradient Boosting Explained | How Gradient Boosting Works?",
        "summary": "Gradient Boosting Explained: sequential optimization in function space, pseudo-residuals, shrinkage, and tree additive modeling.",
        "minutes": 33,
        "videoId": "fbKz7N92mhQ",
        "notes": [
          "Gradient Boosting fits new base learners sequentially to the pseudo-residuals (negative gradients) of the loss function.",
          "Intuition: Each new tree corrects the residual errors made by the existing additive ensemble.",
          "Model formulation: F_m(x) = F_{m-1}(x) + η * h_m(x) (where η is the shrinkage learning rate).",
          "Applicable to arbitrary differentiable loss functions (MSE, MAE, Huber, Log-Loss)."
        ]
      },
      {
        "title": "Gradient Boosting Regression Part 2 | Mathematics of Gradient Boosting",
        "summary": "Mathematical formulation of Gradient Boosting Regression: loss function Taylor approximation, negative gradients, and step size.",
        "minutes": 57,
        "videoId": "nMNiTZm-qY0",
        "notes": [
          "Mathematical Formulation of Gradient Boosting Regression:",
          "1. Initialize constant model: F₀(x) = argmin_γ ∑ L(yᵢ, γ) = ȳ (for squared error).",
          "2. For m = 1 to M:",
          "   a. Compute pseudo-residuals: rᵢₘ = - [∂L(yᵢ, F(xᵢ)) / ∂F(xᵢ)]_{F=F_{m-1}} = yᵢ - F_{m-1}(xᵢ).",
          "   b. Fit regression tree h_m(x) to pseudo-residuals rᵢₘ.",
          "   c. Compute optimal terminal leaf values γ_{jm}.",
          "   d. Update model: F_m(x) = F_{m-1}(x) + η ∑ γ_{jm} I(x ∈ R_{jm})."
        ]
      },
      {
        "title": "Gradient Boosting for Classification | Geometric Intuition",
        "summary": "Gradient Boosting for Classification: mapping log-odds probability transformations and computing logistic loss residuals.",
        "minutes": 65,
        "videoId": "4p5EQtyxSyI",
        "notes": [
          "Gradient Boosting for Classification:",
          "Target is probability modeled via log-odds: F(x) = log(p / (1 - p)).",
          "Probability transformation: p = 1 / (1 + e⁻ᶠ⁽ˣ⁾).",
          "Pseudo-residual for Binary Cross-Entropy: rᵢ = yᵢ - pᵢ.",
          "Trees predict residuals in log-odds space, updating probabilities smoothly."
        ]
      },
      {
        "title": "Introduction to XGBOOST | Machine Learning",
        "summary": "Introduction to XGBoost (Extreme Gradient Boosting): system optimizations, algorithmic innovations, and Kaggle competition dominance.",
        "minutes": 80,
        "videoId": "C6aDw4y8qJ0",
        "notes": [
          "XGBoost (Extreme Gradient Boosting) innovations:",
          "Algorithmic: 2nd-order Taylor expansion of loss, custom regularization, built-in handling of missing values, tree pruning.",
          "System: Parallel block building, cache-aware data structures, out-of-core memory management.",
          "Why it dominates structured/tabular ML benchmarks and Kaggle competitions."
        ]
      },
      {
        "title": "XGBoost for Regression | XGBoost Part 2",
        "summary": "XGBoost for Regression: custom loss functions, tree complexity regularization (gamma, lambda), and Scikit-Learn wrapper API.",
        "minutes": 47,
        "videoId": "gmp2tS2joaA",
        "notes": [
          "XGBoost for Regression using xgboost.XGBRegressor:",
          "Parameters: learning_rate (eta), n_estimators, max_depth, subsample, colsample_bytree, reg_alpha (L1), reg_lambda (L2).",
          "Early stopping: early_stopping_rounds with eval_set to stop training when validation metric stops improving."
        ]
      },
      {
        "title": "XGBoost For Classification | How XGBoost works on Classification Problems",
        "summary": "XGBoost for Classification: binary and multi-class objective functions, evaluation metrics, and early stopping callbacks.",
        "minutes": 39,
        "videoId": "mELtxVUNNrw",
        "notes": [
          "XGBoost for Classification using xgboost.XGBClassifier:",
          "Objective functions: 'binary:logistic' for binary classification, 'multi:softprob' for multi-class.",
          "scale_pos_weight parameter for handling extreme class imbalances.",
          "Inspecting evaluation log curves across training and test iterations."
        ]
      },
      {
        "title": "The Maths Behind XGBoost | Machine Learning",
        "summary": "The complete mathematics behind XGBoost: 2nd-order Taylor expansion (Gradients gᵢ & Hessians hᵢ), optimal leaf weights, and Similarity Scores.",
        "minutes": 117,
        "videoId": "0Eo-_5bfers",
        "notes": [
          "The Mathematics Behind XGBoost:",
          "Objective: Obj = ∑ [gᵢ f_t(xᵢ) + (1/2) hᵢ f_t(xᵢ)²] + γ T + (1/2) λ ∑ wⱼ².",
          "First derivative (Gradient): gᵢ = ∂L(yᵢ, ŷ^{(t-1)}) / ∂ŷ^{(t-1)}.",
          "Second derivative (Hessian): hᵢ = ∂²L(yᵢ, ŷ^{(t-1)}) / ∂(ŷ^{(t-1)})².",
          "Optimal Leaf Weight: wⱼ* = - (∑_{i ∈ I_j} gᵢ) / (∑_{i ∈ I_j} hᵢ + λ).",
          "Gain Formula for Best Split: Gain = (1/2) [ (G_L² / (H_L + λ)) + (G_R² / (H_R + λ)) - (G² / (H + λ)) ] - γ."
        ]
      },
      {
        "title": "Stacking and Blending Ensembles",
        "summary": "Stacking and Blending Ensembles: constructing heterogeneous multi-level architectures with meta-learners and out-of-fold predictions.",
        "minutes": 35,
        "videoId": "O-aDHBGMqXA",
        "notes": [
          "Stacking (Stacked Generalization):",
          "Trains multiple heterogeneous base models (Level 0: XGBoost, Random Forest, SVM, KNN).",
          "Generates out-of-fold cross-validation predictions to prevent data leakage.",
          "Trains a meta-model (Level 1: Logistic Regression / Ridge) on the predictions of Level 0 models.",
          "Blending: Similar to stacking but uses a held-out validation set instead of cross-validation."
        ]
      }
    ]
  },
  {
    "name": "Unsupervised Learning & Clustering",
    "lessons": [
      {
        "title": "K-Means Clustering Algorithm | Geometric Intuition | Clustering | Unsupervised Learning",
        "summary": "K-Means Clustering: centroid initialization, Voronoi partitions, assignment step, update step, and convergence guarantees.",
        "minutes": 24,
        "videoId": "5shTLzwAdEc",
        "notes": [
          "K-Means Clustering is an unsupervised partitioning algorithm.",
          "Objective: Minimize Within-Cluster Sum of Squares (Inertia / WCSS): J = ∑_{k=1}^K ∑_{x ∈ C_k} ||x - μ_k||².",
          "Algorithm (Lloyd's Algorithm):",
          "1. Initialize K centroids randomly (or via K-Means++).",
          "2. Assign each point to the nearest centroid.",
          "3. Recalculate centroids as the mean of all assigned points.",
          "4. Repeat until centroid positions converge."
        ]
      },
      {
        "title": "K-Means Clustering Algorithm in Python | Practical Example | Student Clustering Example | sklearn",
        "summary": "K-Means in Scikit-Learn: selecting optimal clusters (K) using the Elbow Method (Inertia/WCSS) and Silhouette Coefficient analysis.",
        "minutes": 10,
        "videoId": "UPvv9SprgVo",
        "notes": [
          "Implementing K-Means with Scikit-Learn (KMeans(n_clusters=k, init='k-means++')).",
          "Elbow Method: Plotting Inertia vs K and finding the 'elbow' bend where WCSS reduction plateaus.",
          "Silhouette Analysis: Measures how similar a point is to its own cluster compared to neighboring clusters (Score ∈ [-1, +1]).",
          "K-Means++ initialization: Picks distant initial centroids with probability proportional to D(x)², preventing poor local minima."
        ]
      },
      {
        "title": "K-Means Clustering Algorithm From Scratch In Python | ML Algorithms From Scratch",
        "summary": "Building the K-Means clustering algorithm completely from scratch in Python with custom fit() and predict() methods.",
        "minutes": 34,
        "videoId": "MFraC1JObUo",
        "notes": [
          "Coding K-Means algorithm completely from scratch in Python with NumPy.",
          "Vectorized Euclidean distance matrix computation between points and centroids.",
          "Iterative cluster assignment and centroid update functions with convergence threshold."
        ]
      },
      {
        "title": "Agglomerative Hierarchical Clustering | Python Code Example",
        "summary": "Agglomerative Hierarchical Clustering: bottom-up tree merging, distance matrices, linkage criteria (Ward, Complete, Average), and Dendrograms.",
        "minutes": 37,
        "videoId": "Ka5i9TVUT-E",
        "notes": [
          "Agglomerative Hierarchical Clustering builds a bottom-up hierarchy of clusters.",
          "Starts with every point in its own cluster and iteratively merges the closest pair of clusters.",
          "Linkage criteria:",
          "- Ward: Minimizes total within-cluster variance increase.",
          "- Complete: Maximum distance between points in two clusters.",
          "- Average: Average pairwise distance between points.",
          "- Single: Minimum distance between points (prone to chaining effect).",
          "Visualizing cluster hierarchies with Dendrograms (scipy.cluster.hierarchy.dendrogram)."
        ]
      },
      {
        "title": "DBSCAN Clustering Algorithms | Density Based Clustering | How DBSCAN Works",
        "summary": "DBSCAN Clustering: density-based clustering, epsilon (ε) neighborhood, min_samples, core points, border points, and automatic noise detection.",
        "minutes": 34,
        "videoId": "1_bLnsNmhCI",
        "notes": [
          "DBSCAN (Density-Based Spatial Clustering of Applications with Noise):",
          "Core Parameters: eps (ε - neighborhood radius) and min_samples (minimum points within ε).",
          "Point classifications: Core Points (≥ min_samples in ε), Border Points (< min_samples but in ε of core), Noise Points (neither).",
          "Advantages: Can discover arbitrarily shaped clusters (moons, rings) and automatically detects noise/outliers without specifying K."
        ]
      }
    ]
  },
  {
    "name": "Advanced ML & Hyperparameter Optimization",
    "lessons": [
      {
        "title": "Imbalanced Data in Machine Learning | Undersampling | Oversampling | SMOTE",
        "summary": "Handling Imbalanced Datasets: Random Undersampling, Random Oversampling, SMOTE (Synthetic Minority Over-sampling Technique), and class_weight.",
        "minutes": 57,
        "videoId": "yh2AKoJCV3k",
        "notes": [
          "Addressing Class Imbalance in Machine Learning:",
          "1. Resampling: Random Undersampling (majority class) vs Random Oversampling (minority class).",
          "2. SMOTE (Synthetic Minority Over-sampling Technique): Synthesizes new minority points by linear interpolation along KNN line segments.",
          "3. Class Weights: Penalizing mistakes on minority classes inversely proportional to class frequencies (class_weight='balanced').",
          "4. Evaluation: Using PR-AUC (Precision-Recall AUC) instead of ROC-AUC for severe class skew."
        ]
      },
      {
        "title": "Hyperparameter Tuning using Optuna | Bayesian Optimization using Optuna",
        "summary": "Advanced Hyperparameter Optimization with Optuna: define-by-run search space, Tree-structured Parzen Estimator (TPE), and pruning trials.",
        "minutes": 59,
        "videoId": "E2b3SKMw934",
        "notes": [
          "Modern Hyperparameter Optimization with Optuna:",
          "Define-by-run API: Dynamically declare search parameters inside objective function (trial.suggest_float, trial.suggest_int, trial.suggest_categorical).",
          "Samplers: Tree-structured Parzen Estimator (TPE) for intelligent Bayesian search space exploration.",
          "Pruners: MedianPruner / Hyperband to terminate unpromising trial runs early, saving massive compute.",
          "Visualizing optimization histories, parameter importances, and slice plots."
        ]
      }
    ]
  }
];

function slug(title: string, index: number) {
  const base = title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
  return `${index}-${base}`;
}

let counter = 0;
export const LESSONS: Lesson[] = MODULES.flatMap((m) =>
  m.lessons.map((l) => {
    counter += 1;
    return {
      id: slug(l.title, counter),
      index: counter,
      videoId: l.videoId,
      title: l.title,
      summary: l.summary,
      minutes: l.minutes,
      module: m.name,
      notes: l.notes,
    };
  }),
);

export const MODULE_NAMES = MODULES.map((m) => m.name);

export const TOTAL_MINUTES = LESSONS.reduce((a, l) => a + l.minutes, 0);

export function lessonById(id: string) {
  return LESSONS.find((l) => l.id === id);
}

export function embedUrl(lesson: Lesson) {
  return `https://www.youtube-nocookie.com/embed/${lesson.videoId}?list=${PLAYLIST_ID}&index=${lesson.index}`;
}
