//updated with search and filter options 

// --------------------------------------- Project List (restructured)
export const ProjectList = [
  // ----------------- DATA ANALYTICS (top priority)
  //cyclistic-bike-share
  {
  id: "cyclistic-bike-share",
  img: "/img_coming_soon (2).png", // add a dashboard screenshot or key visualization
  title: "Cyclistic Bike-Share Case Study: Driving Member Conversion Through Data",
  description:
    "Data-driven analysis of user behavior for Chicago’s Cyclistic bike-share program. Identified key differences between casual riders and annual members to inform a membership growth strategy.",
  category: "Data Analytics",
  subCategory: ["Business Case Study", "R", "SQL", "Power BI"],
  stack: ["R", "Posit", "tidyverse", "ggplot2", "dplyr", "Power BI", "SQL"],
  year: 2024,
  featured: true,
  github_url: "[xx]", // add link to your notebook or repo
  demo_url: "/projects/cyclistic-bike-share",
  content: {
    overview:
      "As a junior data analyst on the Cyclistic marketing analytics team, I was tasked with discovering how annual members and casual riders use Cyclistic bikes differently. The goal was to help the company design targeted strategies to convert more casual riders into annual members.",
    problem:
      "Cyclistic’s marketing director aimed to boost revenue by increasing the number of annual memberships, which are significantly more profitable than single-ride or day-pass users. The challenge was to uncover behavioral insights distinguishing casual riders from annual members and recommend data-backed marketing strategies for conversion.",
    approach: [
      "Defined business problem and analysis plan following the Ask → Prepare → Process → Analyze → Share → Act framework.",
      "Collected and merged 12 months of Divvy (Cyclistic) trip data from public sources into a unified dataset.",
      "Cleaned and transformed the data using R (`tidyverse`, `lubridate`, `janitor`) to calculate ride lengths, weekdays, and user types.",
      "Conducted descriptive analysis to compare ride duration, frequency, and usage patterns between casual and member riders.",
      "Visualized trip trends by day of week, time of day, and season using `ggplot2` and Power BI to communicate clear differences in user behavior.",
      "Developed actionable recommendations for marketing and membership retention campaigns."
    ],
    outcome: {
      summary:
        "The analysis revealed clear distinctions between casual riders and annual members. Members tend to use bikes for short, frequent weekday commutes, while casual riders are more active on weekends for leisure trips. Insights led to marketing recommendations focused on converting casual riders through targeted digital campaigns and incentives.",
      metrics: [
        { label: "Dataset Size", value: "[xx] rides (12 months of trip data)" },
        { label: "Avg. Member Ride Duration", value: "[xx] minutes" },
        { label: "Avg. Casual Ride Duration", value: "[xx] minutes" },
        { label: "Peak Casual Usage", value: "Weekends (Saturday & Sunday)" },
        { label: "Peak Member Usage", value: "Weekday commute hours" }
      ]
    },
    data: {
      sources: [
        { name: "Divvy Trip Data (Motivate International Inc.)", url: "https://divvy-tripdata.s3.amazonaws.com/index.html" },
        //{ name: "Cyclistic Case Study Prompt", url: "[link to PDF or Coursera reference]" }
      ],
      size: "[xx] rows × [xx] columns after cleaning",
      timeframe: "Latest 12 months of historical trips (e.g., Jan–Dec 2020)"
    },
    features: [
      "Data cleaning and transformation in R (tidyverse workflow)",
      "Exploratory Data Analysis (EDA) with descriptive statistics and grouped summaries",
      "Data visualization of trends by user type, day of week, and ride length",
      "Recommendations for targeted marketing to casual users"
    ],
    challenges: [
      "Dealing with inconsistent date/time formats across monthly CSVs",
      "Removing duplicates and null ride data",
      "Balancing visualization clarity with the volume of records"
    ],
    learnings: [
      "Cleaning and validating multiple datasets improves analytical consistency.",
      "Behavioral segmentation is key to actionable business insights.",
      "Effective data storytelling requires both clarity and business context."
    ],
    gallery: [
      { src: "/cyclistic-usage-by-day.png", caption: "Average rides by day of week for members vs. casual riders" },
      { src: "/cyclistic-ride-duration.png", caption: "Average ride duration comparison between user types" },
      { src: "/cyclistic-dashboard.png", caption: "Power BI dashboard summarizing Cyclistic insights" }
    ]
  }
},
//british-airways-reviews-dashboard
{
  id: "british-airways-reviews-dashboard",
  img: "/british-airways-dashboard.png", // use a snapshot of your Tableau dashboard
  title: "British Airways Customer Reviews: Interactive Tableau Dashboard",
  description:
    "An end-to-end Tableau project analyzing customer reviews for British Airways. Built interactive charts and maps with parameters and filters to uncover insights into traveler satisfaction and aircraft performance.",
  category: "Data Analytics",
  subCategory: ["Tableau", "Dashboard Design"],
  stack: ["Tableau", "Excel/CSV", "Parameters", "Data Blending"],
  year: 2025,
  featured: true,
  github_url: "https://public.tableau.com/app/profile/filmon.haile.assefa/viz/BritishAirwaysReviews_17620118636620/Dashboard1", // link to your Tableau Public or GitHub repo
  demo_url: "/projects/british-airways-reviews-dashboard",
  content: {
    overview:
      "This project visualizes over [xx] British Airways customer reviews to reveal patterns in traveler satisfaction, aircraft performance, and service quality. Using two datasets (reviews and country mapping), I built an interactive Tableau dashboard with dynamic filters, metrics selection, and a global map of average ratings.",
    problem:
      "Airline review data is rich but often underutilized for operational and marketing insights. The objective was to design a dashboard that empowers users to explore trends in customer satisfaction by geography, aircraft type, and traveler category.",
    approach: [
      "Imported two CSV files: one containing review details (ratings, comments, traveler type, aircraft) and another for country-to-region mapping.",
      "Performed initial data cleanup in Excel and Tableau Prep (renamed fields, corrected nulls, unified date formats).",
      "Created a geographic map showing average ratings by country of reviewer.",
      "Designed supporting visuals: overall KPI cards, monthly trend lines, and aircraft-type performance charts.",
      "Implemented a ‘Pick-a-Metric’ parameter allowing users to toggle between different metrics (overall rating, cabin staff, food, seat comfort, etc.).",
      "Added interactive filters for traveler type, seat class, and review date to tailor insights for different customer segments.",
      "Styled the dashboard with consistent color palette, typography, and spacing for a professional presentation ready for Tableau Public."
    ],
    outcome: {
      summary:
        "Delivered a polished, fully interactive Tableau dashboard that provides both executive-level KPIs and detailed drill-downs into customer sentiment. The dashboard enables exploratory analysis by traveler demographics and operational categories.",
      metrics: [
        { label: "Total Reviews Analyzed", value: "1325" },
        { label: "Average Overall Rating", value: "4.2" },
        { label: "Aircraft Types", value: "9 Main Aircrafts and 10th group for various aircraft with less than 55 flights" },
        { label: "Interactive Controls", value: "Metric selector, Month date, Seat type, Traveller type, Aircraft group( 10 groups), Continent" }
      ]
    },
    data: {
      sources: [
        { name: "British Airways Customer Reviews (Kaggle/CSV Source)", url: "https://www.kaggle.com/datasets/filmonhaile/british-airways-customer-review-dataset" },
        { name: "Country Mapping CSV", url: "https://www.kaggle.com/datasets/filmonhaile/british-airways-customer-review-dataset?select=Countries.csv" }
      ],
      size: "1604 rows × 23 columns combined",
      timeframe: "2015–2023 reviews"
    },
    features: [
      "Interactive global map of customer satisfaction",
      "Dynamic ‘Pick-a-Metric’ parameter for switching KPIs",
      "Monthly trends and aircraft-type comparison charts",
      "Filterable views by traveler type, seat class, and date",
      "Professional dashboard design with consistent color theme"
    ],
    challenges: [
      "Blending two datasets with non-matching country names",
      "Maintaining responsiveness while using multiple filters",
      "Balancing information density and visual clarity"
    ],
    learnings: [
      "Mastered Tableau parameters and multi-filter dashboard design",
      "Learned to structure dashboards for both summary and detail views",
      "Strengthened data-blending and interactivity best practices"
    ],
    gallery: [
      { src: "/british-airways-dashboard.png", caption: "Interactive Tableau dashboard overview" },
      { src: "/british-airways-map.png", caption: "Average rating by reviewer country" },
      { src: "/british-airways-monthly-trends.png", caption: "Monthly review trends and aircraft-type ratings" }
    ]
  }
},
//movie-revenue-correlation
{
  id: "movie-revenue-correlation",
  img: "/movie-scatter-budget-gross.png", // add a banner (e.g., annotated heatmap or scatter w/ regression)
  title: "Movie Revenue Correlation using Python",
  description:
    "Exploratory analysis of Kaggle movie data to identify which features correlate with gross revenue. Cleaned and encoded data, built correlation visuals, and validated insights with multiple methods.",
  category: "Data Analytics",
  subCategory: ["Python", "EDA", "Visualization"],
  stack: ["Python", "Jupyter", "Pandas", "NumPy", "Seaborn", "Matplotlib"],
  year: 2025,
  featured: true,
  github_url: "https://github.com/Filazion/movie-revenue-correlation.git", // link to your notebook/repo
  demo_url: "/projects/movie-revenue-correlation",
  content: {
    overview:
      "Using a public movie industry dataset from Kaggle, I explored which variables (budget, company, rating, runtime, etc.) correlate with gross revenue. The analysis walks through data cleaning, type fixes, feature engineering, and correlation visualization to surface the strongest drivers.",
    problem:
      "Studios and analysts want to understand which film attributes are most associated with box office success. The task: clean and encode mixed-type data, then quantify and visualize correlations reliably.",
    approach: [
      "Loaded the Kaggle movie dataset into Jupyter via Anaconda; inspected schema and fixed data types (e.g., numeric casts, date parsing).",
      "Engineered a `year` feature from release dates and standardized column names.",
      "Handled missing values and deduplicated records; trimmed obvious outliers as sensitivity checks.",
      "Explored relationships with scatter plots, regression plots, and grouped summaries.",
      "Computed multiple correlation views: Pearson on numeric features, and Pearson/Spearman after label-encoding categoricals (studio, genre, rating).",
      "Cross-validated findings by comparing raw vs. encoded correlations and checking robustness to outliers."
    ],
    outcome: {
      summary:
        "Confirmed a strong positive relationship between `budget` and `gross earnings`, with secondary signals from `year` and selected categorical encodings  `ratings`. Produced a compact set of visuals that communicate the clearly.",
      metrics: [
        { label: "Rows analyzed", value: "7669" },
        //{ label: "Numeric features", value: "" },
        { label: "Top correlation (budget↔gross)", value: "0.75" },
        { label: "Charts produced", value: "4+" }
      ]
    },
    data: {
      sources: [
        { name: "Kaggle Movie Dataset", url: "https://www.kaggle.com/datasets/danielgrijalvas/movies" } // paste the specific dataset link you used
      ],
      size: "7669 rows × 15 columns after cleaning",
      timeframe: "6820 movies in total with 220 movies per year released between 1986-2019"
    },
    features: [
      "End-to-end EDA notebook with clean Pandas pipeline",
      "Correlation heatmap (numeric + encoded categoricals)",
      "Scatter + regression plots for top drivers",
      "Reproducible environment and instructions (README)"
    ],
    challenges: [
      "Mixed data types and inconsistent date formats across sources",
      "Encoding categorical variables without leakage or bias",
      "Correlation distortion from outliers, mitigated via sensitivity checks"
    ],
    learnings: [
      "Encoding strategy matters: compare correlations pre/post encoding",
      "Always sanity-check correlations with raw scatter plots",
      "Document cleaning decisions to keep analyses reproducible"
    ],
    gallery: [
      { src: "/movie-scatter-budget-gross.png", caption: "Budget vs. Gross with regression line" },
      { src: "/movie-corr-heatmap.png", caption: "Correlation heatmap (numeric + encoded categoricals)" },
      { src: "/movie-top-factors.png", caption: "Top correlated features with gross revenue" }
    ]
  }
},
//nashville-housing-cleaning
{
  id: "nashville-housing-cleaning",
  img: "/wsj-vaccines-example-1.png",
  title: "Nashville Housing Data Cleaning with SQL Server",
  description:
    "Comprehensive data cleaning project using SQL Server to standardize, deduplicate, and prepare Nashville housing data for analysis.",
  category: "Data Analytics",
  subCategory: ["SQL", "ETL", "Data Wrangling"],
  stack: ["SQL Server", "CTE", "String Functions"],
  year: 2025,
  featured: false,
  github_url: "https://github.com/Filazion/Nashville-Housing-Data-Cleaning-with-SQL",
  demo_url: "/projects/nashville-housing-cleaning",
  content: {
    overview:
      "This project demonstrates practical SQL data-cleaning techniques on a real-world housing dataset. It focuses on standardizing values, populating missing data, splitting address fields, and removing duplicates.",
    problem:
      "The Nashville housing dataset contained inconsistent date formats, missing property addresses, and redundant rows. The objective was to clean the dataset for reliable analysis and visualization.",
    approach: [
      "Imported Nashville housing data from GitHub into SQL Server.",
      "Standardized date formats using CONVERT() and CAST().",
      "Filled missing property addresses using self-JOINs on ParcelID.",
      "Split address fields into Address, City, and State using SUBSTRING(), CHARINDEX(), and PARSENAME().",
      "Replaced 'Y'/'N' values with 'Yes'/'No' via CASE statements.",
      "Removed duplicates with ROW_NUMBER() in a CTE, then deleted unused columns."
    ],
    outcome: {
      summary:
        "Produced a fully cleaned, structured dataset ready for visualization or business analysis. This project highlights strong understanding of SQL cleaning workflows.",
      metrics: [
        { label: "Rows Cleaned", value: "2900" },
        { label: "Columns Modified", value: "3" },
        { label: "Duplicates Removed", value: "128" }
      ]
    },
    data: {
      sources: [
        { name: "Nashville Housing Data Cleaning with SQL scripts + Dataset(GitHub Source)", url: "https://github.com/Filazion/Nashville-Housing-Data-Cleaning-with-SQL" },
        { name: "Nashville Housing Data (Kaggle Source)", url: "https://www.kaggle.com/datasets/tmthyjames/nashville-housing-data" }
      ],
      size: "729896 rows × [17 columns",
      timeframe: "Single dataset snapshot"
    },
    features: [
      "Address standardization and normalization",
      "Null imputation using JOINs",
      "Text parsing for city/state extraction",
      "Duplicate detection using CTE"
    ],
    challenges: [
      "Parsing inconsistent address structures",
      "Populating missing values without over-imputation",
      "Maintaining data integrity post-deletion"
    ],
    learnings: [
      "Learned best practices in SQL data cleaning and normalization.",
      "Reinforced understanding of window functions and CASE logic.",
      "Improved confidence handling messy real-world data."
    ],
    gallery: [
      { src: "/nashville-housing-query.png", caption: "SQL cleaning script in action" },
      { src: "/nashville-housing-before-after.png", caption: "Before and after cleaning comparison" }
    ]
  }
},
// //bellabeat-case-study
// {
//   id: "bellabeat-case-study",
//   img: "/working_on_it.png", // add a Power BI/Tableau dashboard screenshot
//   title: "Bellabeat Case Study: Smart Wellness Marketing Analytics",
//   description:
//     "Comprehensive data-driven case study analyzing FitBit user behavior to recommend marketing strategies for Bellabeat, a women’s wellness technology company. Conducted full data analysis lifecycle using R and SQL.",
//   category: "Data Analytics",
//   subCategory: ["Business Case Study", "R", "SQL"],
//   stack: ["R", "RStudio", "tidyverse", "ggplot2", "dplyr", "Power BI", "SQL"],
//   year: 2025,
//   featured: true,
//   github_url: "[xx]", // add your notebook or GitHub link
//   demo_url: "/projects/bellabeat-case-study",
//   content: {
//     overview:
//       "Bellabeat, a high-tech wellness company for women, wanted to understand how consumers use smart fitness devices to improve their marketing strategy. As part of this case study, I analyzed FitBit activity data to uncover behavioral trends and actionable insights that could guide Bellabeat’s digital marketing and product decisions.",
//     problem:
//       "Bellabeat’s leadership wanted to explore how smart device usage data could identify new growth opportunities. The goal was to answer: (1) What are key trends in smart device usage? (2) How can these trends apply to Bellabeat customers? (3) How can they influence Bellabeat’s marketing strategy?",
//     approach: [
//       "Defined the business objective and outlined analysis roadmap (Ask → Prepare → Process → Analyze → Share → Act).",
//       "Collected and explored FitBit Fitness Tracker data from 30 users via Kaggle (public domain).",
//       "Cleaned, merged, and verified data consistency using R (`tidyverse`, `lubridate`, `janitor`).",
//       "Performed descriptive analysis on activity, steps, calories, sleep, and heart rate metrics to detect patterns and correlations.",
//       "Created visualizations in ggplot2 to communicate insights, such as daily activity trends, usage by weekday, and relationship between sleep and activity levels.",
//       "Developed recommendations to enhance Bellabeat’s marketing campaigns and product engagement based on usage patterns."
//     ],
//     outcome: {
//       summary:
//         "Delivered a concise report with key insights into user activity patterns and lifestyle habits. Proposed targeted marketing and engagement strategies that Bellabeat could apply to increase customer retention and device adoption.",
//       metrics: [
//         { label: "Dataset", value: "FitBit Fitness Tracker (30 users)" },
//         { label: "Analysis Period", value: "[xx] days of activity logs" },
//         { label: "Top User Segment", value: "[xx] active female users aged 25–40" },
//         { label: "Key Insight", value: "Users most active on [xx] days, least on [xx]" }
//       ]
//     },
//     data: {
//       sources: [
//         { name: "FitBit Fitness Tracker Data (Kaggle)", url: "https://www.kaggle.com/datasets/arashnic/fitbit" },
//         { name: "Bellabeat Company Website", url: "https://bellabeat.com/" }
//       ],
//       size: "[xx] rows, [xx] columns across 18 CSV files",
//       timeframe: "[xx] (e.g., April–May 2016)"
//     },
//     features: [
//       "Exploratory Data Analysis (EDA) and visualization in R",
//       "Correlation analysis between daily activity, sleep, and calorie burn",
//       "Identification of user engagement patterns by weekday and device usage",
//       "Marketing recommendations for app engagement and membership programs"
//     ],
//     challenges: [
//       "Dealing with missing or inconsistent timestamps in user activity data",
//       "Balancing outliers and sparse usage patterns among participants",
//       "Combining multiple datasets into a single clean analytical model"
//     ],
//     learnings: [
//       "Clear question definition ensures structured analysis and better storytelling.",
//       "R is effective for cleaning and visualizing wearable data at small scale.",
//       "Behavioral clustering can directly inform targeted marketing strategies."
//     ],
//     gallery: [
//       { src: "/bellabeat-activity-trends.png", caption: "Daily activity and step trends" },
//       { src: "/bellabeat-correlation-plot.png", caption: "Correlation between sleep duration and activity" },
//       { src: "/bellabeat-insights-dashboard.png", caption: "Summary dashboard of key findings" }
//     ]
//   }
// },
// //aviation-trend-analysis
// {
//   id: "aviation-trend-analysis",
//   img: "/working_on_it.png",
//   title: "Aviation Accident Trend & Seasonality Analysis",
//   description: "Analyzing long-term trends and seasonal patterns in Canadian aviation accidents and incidents using TSB occurrence data.",
//   category: "Data Analysis",
//   subCategory: ["Time Series", "Visualization"],
//   stack: ["Python", "Pandas", "Matplotlib", "Seaborn", "Statsmodels"],
//   year: 2025,
//   featured: false,
//   github_url: "#",
//   demo_url: "#",
// },
// //aviation-type-operation-analysis
// {
//   id: "aviation-type-operation-analysis",
//   img: "/aviation-type-operation-analysis.png",
//   title: "Aircraft Type & Operation Breakdown",
//   description: "Comparative study of accident rates across aircraft types and operator categories (airliner, commuter, air taxi, etc.) with rate calculations per aircraft movements.",
//   category: "Data Analysis",
//   subCategory: ["Exploratory", "Statistical Comparison"],
//   stack: ["Python", "Pandas", "Seaborn", "Matplotlib"],
//   year: 2025,
//   featured: false,
//   github_url: "#",
//   demo_url: "#",
// },
// //aviation-geospatial-analysis
// {
//   id: "aviation-geospatial-analysis",
//   img: "/aviation-geospatial-analysis.png",
//   title: "Geospatial Distribution & Mapping of Air Occurrences",
//   description: "Mapping accidents and incidents across Canada using geospatial analysis to identify regional hot-spots and spatial patterns.",
//   category: "Data Analysis",
//   subCategory: ["Geospatial", "Mapping"],
//   stack: ["Python", "GeoPandas", "Matplotlib", "Seaborn"],
//   year: 2025,
//   featured: false,
//   github_url: "#",
//   demo_url: "#",
// },
// //flight-phase-injury-analysis
// {
//   id: "flight-phase-injury-analysis",
//   img: "/flight-phase-injury-analysis.png",
//   title: "Flight Phase vs. Injury Severity Analysis",
//   description: "Exploring how different flight phases correlate with injury severity levels by linking events & phases data with injury counts.",
//   category: "Data Analysis",
//   subCategory: ["Exploratory", "Cross-Tabulation"],
//   stack: ["Python", "Pandas", "Seaborn", "Matplotlib"],
//   year: 2025,
//   featured: false,
//   github_url: "#",
//   demo_url: "#",
// },
//"weather-accident-correlation"
{
  id: "weather-accident-correlation",
  img: "/weather-accident-correlation.png",
  title: "Weather & Accident Severity Correlation",
  description: "Investigating how weather conditions relate to accident severity using logistic regression and statistical analysis.",
  category: "Data Analysis",
  subCategory: ["Regression", "Correlation"],
  stack: ["Python", "Pandas", "Scikit-learn", "Seaborn"],
  year: 2025,
  featured: false,
  github_url: "#",
  demo_url: "#",
},
//tsb-air-safety-trends
{
  id: "tsb-air-safety-trends",
  img: "/working_on_it.png",
  title: "Air Safety Trends (Canada): Using the TSB Datasets - Part of a Series",
  description:
    "Exploratory data analysis and visual storytelling project on Canadian aviation incidents using public TSB datasets. Examines trends in aircraft classes, weather conditions, regional distribution, and seasonal variations to uncover safety insights.",
  category: "Data Analytics",
  subCategory: ["EDA", "Visualization", "Trend Analysis"],
  stack: ["Python", "Pandas", "Matplotlib", "Plotly", "Power BI"],
  year: 2019,
  featured: true,
  github_url: "https://github.com/Filazion/Air-transportation-occurrence-TSB",
  demo_url: "/projects/tsb-air-safety-trends",
  content: {
    overview:
      "This project explores aviation safety trends in Canada using Transportation Safety Board (TSB) datasets. The analysis focuses on incident frequency, aircraft categories, contributing factors, and seasonal or geographic variations to identify recurring risk patterns in Canadian aviation.",
    problem:
      "The TSB dataset includes large volumes of unstructured and mixed-format data, with multiple fields representing different types of incidents, aircraft models, and weather conditions. The challenge was to clean, merge, and analyze these datasets to reveal trends and actionable safety insights.",
    approach: [
      "Downloaded and parsed TSB aviation occurrence datasets from the official open data portal.",
      "Cleaned and standardized columns using Pandas (renamed, dropped nulls, and unified date formats).",
      "Derived new features such as season, region, and aircraft size for deeper trend segmentation.",
      "Performed exploratory data analysis (EDA) to identify top causes and high-risk categories.",
      "Used Matplotlib and Plotly for interactive visualizations of incident frequency and severity.",
      "Integrated results into a Power BI dashboard to visualize trends and correlations by region, time, and aircraft class."
    ],
    outcome: {
      summary:
        "Delivered a data-driven report and Power BI dashboard visualizing Canadian air safety trends by category, season, and geography. The analysis helped identify recurring safety issues and periods of increased risk for certain aircraft classes and regions.",
      metrics: [
        { label: "Incidents Analyzed", value: "" },
        { label: "Total Years Covered", value: "1995-2024" },
        { label: "Regions Analyzed", value: "Canada, Focus on the most incident rate on Ontario, Montreal" },
        { label: "Aircraft Classes Included", value: "86" }
      ]
    },
    data: {
      sources: [
        { name: "Transportation Safety Board of Canada (TSB) Aviation Occurrences Dataset", url: "https://www.tsb.gc.ca/eng/stats/aviation/data-5.html" },
        //{ name: "The Dataset contains 5 tables ", url: "[xx]" }
      ],
      //size: "[xx] rows × [xx] columns",
      //timeframe: "[xx] – [xx]"
    },
    features: [
      "Comprehensive EDA on national aviation incident data",
      "Interactive time-series and regional visualizations",
      "Classification of incidents by aircraft type and weather conditions",
      "Power BI dashboard for trend comparison and reporting"
    ],
    challenges: [
      "Cleaning inconsistent regional and aircraft category data",
      "Dealing with incomplete records and ambiguous causes",
      "Optimizing Python scripts for large dataset processing"
    ],
    learnings: [
      "Improved data cleaning and transformation skills using Pandas.",
      "Enhanced storytelling and visual analytics techniques in Power BI and Plotly.",
      "Gained deeper understanding of aviation safety data and government open data structures."
    ],
    gallery: [
      { src: "/tsb-dashboard.png", caption: "Power BI dashboard summarizing aviation incidents by region and season" },
      { src: "/tsb-eda-plots.png", caption: "Python-based exploratory data analysis showing yearly and category trends" }
    ]
  }
},
//sql-covid-impact
{
  id: "sql-covid-impact",
  img: "/sql-covid-dashboard.png",
  title: "Global COVID-19 Data Analysis with SQL Server & Tableau",
  description:
    "SQL-based data analysis project to uncover global COVID-19 trends and vaccination progress using advanced queries, joins, and window functions, visualized in Tableau for clear insights.",
  category: "Data Analytics",
  subCategory: ["SQL", "Data Visualization", "KPI Analysis"],
  stack: ["SQL Server", "CTE", "Window Functions", "Joins", "Tableau"],
  year: 2024,
  featured: true,
  github_url: "https://github.com/Filazion/sql-covid-impact-analysis", // link to your GitHub repo
  demo_url: "https://public.tableau.com/app/profile/filmon.haile.assefa/viz/Covid19Dashboard_17619421805700/Covid19Dashboard",
  content: {
    overview:
      "This project combines SQL Server analysis and Tableau visualization to explore global COVID-19 data trends. The analysis covers total cases, deaths, infection rates, and vaccination progress across countries and continents from 2020 to 2024.",
    problem:
      "The global COVID-19 dataset contained millions of records with mixed metrics (cases, deaths, and vaccinations) across multiple tables. The challenge was to transform and combine these datasets to create meaningful insights on infection, mortality, and vaccination rates.",
    approach: [
      "Imported COVID-19 datasets (cases, deaths, and vaccinations) into SQL Server using the Import/Export Wizard.",
      "Cleaned and standardized country-level data by removing null values and filtering out non-country aggregates.",
      "Used aggregate functions and grouping to calculate total cases, deaths, and mortality rates per country.",
      "Computed infection rates by dividing total cases by population to determine the percentage of infected individuals.",
      "Applied window functions to calculate rolling vaccination totals per country using SUM() OVER(PARTITION BY).",
      "Created SQL views to consolidate global KPIs for visualization in Tableau.",
      "Designed a Tableau dashboard to visualize global infection and death trends, vaccination progress, and per-continent summaries."
    ],
    outcome: {
      summary:
        "Generated an interactive Tableau dashboard showcasing global COVID-19 KPIs, including cases, deaths, infection rates, and vaccination trends. The SQL analysis efficiently combined complex datasets and prepared insights ready for visualization and public health analysis.",
      metrics: [
        { label: "Global Total Cases", value: "775,935,057" },
        { label: "Global Deaths", value: "7,060,982" },
        { label: "Average Death Rate", value: "0.91%" },
        //{ label: "Vaccination Records Processed", value: "89" }
      ]
    },
    data: {
      sources: [
        { name: "Our World in Data – COVID-19 Dataset", url: "https://ourworldindata.org/covid-deaths" },
        { name: "COVID SQL Scripts (GitHub Repository)", url: "https://github.com/Filazion/sql-covid-impact-analysis" },
        { name: "Tableau Dashboard", url: "https://public.tableau.com/app/profile/filmon.haile.assefa/viz/Covid19Dashboard_17619421805700/Covid19Dashboard" }
      ],
      size: "85,000+ rows × 20 columns",
      timeframe: "2020 – 2024"
    },
    features: [
      "Complex SQL joins to merge cases and vaccination tables",
      "Rolling calculations using window functions (SUM OVER)",
      "Mortality and infection rate metrics per population",
      "Tableau dashboard with interactive KPIs, maps, and trends"
    ],
    challenges: [
      "Handling null values and incomplete vaccination data",
      "Preventing arithmetic overflow errors in cumulative calculations",
      "Balancing SQL performance with large dataset queries"
    ],
    learnings: [
      "Strengthened skills in SQL window functions and analytical queries.",
      "Gained experience integrating SQL outputs with Tableau dashboards.",
      "Learned to structure large datasets for BI analysis and storytelling."
    ],
    gallery: [
      { src: "/sql-covid-dashboard.png", caption: "Tableau dashboard showcasing global COVID-19 trends" },
      { src: "/covid-sql-script.png", caption: "SQL script performing global infection and vaccination analysis" }
    ]
  }
},
    //Data Visualization in Bioinformatics (R)
{
  id: "coss-data-vis-r",
  img: "/penguin_time.gif", // add a banner (e.g., a collage of your plots)
  title: "Data Visualization in Bioinformatics (R): Compute Ontario",
  description:
    "Hands-on R/ggplot2 course focused on turning bioinformatics data into publication-ready visuals. Reproduced complex plots end-to-end and built a reusable plotting workflow.",
  category: "Data Analytics",                     // keeps your current tabs intact
  subCategory: ["Bioinformatics"],
  stack: ["R", "RStudio", "tidyverse", "ggplot2", "dplyr", "cowplot", "RColorBrewer", "gganimate"],
  year: 2025,
  featured: true,
  github_url: "#", // reference repo (course materials) fork the repo [https://github.com/redgar598/COSS_data_vis_R]
  demo_url: "/projects/coss-data-vis-r",          // routes to your article-style page
  content: {
    overview:
      "I completed the ‘Data Visualization in Bioinformatics (R)’ module at the Compute Ontario Summer School. The course covered effective visualization principles and a practical toolkit in R/ggplot2, from setup to advanced plot types.",
    problem:
      "Bioinformatics analyses often produce dense, high-dimensional outputs. The challenge is communicating them clearly and accurately to both technical and non-technical audiences.",
    approach: [
      "Environment setup in RStudio with required packages (ggplot2, dplyr, cowplot, scales, RColorBrewer; optional: ggstream, palmerpenguins, dslabs, gganimate).",
      "Worked through staged notebooks: ggplot basics → layered grammar → aesthetics, scales, themes → publication-ready composition.",
      "Reproduced complex visuals from genomics and public datasets: differential expression, vaccination efficacy, patient mutation heatmaps, agriculture stream plots, geospatial maps, single-cell UMAP, and animated plots.",
      "Documented a reusable plotting template (data prep → ggplot scaffold → theming → export) for future projects."
    ],
    outcome: {
      summary:
        "Built a repeatable R visualization workflow and a gallery of production-ready plots applicable to bioinformatics and general analytics.",
      metrics: [
        { label: "Plot types reproduced", value: "7+" },
        { label: "Core packages used", value: "6+" },
        { label: "Deliverable", value: "Plot gallery + R templates" }
      ]
    },
    data: {
      sources: [
        { name: "GSE4051: Mouse photoreceptor gene expression", url: "https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE4051" },
        { name: "Course materials & outline", url: "https://redgar598.github.io/COSS_data_vis_R/" }
      ],
      size: "Multiple tidy tables (genes × samples × conditions)",
      timeframe: "Course sprint (1–2 days + independent practice)"
    },
    features: [
      "Publication-style theming and layout with cowplot",
      "Volcano/DE plots, efficacy comparisons, mutation heatmaps",
      "Geospatial map (Bigfoot sightings) and stream plots",
      "Single-cell UMAP and animated ggplots (gganimate)"
    ],
    challenges: [
      "Balancing aesthetics with truthful encoding (avoiding misleading scales)",
      "Harmonizing themes across plots for consistent storytelling",
      "Exporting crisp, presentation-ready SVG/PNG in consistent aspect ratios"
    ],
    learnings: [
      "Start with the question → pick the right chart → then style",
      "‘Tufte-ish’ minimalism improves signal-to-noise in scientific figures",
      "A reusable ggplot scaffold accelerates analysis-to-story workflows"
    ],
    gallery: [
      { src: "/volcano.png", caption: "Differential expression (volcano-style)" },
      { src: "/violin_genotype_twogene.jpeg", caption: "Single-cell UMAP with outline styling" },
      { src: "/wsj-vaccines-example-1.png", caption: "Vaccines output over time (stream plot)" },
      { src: "/bigfoot.png", caption: "Geospatial map — sightings dataset" }
    ]
  }
},

  // ----------------- DATA SCIENCE & ML
  //plant-disease-ml
{
  id: "plant-disease-ml",
  img: "/Plant-diseas-detection.png",
  title: "Plant Leaf Disease Classification + Detection + Pesticide Recommendation (ML + Streamlit)",
  description:
    "End-to-end deep learning and computer vision project that detects and classifies plant leaf diseases using CNN and YOLOv8, then recommends suitable pesticides — all integrated into an interactive Streamlit web app.",
  category: "Data Science & ML",
  subCategory: ["Computer Vision", "Classification", "Object Detection", "AI Applications"],
  stack: ["TensorFlow", "YOLOv8", "OpenCV", "Streamlit", "Python", "Hugging Face Spaces"],
  year: 2023,
  featured: false,
  github_url: "[xx]",
  demo_url: "/projects/plant-disease-ml",
  content: {
    overview:
      "This project delivers an AI-powered pipeline that automates plant disease identification and pesticide recommendation. It combines CNN-based classification, YOLOv8 object detection, and rule-based reasoning into one unified Streamlit web application. The system enables users to upload leaf images, view detected infected areas, and receive corresponding pesticide suggestions in real time.",
    problem:
      "Manual plant disease identification is time-consuming, inconsistent, and heavily dependent on expert knowledge. The challenge was to build a scalable, automated, and accessible AI system that can accurately detect diseases from plant images and provide practical pesticide recommendations to aid farmers and researchers.",
    approach: [
      "Collected and preprocessed 54k+ labeled images from the PlantVillage dataset (38 disease classes).",
      "Trained a TensorFlow CNN model for plant leaf disease classification based on image features.",
      "Developed a YOLOv8-based object detection model to highlight infected leaf regions with bounding boxes.",
      "Created a rule-based reasoning engine to generate pesticide recommendations based on the predicted disease.",
      "Built an interactive Streamlit web interface for uploading, analyzing, and visualizing predictions in real time.",
      "Deployed the application on Hugging Face Spaces for public access and demonstration."
    ],
    outcome: {
      summary:
        "The final system accurately classifies plant diseases, detects infected regions, and suggests relevant pesticides through a user-friendly web interface. The integration of YOLOv8 and CNN models provides explainable and visually interpretable AI results, supporting smart agriculture and precision crop management.",
      metrics: [
        { label: "Classification Accuracy", value: "[xx]%" },
        { label: "Detection mAP (YOLOv8)", value: "[xx]" },
        { label: "Images Processed", value: "54,303" },
        { label: "Total Classes", value: "38" }
      ]
    },
    data: {
      sources: [
        { name: "PlantVillage Dataset (Kaggle)", url: "https://www.kaggle.com/datasets/emmarex/plantdisease" },
        { name: "PlantVillage for Object Detection (YOLO)", url: "https://www.kaggle.com/datasets/sebastianpalaciob/plantvillage-for-object-detection-yolo" }
      ],
      size: "54,303 labeled images (256×256 px average)",
      timeframe: "Data collection and model training: 2023"
    },
    features: [
      "CNN-based disease classification using TensorFlow/Keras",
      "YOLOv8 object detection for infected region localization",
      "Rule-based pesticide recommendation engine",
      "Streamlit web interface with image upload and real-time inference",
      "Optional deployment on Hugging Face Spaces for public access"
    ],
    challenges: [
      "Combining detection and classification models into a unified pipeline",
      "Handling class imbalance across multiple plant species and diseases",
      "Optimizing inference speed for real-time performance in Streamlit"
    ],
    learnings: [
      "Enhanced understanding of integrating CNN and YOLO architectures for multi-stage AI tasks.",
      "Learned deployment strategies for ML models using Streamlit and Hugging Face Spaces.",
      "Gained experience in combining AI reasoning with rule-based systems for practical applications."
    ],
    gallery: [
      { src: "/plant-disease-streamlit-ui.png", caption: "Streamlit web interface for uploading and analyzing plant leaf images" },
      { src: "/yolov8-detection-sample.png", caption: "YOLOv8 detection output showing bounding boxes over infected leaf regions" }
    ]
  }
},
{
  id: "breast-cancer-cnn",
  img: "/breast-cancer-detection-img.png",
  title: "Early Breast Cancer Detection via CNN",
  description:
    "Deep learning project using a Convolutional Neural Network (CNN) to detect early-stage breast cancer from mammographic images. Includes image preprocessing, data augmentation, model evaluation, and explainable results visualization.",
  category: "Data Science & ML",
  subCategory: ["Computer Vision", "Medical Imaging", "Classification"],
  stack: ["TensorFlow", "Keras", "OpenCV", "Python", "Matplotlib"],
  year: 2022,
  featured: false,
  github_url: "[xx]",
  demo_url: "/projects/breast-cancer-cnn",
  content: {
    overview:
      "This project focuses on automating early breast cancer detection through deep learning. A custom CNN model is trained on mammographic image data to distinguish between benign and malignant cases. The workflow includes image preprocessing, augmentation, model training, and performance evaluation with visual explainability for better clinical interpretability.",
    problem:
      "Breast cancer remains one of the leading causes of death among women worldwide. Early and accurate diagnosis significantly improves survival rates, but manual interpretation of mammograms is time-consuming and prone to human error. The challenge was to design a CNN-based model capable of detecting cancerous patterns in medical images efficiently and accurately.",
    approach: [
      "Collected and curated a local dataset of mammographic images labeled as benign or malignant.",
      "Applied OpenCV for image preprocessing — resizing, denoising, and contrast enhancement.",
      "Implemented data augmentation techniques (rotation, flipping, zooming) to increase dataset diversity and reduce overfitting.",
      "Built a multi-layer CNN architecture using TensorFlow/Keras optimized for binary classification.",
      "Split data into training, validation, and test sets for rigorous model evaluation.",
      "Used confusion matrix, precision, recall, and F1-score metrics to assess model performance.",
      "Visualized activation maps and feature layers to interpret CNN predictions and improve transparency."
    ],
    outcome: {
      summary:
        "The trained CNN achieved reliable classification accuracy on the validation set, demonstrating potential for assisting radiologists in early breast cancer screening. The integration of explainable visualizations improved model trustworthiness and clinical interpretability.",
      metrics: [
        { label: "Validation Accuracy", value: "[xx]%" },
        { label: "Precision", value: "[xx]%" },
        { label: "Recall", value: "[xx]%" },
        { label: "F1-Score", value: "[xx]%" }
      ]
    },
    data: {
      sources: [
        { name: "Local Mammographic Dataset", url: "[xx]" },
        { name: "Optional Reference Dataset – CBIS-DDSM", url: "https://wiki.cancerimagingarchive.net/pages/viewpage.action?pageId=22516629" }
      ],
      size: "[xx] images (balanced benign/malignant classes)",
      timeframe: "Data preparation and training: 2022"
    },
    features: [
      "CNN-based binary image classification (benign vs malignant)",
      "Image preprocessing and augmentation with OpenCV and Keras utilities",
      "Performance visualization via confusion matrix and ROC curve",
      "Explainable model insights through activation map visualization"
    ],
    challenges: [
      "Limited size of local dataset for deep learning training",
      "Managing class imbalance between benign and malignant samples",
      "Balancing model complexity to prevent overfitting while maintaining accuracy"
    ],
    learnings: [
      "Developed proficiency in medical image preprocessing and CNN-based classification.",
      "Learned to implement data augmentation to enhance model generalization.",
      "Gained experience interpreting deep learning models using visualization techniques for explainability."
    ],
    gallery: [
      { src: "/cnn-training-graph.png", caption: "CNN model training and validation accuracy/loss curves" },
      { src: "/breast-cancer-confusion-matrix.png", caption: "Confusion matrix displaying CNN performance on test data" },
      { src: "/activation-map-example.png", caption: "CNN activation map highlighting regions associated with malignancy" }
    ]
  }
},
  //qiskit-image-qubits
{
  id: "qiskit-image-qubits",
  img: "/qiskit-libry.png",
  title: "Image Dataset → Qubits (Qiskit) with PCA & Q-means",
  description:
    "Quantum image dataset pipeline that converts classical image data into quantum-processable states using PCA for dimensionality reduction and state encoding with Qiskit — enabling quantum clustering experiments in hybrid frameworks.",
  category: "Data Science & ML",
  subCategory: ["Quantum Machine Learning", "PCA", "Quantum Encoding"],
  stack: ["Qiskit", "Python", "Jupyter Notebook"],
  year: 2021,
  featured: false,
  github_url: "https://github.com/moswil/Qiskit-Hackathon",
  demo_url: "#",
  content: {
    overview:
      "This project demonstrates how classical image datasets can be transformed into quantum states suitable for quantum processing. Using the Qiskit Hackathon repository as a base, it uses PCA to reduce image dimensionality, encodes the reduced data into qubit states via Qiskit, and provides feedback on variance retention and device selection for further quantum experimentation. :contentReference[oaicite:1]{index=1}",
    problem:
      "High-dimensional image datasets are incompatible with current quantum hardware’s limited qubit count. The challenge is to apply dimensionality reduction (via PCA) to retain maximal variance while converting into normalized quantum state amplitudes, then execute on quantum simulators or actual IBM Quantum devices.",
    approach: [
      "Imported image datasets and preprocessed using the notebook `Image encoding.ipynb` in the repository (resize, normalize, vectorize) :contentReference[oaicite:2]{index=2}",
      "Applied Principal Component Analysis (PCA) to reduce each image into a lower‐dimensional vector, with variance feedback provided.",
      "Normalized the PCA outputs to fit quantum state amplitude requirements, and prepared circuits with Qiskit in `q_backend.py` and `quantum_data.py` :contentReference[oaicite:3]{index=3}",
      "Encoded reduced vectors into quantum states, visualized Bloch spheres and quantum circuit diagrams for each sample.",
      "Selected IBM Quantum backends via Qiskit Aer or actual devices based on user token (if .env present) and ran experiments accordingly. :contentReference[oaicite:4]{index=4}"
    ],
    outcome: {
      summary:
        "Successfully transformed classical image data into qubit representations and executed quantum circuits on simulators/hardware. The pipeline provides users with variance retention feedback, quantum circuits, and illustrative visualizations — showing the feasibility of hybrid quantum‐classical image analytics.",
      metrics: [
        { label: "Variance Retained via PCA", value: "30%, 75%, 80%, 85%, 90%, 95%" },
        { label: "Images Processed", value: "50" },
        { label: "Qubits Utilized", value: "39" },
        { label: "Quantum Backend Runs", value: "256" }
      ]
    },
    data: {
      sources: [
        { name: "Repository - Qiskit-Hackathon (GitHub)", url: "https://github.com/moswil/Qiskit-Hackathon" }
      ],
      size: ">50 images processed",
      timeframe: "Experimentation completed in 2019 at IBM Qiskit Hackathon"
    },
    features: [
      "Dimensionality reduction with PCA to prepare image data for quantum encoding",
      "Quantum state preparation and encoding using Qiskit circuits (via `q_backend.py` & `quantum_data.py`)",
      "Variance‐retention feedback and device selection logic for quantum backends",
      "Visualization of Bloch spheres, circuit diagrams, and quantum state representations",
      "Hybrid quantum-classical workflow for image analytics"
    ],
    challenges: [
      "Balancing PCA variance retention with available qubit count and circuit depth",
      "Mapping floating-point PCA outputs into normalized quantum state amplitudes without loss of information",
      "Access to quantum hardware and dealing with noise and decoherence when encoding real data"
    ],
    learnings: [
      "Developed skills in encoding classical data into quantum states with Qiskit.",
      "Explored workflow integration between classical preprocessing (PCA) and quantum circuit generation.",
      "Gained insight into practical limitations of current quantum platforms for real-world high-dimensional data."
    ],
    gallery: [
      { src: "/qiskit-pca-encoding.png", caption: "PCA transformation of image vectors before quantum encoding" },
      { src: "/qiskit-qmeans-circuit.png", caption: "Quantum circuit diagram showing state preparation and processing" },
      { src: "/qiskit-results-plot.png", caption: "Visualization of quantum encoding and clustering outcome" },
      { src: "/CMP13-CID123985.png", caption: "MalariaDrug Images GHS sample" }
    ]
  }
},
  //accident-severity-prediction-ml
  {
  id: "accident-severity-prediction-ml",
  img: "/accident-severity-prediction-ml.png",
  title: "Accident Severity Prediction Model",
  description: "Building machine-learning classifiers to predict whether an accident will be fatal based on aircraft, weather, flight phase and survivability factors.",
  category: "Data Science",
  subCategory: ["Classification", "Predictive Modeling"],
  stack: ["Python", "Scikit-learn", "Pandas", "XGBoost", "SHAP"],
  year: 2025,
  featured: false,
  github_url: "#",
  demo_url: "#",
},
//aviation-accident-clustering
{
  id: "aviation-accident-clustering",
  img: "/aviation-accident-clustering.png",
  title: "Unsupervised Clustering of Accident Profiles",
  description: "Applying K-Means and density-based clustering to group aviation accidents by common characteristics and uncover latent patterns.",
  category: "Data Science",
  subCategory: ["Clustering", "Unsupervised"],
  stack: ["Python", "Scikit-learn", "Pandas", "Seaborn"],
  year: 2025,
  featured: false,
  github_url: "#",
  demo_url: "#",
},
//aviation-risk-hotspot-analysis
{
  id: "aviation-risk-hotspot-analysis",
  img: "/aviation-risk-hotspot-analysis.png",
  title: "Geospatial Hotspot & Risk-Score Analysis",
  description: "Spatial analysis using kernel density estimation and risk scoring to identify high-risk regions for air accidents in Canada.",
  category: "Data Science",
  subCategory: ["Geospatial", "Risk Analysis"],
  stack: ["Python", "GeoPandas", "Scipy", "Matplotlib"],
  year: 2025,
  featured: false,
  github_url: "#",
  demo_url: "#",
},
//survival-analysis-evacuation
{
  id: "survival-analysis-evacuation",
  img: "/survival-analysis-evacuation.png",
  title: "Survival Analysis of Evacuation & Rescue",
  description: "Modeling time to successful evacuation/rescue using Kaplan-Meier curves and Cox models based on survivability data.",
  category: "Data Science",
  subCategory: ["Survival Analysis", "Statistical Modeling"],
  stack: ["Python", "Lifelines", "Pandas", "Matplotlib"],
  year: 2025,
  featured: false,
  github_url: "#",
  demo_url: "#",
},
//accident-topic-modeling-nlp
{
  id: "accident-topic-modeling-nlp",
  img: "/accident-topic-modeling-nlp.png",
  title: "Topic Modeling for Accident Narratives",
  description: "Using natural language processing to discover themes in free-text accident descriptions through LDA and visualization.",
  category: "Data Science",
  subCategory: ["NLP", "Topic Modeling"],
  stack: ["Python", "NLTK", "Gensim", "PyLDAvis"],
  year: 2025,
  featured: false,
  github_url: "#",
  demo_url: "#",
},

  // ----------------- AI & AUTOMATION
  //ai repo assistant
  {
  id: "ai-repo-assistant",
  img: "/ai-repo-assistant-hero.png",
  title: "AI-Powered Repository Assistant: From Data Ingestion to Deployment",
  description:
    "An intelligent document-aware assistant that ingests GitHub repositories, indexes their documentation, and provides context-aware Q&A with source citations through an interactive Streamlit interface.",
  category: "AI & Automation",
  subCategory: ["LLM Applications", "Retrieval-Augmented Generation"],
  stack: [
    "Python",
    "OpenAI API",
    "Pydantic-AI",
    "minsearch",
    "sentence-transformers",
    "Streamlit",
    "Pandas",
    "Requests",
    "Python-Frontmatter"
  ],
  year: 2025,
  featured: true,
  github_url: "https://github.com/Filazion/Personal_DeepWiki",     // your GitHub repo
  demo_url: "#",       // Streamlit live link if deployed
  content: {
    overview:
      "I designed and implemented a complete pipeline that transforms any GitHub repository into an interactive AI documentation assistant. The system downloads and parses markdown files, intelligently chunks long content, indexes it using a hybrid lexical-semantic search, and powers an agent capable of answering natural-language questions with citations. The project culminates in a fully deployed Streamlit web app accessible to users online.",
    problem:
      "Technical teams often struggle to navigate large documentation sets. Traditional keyword search fails to capture semantic meaning and contextual relevance. My goal was to create an AI assistant that could deeply understand repository content, retrieve precise sections, and generate accurate answers with source transparency.",
    approach: [
      "Built a modular data ingestion pipeline using  Requests  and  Python-Frontmatter  to download, parse, and normalize markdown (.md and .mdx) files directly from GitHub zip archives.",
      "Implemented  multi-strategy chunking - sliding window, paragraph-based, and section-based splitting — to preserve context and avoid token overflow.",
      "Developed a  hybrid search engine  using `minsearch` for lexical indexing and `sentence-transformers` for semantic embeddings, combined for optimal recall and precision.",
      "Integrated a  tool-calling agent  using `Pydantic-AI` and OpenAI’s function-calling API to retrieve relevant context via search before generating answers.",
      "Added  citation enforcement  inside the system prompt to ensure each response links back to its source file in GitHub.",
      "Created a  structured evaluation pipeline  where another LLM acts as a judge to assess relevance, clarity, and completeness of responses; logged results for metric analysis using Pandas.",
      "Developed a  Streamlit interface  enabling real-time user interaction with streamed responses, persistent chat history, and JSON-based logging for analytics.",
      "Packaged all functionality into modular Python scripts (`ingest.py`, `search_tools.py`, `search_agent.py`, `logs.py`, `app.py`) for clean deployment and scalability."
    ],
    outcome: {
      summary:
        "The resulting system behaves as a self-contained documentation assistant that can be deployed for any GitHub repository. It supports natural-language queries, hybrid retrieval, and transparent citations. The agent achieved 95% average relevance and 89% completeness in automated evaluations, demonstrating its reliability for production use.",
      metrics: [
        { label: "Repositories processed", value: ">2" },
        { label: "Documents indexed", value: "3" },
        { label: "Average evaluation score", value: "90%" },
        { label: "Latency per query", value: "0.5 s" }
      ]
    },
    data: {
      sources: [
        { name: "Repositories", url: "#" },
        { name: "Document Indexed", url: "#" }
      ],
      //size: "1604 rows × 23 columns combined",
      //timeframe: "2015–2023 reviews"
    },
    features: [
      "Automatic ingestion of public GitHub repositories",
      "Multi-strategy text chunking with contextual overlap",
      "Hybrid lexical + semantic search using `minsearch` and embeddings",
      "LLM-driven agent with enforced source citations",
      "Evaluation framework using LLM-as-a-Judge",
      "Real-time Streamlit web interface with response streaming",
      "JSON-based conversation logging and performance tracking"
    ],
    challenges: [
      "Optimizing chunk size and overlap to balance context with token limits",
      "Ensuring deterministic citation generation in multi-turn conversations",
      "Designing evaluation metrics that align with human judgment",
      "Minimizing API latency and cost during large-scale ingestion"
    ],
    learnings: [
      "Effective document chunking significantly improves retrieval precision.",
      "Hybrid search outperforms standalone semantic search for technical text.",
      "Tool-calling frameworks like Pydantic-AI simplify robust agent design.",
      "Comprehensive evaluation and logging are essential for trustworthy AI systems."
    ],
    gallery: [
      { src: "/ai-repo-assistant-dashboard.png", caption: "Streamlit interface showing hybrid search and live response" },
      { src: "/ai-repo-assistant-architecture.png", caption: "System architecture from ingestion to deployment" },
      { src: "/ai-repo-assistant-evals.png", caption: "Evaluation metrics visualized via Pandas summary" }
    ]
  }
},
//napkin-folding-rl
  {
  id: "napkin-folding-rl",
  img: "/Napkin-folding-RL.png",  // export a key diagram/screenshot from the PPT
  title: "Deep Reinforcement Learning for Optimal Napkin Folding",
  description:
    "A Deep Q-Learning (DQN) agent trained to learn efficient folding strategies for a 2D napkin grid. Demonstrates how reinforcement learning can discover optimal sequences of actions in constrained environments.",
  category: "AI & Automation",
  subCategory: ["Reinforcement Learning", "Simulation"],
  stack: ["Python", "TensorFlow", "Gymnasium", "NumPy", "Matplotlib"],
  year: 2025,
  featured: true,
  github_url: "https://colab.research.google.com/drive/1vXWJoXNMwjBiAK0o_xc0Ei926srPm8iP?authuser=1#scrollTo=uJyp60g1QFFI", // replace with your repo link if public
  demo_url: "/projects/napkin-folding-rl",
  content: {
    overview:
      "This project applies Deep Reinforcement Learning to a custom ‘napkin-folding’ simulation environment. The agent’s objective is to fold a virtual napkin from its original grid size down to the smallest possible form using the fewest moves. The experiment illustrates how DQN agents can autonomously discover optimal policies in discrete state-action spaces.",
    problem:
      "Given a square napkin represented as an N×N grid (e.g., 8×8 or 16×16), how can an RL agent learn a sequence of fold actions (horizontal or vertical) that minimizes the number of folds required to reach a 1×1 state?",
    approach: [
      "Modeled the environment as a discrete grid where each fold halves either the width or the height.",
      "Implemented reward shaping based on proximity to the goal state and penalties for redundant folds.",
      "Trained a Deep Q-Network (DQN) using ε-greedy exploration and replay memory.",
      "Benchmarked against random exploration to highlight the learning gain.",
      "Evaluated performance by counting average steps required to reach the terminal folded state."
    ],
    outcome: {
      summary:
        "The DQN agent successfully learned an optimal policy to fold an 8×8 napkin into a 1×1 state in only 6 steps, compared to 20+ steps with random exploration. Results confirmed that reward shaping and experience replay substantially improved convergence.",
      metrics: [
        { label: "Grid Sizes Tested", value: "8×8, 16×16" },
        { label: "Possible Folds (8×8)", value: "14" },
        { label: "Steps to Goal (DQN)", value: "6" },
        { label: "Steps to Goal (Random)", value: "20+" }
      ]
    },
    data: {
      sources: [{ name: "Custom simulated RL environment (OpenAI Gym style)" }],
      size: "State space ~10⁴; discrete actions = {horizontal, vertical}",
      timeframe: "1-week prototype"
    },
    features: [
      "Custom OpenAI Gym-like environment for fold simulation",
      "Deep Q-Network agent with replay buffer and target network",
      "Comparative baseline using random exploration",
      "Visualization of folding sequence and convergence curves"
    ],
    challenges: [
      "Reward sparsity made early training unstable — mitigated using shaped rewards.",
      "State explosion for larger grids (16×16) required dimensionality reduction.",
      "Balancing exploration vs. exploitation in small discrete environments."
    ],
    learnings: [
      "Fine-tuning reward design significantly impacts convergence speed.",
      "DQN scales well for discrete state spaces; Double DQN or JAX implementations could enhance stability.",
      "Visualizing environment transitions helps debug RL policies effectively."
    ],
    gallery: [
      { src: "/Napkin-folding-RL.png", caption: "8×8 folding path learned by DQN" },
      { src: "/napkin-folding-results.png", caption: "Comparison: random vs. DQN performance" }
    ]
  }
},
//driver-drowsiness
{
  "id": "driver-drowsiness",
  "img": "/driver_drowsiness_detection.png",
  "title": "Driver Drowsiness Detection (CV + Edge Alerts + Streamlit)",
  "description":
    "Real-time eye and face landmark detection system that monitors driver alertness using MediaPipe FaceMesh and Eye Aspect Ratio (EAR), with integrated alert sounds and a browser-based Streamlit interface for live testing and Raspberry Pi compatibility.",
  "category": "AI & Automation",
  "subCategory": ["Computer Vision", "Edge AI", "Real-Time Detection", "Web Deployment"],
  "stack": ["Python", "OpenCV", "MediaPipe", "Streamlit", "Flask", "Raspberry Pi"],
  "year": 2021,
  "featured": false,
  "github_url": "https://github.com/Filazion/driver_drowsiness",
  "demo_url": "https://driverdrowsiness-detection.streamlit.app/",
  "content": {
    "overview":
      "This project implements a real-time driver monitoring system that detects drowsiness by tracking eye aspect ratio (EAR) and facial landmarks using MediaPipe. When prolonged eye closure or yawning is detected, the system triggers audio alerts to help prevent fatigue-related accidents. The application runs both locally (Flask/Raspberry Pi) and online via Streamlit, allowing live webcam-based testing from any browser.",
    "problem":
      "Drowsy driving contributes to thousands of traffic accidents annually due to delayed driver responses. Traditional solutions rely on expensive hardware or require manual monitoring. This project aims to provide a lightweight, affordable, and accessible AI solution that works with a standard webcam or Raspberry Pi camera module.",
    "approach": [
      "Implemented facial landmark detection using MediaPipe FaceMesh to extract eye and mouth coordinates in real time.",
      "Calculated Eye Aspect Ratio (EAR) and Mouth Aspect Ratio (MAR) to identify drowsiness and yawning patterns.",
      "Developed alert logic that triggers audio warnings when EAR remains below a defined threshold for several frames.",
      "Optimized the pipeline for Raspberry Pi by resizing frames and reducing CPU load.",
      "Created a Flask web interface for local camera monitoring and a Streamlit web app for browser-based testing.",
      "Deployed the Streamlit version online to make the model accessible without local setup."
    ],
    "outcome": {
      "summary":
        "The final system successfully detects driver drowsiness and yawning in real time, delivering timely alerts with minimal latency. It operates efficiently on both desktops and Raspberry Pi, making it suitable for integration into low-cost driver-assistance systems.",
      "metrics": [
        { "label": "EAR Accuracy (Eye Closure Detection)", "value": "90%" },
        { "label": "Average Detection Latency", "value": "7 ms" },
        { "label": "Supported Platforms", "value": "Desktop, Raspberry Pi, Streamlit Web" }
      ]
    },
    "data": {
      "sources": [
        { "name": "Real-world webcam footage (self-collected)" },
        { "name": "Open-source facial landmark datasets for tuning thresholds" }
      ],
      "size": "~3,000 sample frames used for EAR/MAR calibration",
      "timeframe": "Project development and optimization: 2021–2025"
    },
    "features": [
      "MediaPipe-based facial landmark tracking",
      "Real-time Eye Aspect Ratio (EAR) and Mouth Aspect Ratio (MAR) computation",
      "Audio alert system using pygame for fatigue detection",
      "Streamlit web interface for browser-based webcam detection",
      "Flask-based local server for Raspberry Pi or offline use",
      "Optimized for edge devices with low power consumption"
    ],
    "challenges": [
      "Achieving reliable detection under varying lighting and head pose conditions",
      "Balancing accuracy with frame rate for low-power edge devices",
      "Ensuring smooth webcam streaming performance in Streamlit"
    ],
    "learnings": [
      "Developed practical expertise in real-time computer vision using MediaPipe.",
      "Learned to optimize vision pipelines for Raspberry Pi and web deployment.",
      "Gained experience in integrating Flask and Streamlit for hybrid local and cloud AI applications."
    ],
    "gallery": [
      {
        "src": "/driver-drowsiness-streamlit-ui.png",
        "caption": "Streamlit web interface showing live EAR monitoring and drowsiness alerts"
      },
      {
        "src": "/driver-drowsiness-flask-ui.png",
        "caption": "Local Flask version with webcam feed and alert notifications"
      }
    ]
  }
},

//drone-crop-monitoring
 {
  id: "drone-crop-monitoring",
  img: "/crop-monitoring-uav.png",
  title: "Drone-based Crop Monitoring & Analytics",
  description:
    "An integrated UAV and software pipeline for aerial crop imagery capture, image processing, and agronomic analytics – enabling disease detection, yield indicators, and actionable insights from drone flights.",
  category: "AI & Automation",
  subCategory: ["UAV", "Precision Agriculture", "Crop Analytics"],
  stack: ["Python", "Flask", "GIS", "OpenCV", "Drone Imagery Processing"],
  year: 2020,
  featured: false,
  github_url: "[xx]",
  demo_url: "/projects/drone-crop-monitoring",
  content: {
    overview:
      "This project builds a full workflow where UAVs capture high-resolution crop field imagery, which is then processed via GIS tools and computer vision using OpenCV and Python. The processed data feeds into a Flask-based web application for visualization and analytics, enabling agronomists to monitor crop health, detect disease patterns, estimate yields, and derive actionable farm management insights.",
    problem:
      "Traditional crop monitoring methods are labour-intensive, slow and often unable to catch early signs of crop stress or disease. The challenge was to deploy an unmanned aerial vehicle (UAV) system combined with software analytics to rapidly collect, process, and visualise crop imagery, and turn raw aerial data into timely agronomic intelligence.",
    approach: [
      "Configured UAV flights over cultivated plots to collect RGB (and optionally multispectral) imagery with geo-referencing.",
      "Pre-processed raw drone images: orthomosaic stitching, geospatial alignment, cropping, and correction via GIS and OpenCV.",
      "Extracted crop health indicators (e.g., NDVI or vegetation indices), disease anomaly detection, plant-count or canopy cover metrics using computer vision.",
      "Built a Flask web application with interactive map views, time-series analytics, and yield/health dashboards for stakeholders.",
      "Integrated GIS layers for field boundaries, soil zones and historical yield data to enrich the analytics environment."
    ],
    outcome: {
      summary:
        "Delivered a working aerial data-collection and analytics system that empowers precision agriculture by surfacing crop-health insights, disease risk zones and yield-harm indicators from drone flights. The web dashboard enabled agronomists to visualise field-level trends and make faster management decisions.",
      metrics: [
        { label: "Flights Conducted", value: "accurate data Update coming soon" },
        { label: "Total Images Processed", value: "accurate data Update coming soon" },
        { label: "Fields Covered", value: "accurate data Update coming soon" },
        //{ label: "Yield Loss Risk Zones Identified", value: "" }
      ]
    },
    data: {
      sources: [
        { name: "UAV imagery collected over trial plots", url: "accurate data Update coming soon" },
        { name: "Historical yield & soil GIS layers (client data)", url: "accurate data coming soon" }
      ],
      size: ">60GB images + GIS layers",
      timeframe: "Field flights and analytics developed during 2020"
    },
    features: [
      "Drone/UAV imagery acquisition and geo-referencing",
      "Orthomosaic generation and image correction via GIS/OpenCV",
      "Crop health index calculation (e.g., canopy cover, NDVI proxy) and disease anomaly detection",
      "Flask-based web dashboard showing maps, trends, and alerts",
      "Integration of GIS field boundaries, historical yield data and analytics export functionality"
    ],
    challenges: [
      "Managing large aerial image datasets and stitching performance",
      "Handling variable lighting, drone flight altitude and resolution for consistent analytics",
      "Aligning GIS layers, field boundaries and imagery for accurate zone-level metrics"
    ],
    learnings: [
      "Gained experience in UAV imagery workflow: flight planning, image capture, preprocessing and analytics.",
      "Learned how to integrate GIS, computer vision and web apps for precision-ag use cases.",
      "Understood the practical challenges of deploying drone analytics in farm conditions and working with large geospatial datasets."
    ],
    gallery: [
      { src: "/crop-monitoring-uav-flight.jpg", caption: "Drone flight capturing crop field imagery and geo-referenced orthomosaic" },
      { src: "/crop-monitoring-analytics-dashboard.png", caption: "Web dashboard showing crop health analytics, maps and yield indicator overlays" }
    ]
  }
},

  // ----------------- ROBOTICS
  //robosoccer
  {
  id: "robosoccer",
  img: "/robosoccer.jpeg",
  title: "Robosoccer — Autonomous Humanoid Robots Playing Soccer",
  description:
    "Robotics project that programs RoboSapiens humanoid robots for autonomous soccer. Implements custom computer vision, control loops, navigation, and basic team strategy using Python and ROS.",
  category: "Robotics",
  subCategory: ["Humanoid Robotics", "Computer Vision", "Control Systems"],
  stack: ["Python", "OpenCV", "ROS", "Raspberry Pi", "Arduino"],
  year: 2019,
  featured: false,
  github_url: "https://github.com/Filazion/Robosoccer",
  demo_url: "/projects/robosoccer",
  content: {
    overview:
      "Robosoccer is a humanoid robotics project where RoboSapiens robots autonomously detect, track, and play soccer. Using a combination of computer vision, sensor feedback, and control algorithms, the robots navigate the field, detect the ball, and coordinate simple offensive and defensive strategies.",
    problem:
      "Programming humanoid robots to play soccer autonomously is challenging due to real-time perception, dynamic navigation, and precise actuation requirements. The task involved integrating vision-based detection with motor control loops and strategy planning for multi-agent coordination.",
    approach: [
      "Modified RoboSapiens humanoid robots with Raspberry Pi and Arduino for enhanced processing and control.",
      "Implemented computer vision pipelines using OpenCV to detect the ball, goalposts, and other robots in real-time.",
      "Designed closed-loop PID controllers for stable walking, turning, and ball approach maneuvers.",
      "Programmed basic soccer strategies: ball pursuit, goal defense, and passing coordination.",
      "Integrated ROS nodes to handle sensor inputs, vision outputs, and control commands across multiple robots."
    ],
    outcome: {
      summary:
        "The humanoid robots were able to autonomously navigate the soccer field, detect and chase the ball, and execute simple offensive and defensive plays. The project demonstrated effective integration of vision, control, and strategy for small-scale autonomous robotics.",
      metrics: [
        { label: "Robots Programmed", value: "[xx]" },
        { label: "Field Trials Conducted", value: "[xx]" },
        { label: "Successful Ball Interceptions", value: "[xx]" },
        { label: "Goal Attempts Executed", value: "[xx]" }
      ]
    },
    data: {
      sources: [
        { name: "RoboSapiens Humanoid Robot", url: "https://www.robotis.us/robo-sapien/" },
        { name: "Project GitHub Repository", url: "https://github.com/Filazion/Robosoccer" }
      ],
      size: "N/A (robot hardware + software integration)",
      timeframe: "Development and field trials: 2019"
    },
    features: [
      "Real-time computer vision for ball and goal detection",
      "PID-based control loops for walking and navigation",
      "ROS integration for multi-sensor coordination",
      "Autonomous offensive and defensive soccer strategies",
      "Raspberry Pi and Arduino-based hardware control"
    ],
    challenges: [
      "Maintaining stable locomotion on uneven surfaces",
      "Real-time detection and tracking of moving ball under variable lighting",
      "Coordinating multiple robots to avoid collisions and implement simple team strategies"
    ],
    learnings: [
      "Gained experience in humanoid robot programming and integration of vision and control systems.",
      "Learned how to implement multi-agent coordination strategies for autonomous robotics.",
      "Improved skills in real-time sensor processing and ROS-based robotics architectures."
    ],
    gallery: [
      { src: "/robosoccer-match.png", caption: "Humanoid robots autonomously playing soccer during field trials" },
      { src: "/robosoccer-cv-demo.png", caption: "Computer vision pipeline detecting ball and goalpost in real-time" },
      { src: "/robosoccer-ros-setup.png", caption: "ROS node architecture for sensor and control integration" }
    ]
  }
},
  // ----------------- CASE STUDIES
  //desert-locust-ews
  {
  id: "desert-locust-ews",
  img: "/desertlocust_monitoring.jpg",
  title: "Early Warning System for Desert Locust Monitoring (East Africa)",
  description:
    "Integrated early warning system leveraging remote sensing, GIS, and predictive modeling to forecast desert locust swarm risks using weather, vegetation, and historical outbreak data.",
  category: "Case Studies",
  subCategory: ["Forecasting", "GIS", "Predictive Modeling"],
  stack: ["Python", "R", "Django", "Pandas", "ArcGIS"],
  year: 2020,
  featured: false,
  github_url: "[xx]",
  demo_url: "/projects/desert-locust-ews",
  content: {
    overview:
      "This project develops a conceptual early warning system for desert locust infestations in East Africa. By combining remote sensing imagery, vegetation indices, weather data, and historical swarm patterns, the system forecasts potential outbreak zones and provides actionable alerts for agricultural and environmental authorities.",
    problem:
      "Desert locusts cause massive agricultural damage and threaten food security. Early detection and forecasting of swarm movements is challenging due to the complex interplay of weather conditions, vegetation growth, and historical migration patterns. The task was to integrate multiple datasets and predictive models to provide reliable early warning insights.",
    approach: [
      "Collected satellite-derived vegetation and weather data (NDVI, rainfall, temperature) across East Africa.",
      "Compiled historical desert locust outbreak records from FAO and regional monitoring sources.",
      "Cleaned, standardized, and merged multi-source datasets using Python and R (Pandas, tidyverse).",
      "Developed predictive models to estimate swarm risk levels based on environmental and historical factors.",
      "Built GIS visualizations and risk maps in ArcGIS to illustrate potential locust activity zones.",
      "Implemented a Django-based dashboard to present forecasts, maps, and alerts to stakeholders."
    ],
    outcome: {
      summary:
        "Produced a prototype system capable of forecasting desert locust swarm risks with visual GIS maps and predictive alerts. This framework can assist governments and agricultural agencies in taking proactive measures to mitigate locust damage and improve food security.",
      metrics: [
        { label: "Regions Covered", value: "[xx]" },
        { label: "Historical Swarm Records Processed", value: "[xx]" },
        { label: "Satellite Images Analyzed", value: "[xx]" },
        { label: "Forecast Accuracy (prototype)", value: "[xx]%" }
      ]
    },
    data: {
      sources: [
        { name: "FAO Desert Locust Data", url: "http://www.fao.org/ag/locusts/en/info/info/index.html" },
        { name: "Satellite Imagery (NDVI, Rainfall, Temperature)", url: "[xx]" },
        { name: "Regional Historical Swarm Records", url: "[xx]" }
      ],
      size: "[xx] records + [xx] satellite images",
      timeframe: "Data collection and prototype modeling: 2020"
    },
    features: [
      "Integration of multi-source environmental and historical data",
      "Predictive modeling for swarm risk estimation",
      "GIS-based visualization of high-risk zones",
      "Django dashboard for alerts and stakeholder interaction",
      "Supports early agricultural intervention planning"
    ],
    challenges: [
      "Handling heterogeneous datasets from multiple sources and formats",
      "Developing predictive models under limited historical outbreak data",
      "Visualizing spatial risk accurately for actionable decisions"
    ],
    learnings: [
      "Gained experience combining remote sensing data with predictive analytics.",
      "Learned to integrate GIS mapping with Python and R data workflows.",
      "Enhanced understanding of early warning system design for environmental hazards."
    ],
    gallery: [
      { src: "/desertlocust-riskmap.png", caption: "GIS risk map showing forecasted desert locust activity zones" },
      { src: "/desertlocust-dashboard.png", caption: "Django dashboard prototype displaying swarm alerts and environmental data" }
    ]
  }
},
  //client-sites-mobile-apps
  {
  id: "client-sites-mobile-apps",
  img: "/webandmobileapps.png",
  title: " Client Websites & Mobile Apps (Assorted)- Freelance",
  description:
    "Compilation of dynamic and static websites, web apps, and mobile applications developed for various clients, showcasing full-stack development, project Management, responsive design, and deployment capabilities.",
  category: "Case Studies",
  subCategory: ["Project Management","Delivery", "Showcase", "Software Development"],
  stack: [
    "MERN",
    "Docker",
    "APIs",
    "Ubuntu",
    "PHP",
    "Vue",
    "React-native",
    "WordPress",
    "SquareSpace"
  ],
  year: 2018,
  featured: false,
  github_url: "[xx]",
  demo_url: "/projects/client-sites-mobile-apps",
  content: {
    overview:
      "This project collection represents various websites and mobile apps developed for clients across industries. The portfolio includes both static marketing sites and dynamic web applications, as well as cross-platform mobile apps, demonstrating capabilities in frontend, backend, API integration, and deployment.",
    problem:
      "Clients required professional online presence, web apps, or mobile applications tailored to their business needs. Challenges included integrating modern technologies, ensuring responsive designs, and deploying robust solutions across multiple platforms.",
    approach: [
      "Collaborated with clients to gather requirements and define project scope.",
      "Developed web applications using MERN stack, Vue.js, PHP, and WordPress depending on project requirements.",
      "Created cross-platform mobile apps using React-native.",
      "Integrated third-party APIs, payment gateways, and authentication services as needed.",
      "Packaged and deployed applications using Docker on Ubuntu servers, ensuring scalable and maintainable production setups.",
      "Provided post-deployment support, updates, and optimizations according to client feedback."
    ],
    outcome: {
      summary:
        "Delivered a variety of client websites and apps that were functional, responsive, and aligned with client branding and requirements. The projects enhanced client visibility, provided digital tools for business operations, and demonstrated practical full-stack and mobile development skills.",
      metrics: [
        { label: "Websites Developed", value: ">20" },
        { label: "Mobile Apps Delivered", value: "2" },
        { label: "Projects Deployed", value: ">22" },
        { label: "Client Satisfaction Rate", value: "95%" }
      ]
    },
    data: {
      sources: [
        { name: "Client Requirements & Assets", url: "Varies on the client" },
        { name: "Freelance Project Repositories", url: "Up on Request" }
      ],
      size: "Varies per project",
      timeframe: "2018 – ongoing freelance projects"
    },
    features: [
      "Full-stack web application development (MERN, PHP, Vue.js)",
      "Cross-platform mobile app development using React-native",
      "Responsive and user-friendly UI/UX design",
      "API integration for payments, authentication, and external services",
      "Deployment and server management using Docker and Ubuntu",
      "CMS-based websites with WordPress and SquareSpace"
    ],
    challenges: [
      "Adapting to different client requirements and industry standards",
      "Ensuring cross-platform compatibility and responsive design",
      "Managing multiple projects with varied tech stacks and deadlines"
    ],
    learnings: [
      "Enhanced ability to quickly adapt to diverse tech stacks and client needs",
      "Improved project scoping, delivery, and client communication skills",
      "Gained experience in full-stack development, mobile apps, and deployment workflows"
    ],
    gallery: [
      { src: "/client-site-1.png", caption: "Dynamic web application for a client in different industry" },
      //{ src: "/client-mobile-app.png", caption: "Cross-platform mobile application developed in reat-native" },
      { src: "/client-wordpress-site.png", caption: "WordPress-based website with customized theme and features" }
    ]
  }
},
  // ----------------- PERSONAL & UTILITIES (new)
  //web-scraper-suite
{
  id: "web-scraper-suite",
  img: "/personal-scraper-inprogress.png",
  title: "Web Scraper Suite — Automated Data Extraction Toolkit (In Progress)",
  description:
    "An evolving Python toolkit for automated web scraping, HTML metadata extraction, and structured data storage — designed for scalability and reuse across multiple sites.",
  category: "Personal & Utilities",
  subCategory: ["Automation", "Data Collection", "Scripting"],
  stack: ["Python", "Requests", "BeautifulSoup", "SQLite", "Pandas"],
  year: 2025,
  featured: false,
  github_url: "[xx]",
  demo_url: "/projects/web-scraper-suite",
  content: {
    overview:
      "The Web Scraper Suite is an ongoing project aimed at building a reusable, modular web scraping framework for efficient data collection and preprocessing. The suite automates web data extraction with rotating headers, retry logic, and dynamic HTML parsing while maintaining ethical scraping practices. It’s under continuous improvement to support additional data formats, APIs, and scheduling features.",
    problem:
      "Data analysts and developers often need quick, custom scraping tools for structured data collection without relying on large frameworks or paid APIs. Many existing tools lack flexibility or are difficult to scale ethically. This project aims to bridge that gap by creating a robust, lightweight toolkit for both research and production-grade automation tasks.",
    approach: [
      "Built a **Python-based CLI** scraper capable of handling multiple sites via configurable modules.",
      "Implemented **header rotation** and **randomized request delays** to mimic natural browsing behavior.",
      "Integrated **Requests** for stable HTTP session handling with retry and error management logic.",
      "Used **BeautifulSoup** for deep HTML parsing — extracting metadata, structured tables, and nested tags.",
      "Added **SQLite** as a lightweight persistent storage backend with export options to CSV for analytics.",
      "Developed a flexible **logging system** to track progress, failed URLs, and runtime errors for debugging.",
      "Currently developing a scheduling module for **automated recurring scrapes** using cron or Task Scheduler."
    ],
    outcome: {
      summary:
        "The project is in active development and already functional for small to medium-scale data collection tasks. It currently supports multiple target sites with clean output and is being expanded for dynamic content scraping (via Selenium or Playwright integration).",
      metrics: [
        { label: "Current Version", value: "0.8.2-dev" },
        { label: "Modules Completed", value: "Core scraper, parser, storage" },
        { label: "Modules in Progress", value: "Scheduler, dashboard, Selenium integration" }
      ]
    },
    data: {
      sources: [
        { name: "Web Scraper Suite Repository (In Progress)", url: "[xx]" },
        { name: "Sample Target Sites (for testing)", url: "[xx]" }
      ],
      size: "Dynamic — varies by scrape and configuration",
      timeframe: "Ongoing project — updated bi-weekly"
    },
    features: [
      "Reusable scraping modules with error handling",
      "Header rotation and request throttling for safe scraping",
      "Metadata and structured content extraction via BeautifulSoup",
      "SQLite and CSV export for local analysis",
      "Planned integration with browser automation tools (Selenium/Playwright)",
      "Future UI dashboard for job scheduling and monitoring"
    ],
    challenges: [
      "Building a reliable retry system for unstable endpoints",
      "Parsing irregular or deeply nested HTML elements",
      "Designing modular scripts that can scale to larger scraping jobs"
    ],
    learnings: [
      "Reinforced knowledge in robust Python scripting and automation pipelines.",
      "Gained practical experience in handling anti-bot mechanisms ethically.",
      "Improved project structuring for reusable data collection tools."
    ],
    gallery: [
      { src: "/inprogress-working-on-it.png", caption: "Active development — scraper modules under refinement" },
      { src: "/scraper-cli-progress.png", caption: "CLI scraper running in development mode" },
      { src: "/sqlite-storage-preview.png", caption: "Current SQLite data output view" }
    ]
  }
},

  //media-metadata-extractor
  {
  id: "media-metadata-extractor",
  img: "/personal-metadata-inprogress.png",
  title: "Media Metadata Extractor — Automated Metadata Parsing Tool (In Progress)",
  description:
    "A Python-based batch metadata extraction tool that automates the collection of file details (EXIF, codec, duration, resolution, etc.) for structured cataloging and analytics workflows.",
  category: "Personal & Utilities",
  subCategory: ["Automation", "Data Processing", "Metadata"],
  stack: ["Python", "FFmpeg/ffprobe", "Pandas", "OS", "JSON"],
  year: 2025,
  featured: false,
  github_url: "https://github.com/Filazion/data_downloader",
  demo_url: "/projects/media-metadata-extractor",
  content: {
    overview:
      "The Media Metadata Extractor project automates the process of scanning directories for media files (images, audio, and videos), extracting key metadata attributes, and exporting the results into CSV and JSON formats for analytics or cataloging. The tool provides a reusable, modular architecture built in Python that leverages `ffprobe` for video/audio inspection and EXIF extraction libraries for images. The goal is to streamline media organization, digital asset management, and technical audits across large datasets.",
    problem:
      "Managing and organizing large collections of media files is time-consuming and error-prone when done manually. Extracting metadata such as duration, codec, resolution, and camera EXIF data is often needed for cataloging, data visualization, or training datasets — yet manual or GUI-based solutions don’t scale well. This project addresses the need for a scalable, automated solution to parse and consolidate media metadata efficiently.",
    approach: [
      "Developed a **Python automation script** that recursively scans directories to locate image, video, and audio files.",
      "Integrated **ffprobe** via subprocess calls to extract detailed video/audio metadata — including codec, bitrate, duration, and resolution.",
      "Implemented **EXIF parsing** for images (JPEG, PNG, RAW formats) using Python libraries to capture date, device model, GPS, and orientation data.",
      "Normalized extracted metadata into structured Pandas DataFrames for further analysis or export.",
      "Added CSV and JSON export functionality, ensuring compatibility with BI tools and downstream data pipelines.",
      "Implemented **logging and error-handling modules** to skip corrupt or unsupported files gracefully.",
      "Currently extending functionality for parallel batch processing and dynamic field selection through command-line arguments."
    ],
    outcome: {
      summary:
        "The tool currently supports batch metadata extraction across large folders and provides ready-to-analyze CSV/JSON outputs. The next development milestones include GUI-based file input, automated folder monitoring, and integration with cloud storage APIs (Google Drive, AWS S3).",
      metrics: [
        { label: "Supported File Types", value: "Images, Audio, and Video" },
        { label: "Metadata Fields Extracted", value: "30+" },
        { label: "Average Extraction Speed", value: "200+ files/min (local)" }
      ]
    },
    data: {
      sources: [
        { name: "Project Repository (MetaData Exploit Folder)", url: "https://github.com/Filazion/data_downloader" },
        { name: "ffprobe Documentation", url: "https://ffmpeg.org/ffprobe.html" }
      ],
      size: "Dynamic — supports small to large media archives",
      timeframe: "Ongoing project — continuous improvements since Q1 2025"
    },
    features: [
      "Batch extraction of EXIF, audio/video codecs, and technical metadata",
      "Structured export to CSV and JSON for cataloging or BI ingestion",
      "Cross-format compatibility (JPEG, MP4, MOV, MP3, WAV, PNG, etc.)",
      "Error logging and skip mechanism for unreadable or unsupported files",
      "Scalable to handle thousands of media files per run",
      "Future: GUI mode and API integration for remote execution"
    ],
    challenges: [
      "Handling varied file structures and inconsistent metadata standards",
      "Maintaining speed without compromising accuracy during batch scans",
      "Dealing with missing or corrupted EXIF and codec data",
      "Ensuring cross-platform compatibility for subprocess calls"
    ],
    learnings: [
      "Gained hands-on experience with ffprobe CLI integration for metadata extraction.",
      "Strengthened understanding of EXIF data structures and cross-format metadata inconsistencies.",
      "Improved ability to design scalable automation workflows for technical data collection.",
      "Refined modular scripting practices for maintainable data engineering utilities."
    ],
    gallery: [
      { src: "/inprogress-working-on-it.png", caption: "Development in progress — current command-line metadata output" },
      { src: "/metadata-csv-preview.png", caption: "Structured CSV export showing extracted metadata fields" },
      { src: "/metadata-logging-progress.png", caption: "Logging system tracking processed and failed files" }
    ]
  }
},

  //ai-sidekick-utils
  // {
  //   id: "ai-sidekick-utils",
  //   img: "/personal-ai-sidekick.png",
  //   title: "AI Sidekick Utilities (Prompt & File Helpers)",
  //   description:
  //     "Helper scripts for LLM workflows: prompt templating, file chunking, and quick evaluations for side-hustle ideas.",
  //   category: "Personal & Utilities",
  //   subCategory: ["LLM", "Helpers"],
  //   stack: ["Python", "Node", "OpenAI API"],
  //   year: 2024,
  //   featured: false,
  //   github_url: "#",
  //   demo_url: "",
  // },
];

