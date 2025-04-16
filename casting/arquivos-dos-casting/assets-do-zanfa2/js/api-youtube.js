function init() {
    gapi.load('client', function() {
        gapi.client.setApiKey("AIzaSyC_IsfpOGaSnl5sMKnq9fTuDl2mr8n1Ubs");
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
        document.getElementById('inscritosYt').textContent = formatNumber(subscriberCount);
    });
}

window.onload = init;


function formatNumber(num) {
    if (num >= 1e9) return (num / 1e9).toFixed(2).replace(/\.00$/, '') + "B";
    if (num >= 1e6) return (num / 1e6).toFixed(2).replace(/\.00$/, '') + "";
    if (num >= 1e3) return (num / 1e3).toFixed(2).replace(/\.00$/, '') + "K";
    return num.toString();
}