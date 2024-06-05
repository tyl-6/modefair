import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit{
  title = 'modefair-assessment';
  previousUrl :string ='';
  constructor(private router: Router){}

  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        if (this.previousUrl !== event.url) {
          this.previousUrl = event.url;
          console.log(event);
          // window.location.reload();
        }
      }
    });
  }

}
