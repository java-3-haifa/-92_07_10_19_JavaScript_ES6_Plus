class Person {
    static test = 'Test';
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    display() {
        console.log(this.name + ' ' + this.age);
    }

    static show(name){
        console.log(name);
    }
}

let p1 = new Person('Vasya',23);
let p2 = new Person('Petya',32);
p1.display();
p2.display();
console.log(p1.name);
console.log(Person.test);
Person.show('Sofa');

class Employee extends Person {
    constructor(name, age, salary) {
        super(name, age);
        this.salary = salary;
    }

    display() {
        super.display();
        console.log(this.salary);
    }
}

let empl = new Employee('Sofa',27,1000);
empl.display();
console.log(empl);
