function init() {
    gapi.load('client', function() {
        gapi.client.setApiKey('process.env.YOUTUBE_API_KEY');
        gapi.client.load('youtube', 'v3', function() {
            // Chame a função para obter os dados do canal
            getChannelData();
        });
    });
}

function getChannelData() {
    var request = gapi.client.youtube.channels.list({
        part: 'statistics',
        id: 'UCKqXFyiXKF8jtYl18EDpHwA'
    });
    request.execute(function(response) {
        var subscriberCount = response.items[0].statistics.subscriberCount;
        console.log('Número de inscritos:', subscriberCount); //remover depois
        document.getElementById('inscritosYt').textContent = subscriberCount;
    });
}

window.onload = init;