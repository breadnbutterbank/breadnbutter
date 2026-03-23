const ctx = document.getElementById('myChart');

if (ctx) {
  new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: ['Food', 'Shopping', 'Subscriptions'],
      datasets: [{
        data: [200, 120, 64]
      }]
    }
  });
}
