// Importa a biblioteca Nodemailer
import nodemailer from "nodemailer";

// Cria o handler da API
export default async function handler(req, res) {
  // Verifica se a requisição é POST
  if (req.method === "POST") {
    // Obtém os dados enviados pelo formulário
    const { name, email, message } = req.body;

    // Verifica se todos os campos foram preenchidos
    if (!name || !email || !message) {
      return res.status(400).json({ error: "Por favor, preencha todos os campos." });
    }

    try {
      // Configura o transporte do email
      const transporter = nodemailer.createTransport({
        service: "gmail", // Troque pelo serviço do seu email, como Outlook, Yahoo, etc.
        auth: {
          user: process.env.EMAIL_USER, // Email do remetente (variável de ambiente)
          pass: process.env.EMAIL_PASS, // Senha ou App Password do remetente (variável de ambiente)
        },
      });

      // Configura os detalhes do email
      const mailOptions = {
        from: process.env.EMAIL_USER, // O email que envia
        to: process.env.EMAIL_RECEIVER, // O email que recebe (variável de ambiente)
        subject: `Nova mensagem de ${name}`, // Assunto do email
        text: `Você recebeu uma nova mensagem:\n\nNome: ${name}\nEmail: ${email}\n\nMensagem:\n${message}`, // Corpo do email
      };

      // Envia o email
      await transporter.sendMail(mailOptions);

      // Retorna sucesso
      res.status(200).json({ success: true, message: "Email enviado com sucesso!" });
    } catch (error) {
      console.error("Erro ao enviar o email:", error);
      res.status(500).json({ error: "Erro ao enviar o email. Tente novamente mais tarde." });
    }
  } else {
    // Retorna erro para métodos não permitidos
    res.status(405).json({ error: "Método não permitido." });
  }
}
