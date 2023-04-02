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