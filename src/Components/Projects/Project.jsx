import React from "react";
import "./Project.scss";
import freakyloom from "./freakyloom.png";
import Tutornet from "./Tutornet.png";
import HomeDecor from "./HomeDecor.png";
function Project() {
  const ProjectData = [
    {
      id: 1,
      image: (
        <img width={"300px"} height={"200px"} src={freakyloom} alt="logo" />
      ),
      title: "Freakyloom",
      desc: "An e-commerce platform for a clothing brand, allowing customers to browse and purchase products, track their orders, and make secure payments, utilizing modern web technologies to deliver a seamless and efficient shopping experiance.",
      tech: ".Net Core MVC, Razor Pay,SSMS",
    },
    {
      id: 2,
      image: <img width={"300px"} height={"200px"} src={Tutornet} alt="logo" />,
      title: "Tutornet",
      desc: "Developed a comprehensive online platform enabling student to browse and book tutors for various courses. The system features automated tutor availability management, seamless slotbooking, and integrated payment processing, ensuring a streamlined and user-friendly experience for both students and tutors. Administrators can view booked slots in the calendar section od their panel and manage all slots,tutors,courses,classes and payments to tutors based on their teaching hours on a monthly basis.",
      tech: "React, Redux toolkit, .Net core API, SSMS",
    },
    {
      id: 3,
      image: (
        <img width={"300px"} height={"200px"} src={HomeDecor} alt="logo" />
      ),
      title: "Home Decor And Interior",
      desc: "A E-Commerce website for decorating your home with vast verity of diffrent products. Where user can see each product with its related product and can able to give review.",
      tech: "JNDI , JPA , EJB , CDIBean , JSF , Java",
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
