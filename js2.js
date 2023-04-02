
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