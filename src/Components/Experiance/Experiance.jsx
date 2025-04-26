import React from "react";
import "./Expreiance.scss";
import thoughtspark from "./thoughtspark.png";

function Experiance() {
  const myExperiance = [
    {
      id: 1,
      image: (
        <img
          src={thoughtspark}
          height={"115px"}
          width={"116px"}
          alt="certificate_icon"
          style={{ background: "none" }}
        />
      ),
      job: "Software Engineer",
      role: "Intern",
      companyName: "Thoughtspark",
      location: "Hyderabad, Telangana",
      desc: "Working as software enginner intern at a thoughtspark and gaining more deeper knowledge about react and typescript.",
      skills: ["React", "Typescript", "Microsoft Azure"],
    },
    {
      id: 2,
      image: (
        <div
          style={{
            height: "115px",
            width: "116px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "40px",
            fontWeight: "bold",
            backgroundColor: "#2b7489",
            color: "#ffffff",
            borderRadius: "60px",
          }}
        >
          IW
        </div>
      ),
      job: ".Net Developer",
      role: "Internship",
      companyName: "InfoWeb solution",
      location: "Surat, Gujarat",
      desc: "Working as .net, c# developer at web info solution creating dynamic web application using react and .net core",
      skills: [".Net", "c#", "SSMS", "React"],
    },
  ];
  return (
    <>
      <div className="mainSection_Experiance">
        <h3>
          Experiance{" "}
          <i style={{ color: "#8faed6" }} className="fas fa-briefcase"></i>
        </h3>

        <div className="experiance">
          {myExperiance.map((item) => (
            <div
              data-aos="fade-in"
              data-aos-delay="50"
              data-aos-duration="1000"
              className="exp"
            >
              <div className="imageDiv">{item.image}</div>
              <div className="content">
                <h3>{item.job}</h3>
                <p>
                  <b>{item.companyName}</b> - {item.role}
                </p>
                <p>{item.location}</p>
                <p>{item.desc}</p>
                <p className="skills">
                  <b>Skills:</b> {item.skills.map((skill) => skill + ", ")}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Experiance;
