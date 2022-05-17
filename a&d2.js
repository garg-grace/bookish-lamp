let ctx = document.getElementById('pieChart').getContext('2d');
let labels = ['Biotechnology',
   'Chemical Engineering',
   'Civil Engineering',
   'Computer Science and Engineering',
   'Electronics and Communication Engineering',
   'Electrical Engineering',
   'Industrial and Production Engineering',
   'Information Technology',
   'Instrumentation and Control Engineering',
   'Mechanical Engineering',
   'Textile Technology'];
let colorHex = ['#FB3640', '#EFCA08', '#43AA8B', '#253D5B','#52D726','#FFEC00','#FF7300','#FF0000','#007ED6','#7CDDDD','#58508d'];

let pieChart = new Chart(ctx, {
  type: 'pie',
  data: {
    datasets: [{
      data: [102, 120, 40, 120, 55, 65, 89, 75, 22,56, 59],
      backgroundColor: colorHex
    }],
    labels: labels
  },
  options: {
    responsive: true,
    legend: {
      position: 'bottom'
    },
    plugins: {
      datalabels: {
        color: '#fff',
        anchor: 'end',
        align: 'start',
        offset: -10,
        borderWidth: 2,
        borderColor: '#fff',
        borderRadius: 25,
        backgroundColor: (context) => {
          return context.dataset.backgroundColor;
        },
        font: {
          weight: 'bold',
          size: '20'
        },
        formatter: (value) => {
          return value + ' %';
        }
      }
    }
  }
})