// Configuração base para gráficos semicirculares
const semicircleOptionsIdade = {
    responsive: true,
    rotation: -90, // Começa do topo
    circumference: 180, // Só metade do círculo
    cutout: '70%', // Furo no meio
    plugins: {
        tooltip: {
            callbacks: {
                label: function (tooltipItem) {
                    let dataset = tooltipItem.dataset;
                    let total = dataset.data.reduce((acc, val) => acc + val, 0);
                    let value = dataset.data[tooltipItem.dataIndex];
                    let percentage = ((value / total) * 100).toFixed(1) + "%"; 
                    return `${tooltipItem.label}: ${percentage}`;
                }
            }
        },
        legend: {
            display: true,  // Mostra a legenda interativa
            position: 'right',  // Move para o lado direito do gráfico
            labels: {
                boxWidth: 17,  // Tamanho da caixa quadrada
                boxHeight: 17, // Altura da caixa quadrada
                borderRadius: 25,  // Arredondamento das bordas
                backgroundColor: 'rgba(0, 0, 0, 0.5)',  // Cor de fundo sem borda extra
                color: 'white',
                padding: 10  // Distância interna dos itens
            },
            title: {
                display: true,
                text: 'Idade',  // Título da legenda "Idade"
                color: 'white',  // Cor do título
                font: {
                    size: 16,  // Tamanho da fonte do título
                    weight: 'bold',
                },
                padding: {
                    bottom: 10  // Espaço abaixo do título
                }
            }
        },
    }
};

const semicircleOptionsGenero = {
    responsive: true,
    rotation: -90, // Começa do topo
    circumference: 180, // Só metade do círculo
    cutout: '70%', // Furo no meio
    plugins: {
        tooltip: {
            callbacks: {
                label: function (tooltipItem) {
                    let dataset = tooltipItem.dataset;
                    let total = dataset.data.reduce((acc, val) => acc + val, 0);
                    let value = dataset.data[tooltipItem.dataIndex];
                    let percentage = ((value / total) * 100).toFixed(1) + "%"; 
                    return `${tooltipItem.label}: ${percentage}`;
                }
            }
        },
        legend: {
            display: true,  // Mostra a legenda interativa
            position: 'right',  // Move para o lado direito do gráfico
            labels: {
                boxWidth: 20,  // Tamanho da caixa quadrada
                boxHeight: 20, // Altura da caixa quadrada
                borderRadius: 15,  // Arredondamento das bordas
                backgroundColor: 'rgba(0, 0, 0, 0.5)',  // Cor de fundo sem borda extra
                color: 'white',
                padding: 10  // Distância interna dos itens
            },
            title: {
                display: true,
                text: 'Gêneros',  // Título da legenda "Gêneros"
                color: 'white',  // Cor do título
                font: {
                    size: 16,  // Tamanho da fonte do título
                    weight: 'bold',
                },
                padding: {
                    bottom: 10  // Espaço abaixo do título
                }
            }
        },
    }
};

// Gráfico de Idade (YouTube)
const ctx1 = document.getElementById('idadeChart').getContext('2d');
new Chart(ctx1, {
    type: 'doughnut',
    data: {
         labels: ['18-24', '25-34', '13-17', '45+'],
        datasets: [{
            data: [37.1, 19.2, 12.5, 12.2],
            backgroundColor: ['#7d2ae8', '#f7c300', '#888888', '#444444']

        }]
    },
    options: semicircleOptionsIdade
});

// Gráfico de Gênero (Instagram)
const ctx2 = document.getElementById('generoChart').getContext('2d');
new Chart(ctx2, {
    type: 'doughnut',
    data: {
        labels: ['Masculino', 'Feminino', 'Outro'],
        datasets: [{
            data: [83.7, 14.9, 1.4],
            backgroundColor: ['#7d2ae8', '#f7c300', '#888888']
        }]
    },
    options: semicircleOptionsGenero
});



