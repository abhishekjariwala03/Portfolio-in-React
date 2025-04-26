import React, { useRef, useState } from "react";
import contact from "./contact.png";
import emailjs from "@emailjs/browser";
import swal from "sweetalert";
import "./Contact.scss";

function Contact() {
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });

  const form = useRef();

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!formData.user_name || !formData.user_email || !formData.message) {
      swal({
        title: "Oops!",
        text: "Please fill in all required fields.",
        icon: "error",
        button: "Okay",
      });
      return;
    }

    emailjs
      .sendForm(
        "service_jp96vx2",
        "template_dpxvkd3",
        form.current,
        "lNhw88GI3DqKzIANC"
      )
      .then(
        (result) => {
          console.log(result.text);
          setFormData({
            user_name: "",
            user_email: "",
            message: "",
          });
          swal({
            title: "Good job!",
            text: "Email sent successfully!",
            icon: "success",
            button: "Okay",
          });
        },
        (error) => {
          console.log(error.text);
          swal({
            title: "Oops!",
            text: "Something went wrong. Please try again.",
            icon: "error",
            button: "Okay",
          });
        }
      );
  };

  return (
    <>
      <div className="contact-main" id="contact">
        <div className="contact-1" data-aos="fade-in">
          <img src={contact} alt="contact_image" />
        </div>
        <div className="contact-2" data-aos="fade-in">
          <h4>
            Contact Me{" "}
            <i style={{ color: "#8faed6" }} className="fas fa-envelope"></i>
          </h4>
          <p>
            Discuss a Project or just want to say hi ? my inbox is always open
            for all.
          </p>
          <form ref={form} onSubmit={sendEmail}>
            <input
              type="text"
              name="user_name"
              placeholder="Full Name *"
              value={formData.user_name}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="user_email"
              placeholder="Email *"
              value={formData.user_email}
              onChange={handleInputChange}
            />
            <textarea
              placeholder="Message *"
              name="message"
              id=""
              cols="30"
              rows="10"
              value={formData.message}
              onChange={handleInputChange}
            ></textarea>
            <input className="btnSub" type="submit" value="Say Hello 👋" />
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
