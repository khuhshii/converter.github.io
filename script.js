let c_buttons = document.querySelectorAll(".b button");
let inp = document.querySelector('.input-div input');

// for conversion of h to s and vice versa
var cm = document.getElementById('cm');
var inch = document.getElementById('inch');

inch.addEventListener('input',function(){
    let c = this.value;
    let i=c*3600;
    if(!Number.isInteger(i)){
        i=i.toFixed(2);
    }
    cm.value=i;
});

cm.addEventListener('input',function(){
    let c = this.value;
    let i=c/3600;
    if(!Number.isInteger(i)){
        i=i.toFixed(2);
    }
    inch.value=i;
});

// for conversion of c to f and vice versa
var cm = document.getElementById('cm');
var inch = document.getElementById('inch');

inch.addEventListener('input',function(){
    let c = this.value;
    let i=((c*9/5)+32);
    if(!Number.isInteger(i)){
        i=i.toFixed(2);
    }
    cm.value=i;
});

cm.addEventListener('input',function(){
    let c = this.value;
    let i=(c-32)*(5/9);
    if(!Number.isInteger(i)){
        i=i.toFixed(2);
    }
    inch.value=i;
});

// for conversion of inch to centimeter and vice versa
var cm = document.getElementById('cm');
var inch = document.getElementById('inch');

inch.addEventListener('input',function(){
    let c = this.value;
    let i=c*2.54;
    if(!Number.isInteger(i)){
        i=i.toFixed(2);
    }
    cm.value=i;
});

cm.addEventListener('input',function(){
    let c = this.value;
    let i=c/2.54;
    if(!Number.isInteger(i)){
        i=i.toFixed(2);
    }
    inch.value=i;
});

// for conversion of pound to grams and vice versa

var g = document.getElementById('g');
var lb = document.getElementById('lb');

lb.addEventListener('input',function(){
    let c = this.value;
    let i=c*450;
    if(!Number.isInteger(i)){
        i=i.toFixed(2);
    }
    g.value=i;
});

g.addEventListener('input',function(){
    let c = this.value;
    let i=c/450;
    if(!Number.isInteger(i)){
        i=i.toFixed(2);
    }
    lb.value=i;
});


c_buttons.forEach((element) => {
    element.addEventListener('click',()=>{
        document.querySelector(".active").classList.remove("active");
        element.classList.add("active")
        v1name.innerText=element.id;
        console.log(element);
        if(element.id === "b1"){
            console.log("Inch to cms");
        }       
    });
});




// if(element.id === "b1"){
//     inch.value = cm.value / 2.54;
//     cm.value = "";
//     console.log("Inch to cms");
// }
// else if(element.id === "b2"){
//     // add code for Gram to Pound conversion here
//     console.log("Gram to Pound");
// }
// else if(element.id === "b3"){
//     // add code for Celsius to Fahrenheit conversion here
//     console.log("Celsius to Fahrenheit");
// }
// else if(element.id === "b4"){
//     // add code for Hour to Second conversion here

//     inch.value = cm.value*3600;
//     cm.value = "";
//     console.log("Hour to Second");
// }