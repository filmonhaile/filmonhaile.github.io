import React from "react";
import { stackList } from "../../data/ProjectData";
import {
  Image,
  Technologies,
  Tech,
  TechImg,
  TechName,
  ContactWrapper,
} from "./AboutElements";
import ScrollAnimation from "react-animate-on-scroll";
function About() {
  return (
    <ContactWrapper id="about">
      <div className="Container">
        <div className="SectionTitle">About Me</div>
        <div className="BigCard">
        <ScrollAnimation animateIn="fadeInLeft">
          <Image
            src="/man-svgrepo-com.svg"
            alt="man-svgrepo"
          />
        </ScrollAnimation>
          <div className="AboutBio">
            <ScrollAnimation animateIn="fadeInLeft">
            <strong>Hi, I’m Filmon Haile Assefa</strong>, a data enthusiast who turns complexity into clarity through analytics, storytelling, and impact-driven technology.
            </ScrollAnimation>

            <br /><br />
            
            <ScrollAnimation animateIn="fadeInLeft">
            I studied computer science and engineering, but somewhere along the way I realized I’m happiest when 
I’m inside a dataset: writing SQL queries, building Python workflows (Pandas, NumPy, Seaborn, Matplotlib, and OpenCV), 
designing dashboards in Tableau or Power BI, or using R when the situation demands extra statistics. 
I also have a solid understanding of machine learning with Scikit-learn, TensorFlow, and PyTorch, 
because sometimes the data doesn’t just need to be explained, it needs to predict.
            </ScrollAnimation>
            
            <br /><br />
            
            <ScrollAnimation animateIn="fadeInLeft">
            I’ve applied these skills across projects in public health, transportation, business intelligence, finance, and even gaming. 
You’ll find some of my work on Kaggle, Tableau Public, and across my portfolio projects. 
I also hold the Google Data Analytics Professional Certificate, proof that I survived countless spreadsheets and came out loving data even more.
which is a fancy way of saying I’ve spent a lot of time cleaning messy data and asking “why?” until insights appear.
            </ScrollAnimation>

            <br /><br />

            {/* <ScrollAnimation animateIn="fadeInLeft">
            When I’m not visualizing datasets or optimizing dashboards, I’m probably gaming, brainstorming startup ideas, or learning something new just for fun. 
If you ever want to collaborate, share ideas, or just talk data and innovation, my door (and inbox) is always open.
            </ScrollAnimation> */}
            
            {/* <br /><br /> */}

            {/* <ScrollAnimation animateIn="fadeInLeft">
            National and international conferences, workshops, and hackathons became my platforms to share knowledge and connect with like-minded individuals, each interaction fueling my journey.
            </ScrollAnimation> */}

            {/* <br /><br /> */}

            <ScrollAnimation animateIn="fadeInLeft">
            When I’m not visualizing datasets or optimizing dashboards, I’m probably gaming, brainstorming startup ideas, or learning something new just for fun. If you ever want to collaborate, share ideas, or just talk data and innovation, my door (and inbox) is always open.


             <br /><br /> <br /><br />
              <div className="tagline2">
                I have become confident using the following technologies:
              </div>
            </ScrollAnimation>
            

            <Technologies>
              {stackList.map((stack, index) => (
                <ScrollAnimation animateIn="fadeInLeft" key={index}>
                  <Tech key={index} className="tech">
                    <TechImg src={stack.img} alt={stack.name} />
                    <TechName>{stack.name}</TechName>
                  </Tech>
                </ScrollAnimation>
              ))}
            </Technologies>
          </div>

        </div>
      </div>
    </ContactWrapper>
  );
}

export default About;
