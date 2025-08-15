async function obterSeguidores() {
  try {
    const token = "qCBwZPeXCXX4PwmzKTRGsF61rTarQJwv"; // Token precisa ser válido e atualizado

    const url =
      "https://corsproxy.io/?url=https://open.tiktokapis.com/v2/research/user/info/?fields=follower_count";

    const options = {
      method: "POST",
      headers: {
        Authorization: `bearer ${token}`,
        "Content-Type": "application/json",
        origin: "eclipseroad.com"
      },
      body: JSON.stringify({
        username: "kerbitos",
      }),
    };

    fetch(url, options)
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error("Erro:", error));
  } catch (error) {
    console.error("Erro ao obter seguidores:", error);
  }
}

// Forma correta de associar função assíncrona ao onload
window.onload = () => {
  obterSeguidores();
};

/*async function obterSeguidores() {
    const token = ''; // Substitua pelo seu token de acesso
    const response = await TikTokApi.getUserInfo(token, { user_id: '6873939833853871106' });
    const seguidores = response.user['statistics']['follower_count'];
    console.log('Número de seguidores tik tok:', seguidores);
}

window.onload = obterSeguidores;
*/
