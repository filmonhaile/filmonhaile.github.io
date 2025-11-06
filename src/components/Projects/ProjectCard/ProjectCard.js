// updated code 

import React from "react";
import { Link } from "react-router-dom";

import {
  Card,
  CardLeft,
  CardRight,
  TechCardContainer,
  TechCard,
  BtnGroup,
  BadgeRow,
  Badge,
  CategoryPill,
} from "./ProjectCardElements";
import ScrollAnimation from "react-animate-on-scroll";

function ProjectCard({ items = [] }) {
  return (
    <>
      {items.map((p, index) => (
        <ScrollAnimation animateIn="fadeInLeft" key={p.id || index}>
          <Card>
            <CardLeft>
              <img src={p.img} alt={p.title} />
            </CardLeft>

            <CardRight>
              <CategoryPill>{p.category}</CategoryPill>
              <h4>{p.title}</h4>
              <p>{p.description}</p>

              {Array.isArray(p.subCategory) && p.subCategory.length > 0 && (
                <BadgeRow>
                  {p.subCategory.map((sc, i) => (
                    <Badge key={i}>{sc}</Badge>
                  ))}
                </BadgeRow>
              )}

              <TechCardContainer>
                {(p.stack || p.tech_stack || []).map((tech, i) => (
                  <TechCard key={i}>{tech}</TechCard>
                ))}
              </TechCardContainer>

              {/* <BtnGroup>
                {p.github_url && p.github_url.length > 0 && (
                  <a
                    className="btn SecondaryBtn btn-shadow"
                    href={p.github_url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Github
                  </a>
                )}
                {p.demo_url && p.demo_url.length > 0 && (
                  <a
                    className="btn PrimaryBtn btn-shadow"
                    href={p.demo_url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Demo ➜
                  </a>
                )}
              </BtnGroup> */}

<BtnGroup>
  {p.github_url && (
    <a
      className="btn SecondaryBtn btn-shadow"
      href={p.github_url}
      target="_blank"
      rel="noopener noreferrer"
    >
      GitHub
    </a>
  )}
  <Link
    className="btn PrimaryBtn btn-shadow"
    to={`/projects/${p.id}`}
    style={{ textDecoration: "none" }}
  >
    View Project →
  </Link>
</BtnGroup>
            </CardRight>
          </Card>
        </ScrollAnimation>
      ))}
    </>
  );
}

export default ProjectCard;



// import React from "react";
// import { ProjectList } from "../../../data/ProjectData";
// import {
//   Card,
//   CardLeft,
//   CardRight,
//   TechCardContainer,
//   TechCard,
//   BtnGroup,
// } from "./ProjectCardElements";
// import ScrollAnimation from "react-animate-on-scroll";
// function ProjectCard() {
//   return (
//     <>
//       {ProjectList.map((list, index) => (
//         <ScrollAnimation animateIn="fadeInLeft" key={index}>
//           <Card>
//             <CardLeft>
//               <img src={list.img} alt={list.name} />
//             </CardLeft>
//             <CardRight> 
//               <h4>{list.title}</h4>
//               <p>{list.description}</p>
//               <TechCardContainer>
//                 {list.tech_stack.map((tech, index) => (
//                   <TechCard key={index}>{tech}</TechCard>
//                 ))}
//               </TechCardContainer>
//               <BtnGroup>
//                 {list.github_url.length > 0 && (
//                   <a
//                     className="btn SecondaryBtn btn-shadow"
//                     href={list.github_url}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >
//                     Github
//                   </a>
//                 )}
//                 {list.demo_url.length > 0 && (
//                   <a
//                     className="btn PrimaryBtn btn-shadow"
//                     href={list.demo_url}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >
//                     Demo ➜
//                   </a>
//                 )}
//               </BtnGroup>
//             </CardRight>
//           </Card>
//         </ScrollAnimation>
//       ))}
//     </>
//   );
// }

// export default ProjectCard;