export const stackList = [
  // --- Data Analytics (core) ---
  { img: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/microsoftexcel.svg", name: "Excel" },
  //{ img: "https://cdn.simpleicons.org/microsoftexcel", name: "Excel" },
  { img: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/powerbi.svg", name: "Power BI" },
  { img: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/tableau.svg", name: "Tableau" },
  { img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg", name: "Python" },
  { img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/r/r-original.svg", name: "R" },
  { img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/jupyter/jupyter-original.svg", name: "Jupyter" },
  { img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/pandas/pandas-original.svg", name: "pandas" },
  { img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/numpy/numpy-original.svg", name: "NumPy" },
  //{ img: "https://cdn.simpleicons.org/matplotlib", name: "Matplotlib" },
  { img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/matplotlib/matplotlib-original.svg", name: "MatplotLib" },
  { img: "https://seaborn.pydata.org/_images/logo-mark-lightbg.svg", name: "Seaborn" },
  //{ img: "https://cdn.simpleicons.org/seaborn", name: "Seaborn" },
  { img: "https://cdn.simpleicons.org/plotly", name: "Plotly" },
  { img: "https://www.statsmodels.org/stable/_images/statsmodels-logo-v2.svg", name: "Statsmodels" },
  { img: "https://cdn.simpleicons.org/googlesheets", name: "GoogleSheets" },

  // --- Databases & SQL ---
  { img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg", name: "MySQL" },
  { img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg", name: "PostgreSQL" },
  { img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/microsoftsqlserver/microsoftsqlserver-plain.svg", name: "SQL Server" },
  { img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/sqlite/sqlite-original.svg", name: "SQLite" },
  { img: "https://cdn.simpleicons.org/googlebigquery", name: "BigQuery" },
  { img: "https://cdn.simpleicons.org/sqlalchemy", name: "SQLAlchemy" },
  { img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg", name: "MongoDB" },

  // --- Machine Learning / Research ---
  { img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/scikitlearn/scikitlearn-original.svg", name: "scikit-learn" },
  { img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/tensorflow/tensorflow-original.svg", name: "TensorFlow" },
  { img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/pytorch/pytorch-original.svg", name: "PyTorch" },
  //{ img: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/xgboost.svg", name: "XGBoost" },
  //{ img: "https://upload.wikimedia.org/wikipedia/commons/8/83/LightGBM_logo.svg", name: "LightGBM" },
  { img: "https://cdn.simpleicons.org/streamlit", name: "Streamlit" },
  { img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/opencv/opencv-original.svg", name: "OpenCV" },

  // --- AI / Automation / LLM Ops ---
  { img: "https://cdn.simpleicons.org/openai", name: "OpenAI API" },
  { img: "https://cdn.simpleicons.org/langchain", name: "LangChain" },
  { img: "https://cdn.simpleicons.org/zapier", name: "Zapier" },
  { img: "https://cdn.simpleicons.org/n8n", name: "n8n" },
  { img: "https://cdn.simpleicons.org/make", name: "Make" },
  

  // --- Robotics / Embedded / CV ---
  { img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/arduino/arduino-original.svg", name: "Arduino" },
  { img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/raspberrypi/raspberrypi-original.svg", name: "Raspberry Pi" },
  { img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/ros/ros-original.svg", name: "ROS" },

  // --- Quantum / Geo / Case Studies ---
  { img: "https://cdn.simpleicons.org/qiskit", name: "Qiskit" },
  { img: "https://cdn.simpleicons.org/qgis", name: "QGIS" },
  { img: "https://cdn.simpleicons.org/esri", name: "ArcGIS" },

  // --- Web Scraping / Utilities ---
  { img: "https://upload.wikimedia.org/wikipedia/commons/5/5a/Beautiful_Soup_logo.svg", name: "BeautifulSoup" },
  { img: "https://cdn.simpleicons.org/selenium", name: "Selenium" },
  { img: "https://cdn.simpleicons.org/ffmpeg", name: "FFmpeg/ffprobe" },

  // --- Web / App Layer (for demos & internal tooling) ---
  { img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg", name: "React" },
  { img: "https://cdn.simpleicons.org/nextdotjs", name: "Next.js" },
  { img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg", name: "Node.js" },
  { img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg", name: "Express" },
  { img: "https://cdn.simpleicons.org/mui", name: "MUI" },
  { img: "https://cdn.simpleicons.org/tailwindcss", name: "Tailwind CSS" },
  { img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/flask/flask-original.svg", name: "Flask" },
  { img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/django/django-plain-wordmark.svg", name: "Django" },

  // --- DevOps / Cloud / Deploy ---
  { img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original-wordmark.svg", name: "AWS" },
  { img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg", name: "Docker" },
  { img: "https://cdn.simpleicons.org/vercel", name: "Vercel" },
  { img: "https://cdn.simpleicons.org/githubactions", name: "GitHub Actions" },
  { img: "https://cdn.simpleicons.org/supabase", name: "Supabase" },

  // --- Collaboration / Tooling ---
  { img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg", name: "Git" },
  { img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg", name: "GitHub" },
  { img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/vscode/vscode-original.svg", name: "VS Code" }
];
