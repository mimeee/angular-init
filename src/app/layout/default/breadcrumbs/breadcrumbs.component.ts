import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';

import { RouteConfig } from 'src/app/core/config/route.config';

export interface breadcrumbsNav {
  title: string,
  path: string
}

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss']
})

export class BreadcrumbsComponent implements OnInit {
  public activeTitle: string = "";
  public path: Array<breadcrumbsNav> = [];

  constructor(
    private router: Router
  ) {
    router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.updateBreadcrumbs(event.url)
      }
    });
  }

  ngOnInit() {
    this.updateBreadcrumbs(this.router.url);
  }

  updateBreadcrumbs(url: string) {
    let router = url && url.split('/').filter(val => val);
    this.path = [];
    let tempObj = RouteConfig;
    router.forEach(r => {
      if (tempObj && tempObj[r]) {
        this.path.push({
          path: tempObj[r].path,
          title: tempObj[r].title
        });
        tempObj = tempObj[r].children;
      } else {
        this.path[this.path.length - 1].path += `/${r}`;
      }
      
    })

    if (this.path.length) {
      this.activeTitle = this.path[this.path.length - 1].title;

      this.path.reduce((sum, current) => {
        current.path = sum.path + current.path;
        return {
          path: current.path,
          title: ''
        };
      })
    }

  }


}
