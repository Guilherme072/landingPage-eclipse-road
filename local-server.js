const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();
const port = 3000;

// Configurando o CORS para permitir requisições da porta 5501
const corsOptions = {
    origin: ["http://localhost:5501", "http://127.0.0.1:5501"], // Permite apenas requisições da porta 5501
    methods: ["GET", "POST"], // Permite métodos GET e POST
    allowedHeaders: ["Content-Type"] // Permite cabeçalhos de tipo de conteúdo
};


// Permite requisições de qualquer origem
app.use(cors(corsOptions));
app.use(express.json()); // Para tratar dados no formato JSON

// Configuração do Nodemailer
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "cunha.guile@gmail.com",
        pass: "novn bpjo qnlj cujt"
    }
});

// Rota para enviar e-mail
app.post("/send-email", async (req, res) => {
    const { to, subject, text } = req.body;

    try {
        // Configure o Nodemailer aqui
        await transporter.sendMail({
            from: "silvasvila36@gmail.com",
            to: to,
            subject,
            text,
        });
        res.json({ message: "E-mail enviado com sucesso!" });
    } catch (error) {
        console.error("Erro ao enviar e-mail:", error);
        res.status(500).json({ message: "Erro ao enviar e-mail", error: error.message });
    }
});

// Inicia o servidor
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
