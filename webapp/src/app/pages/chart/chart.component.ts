import { Component, OnInit, ViewChild } from '@angular/core';
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexFill,
  ApexYAxis,
  ApexTooltip,
  ApexTitleSubtitle,
  ApexXAxis
} from "ng-apexcharts";
import { YahooService } from 'src/app/services/yahoo.service';
import { Tools } from 'src/app/tools';
import { TQuoteData } from 'src/app/types';

export type TChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis | ApexYAxis[];
  title: ApexTitleSubtitle;
  labels: string[];
  stroke: any; // ApexStroke;
  dataLabels: any; // ApexDataLabels;
  fill: ApexFill;
  tooltip: ApexTooltip;
};

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartPage implements OnInit {

  @ViewChild("chart") chart!: ChartComponent;
  public chartOptions: any = {} as any;
  public quoteList: TQuoteData[] = [];

  constructor(private readonly yahooService: YahooService) { }


  ngOnInit(): void {

    this.chartOptions = {
      series: [],
      chart: {
        height: 350,
        type: "line"
      },
      stroke: {
        width: [0, 4, 4]
      },
      title: {
        text: "Variação do Ativo"
      },
      dataLabels: {
        enabled: true,
        enabledOnSeries: [1, 2]
      },
      labels: [],
      xaxis: {
        
      },
      yaxis: [
        {
          title: {
            text: "Valor(%)"
          }
        },
        {
          opposite: true,
          title: {
            text: "D-1(%)"
          }
        },
        {
          opposite: true,
          title: {
            text: "D-29(%)"
          }
        }
      ]
    };

    this.yahooService.obterCotacao('PETR4.SA').subscribe({
      next: async (result) => {
        const quoteList = await Tools.factoryQuote(result);


        this.chartOptions.labels = [];

        this.chartOptions.series = [
          {
            name: "Valor",
            type: "column",
            data: []
          },
          {
            name: "D-1(%)",
            type: "line",
            data: []
          },
          {
            name: "D-29(%)",
            type: "line",
            data: []
          }
        ];

        quoteList.map((item,index) => {
          this.chartOptions.labels.push(item.date);
          this.chartOptions.series[0].data.push(item.price);
          this.chartOptions.series[1].data.push(item.dplus1);
          this.chartOptions.series[2].data.push(item.firstday);
        });

      }
    })
  }



}
