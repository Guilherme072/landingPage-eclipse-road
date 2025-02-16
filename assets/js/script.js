document.getElementById("contact-form").addEventListener("submit", async function (event) {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const phone = form.phone.value;
    const email = form.email.value;
    const message = form.message.value;
    
    const responseBox = document.getElementById("response-box");
    const responseText = document.getElementById("response-text");
    const loader = document.getElementById("loader");

    // 🔹 Mostrar a caixinha e iniciar o loader
    responseBox.style.display = "block"; // Agora a caixinha aparece corretamente
    responseBox.classList.remove("success", "error");
    loader.style.display = "block"; 
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
            form.reset(); // 🔹 Limpa o formulário
        } else {
            throw new Error("Falha ao enviar o e-mail");
        }
    } catch (error) {
        responseText.innerText = "❌ Erro ao enviar o e-mail!";
        responseBox.classList.add("error");
    }

    // 🔹 Esconder o loader e manter a mensagem
    loader.style.display = "none";

    // 🔹 Ocultar a mensagem após 3 segundos
    setTimeout(() => {
        responseBox.style.display = "none";
    }, 3000);
});
