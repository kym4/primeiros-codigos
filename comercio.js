var produto=prompt("valor do produto");
var porcetagem=prompt("porcetagem(sem o simbolo)");
var op=prompt("1.desconto\m.2lucro");
switch(op){
  case '1':
    alert(prodtuto*(1-(porcetagem/100)));break;
  case'2':
    alert(produto*(1+(porcetagem/100)));break;
    default:
        alert("opçao invalida");

}