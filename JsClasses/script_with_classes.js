"use strict";

(function () {
    class Animal {
        constructor(name) {
            this.name = name;
        }

        talk() {
            console.log(`${this.name} издаёт звук (версия с классами)`);
        }
    }

    class Cat extends Animal {
        talk() {
            console.log(`${this.name} мяукает (версия с классами)`);
        }
    }

    class Dog extends Animal {
        talk() {
            console.log(`${this.name} гавкает (версия с классами)`);
        }
    }

    const cat = new Cat("Киса");
    const dog = new Dog("Пончик");
    const animal = new Animal("Вера");

    cat.talk();
    dog.talk();
    animal.talk();
})();