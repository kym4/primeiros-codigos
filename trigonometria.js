var trigonometria=prompt("escolhe\n 1.seno\n 2.cosseno\n 3.tangente");
var angulo=prompt("digite o angulo");
switch (trigonometria){
    case'1':
     alert(Math.sin((angulo*Math.PI)/180).toFixed(2));break;
     case'2':
     alert(Math.cos((angulo*Math.PI)/180).toFixed(2));break;
     case'3':
     alert(Math.tan((angulo*Math.PI)/180).toFixed(2));break;
     default:
     alert("opçao invalida");
}
