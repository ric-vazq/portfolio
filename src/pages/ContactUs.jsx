import { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function ContactUs() {
  const form = useRef();
  const sendMail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_586r9hw", "template_63nsvz7", form.current, {
        publicKey: "FS50HFJD2Ak56LcYp",
      })
      .then(
        () => {
          console.log("Success");
        },
        (error) => {
          console.log("Failed...", error.text);
        }
      );
  };
  return (
    <form ref={form} onSubmit={sendMail}>
        <label htmlFor="name">Name</label>
        <input type="text" name="user_name"/>
        <label htmlFor="email">Email</label>
        <input type="email" name="user_email" />
        <label htmlFor="message">Message</label>
        <textarea name="message" id="message" cols="30" rows="10"></textarea>
        <button type="submit">Send</button>
    </form>
  )
}
