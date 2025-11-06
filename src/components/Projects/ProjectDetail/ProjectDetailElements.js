// src/components/Projects/ProjectDetail/ProjectDetailElements.js
import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const Wrapper = styled.div`
  max-width: 900px;
  margin: 3rem auto;
  padding: 0 1rem;
  color: #222;
`;

export const HeroImage = styled.img`
  width: 100%;
  border-radius: 10px;
  object-fit: cover;
  margin-bottom: 1.5rem;
`;

export const Title = styled.h1`
  font-size: 2rem;
  font-weight: 600;
  margin: 0.5rem 0;
`;

export const Meta = styled.p`
  color: #666;
  font-size: 0.9rem;
  margin-bottom: 1rem;
`;

export const Section = styled.section`
  margin: 2rem 0;
  h3 {
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
  }
  p {
    line-height: 1.6;
    color: #333;
  }
`;

export const BadgeRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: 1rem;
`;

export const Badge = styled.span`
  background: #f1f5f9;
  color: #333;
  font-size: 12px;
  padding: 4px 8px;
  border-radius: 999px;
`;

export const StackRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 1rem 0 2rem 0;
`;

export const StackBadge = styled.span`
  background: #151418;
  color: white;
  font-size: 13px;
  padding: 6px 12px;
  border-radius: 8px;
  font-weight: 500;
`;

export const Links = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 2rem;
`;

export const BackLink = styled(Link)`
  display: inline-block;
  margin-top: 1rem;
  color: #151418;
  font-weight: 600;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;
