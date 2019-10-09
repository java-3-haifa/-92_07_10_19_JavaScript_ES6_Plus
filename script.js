// for (var i = 0; i < 10; i++) {
//     function doInterval(i) {
//         setTimeout(function () {
//             console.log(i);
//         }, 1000);
//     }
//     doInterval(i);
// }

for (let i = 0; i < 10; i++) {
    setTimeout(function () {
        // console.log(i);
    }, 1000);
}

const PI = 3.14159;
// PI = 123;
const obj = {
    name: 'Vasya',
    age: 123
};

console.log(obj);
obj.name = 'Petya';
obj.address = 'Haifa';
// console.log(obj);
let i = 0;
while (i < 10) {
    // PI = 123;
    const test = getValue();
    // console.log(test);
    i++;
}

function getValue() {
    return Math.floor(Math.random() * 100);
}

let arr = ['Vasya', 'Petya', 'Sofa'];

for (let i in arr) {
    console.log(arr[i]);
}

for (let name of arr) {
    console.log(name);
}

function Timer(time = 60) {
    // this.time = typeof time === 'undefined' ? 60:time;
    this.time = time;
}

let timer = new Timer();
console.log(timer);

let obj1 = {
    name: 'Vasya',
    some: function () {
        console.log("test");
    },
    obj: {}
};

function testSpread(name,lastname,address,...marks){
    console.log(name + ' ' + lastname);
    console.log(avg(marks));
    console.log(marks);
    // console.log(arguments);
}

testSpread('Vasya','Pupkin','Tel Aviv',4,5,4,5,3,);

function avg(arr){
    let res = 0;
    arr.forEach(function(item){
        res+=item;
    });
    return res/arr.length;
}

const comp = {
    ram:'32GB',
    ssd:'64TB',
    cpu:'i7',
    test: 123,
    test2:32
};

let arr1 = [1,2,3,4,5];
function test2(x,y,z){
    console.log(x + ' ' + y + ' ' +z);
}

test2(...arr1);

// const {ram,ssd,...x} = comp;
// console.log(x,ram);

function foo() {
    return [1,2,3,4,5,6];
}

let arr123 = foo();
console.log(arr123);

// let a = foo()[0];
// let b = foo()[1];
// let c = foo()[2];
let [a,b,c] = foo();
console.log(a,b,c);

let {abc,...other} = comp;
console.log(abc);
console.log(other);


function Super(){
    this.id = 1234;
}

let s = new Super();
let s1 = {
    id: 3212
};

function displayObj(value){
    console.log(value)
    console.log(value.id);
}

displayObj(s);
displayObj(s1);
