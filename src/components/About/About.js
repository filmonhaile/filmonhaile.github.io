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
            'Selam'! My name is <strong>Filmon Haile</strong>, and I'm an Ethiopian tech enthusiast driven by a thirst for innovation and the desire to build a better future for my community. My journey began at Mekelle Institute of Technology, where I traversed the vast landscapes of computer science and engineering. But classrooms weren't enough – I craved real-world impact.
            </ScrollAnimation>

            <br /><br />
            
            <ScrollAnimation animateIn="fadeInLeft">
            That's where projects like early breast cancer detection using deep learning and plant leaf disease detection using machine learning took center stage. These weren't just academic exercises; they were weapons aimed at tackling critical issues in health and agriculture. Witnessing the potential of technology to transform lives fueled my passion to bridge the gap between theory and tangible impact.
            </ScrollAnimation>
            
            <br /><br />
            
            <ScrollAnimation animateIn="fadeInLeft">
            But my endeavors weren't limited to scientific frontiers. I believe code can weave not just algorithms, but connections. Hence, my portfolio boasts websites and web applications, some sleek and simple, others intricate and complex – all crafted with the user in mind.
            </ScrollAnimation>

            <br /><br />

            <ScrollAnimation animateIn="fadeInLeft">
            My experience straddles both academia and industry. As an assistant lecturer and research engineer, I honed my research and communication skills, delving into robotics, UAVs, AI, computer vision, and even quantum computing. In the industry, I solidified my organizational and managerial abilities, learning the art of collaborative problem-solving within diverse teams
            </ScrollAnimation>
            
            <br /><br />

            <ScrollAnimation animateIn="fadeInLeft">
            National and international conferences, workshops, and hackathons became my platforms to share knowledge and connect with like-minded individuals, each interaction fueling my journey.
            </ScrollAnimation>

            <br /><br />

            <ScrollAnimation animateIn="fadeInLeft">
            Today, I stand at the intersection of technology, creativity, and community impact. Eager to explore what lies ahead, I'm constantly seeking exciting projects where my diverse skillset can make a meaningful difference.
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
