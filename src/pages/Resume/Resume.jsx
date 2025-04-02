import React from 'react';
import { FaBookReader, FaRegBookmark } from "react-icons/fa";
import TimelineItem from './TimelineItem';
import SkillItem from './SkillItem';

const Resume = () => {
  return (
    <section>
      <header>
        <h2 className="h2 article-title">Resume</h2>
      </header>

      <div className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <FaBookReader />
          </div>
          <h3 className="h3">Education</h3>
        </div>
        <ol className="timeline-list">
          <TimelineItem
            title="Bachelor of Technology in Electrical Engineering"
            date="2020 — 2024"
            description="I earned my degree in Electrical Engineering from NBKRIST, graduating with a CGPA of 8.0. My time at college was invaluable, filled with opportunities to explore various domains. I was surrounded by a talented group of peers who continuously inspired and motivated me to excel."
          />
          <TimelineItem
            title="Board of Intermediate Education"
            date="2018 — 2020"
            description="I completed my Intermediate at Sri Chaitanya Jr College, Nellore, with a CGPA of 9.38. This period was crucial for my personal and academic growth, offering a wide range of opportunities to explore different fields. The talented and driven peer group around me constantly inspired me to achieve my best."
          />
          <TimelineItem
            title="Secondary School Certificate"
            date="2017 — 2018"
            description="I completed my Secondary School at Vidya Vihar E.M. School, N.V. Gardens, Nellore, earning a CGPA of 9.0. This experience was incredibly formative, providing me with a wealth of opportunities to delve into various domains. My talented peers consistently inspired and motivated me to strive for excellence."
          />
        </ol>
      </div>

      <div className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <FaRegBookmark />
          </div>
          <h3 className="h3">Experience</h3>
        </div>
        <ol className="timeline-list">
          <TimelineItem
            title="Full Stack Web Developer - Virtual Internship"
            date="Jan-2024 - May-2024"
            description="Learned how to create the structure (HTML) and style (CSS) of web pages. Understand client-side scripting for interactivity and dynamic content on the user's browser. Learned to interact with databases (e.g., MySQL and MongoDB) and understand basic database design principles."
          />
          <TimelineItem
            title="Front End Web Developer - Virtual Internship"
            date="Jan-2024 - Feb-2024"
            description="Learned the fundamentals of HTML and CSS for structuring and styling web pages. Gained proficiency in JavaScript, it enables interactive and dynamic content on websites. Developed a dynamic web application utilizing HTML, CSS, and JavaScript. Used version control systems like Git to manage and collaborate on code effectively."
          />
          <TimelineItem
            title="APTRANSCO - On-site Internship"
            date="Jan-2024 - Jan-2024"
            description="Gain practical experience in the field of electrical transmission and distribution. Understand the operations and functions of APTRANSCO. Assist in routine tasks related to transmission system operation and maintenance. Work closely with experienced professionals to understand the workflow and procedures."
          />
        </ol>
      </div>

      <div className="skill">
        <h3 className="h3 skills-title">My skills</h3>
        <ul className="skills-list content-card">
          <SkillItem title="HTML5" value={95} />
          <SkillItem title="CSS3" value={80} />
          <SkillItem title="JavaScript" value={75} />
          <SkillItem title="Reactjs" value={70} />
          <SkillItem title="Nodejs" value={75} />
          <SkillItem title="Express" value={75} />
          <SkillItem title="MongoDB" value={70} />
        </ul>
      </div>
    </section>
  );
};

export default Resume;
