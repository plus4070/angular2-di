import { Component } from '@angular/core';
//TODO

@Component({
  selector: 'app-class-provider',
  template: `
  {{engine.name}}<br>
  {{spEngine.name}}<br>
  {{result}}`,
  //TODO
})
export class ClassProviderComponent {
  result: string;
  constructor(/*TODO*/) {
    // if (engine === spEngine) {
    //   this.result = "두 객체는 동일 객체입니다.";
    //   throw new Error('Error');
    // } else {
    //   this.result = "두 객체는 다른 객체입니다.";
    // }
  }
}