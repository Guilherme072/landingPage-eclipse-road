// Configuração base para gráficos semicirculares
const semicircleOptionsIdade = {
    responsive: true,
    rotation: -90,
    circumference: 180,
    cutout: '70%',
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
        display: true,
        position: window.innerWidth <= 600 ? 'bottom' : 'right',
        labels: {
          boxWidth: window.innerWidth <= 600 ? 12 : 20,
          boxHeight: window.innerWidth <= 600 ? 12 : 20,
          borderRadius: 15,
          color: 'white',
          padding: window.innerWidth <= 600 ? 5 : 10,
        },
        title: {
          display: true,
          text: 'Idade',
          color: 'white',
          font: {
            size: window.innerWidth <= 600 ? 14 : 16,
            weight: 'bold',
          },
          padding: {
            bottom: 10
          }
        }
      }
    }
  };
  
  // Atualiza a legenda dinamicamente em caso de redimensionamento
  window.addEventListener('resize', () => {
    semicircleOptionsGenero.plugins.legend.position = window.innerWidth <= 600 ? 'bottom' : 'right';
    semicircleOptionsGenero.plugins.legend.labels.boxWidth = window.innerWidth <= 600 ? 12 : 20;
    semicircleOptionsGenero.plugins.legend.labels.boxHeight = window.innerWidth <= 600 ? 12 : 20;
    semicircleOptionsGenero.plugins.legend.labels.padding = window.innerWidth <= 600 ? 5 : 10;
  });
  

const semicircleOptionsGenero = {
    responsive: true,
    rotation: -90,
    circumference: 180,
    cutout: '70%',
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
        display: true,
        position: window.innerWidth <= 600 ? 'bottom' : 'right',
        labels: {
          boxWidth: window.innerWidth <= 600 ? 12 : 20,
          boxHeight: window.innerWidth <= 600 ? 12 : 20,
          borderRadius: 15,
          color: 'white',
          padding: window.innerWidth <= 600 ? 5 : 10,
        },
        title: {
          display: true,
          text: 'Gêneros',
          color: 'white',
          font: {
            size: window.innerWidth <= 600 ? 14 : 16,
            weight: 'bold',
          },
          padding: {
            bottom: 10
          }
        }
      }
    }
  };
  
  // Atualiza a legenda dinamicamente em caso de redimensionamento
  window.addEventListener('resize', () => {
    semicircleOptionsGenero.plugins.legend.position = window.innerWidth <= 600 ? 'bottom' : 'right';
    semicircleOptionsGenero.plugins.legend.labels.boxWidth = window.innerWidth <= 600 ? 12 : 20;
    semicircleOptionsGenero.plugins.legend.labels.boxHeight = window.innerWidth <= 600 ? 12 : 20;
    semicircleOptionsGenero.plugins.legend.labels.padding = window.innerWidth <= 600 ? 5 : 10;
  });

// Gráfico de Idade (X/Twitter)
const ctx1 = document.getElementById('idadeChart').getContext('2d');
new Chart(ctx1, {
    type: 'doughnut',
    data: {
         labels: ['13-17', '18-24', '25-34', '35+'],
        datasets: [{
            data: [5.1, 32.4, 45.8, 16.7],
            backgroundColor: ['#7d2ae8', '#f7c300', '#888888', '#444444']
        }]
    },
    options: semicircleOptionsIdade
});

// Gráfico de Gênero (X/Twitter)
const ctx2 = document.getElementById('generoChart').getContext('2d');
new Chart(ctx2, {
    type: 'doughnut',
    data: {
        labels: ['Masculino', 'Feminino', 'Outro'],
        datasets: [{
            data: [88.3, 10.5, 1.2],
            backgroundColor: ['#7d2ae8', '#f7c300', '#888888']
        }]
    },
    options: semicircleOptionsGenero
});

// Gráfico de Idade (Youtube)
const ctx3 = document.getElementById('idadeCharti').getContext('2d');
new Chart(ctx3, {
    type: 'doughnut',
    data: {
         labels: ['13-17', '18-24', '25-34', '35-44','45+'],
        datasets: [{
            data: [8.3, 38.6, 40.2, 9.5, 3.4],
            backgroundColor: ['#7d2ae8', '#f7c300', '#888888', '#444444', '#555555']
        }]
    },
    options: semicircleOptionsIdade
});

// Gráfico de Gênero (Youtube)
const ctx4 = document.getElementById('generoCharti').getContext('2d');
new Chart(ctx4, {
    type: 'doughnut',
    data: {
        labels: ['Masculino', 'Feminino'],
        datasets: [{
            data: [85.7, 14.3],
            backgroundColor: ['#7d2ae8', '#f7c300']
        }]
    },
    options: semicircleOptionsGenero
});