// updated with filtering tabs

import React, { useMemo, useState } from "react";
import ProjectCard from "./ProjectCard/ProjectCard";
import { ProjectList } from "../../data/ProjectData";
import {
  FilterBar,
  Tabs,
  TabButton,
  Count,
  SearchSortBar,
  SearchInput,
  SortSelect,
} from "./ProjectCard/ProjectCardElements";

const TABS = [
  "Data Analytics",
  "Data Science & ML",
  "AI & Automation",
  "Robotics",
  "Case Studies",
  "Personal & Utilities",
  "All",
];

function normalize(s) {
  return (s || "").toString().toLowerCase();
}

function projectsCount(tab, base) {
  if (tab === "All") return base.length;
  return base.filter((p) => p.category === tab).length;
}

function Projects() {
  // Defaults: show Data Analytics first; sort by Featured
  const [activeTab, setActiveTab] = useState("Data Analytics");
  const [query, setQuery] = useState("");
  const [sortMode, setSortMode] = useState("Featured"); // "Featured" | "Recent"

  // 1) Filter by tab
  const byTab = useMemo(() => {
    if (activeTab === "All") return ProjectList;
    return ProjectList.filter((p) => p.category === activeTab);
  }, [activeTab]);

  // 2) Filter by search (title/desc/stack/subCategory/year)
  const bySearch = useMemo(() => {
    const q = normalize(query);
    if (!q) return byTab;
    return byTab.filter((p) => {
      const hay = [
        p.title,
        p.description,
        ...(p.stack || []),
        ...(p.subCategory || []),
        p.category,
        p.year,
      ]
        .map(normalize)
        .join(" ");
      return hay.includes(q);
    });
  }, [byTab, query]);

  // 3) Sort
  const sorted = useMemo(() => {
    const copy = [...bySearch];
    if (sortMode === "Recent") {
      return copy.sort((a, b) => (b.year || 0) - (a.year || 0));
    }
    // Featured: featured first, then by year desc
    return copy.sort((a, b) => {
      const f = (b.featured === true) - (a.featured === true);
      if (f !== 0) return f;
      return (b.year || 0) - (a.year || 0);
    });
  }, [bySearch, sortMode]);

  // Tab counts respect current search query (nice UX)
  const countsBase = useMemo(() => {
    const q = normalize(query);
    if (!q) return ProjectList;
    return ProjectList.filter((p) => {
      const hay = [
        p.title,
        p.description,
        ...(p.stack || []),
        ...(p.subCategory || []),
        p.category,
        p.year,
      ]
        .map(normalize)
        .join(" ");
      return hay.includes(q);
    });
  }, [query]);

  return (
    <>
      <svg
        height="100%"
        width="100%"
        id="svg"
        viewBox="0 0 1440 400"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M 0,400 C 0,400 0,200 0,200 C 114.35714285714289,156.53571428571428 228.71428571428578,113.07142857142858 351,131 C 473.2857142857142,148.92857142857142 603.4999999999998,228.25 713,248 C 822.5000000000002,267.75 911.2857142857144,227.92857142857142 1029,210 C 1146.7142857142856,192.07142857142858 1293.3571428571427,196.03571428571428 1440,200 C 1440,200 1440,400 1440,400 Z"
          stroke="none"
          strokeWidth="0"
          fill="#151418ff"
          transform="rotate(-180 720 200)"
        ></path>
      </svg>

      <div className="ProjectWrapper" id="projects">
        <div className="Container">
          <div className="SectionTitle">Projects</div>

          {/* Search + Sort */}
          <SearchSortBar>
            <SearchInput
              type="text"
              placeholder="Search projects (title, tech, tags)…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              aria-label="Search projects"
            />
            <SortSelect
              value={sortMode}
              onChange={(e) => setSortMode(e.target.value)}
              aria-label="Sort projects"
            >
              <option value="Featured">Featured</option>
              <option value="Recent">Recent</option>
            </SortSelect>
          </SearchSortBar>

          {/* Tabs */}
          <FilterBar>
            <Tabs>
              {TABS.map((tab) => (
                <TabButton
                  key={tab}
                  aria-pressed={activeTab === tab}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab} <Count>{projectsCount(tab, countsBase)}</Count>
                </TabButton>
              ))}
            </Tabs>
          </FilterBar>

          {/* Cards */}
          <ProjectCard items={sorted} />
        </div>
      </div>
    </>
  );
}

