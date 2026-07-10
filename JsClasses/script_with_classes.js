"use strict";

(function () {
    class Animal {
        constructor(name) {
            this.name = name;
        }

        talk() {
            console.log(`${this.name} издаёт звук`);
        }
    }

    class Cat extends Animal {
        talk() {
            console.log(`${this.name} мяукает`);
        }
    }

    class Dog extends Animal {
        talk() {
            console.log(`${this.name} гавкает`);
        }
    }

    const cat = new Cat("Киса");
    const dog = new Dog("Пончик");
    const animal = new Animal("Вера");

    console.log("Вызов метода talk у кошки (версия с классами)")
    cat.talk();

    console.log("Вызов метода talk у собаки (версия с классами)")
    dog.talk();

    console.log("Вызов метода talk у животного (версия с классами)")
    animal.talk();
})();