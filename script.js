let botao = document.getElementsByTagName("button")[0];
let nome = document.getElementsByTagName("input")[0]
let altura = document.getElementsByTagName("input")[1]
let peso = document.getElementsByTagName("input")[2]
let p = document.getElementsByTagName("p")[0];


botao.addEventListener("click", msg);


function msg(){
    let altura2 = altura.value*altura.value;
    let count = Math.trunc(peso.value/altura2);
   if(count < 18.5){
    p.innerText = "Olá "  + nome.value + "!" + " seu IMC é de " + count + " e você está abaixo do peso.";
   }
   else if(count >= 18.5 && count<= 24.9){
    p.innerText = "Olá " + nome.value + "!" + " seu IMC é de " + count + " está tudo certo!";
   }
   else if(count >=25 && count <=29.9){
    p.innerText = "Olá " + nome.value + "!" + " seu IMC é de " + count + " e você está com sobrepeso.";
   }
   else if(count >=30 && count <=39.9){
    p.innerText = "Olá " + nome.value +  "!" +" seu IMC é de " + count + " e você está com obesidade.";
   }
   else{
    p.innerText = "Olá " + nome.value + "!" + " seu IMC é de " + count + " e você está com obesidade grave.";
   }
}