import { Component } from '@angular/core';
//TODO

@Component({
  selector: 'app-value-provider',
  template: `<div>서비스명 : {{config.serviceName}}</div>
  <div>회원등급 : {{config.grade|json}}</div>
  <div>정보 : <span [innerHTML]="config.getInfo()"></span></div>`,
  //TODO
})
export class ValueProviderComponent {
  //TODO
}