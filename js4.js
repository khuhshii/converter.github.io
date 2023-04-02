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
