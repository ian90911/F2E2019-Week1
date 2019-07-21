import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Week1';
  progressCircle: SVGCircleElement;

  ngOnInit(): void {
    this.progressCircle = document.querySelector('.progressbar-circle');
    const radius = this.progressCircle.r.baseVal.value;
    const circumference = radius * 2 * Math.PI;
    this.progressCircle.style.strokeDasharray = `${circumference} ${circumference}`;
    this.progressCircle.style.strokeDashoffset = `${circumference}`;
    this.setProgress(0, circumference);
  }

  setProgress(percent, circumference) {
    const offset = circumference - (percent / 100) * circumference;
    this.progressCircle.style.strokeDashoffset = offset + '';
  }
}
