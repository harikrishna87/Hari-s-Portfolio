import { useEffect, useState } from "react"
import Testimonial from "./Testimonial";
import Service from "./Service";

const servicesData = [
  {
    icon: "/images/a.png",
    title: "Web Application Development",
    description: "Build scalable and high-performance web apps using MERN stack (MongoDB, Express, React, Node.js)."
  },
  {
    icon: "/images/a.png",
    title: "Frontend Development",
    description: "Create interactive and responsive user interfaces using HTML, CSS, JavaScript, and ReactJs."
  },
  {
    icon: "/images/r.png",
    title: "Backend Development",
    description: "Develop secure and efficient backend systems using Node.js and Express."
  },
  {
    icon: "/images/h.png",
    title: "Database Management",
    description: "Design and manage databases using SQL and MongoDB for optimized data storage and retrieval."
  }
];


const About = () => {
  const [testimonials, setTestimonials] = useState([]);
  useEffect(() => {
    fetch('testimonials.json').then(res => res.json()).then(data => {
      setTestimonials(data)
    });
  }, [])
  return (
    <article className="about  active" data-page="about">

      <header>
        <h2 className="h2 article-title">About me</h2>
      </header>

      <section className="about-text">
        <p>
          Aspiring Full Stack Web Developer with expertise in designing and maintaining responsive websites and web applications using HTML, CSS, JavaScript, TypeScript, React.js, Node.js, and Express.js. 
          Proficient in database management with MongoDB and MySQL for efficient data storage and retrieval. Skilled in creating intuitive UI/UX and debugging to ensure seamless functionality. 
          Collaborates effectively with designers and developers to transform concepts into functional solutions. Expert in Git and Visual Studio Code. Focused on continuous enhancement in performance, 
          usability, and design.
        </p>

        <p>
          Developed a IConnect Video Calling App using the MERN stack and a FoodDelight E-CommerceRestaurant Website using MERN Stack with TypeScript.
          Currently enhancing skills in React and RESTful APIs while collaborating with cross-functional teams
          to drive innovation. Passionate about developing robust, user-centric applications and seeking an opportunity
          to contribute technical expertise to dynamic projects.
        </p>
      </section>


      {/* <!--
      - service
    --> */}

      <section className="service">

        <h3 className="h3 service-title">What i'm doing</h3>

        <ul className="service-list">

          {servicesData.map((service, index) => (
            <Service
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}

        </ul>

      </section>


      {/* <!--
      - testimonials
    --> */}

      {/* <section className="testimonials">

        <h3 className="h3 testimonials-title">Testimonials</h3>

        <ul className="testimonials-list has-scrollbar">

          {testimonials.map((testimonial, index) => (
            <Testimonial
              key={index}
              name={testimonial.name}
              avatar={testimonial.avatar}
              testimonial={testimonial.testimonial}
            />
          ))}

        </ul>

      </section> */}

    </article>
  )
}

export default About