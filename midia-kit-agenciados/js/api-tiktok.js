async function obterSeguidores() {
    try {
        const token = ''; // Token precisa ser válido e atualizado
        // Verifique se a biblioteca TikTokApi está corretamente importada!
        const response = await TikTokApi.getUserInfo(token, { user_id: '6873939833853871106' });
        const seguidores = response.user?.statistics?.follower_count; // Uso opcional chaining
        console.log('Número de seguidores TikTok:', seguidores);
    } catch (error) {
        console.error('Erro ao obter seguidores:', error);
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

