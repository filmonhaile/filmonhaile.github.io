// src/components/Projects/ProjectDetail/ProjectDetail.js
import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "../../../data/ProjectData";
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import {
  Wrapper,
  HeroImage,
  Title,
  Meta,
  Section,
  BadgeRow,
  Badge,
  StackRow,
  StackBadge,
  Links,
  BackLink,
} from "./ProjectDetailElements";
import { FormLabel } from "@mui/material";

function ProjectDetail() {
  const { id } = useParams();
  const project = ProjectList.find((p) => p.id === id);

  if (!project)
    return (
      <>
      <Header />
      <Wrapper>
        <h2>Project not found</h2>
        <BackLink to="/">← Back to Portfolio</BackLink>
      </Wrapper>
      <Footer />
      </>
    );

  return (
    <>      
    <Header solid/>
    <Wrapper>
      <BackLink to="/">← Back to Portfolio</BackLink>
      {<br/> } {<br/> } {<br/> }
      <HeroImage src={project.img} alt={project.title} />
      <Title>{project.title}</Title>

      <Meta>
        <span>{project.category}</span> • <span>{project.year}</span>
      </Meta>

      {project.subCategory && project.subCategory.length > 0 && (
        <BadgeRow>
          {project.subCategory.map((sc, i) => (
            <Badge key={i}>{sc}</Badge>
          ))}
        </BadgeRow>
      )}

      <Section>
        <h3>Overview</h3>
        <p>{project.description}</p>
      </Section>

      <Section>
        <h3>Problem</h3>
        <p>
          {project.content.problem }
        </p>
      </Section>

      <Section>
        <h3>Approach</h3>
        <p>
          {project.content.approach.map((step, index) => (
            <div key={index}>
              <strong>Step {index + 1}:</strong> {step}
            </div>
          ))}
        </p>
      </Section>

      <Section>
        <h3>Outcome</h3>
        <p>
          {project.content.outcome.summary }
          <br /> <br />
          {project.content.outcome.metrics.map((metric, index) => (
            <div key={index}>
              <strong>{metric.label}:</strong> {metric.value}
            </div>
          ))}
          <br /> <br />
          {project.content.data.sources.map((data, index) => (
            <div key={index}>
              <strong>{data.name}:</strong> <a href={data.url} target="_blank">{data.url}</a> 
            </div>
          ))}
          <br /> <br />
          {project.content.data.size }
          <br /> <br />
          {project.content.data.timeframe }
         <br /> <br />
          {/* {project.content.features}
          <br /> <br />
          {project.content.challenges}
          <br /> <br />
          {project.content.learnings}
          <br /> <br />
          {project.content.gallery} */}
          <br /> <br />
        </p>
      </Section>
      <Section>
        <h3>Chanllenges</h3>
        <p>
          {project.content.challenges.map((step, index) => (
            <div key={index}>
              <strong>{index + 1}:</strong> {step}
            </div>
          ))}
        </p>
      </Section>
      <Section>
        <h3>Gallery</h3>
        <p>
          {project.content.gallery.map((img, index) => (
            <div key={index}>
              <FormLabel> <strong>{img.caption}</strong></FormLabel>
              <img src={img.src} alt={img.caption} style={{ maxWidth: '100%', marginBottom: '10px' }} />
             
            </div>
          ))}
        </p>
      </Section>

      {project.stack && (
        <StackRow>
          {project.stack.map((s, i) => (
            <StackBadge key={i}>{s}</StackBadge>
          ))}
        </StackRow>
      )}

      <Links>
        {project.github_url && (
          <a
            href={project.github_url}
            target="_blank"
            rel="noopener noreferrer"
            className="btn SecondaryBtn btn-shadow"
          >
            View on GitHub
          </a>
        )}
        {project.demo_url && (
          <a
            href={project.demo_url}
            target="_blank"
            rel="noopener noreferrer"
            className="btn PrimaryBtn btn-shadow"
          >
            Live Demo
          </a>
        )}
      </Links>

      <BackLink to="/">← Back to Portfolio</BackLink>
    </Wrapper>
    <Footer />
    </>
  );
}

export default ProjectDetail;
