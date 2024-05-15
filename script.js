const radarChart = document.getElementById('radar-chart');

new Chart(radarChart, {
  type: 'radar',
  data: {
    labels: [
      'Testing',
      'Designing',
      'Coding',
      'Planning',
      'Debugging',
      'Deploying',
    ],
    datasets: [
      {
        label: 'User Statistics',
        data: [78, 89, 100, 67, 57, 34],
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
