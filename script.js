const radarChart = document.getElementById('radar-chart');

new Chart(radarChart, {
  type: 'radar',
  data: {
    labels: [
      'Eating',
      'Drinking',
      'Sleeping',
      'Designing',
      'Coding',
      'Cycling',
      'Running',
    ],
    datasets: [
      {
        label: 'User',
        data: [65, 79, 78, 67, 96, 78, 86],
        fill: true,
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: '#0D6EFD',
        pointBackgroundColor: '#0D6EFD',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: '#0D6EFD',
      },
    ],
  },
});
