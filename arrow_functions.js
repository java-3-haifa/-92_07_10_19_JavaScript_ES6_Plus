let sum = function (a, b){
    // let res = a + b;
    // return res;
    return a + b;
};

let sum1 = (a,b) => {
    let res = a + b;
    return res;
};

let pow2 = function (a){
    return a * a;
};

let pow2_1 = a => a * a;

let sum2 = (a,b) => a + b;

console.log(sum(10,20));


function Timer(seconds = 60) {
    this.seconds = seconds;

    // this.start = function(){
    //     var that = this;
    //    setInterval(function(){
    //        console.log(that);
    //        console.log(that.seconds);
    //        that.seconds--;
    //    },1000);
    // }
    this.start = function(){
        setInterval(() =>{
            console.log(this.seconds);
            this.seconds--;
        },1000);
    }
}

// let timer = new Timer(10);
// timer.start();

let btn = document.querySelector('#clickBtn');
btn.onclick = (event) => {
    // console.log(this);
    console.log(event.target);
};

// btn.onclick = function(){
//   console.log(this);
// };

let output = document.querySelector('#output');
let user = {
    name:'Vasya',
    age:23,
    address:'Haifa'
};

let str = `
<ul>
<li>${user.name}</li>
<li>${user.age}</li>
<li>${user.address}</li>
</ul>
`;

output.innerHTML = str;
