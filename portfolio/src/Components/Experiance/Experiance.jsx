import React from "react";
import "./Expreiance.scss";
import csharp from "./csharp.png";

function Experiance() {
  const myExperiance = [
    {
      id: 1,
      image: (
        <img
          src={csharp}
          height={"115px"}
          width={"116px"}
          alt="certificate_icon"
        />
      ),
      job: ".Net Developer",
      role: "Internship",
      companyName: "Web info solution",
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