export default Projects;




// // updated code 

// import React, { useMemo, useState } from "react";
// import ProjectCard from "./ProjectCard/ProjectCard";
// import { ProjectList } from "../../data/ProjectData";
// import { FilterBar, Tabs, TabButton, Count } from "./ProjectCard/ProjectCardElements";

// const TABS = ["Data Analytics", "Data Science", "AI & Automation", "Robotics", "Case Studies", "All"];

// function Projects() {
//   // Default to Data Analytics view
//   const [activeTab, setActiveTab] = useState("Data Analytics");

//   const filtered = useMemo(() => {
//     if (activeTab === "All") return ProjectList;
//     return ProjectList.filter((p) => p.category === activeTab);
//   }, [activeTab]);

//   const countFor = (tab) =>
//     tab === "All"
//       ? ProjectList.length
//       : ProjectList.filter((p) => p.category === tab).length;

//   return (
//     <>
//       <svg
//         height="100%"
//         width="100%"
//         id="svg"
//         viewBox="0 0 1440 400"
//         xmlns="http://www.w3.org/2000/svg"
//       >
//         <path
//           d="M 0,400 C 0,400 0,200 0,200 C 114.35714285714289,156.53571428571428 228.71428571428578,113.07142857142858 351,131 C 473.2857142857142,148.92857142857142 603.4999999999998,228.25 713,248 C 822.5000000000002,267.75 911.2857142857144,227.92857142857142 1029,210 C 1146.7142857142856,192.07142857142858 1293.3571428571427,196.03571428571428 1440,200 C 1440,200 1440,400 1440,400 Z"
//           stroke="none"
//           strokeWidth="0"
//           fill="#151418ff"
//           transform="rotate(-180 720 200)"
//         ></path>
//       </svg>

//       <div className="ProjectWrapper" id="projects">
//         <div className="Container">
//           <div className="SectionTitle">Projects</div>

//           {/* Filter/Tabs */}
//           <FilterBar>
//             <Tabs>
//               {TABS.map((tab) => (
//                 <TabButton
//                   key={tab}
//                   aria-pressed={activeTab === tab}
//                   onClick={() => setActiveTab(tab)}
//                 >
//                   {tab} <Count>{countFor(tab)}</Count>
//                 </TabButton>
//               ))}
//             </Tabs>
//           </FilterBar>

//           {/* Cards */}
//           <ProjectCard items={filtered} />
//         </div>
//       </div>
//     </>
//   );
// }

// export default Projects;




// // import React from "react";
// // import ProjectCard from "./ProjectCard/ProjectCard";
// // function Projects() {
// //   return (
// //     <>
// //       <svg
// //         height="100%"
// //         width="100%"
// //         id="svg"
// //         viewBox="0 0 1440 400"
// //         xmlns="http://www.w3.org/2000/svg"
// //       >
// //         <path
// //           d="M 0,400 C 0,400 0,200 0,200 C 114.35714285714289,156.53571428571428 228.71428571428578,113.07142857142858 351,131 C 473.2857142857142,148.92857142857142 603.4999999999998,228.25 713,248 C 822.5000000000002,267.75 911.2857142857144,227.92857142857142 1029,210 C 1146.7142857142856,192.07142857142858 1293.3571428571427,196.03571428571428 1440,200 C 1440,200 1440,400 1440,400 Z"
// //           stroke="none"
// //           strokeWidth="0"
// //           fill="#151418ff"
// //           transform="rotate(-180 720 200)"
// //         ></path>
// //       </svg>
// //       <div className="ProjectWrapper" id="projects">
// //         <div className="Container">
// //           <div className="SectionTitle">Projects</div>
// //           <ProjectCard />
// //         </div>
// //       </div>
// //     </>
// //   );
// // }


// // export default Projects;
