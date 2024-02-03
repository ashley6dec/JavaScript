var ctx = document.getElementById("chart").getContext("2d");
var chart = new Chart(ctx, {
  type: "line",
  data: {
    labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    datasets: [
      {
        backgroundColor: "lightgreen",
        borderColor: "blue",
        borderWidth: 1,
        data: [10, 7, 9, 5, 8, 3, 4, 2, 1, 1]
      }
    ]
  },
  options: {
    animation: {
      x: {
        duration: 5000,
        from: 0
      },
      y: {
        duration: 3000,
        from: 500
      }
    }
  }
});

var data = [];
var prev = 100;
for (var i=0;i<1000;i++) {
  prev += 5 - Math.random()*10;
  data.push({x: i, y: prev});
}


