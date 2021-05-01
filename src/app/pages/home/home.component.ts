import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events.subscribe((val) => {
      if (!(val instanceof NavigationEnd)) return;

      const fragmentIdx = val.urlAfterRedirects.lastIndexOf('#');
      if (fragmentIdx >= 0 && fragmentIdx < val.urlAfterRedirects.length - 1) {
        const fragment = val.urlAfterRedirects.substring(fragmentIdx + 1);
        console.log(fragment);
        document.getElementById(fragment)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  }
}
