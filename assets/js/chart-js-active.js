
var xValues = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG' ];

new Chart("myChart", {
  type: "line",
  data: {
    labels: xValues,
    datasets: [{
        label: 'one ',
        backgroundColor: 'white',
        data: [2.5, 2, 4, 4.5, 2.5, 3, 3.5, 2.5],
        borderWidth: 4,
        borderColor: 'red',
        pointRadius: 3,
        pointHoverRadius: 6,
        pointBorderWidth: 3
    }, {
        label: 'two',
        data: [1.5, 3, 2, 3.5, 4, 5.5, 4, 7.5],
        borderWidth: 4,
        borderColor: '#1B0529',
        backgroundColor: 'white',
        pointRadius: 3,
        pointHoverRadius: 6,
        pointBorderWidth: 3
    }, {
      label: 'three',
      data: ['h', 2, 5.5, 5.5, 4,],
      borderWidth: 2,
      borderColor: '#89C8DE',
      backgroundColor: 'white',
      pointRadius: 3,
      pointHoverRadius: 6,
      borderDash: [5, 5],
      pointBorderWidth: 3,
      stepped: true
  }]
  },
  
  options: {
    layout: {
        padding: {
          bottom: 0
        }
    },
    plugins: {
        title: {
            display: false
        },
        legend: {
            display: false,
        }
    },
    interaction: {
      intersect: false,
      axis: 'x'
    },
    
    scales: {
        y: {
          min: 0,
          max: 8,
          ticks: {
            // For a category axis, the val is the index so the lookup via getLabelForValue is needed
            callback: function(val, index) {
              // Hide the label of every 2nd dataset
              var abu = index % 2 === 0 ? this.getLabelForValue(val) : '';
              var tamim =  index + 'K';
              return abu && tamim;
            },
            padding: 10,
            color: '#5b5b5b',
            font: {
              size: 20,
              family: 'Oswald',
            }
          },
          grid: {
            color: 'white',
            drawBorder: false
          }
        },
        x: {
            beginAtZero: false,
            ticks: {
              color: '#2d2d2d',
              padding: 10,
              backdropColor: '#A29698',
              color: '#676767',
              font: {
                size: 20,
                family: 'Oswald',
              }
            },
            grid: {
                // display: false,
                color: 'transparent',
                // borderColor: '#FFE3DC',
                drawBorder: false,
                tickColor: '#A29698',
                tickLength: 20,
                tickWidth: 2
            }
          },
      }
}
//   options:{...}
});

