import { ReflectiveInjector } from '@angular/core';
import { Dog, Pet, Config } from './dog';

export function equalTest() {
    //TODO
}

export function equalTestNew() {
    return (new Dog(new Config()) === new Dog(new Config()));
}

export function equalTestChild() {
    let injector: ReflectiveInjector = ReflectiveInjector.resolveAndCreate([Dog, Pet, Config]);
    let pet1 = injector.get(Pet);
    //TODO
}

export function fromResolvedProvidersTest() {
    //TODO
}