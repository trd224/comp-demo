import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {

  public chart: any;
  chartData = {// values on X-Axis
    labels: ['2022-05-10', '2022-05-11', '2022-05-12', '2022-05-13', '2022-05-14', '2022-05-15', '2022-05-16', '2022-05-17'],
    datasets: [
      {
        label: "Sales",
        data: ['467', '576', '572', '79', '92', '574', '573', '576'],
        backgroundColor: 'blue'
      },
      {
        label: "Profit",
        data: ['542', '542', '536', '327', '17', '0.00', '538', '541'],
        backgroundColor: 'limegreen'
      }
    ]
  };

  public chart2: any;
  chartData2 = [100, 350, 100, 20, 20, 20, 20, 20];

  constructor() { }

  ngOnInit(): void {
    this.createChart();
    this.createChart2();
  }


  createChart() {

    this.chart = new Chart("MyChart", {
      type: 'bar', //this denotes tha type of chart
      data: this.chartData,
      options: {
        aspectRatio: 2.5
      }

    });
  }


  createChart2() {

    this.chart = new Chart("MyChart2", {
      type: 'doughnut', //this denotes tha type of chart

      data: {
        datasets: [{
          label: '',
          data: this.chartData2 ? this.chartData2 : [100, 100, 100],
          backgroundColor: [
            '#baa4eb',
            '#78c1be',
            '#bcd6fd',

          ],
          hoverOffset: 4
        },
        ],
      },
      options: {
        aspectRatio: 1.5,
      },
    },

    );


    let Checkdataflg = this.chartData2.every((data: any) => {
      return data == 0
    })
    // alert(Checkdataflg)
    if (Checkdataflg) { }
    //this.updateChartData([0,0,0])

    //   Chart.register({
    //     // plugin implementation
    //     centerDoughnutPlugin : this.centerDoughnutPlugin
    // });
    // this.chart.pluginService.register(this.centerDoughnutPlugin);
  }

}
