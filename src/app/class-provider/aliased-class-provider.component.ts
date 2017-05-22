import { Component } from '@angular/core';
//TODO

@Component({
  selector: 'app-aliased-class-provider',
  template: `
  {{engine.name}}<br>
  {{spEngine.name}}<br>
  {{result}}`,
  //TODO
})
export class AliasedClassProviderComponent {
  result: string;
  constructor(/*TODO*/) {
    // if (engine === spEngine) {
    //   this.result = "두 객체는 동일 객체입니다.";
    // } else {
    //   this.result = "두 객체는 다른 객체입니다.";
    //   throw new Error('Error');
    // }
  }
}