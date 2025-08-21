import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss'],
})
export class PieChartComponent implements OnInit {
  @Input()
  set Colors(colors: any[]) {
    this.colors = colors;
  }

  colors = [
    { color: 'blue', value: 10 },
    { color: 'orange', value: 30 },
    { color: 'black', value: 60 },
  ];

  conicGradientStyle: string = '';
  constructor() {}

  ngOnInit(): void {
    this.conicGradientStyle = 'conic-gradient(';
    let offset = 0;
    this.colors.forEach((color, index) => {
      if (index !== this.colors.length - 1) {
        for (let i = 0; i < 1; i++) {
          this.conicGradientStyle += color.color;
          this.conicGradientStyle += ' ' + offset + '%';
          offset += color.value;

          this.conicGradientStyle += ',';
          this.conicGradientStyle += color.color;
          this.conicGradientStyle += ' ' + offset + '%';

          this.conicGradientStyle += ',';
        }
      } else {
        this.conicGradientStyle += color.color;
        this.conicGradientStyle += ' ' + offset + '%';
        this.conicGradientStyle += ')';
      }
    });
    console.log(this.conicGradientStyle);
  }
}
