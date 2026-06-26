const nodemailer = require("nodemailer");

exports.handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: "Método não permitido" }),
    };
  }

  try {
    const data = JSON.parse(event.body);

    if (!data.name || !data.email) {
      return {
        statusCode: 422,
        body: JSON.stringify({ error: "Nome e e-mail são obrigatórios" }),
      };
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
  from: `"Mercado Autônomo" <${process.env.SMTP_USER}>`,
  to: process.env.CONTACT_EMAIL,
  replyTo: data.email,
  subject: "Novo morador interessado no Mercado Autônomo",
  text: `
Novo cadastro na landing page:

Nome: ${data.name}
E-mail: ${data.email}

Esse morador deseja receber descontos e novidades do mercado autônomo.
  `,
});

    return {
      statusCode: 200,
      body: JSON.stringify({ message: "E-mail enviado com sucesso" }),
    };
  } catch (error) {
    console.error("Erro:", error);

    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Erro ao enviar e-mail" }),
    };
  }
};