"use strict";

(function () {
    function Animal(name) {
        this.name = name;
    }

    Animal.prototype.talk = function () {
        console.log(`${this.name} издаёт звук (версия с прототипами)`);
    };

    function Cat(name) {
        Animal.call(this, name);
    }

    Object.setPrototypeOf(Cat.prototype, Animal.prototype);

    Cat.prototype.talk = function () {
        console.log(`${this.name} мяукает (версия с прототипами)`);
    };

    function Dog(name) {
        Animal.call(this, name);
    }

    Object.setPrototypeOf(Dog.prototype, Animal.prototype);

    Dog.prototype.talk = function () {
        console.log(`${this.name} гавкает (версия с прототипами)`);
    };

    const cat = new Cat("Стеша");
    const dog = new Dog("Рекс");
    const animal = new Animal("Борис");

    cat.talk();
    dog.talk();
    animal.talk();
})();