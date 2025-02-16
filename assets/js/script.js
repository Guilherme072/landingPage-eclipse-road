document.getElementById("contact-form").addEventListener("submit", async function (event) {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const phone = form.phone.value;
    const email = form.email.value;
    const message = form.message.value;
    
    // Pegar a caixinha de resposta
    const responseBox = document.getElementById("response-box");
    const responseText = document.getElementById("response-text");
    const loader = document.getElementById("loader");

    // Mostrar a caixinha e iniciar o loader
    responseBox.classList.remove("hidden");
    responseBox.classList.remove("success", "error");
    loader.style.display = "block"; // Mostra a bolinha girando
    responseText.innerText = "Enviando...";

    try {
        const response = await fetch("https://eclipseroad.com/api/send-email", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                to: "cunha.guile@gmail.com",
                subject: `Contato de ${name} - ${phone}`,
                text: `Nome: ${name}\nTelefone: ${phone}\nE-mail: ${email}\n\nMensagem:\n${message}`,
            }),
        });

        if (response.ok) {
            responseText.innerText = "✅ E-mail enviado com sucesso!";
            responseBox.classList.add("success");
            loader.style.display = "none"; // Esconde o loader
            form.reset();
        } else {
            throw new Error("Falha ao enviar o e-mail");
        }
    } catch (error) {
        responseText.innerText = "❌ Erro ao enviar o e-mail!";
        responseBox.classList.add("error");
        loader.style.display = "none"; // Esconde o loader
    }

    // Ocultar a mensagem após 3 segundos
    setTimeout(() => {
        responseBox.classList.add("hidden");
    }, 3000);
});
