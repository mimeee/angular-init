import { Component, OnInit, Inject } from '@angular/core';

import { RouteConfig, getPath } from "src/app/core/config/route.config";

import { Router, NavigationStart } from '@angular/router';


@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {
  public route: any;  
  public path: any; 
  public activeTitle: string; 
  constructor( 
    private router: Router
  ) { 

    this.route = RouteConfig;
  }

  ngOnInit() {
    for (var key in RouteConfig) {
      if (this.router.routerState.snapshot.url.match(RouteConfig[key].path)) {
        this.activeTitle = key;
      }
    }
  }
  


}
