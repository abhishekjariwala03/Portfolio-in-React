import React from "react";
import "./Achivment.scss";
import AWS from "./AWS.png";
import node from "./node.png";
import security from "./cyber-security.png";

const CertificateData = [
  {
    id: 1,
    title: "AWS Certificate",
    image: (
      <img src={AWS} height={"115px"} width={"116px"} alt="certificate_icon" />
    ),
    description:
      "Completed AWS course and learn basics of aws such as EC2,S3,EBS,CloudFront",
    link: (
      <a
        target="_blank"
        href="https://drive.google.com/file/d/1NdutnfxPEac3i11EEj53gS1YWuyeFXCg/view?usp=sharing"
      >
        View Certificate
      </a>
    ),
  },
  {
    id: 2,
    title: "IBM Nodejs Certificate",
    image: (
      <img src={node} height={"115px"} width={"116px"} alt="certificate_icon" />
    ),
    description:
      "Compeleted nodejs course offered by IBM with exress and jwt and many more functionality",
    link: (
      <a
        target="_blank"
        href="https://drive.google.com/file/d/11yAzULfy4GGDii50SMEK6bWZqa226EHt/view?usp=sharing"
      >
        View Certificate
      </a>
    ),
  },
  {
    id: 3,
    title: "IBM Cyber Security Certificate",
    image: (
      <img
        height={"115px"}
        width={"116px"}
        src={security}
        alt="certificate_icon"
      />
    ),
    description:
      "Compeleted cyber security course offered by IBM gained knowledge about diiffrent types of cyber attacks.",
    link: (
      <a
        target="_blank"
        href="https://drive.google.com/file/d/14RuSvlM5StdQ1wgGF5BSnLMfou2x1B1l/view?usp=sharing"
      >
        View Certificate
      </a>
    ),
  },
];

function Achivment() {
  return (
    <>
      <div
        style={{ marginBottom: "10rem", marginTop: "5rem" }}
        className="achivment-main"
      >
        <h3>
          Achivments / Certifications{" "}
          <i style={{ color: "#8faed6" }} className="fas fa-trophy"></i>
        </h3>
        <p>Achivments and some best certifications which i have done.</p>
        <div style={{ marginTop: "5rem" }} className="main-achivment">
          {CertificateData.map((item) => (
            <div data-aos="fade-in" key={item.id} className="card">
              <div className="imageDiv">{item.image}</div>
              <div className="Content">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <button className="btn">{item.link}</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Achivment;
