import { Component, OnInit } from '@angular/core';
import { LegendLabelsContentArgs } from "@progress/kendo-angular-charts";
import { IntlService } from "@progress/kendo-angular-intl";
import { Color } from 'ng2-charts';


@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
  constructor() { }

  public chartType: string = "pie";
  public chartLabel: string[] = [];
  public chartData: number[] = [];

  chartFilled() {

    this.chartLabel.push('Red', 'Blue', 'Yellow', 'Gray', 'Green');

    this.chartData.push(12, 22, 32, 42, 52);

  }
  public colors=[
    {
      backgroundColor: [
          'rgba(92, 184, 92,1)',
          'rgba(255, 195, 0, 1)',
          'rgba(217, 83, 79,1)',
          'rgba(129, 78, 40, 1)',
          'rgba(129, 199, 111, 1)'
    ]
    }
  ];

  chartOptions = {

    animation: {
      duration: 1000,
      easing: "easeInOutQuad"
    },

    responsive: true,
    legend: {
      display: true,
      position: "top",
      fullWidth: false,
      reverse: true
    },
  };


  ngOnInit() {
    this.chartFilled();
  }

}
