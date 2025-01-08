export default async function handler(req, res) {
    if (req.method === "POST") {
      const { name, email, message } = req.body;
  
      // Configurar e enviar o email usando Nodemailer (ou outra biblioteca)
      // Exemplo básico:
      const nodemailer = require("nodemailer");
      const transporter = nodemailer.createTransport({
        service: "gmail", // Ou outro provedor
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });
  
      const mailOptions = {
        from: email,
        to: process.env.EMAIL_RECEIVER,
        subject: `Mensagem de ${name}`,
        text: message,
      };
  
      try {
        await transporter.sendMail(mailOptions);
        res.status(200).json({ success: true });
      } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, error: "Erro ao enviar o email" });
      }
    } else {
      res.status(405).json({ error: "Método não permitido" });
    }
  }
  