function demo(){
var a,b,c;
a=Number(document.getElementById('num1').value);
b=Number(document.getElementById('num2').value);
c=a+b;
document.getElementById('num3').value=c;
document.getElementById('ramp').innerHTML=c;
window.alert('ramp');
console.log('ramp');
}
