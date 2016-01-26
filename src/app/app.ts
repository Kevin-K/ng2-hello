/*
 * Angular 2 decorators and services
 */
import {Component} from 'angular2/core';
import {RouteConfig, Router, ROUTER_DIRECTIVES} from 'angular2/router';
import {FORM_PROVIDERS} from 'angular2/common';

import {RouterActive} from './directives/router-active';
import {Home} from './home/home';
import {HelloWorld} from './helloworld/helloworld';

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  providers: [ ...FORM_PROVIDERS ],
  directives: [ ...ROUTER_DIRECTIVES, RouterActive ],
  pipes: [],
  styles: [ require('./app.css') ],
  template: require('./app.html')
})
@RouteConfig([
  { path: '/', component: Home, name: 'Index' },
  { path: '/helloworld', component: HelloWorld, name: 'HelloWorld' },
  { path: '/**', redirectTo: ['Index'] }
])
export class App {
  angularLogo = 'assets/img/angular-logo.png';

  constructor() {

  }
}
