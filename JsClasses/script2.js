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

    cat.talk();
    dog.talk();
    animal.talk();
})();