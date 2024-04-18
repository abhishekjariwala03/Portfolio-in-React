import React from "react";
import "./Project.scss";
import fiveam from "./loader.jpg";
import portfolio from "./Portfolio.png";
import HomeDecor from "./HomeDecor.png";
function Project() {
  const ProjectData = [
    {
      id: 1,
      image: <img width={"300px"} height={"200px"} src={fiveam} alt="logo" />,
      title: "5Am Media house",
      desc: "Created static website in react js and make it live used emailjs for receving emails.",
      tech: "Reactjs",
      link: "https://www.5amthemediahouse.com/",
    },
    {
      id: 2,
      image: (
        <img width={"300px"} height={"200px"} src={portfolio} alt="logo" />
      ),
      title: "Portfolio Website",
      desc: "Created simple portfolio in html css and added some email fetures to contect and used text to sound converter using javascript.",
      tech: "HTML5 , CSS3 , Javascript , Emailjs , ParticalJs , EmailJs",
      link: "https://abhishekjariwala.netlify.app/",
      code: "https://github.com/abhishekjariwala03/Portfolio",
    },
    {
      id: 3,
      image: (
        <img width={"300px"} height={"200px"} src={HomeDecor} alt="logo" />
      ),
      title: "Home Decor And Interior",
      desc: "A E-Commerce website for decorating your home with vast verity of diffrent products.",
      tech: "JNDI , JPA , EJB , CDIBean , JSF , Java",
      code: "https://github.com/abhishekjariwala03/HomeDecor",
    },
  ];

  return (
    <>
      <div className="projectMain">
        <h3>
          Projects <i style={{ color: "#8faed6" }} className="fas fa-tasks"></i>
        </h3>
        <div className="project">
          {ProjectData.map((item) => (
            <div data-aos="fade-down" className="project-card">
              <div className="project-image">{item.image}</div>
              <div className="content">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
                <h4>Tech Stack : {item.tech}</h4>
                <div className="btnDiv">
                  {item.link && (
                    <button className="btn">
                      <a href={item.link}>View</a>
                    </button>
                  )}
                  {item.code && (
                    <button className="btn">
                      <a href={item.code}>Code</a>
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
export default Project;
