document.getElementById("contact-form").addEventListener("submit", async function (event) {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const phone = form.phone.value;
    const email = form.email.value;
    const message = form.message.value;
    const responseMessage = document.getElementById("response-message");

    try {
        const response = await fetch("", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                to: "cunha.guile@gmail.com",  // Troque pelo e-mail que vai receber as mensagens
                subject: `Contato de ${name} - ${phone}`,
                text: `Nome: ${name}\nTelefone: ${phone}\nE-mail: ${email}\n\nMensagem:\n${message}`,
            }),
        });

        const data = await response.json();
        responseMessage.textContent = data.message;
        responseMessage.style.color = "green";

        form.reset(); // Limpa o formulário após envio
    } catch (error) {
        responseMessage.textContent = "Erro ao enviar o e-mail.";
        responseMessage.style.color = "red";
    }
});
