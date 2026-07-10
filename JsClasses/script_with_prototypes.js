"use strict";

(function () {
    function Animal(name) {
        this.name = name;
    }

    Animal.prototype.talk = function () {
        console.log(`${this.name} издаёт звук`);
    };

    function Cat(name) {
        Animal.call(this, name);
    }

    Object.setPrototypeOf(Cat.prototype, Animal.prototype);

    Cat.prototype.talk = function () {
        console.log(`${this.name} мяукает`);
    };

    function Dog(name) {
        Animal.call(this, name);
    }

    Object.setPrototypeOf(Dog.prototype, Animal.prototype);

    Dog.prototype.talk = function () {
        console.log(`${this.name} гавкает`);
    };

    const cat = new Cat("Стеша");
    const dog = new Dog("Рекс");
    const animal = new Animal("Борис");

    console.log("Вызов метода talk у кошки (версия с прототипами)")
    cat.talk();

    console.log("Вызов метода talk у собаки (версия с прототипами)")
    dog.talk();

    console.log("Вызов метода talk у животного (версия с прототипами)")
    animal.talk();
})();