import { useState, useRef } from "react";
import { toast } from "react-toastify";
import ReCAPTCHA from "react-google-recaptcha";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [captchaToken, setCaptchaToken] = useState("");

  const recaptchaRef = useRef(null);

  async function handleSubmit(e) {
    e.preventDefault();

    if (!name.trim()) {
      toast.error("Informe seu nome.");
      return;
    }

    if (!email.trim()) {
      toast.error("Informe seu e-mail.");
      return;
    }

    if (!captchaToken) {
      toast.error("Confirme que você não é um robô.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          captchaToken,
        }),
      });

      if (!response.ok) {
        const data = await response.json().catch(() => ({}));
        throw new Error(data.error || "Erro ao enviar o cadastro.");
      }

      toast.success("Cadastro realizado com sucesso!");

      setName("");
      setEmail("");
      setCaptchaToken("");
      recaptchaRef.current?.reset();
    } catch (error) {
      console.error(error);
      toast.error(error.message);
    } finally {
      setLoading(false);
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

          <ReCAPTCHA
            ref={recaptchaRef}
            sitekey="6LfA9TYtAAAAAJ2UvKkyzDVsKKNvbgUe7PJcQMzu"
            onChange={(token) => setCaptchaToken(token)}
          />

          <button type="submit" disabled={loading}>
            {loading ? "Enviando..." : "Quero receber ofertas"}
          </button>
        </form>
      </div>
    </section>
  );
}