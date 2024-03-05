let primeiro_numero_anterior = 1 ; // números de começo
let segundo_numero_anterior = 1; 
let soma;

function sequenciaDeFibonaci(num){
  if(num< 0 ) return console.log("Número inválido");

  if(num < 2 && num > 0) return console.log("É um número de Fibonacci") // se cair um já vai direto para a resposta

  do{
    soma = primeiro_numero_anterior + segundo_numero_anterior
    segundo_numero_anterior = primeiro_numero_anterior
    primeiro_numero_anterior = soma
  } while(soma < num)
  console.log(num); // deixei aqui para mostrar os números
  console.log(soma); // deixei aqui para mostrar os números
  if( soma === num) return console.log("É um número de Fibonacci")
  else return console.log("Não é um número de Fibonacci")
}

sequenciaDeFibonaci(parseInt(Math.random() * 100)) // deixei so até 100, mas se quiser números maiores é so aumentar os zeros, porém é muito raro cair um número que bata daí