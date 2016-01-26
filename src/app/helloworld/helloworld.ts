import {Component} from 'angular2/core';

@Component({
  selector: 'helloworld',
  template: '{{boundData}}'
})
export class HelloWorld {
  boundData = 'Hello World!';
}
