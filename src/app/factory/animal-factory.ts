import { Animal, Config } from './animal';

//팩토리패턴
abstract class Factory {

  // 객체 생성방법 결정
  create() {
    //TODO
    return null;
  }
  //TODO
}

export class AnimalFactory extends Factory {
  // 객체 설정방법 결정
  careteAnimal(config: Config) {
    //TODO
  }
}

export function mainFactory() {
  let myAnimal: Animal = (new AnimalFactory()).create();
  return myAnimal;
}