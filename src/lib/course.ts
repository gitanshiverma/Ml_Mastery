export const PLAYLIST_ID = "PLTDARY42LDV7WGmlzZtY-w9pemyPrKNUZ";

export type Lesson = {
  id: string;
  index: number; // position in the YouTube playlist (1-based)
  title: string;
  summary: string;
  minutes: number;
  module: string;
};

type Raw = [string, string, number];

const MODULES: { name: string; lessons: Raw[] }[] = [
  {
    name: "Foundations",
    lessons: [
      [
        "Introduction to Machine Learning",
        "What machine learning is, how supervised, unsupervised and reinforcement learning differ, and the kind of problems each one solves.",
        22,
      ],
      [
        "Simple Linear Regression Intuition",
        "Fitting the best straight line through data: slope, intercept, the cost function and gradient descent explained step by step.",
        30,
      ],
      [
        "Linear Regression Practical Implementation",
        "Building a linear regression model in Python with scikit-learn, from loading data to predicting and plotting results.",
        35,
      ],
      [
        "MSE, MAE and RMSE",
        "The three most common regression error measures, when each one is the right choice, and how outliers affect them.",
        18,
      ],
      [
        "R-squared and Adjusted R-squared",
        "How much of the variation your model really explains, and why adjusted R-squared punishes useless extra features.",
        20,
      ],
    ],
  },
  {
    name: "Regularised Regression",
    lessons: [
      [
        "Ridge Regression Intuition",
        "Adding an L2 penalty to shrink coefficients, control overfitting and stabilise models with correlated features.",
        24,
      ],
      [
        "Lasso Regression Intuition",
        "The L1 penalty that drives weak coefficients to zero, giving you automatic feature selection.",
        22,
      ],
      [
        "Ridge and Lasso Practical",
        "Hands-on notebook comparing plain, ridge and lasso regression, plus tuning alpha with grid search.",
        32,
      ],
      [
        "ElasticNet Regression",
        "Blending L1 and L2 penalties to get the best of ridge and lasso on messy, high-dimensional data.",
        20,
      ],
    ],
  },
  {
    name: "Classification",
    lessons: [
      [
        "Logistic Regression Intuition",
        "The sigmoid curve, log-loss and decision boundaries: how a regression idea becomes a classifier.",
        30,
      ],
      [
        "Logistic Regression Practical",
        "Training, evaluating and interpreting a logistic regression classifier in Python.",
        28,
      ],
      [
        "Naive Bayes — Part 1",
        "Bayes theorem from scratch and how conditional probability powers a surprisingly strong classifier.",
        25,
      ],
      [
        "Naive Bayes — Part 2",
        "Variants of Naive Bayes, working through a numeric example and a text-classification use case.",
        25,
      ],
      [
        "K Nearest Neighbours (KNN)",
        "Classifying by majority vote of neighbours, choosing K, and why distance metrics and scaling matter.",
        26,
      ],
    ],
  },
  {
    name: "Model Quality",
    lessons: [
      [
        "Overfitting and Underfitting",
        "Spotting models that memorise or oversimplify, and the practical fixes for both.",
        18,
      ],
      [
        "Bias Variance Tradeoff",
        "Why lowering bias usually raises variance, and how to find the sweet spot.",
        20,
      ],
      [
        "Performance Metrics — Confusion Matrix",
        "True and false positives and negatives, and reading a confusion matrix with confidence.",
        22,
      ],
      [
        "Performance Metrics — Precision, Recall, F1",
        "Choosing the right metric for imbalanced problems, plus ROC and AUC curves.",
        24,
      ],
    ],
  },
  {
    name: "Support Vector Machines",
    lessons: [
      [
        "Support Vector Machine Classifier",
        "Maximum margin classifiers, support vectors and the role of the C parameter.",
        30,
      ],
      [
        "Support Vector Regression",
        "Applying the margin idea to continuous targets with the epsilon-insensitive tube.",
        22,
      ],
      [
        "SVM Kernels",
        "The kernel trick: polynomial and RBF kernels that separate data no straight line can.",
        26,
      ],
    ],
  },
  {
    name: "Decision Trees",
    lessons: [
      [
        "Decision Tree Classifier",
        "Entropy, Gini impurity and information gain: how a tree decides where to split.",
        30,
      ],
      [
        "Decision Tree Pruning",
        "Pre-pruning and post-pruning techniques that keep trees from memorising the training set.",
        22,
      ],
      [
        "Decision Tree Practical",
        "Building, visualising and tuning a decision tree in scikit-learn.",
        28,
      ],
      [
        "Decision Tree Regressor",
        "Using trees for continuous predictions and how variance reduction replaces entropy.",
        22,
      ],
    ],
  },
  {
    name: "Validation Strategy",
    lessons: [
      [
        "Training, Test and Validation Data",
        "Why you need three splits, how to size them, and how leakage silently ruins results.",
        18,
      ],
      [
        "Types of Cross Validation",
        "Leave-one-out, K-fold, stratified and time-series cross validation compared.",
        24,
      ],
      [
        "Cross Validation with Python",
        "Running cross-validation and hyperparameter search properly in scikit-learn.",
        26,
      ],
    ],
  },
  {
    name: "Ensemble Techniques",
    lessons: [
      [
        "Ensembles — Bagging vs Boosting",
        "The two big families of ensembles, what each one fixes, and when to reach for them.",
        22,
      ],
      [
        "Random Forest Classifier and Regressor",
        "Bagging many decorrelated trees, feature sampling and reading feature importance.",
        30,
      ],
      [
        "Out Of Bag (OOB) Evaluation",
        "Free validation from the samples each tree never saw, and how to use the OOB score.",
        16,
      ],
      [
        "Boosting and AdaBoost",
        "Sequentially fixing the previous model's mistakes with reweighted samples.",
        28,
      ],
      [
        "Gradient Boosting",
        "Fitting new learners to residuals, learning rate, and the path to XGBoost.",
        30,
      ],
    ],
  },
  {
    name: "Automated EDA",
    lessons: [
      [
        "Automated EDA — Pandas Profiling and Dtale",
        "Generating full exploratory reports of any dataset in a couple of lines of code.",
        20,
      ],
      [
        "Automated EDA — Autoviz and SweetViz",
        "Fast automatic visualisation and dataset comparison before you model anything.",
        20,
      ],
    ],
  },
  {
    name: "Unsupervised Learning",
    lessons: [
      [
        "K Means Clustering",
        "Centroids, the elbow method and silhouette score for choosing the number of clusters.",
        30,
      ],
      [
        "Hierarchical and DBSCAN Clustering",
        "Dendrograms and density-based clustering for shapes K-Means cannot handle.",
        28,
      ],
      [
        "Anomaly Detection — Isolation Forest, DBSCAN, LOF",
        "Three practical ways to find outliers and rare events in real datasets.",
        26,
      ],
    ],
  },
];

function slug(title: string) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

let counter = 0;
export const LESSONS: Lesson[] = MODULES.flatMap((m) =>
  m.lessons.map(([title, summary, minutes]) => {
    counter += 1;
    return {
      id: slug(title),
      index: counter,
      title,
      summary,
      minutes,
      module: m.name,
    };
  }),
);

export const MODULE_NAMES = MODULES.map((m) => m.name);

export const TOTAL_MINUTES = LESSONS.reduce((a, l) => a + l.minutes, 0);

export function lessonById(id: string) {
  return LESSONS.find((l) => l.id === id);
}

export function embedUrl(lesson: Lesson) {
  return `https://www.youtube-nocookie.com/embed/videoseries?list=${PLAYLIST_ID}&index=${lesson.index}`;
}
