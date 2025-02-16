document.getElementById("contact-form").addEventListener("submit", async function (event) {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const phone = form.phone.value;
    const email = form.email.value;
    const message = form.message.value;

    // Pega os elementos do modal
    const modal = document.getElementById("email-modal");
    const statusIcon = document.getElementById("status-icon");
    const modalMessage = document.getElementById("modal-message");
    const closeModal = document.getElementById("close-modal");

    // Exibir modal e animação de carregamento
    modal.style.display = "flex";
    statusIcon.className = "loading";
    modalMessage.textContent = "Enviando...";

    try {
        const response = await fetch("https://eclipseroad.com/api/send-email", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                to: "cunha.guile@gmail.com",
                subject: `Contato de ${name} - ${phone}`,
                text: `Nome: ${name}\nTelefone: ${phone}\nE-mail: ${email}\n\nMensagem:\n${message}`,
            }),
        });

        if (response.ok) {
            // Sucesso - Ícone verde
            statusIcon.className = "success";
            modalMessage.textContent = "E-mail enviado com sucesso!";
            form.reset(); // Limpa o formulário
        } else {
            throw new Error("Falha ao enviar o e-mail");
        }
    } catch (error) {
        // Erro - Ícone vermelho
        statusIcon.className = "error";
        modalMessage.textContent = "Erro ao enviar. Tente novamente!";
    }

    // Fechar o modal ao clicar no botão
    closeModal.addEventListener("click", () => {
        modal.style.display = "none";
    });
});
