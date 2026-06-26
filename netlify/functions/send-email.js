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
Novo cadastro na Landing Page

Nome: ${data.name}
E-mail: ${data.email}

Este morador deseja receber promoções, descontos e novidades do Mercado Autônomo.
      `,

      html: `
      <div style="margin:0;padding:40px;background:#f3f4f6;font-family:Arial,Helvetica,sans-serif;">
        <table style="max-width:650px;margin:auto;background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 8px 25px rgba(0,0,0,.08);">

          <tr>
            <td style="background:#16a34a;padding:30px;text-align:center;color:white;">
              <h1 style="margin:0;font-size:30px;">Mercado Autônomo</h1>
              <p style="margin-top:10px;font-size:16px;">
                Novo cadastro recebido
              </p>
            </td>
          </tr>

          <tr>
            <td style="padding:35px;">

              <h2 style="margin-top:0;color:#222;">
                Um morador deseja receber ofertas!
              </h2>

              <p style="color:#666;line-height:1.7;">
                Um novo cadastro foi realizado através da Landing Page do
                <strong> Mercado Autônomo</strong>.
              </p>

              <table style="width:100%;margin-top:30px;border-collapse:collapse;">

                <tr>
                  <td style="padding:18px;background:#f7f7f7;border-radius:10px;">
                    <strong>Nome</strong><br><br>
                    ${data.name}
                  </td>
                </tr>

                <tr>
                  <td style="height:15px;"></td>
                </tr>

                <tr>
                  <td style="padding:18px;background:#f7f7f7;border-radius:10px;">
                    <strong>E-mail</strong><br><br>
                    ${data.email}
                  </td>
                </tr>

              </table>

              <div style="
                margin-top:30px;
                padding:18px;
                background:#ecfdf5;
                border-left:5px solid #16a34a;
                border-radius:8px;
                color:#14532d;
              ">
                Este morador demonstrou interesse em receber descontos,
                promoções e novidades do Mercado Autônomo do condomínio.
              </div>

            </td>
          </tr>

          <tr>
            <td style="
              background:#fafafa;
              padding:20px;
              text-align:center;
              color:#999;
              font-size:13px;
            ">
              Este e-mail foi enviado automaticamente pela Landing Page do
              Mercado Autônomo.
            </td>
          </tr>

        </table>
      </div>
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