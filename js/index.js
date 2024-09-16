// ApexCharts
var categories = [];

var options = {
  series: [
    {
      data: [100, 90, 80, 80, 60, 50, 40, 20],
    },
  ],
  click: function () {
    let changeColor = this.series[0].data;
    changeColor.forEach((element) => {
      if (element > 80) {
        this.colors.push("#c93535");
        categories.push("EM01");
      } else if (element <= 80 && element > 20) {
        this.colors.push("#ffc95e");
        categories.push("EM04");
      } else if (element <= 20) {
        this.colors.push("#74ae60");
        categories.push("EM05");
      }
    });
  },
  chart: {
    height: 280,
    type: "bar",
    borderRadius: "10",
    toolbar: {
      show: false,
    },
    events: {},
  },
  colors: [],
  plotOptions: {
    bar: {
      columnWidth: "60%",
      distributed: true,
      borderRadius: 5,
    },
  },
  dataLabels: {
    enabled: false,
  },
  legend: {
    show: false,
  },

  xaxis: {
    categories: categories,
    labels: {
      style: {
        fontSize: "15px",
        fontWeight: 500,
        fontFamily: "Helvetica, Arial",
      },
    },
  },
};
options.click();

var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();
