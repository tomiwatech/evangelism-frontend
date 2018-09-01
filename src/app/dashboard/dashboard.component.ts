import { Component, OnInit, OnChanges, DoCheck } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements DoCheck {
  isCollapsed = true;

  constructor() { }

  ngDoCheck() {
    this.toggleClassName();
  }

  toggleClass = (e) => {
    let className = e.target;
    if (this.isCollapsed == true) {
      className.style.transform = 'rotate(90deg)';
    } else {
      className.style.transform = 'rotate(0deg)';
    }

  }

  toggleClassName = () => {
    let x = document.getElementsByClassName('menu-arrow');
    if (this.isCollapsed === true) {
      x[0].style.transform = 'rotate(0deg)';
    } else {
      x[0].style.transform = 'rotate(90deg)';
    }
  }

}
