"use client";
import styles from "./Contact.module.css";
import { useForm } from "react-hook-form";
import { useState } from "react";

export default function Contact() {
  const { register, handleSubmit, reset } = useForm();
  const [status, setStatus] = useState("");

  const onSubmit = async (data: any) => {
    setStatus("Sending...");
    const res = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(data),
    });

    setStatus(res.ok ? "Message sent successfully!" : "Failed to send message");
    reset();
  };

  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.sectionHeader}>
        <div className={styles.sectionTag}>Contact</div>
        <h2 className={styles.sectionTitle}>Let’s Connect</h2>
        <div className={styles.decorativeLine}></div>
      </div>

      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <input type="text" placeholder="Your Name" required {...register("name")} />
        <input type="email" placeholder="Your Email" required {...register("email")} />
        <textarea placeholder="Your Message" rows={5} required {...register("message")} />
        <button type="submit" className={styles.btnPrimary}>
          Send Message
        </button>
        {status && <p className={styles.status}>{status}</p>}
      </form>
    </section>
  );
}
