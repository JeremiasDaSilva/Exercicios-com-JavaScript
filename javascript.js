function apresentar() {
  let nome = document.getElementById("input-nome").value;
  let mensagem = `Meu nome é ${nome}`;
  
  console.log(mensagem);
  document.getElementById("resposta-card1").textContent = mensagem;
}



function somar() {
  let numero1 = Number(document.getElementById("soma-num1").value);
  let numero2 = Number(document.getElementById("soma-num2").value);
  let soma = numero1 + numero2;
  
  console.log("O resultado da soma é:", soma);
  document.getElementById("resposta-card2").textContent = `O resultado da soma é: ${soma}`;
}



function subtrair() {
  let numA = Number(document.getElementById("num1").value);
  let numB = Number(document.getElementById("num2").value);
  let subtracao = numA - numB;
  
  console.log("O resultado da subtração é:", subtracao);
  document.getElementById("resposta-card3").textContent = `O resultado da subtração é: ${subtracao}`;
}
