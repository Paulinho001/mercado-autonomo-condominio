import { useState } from "react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email }),
      });

      if (!response.ok) {
        throw new Error("Erro ao cadastrar");
      }

      alert("Cadastro realizado! Você receberá nossas ofertas.");

      setName("");
      setEmail("");
    } catch (error) {
      alert("Não foi possível cadastrar. Tente novamente.");
    }
  }

  return (
    <section id="contact">
      <div className="contact-box">
        <h2>Receba descontos do mercado</h2>

        <p>Cadastre seu e-mail e receba promoções do condomínio.</p>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Seu nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="email"
            placeholder="Seu melhor e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <button type="submit">Quero receber ofertas</button>
        </form>
      </div>
    </section>
  );
}