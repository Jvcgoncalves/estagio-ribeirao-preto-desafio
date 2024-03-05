const words_array = ["hello world", "teste","palavra,letra","palavra_teste","banana","maça","feijão","Pera","Faculdade","estágio"]

function reverseString(string){
  let string_reverse = "";
  for (let index = string.length - 1; index >= 0; index--) {
    string_reverse += string[index]
  }

  console.log(string_reverse); // para comparar as duas string mais facilmente
  console.log(string); // para comparar as duas string mais facilmente

}

reverseString(words_array[parseInt(Math.random() * 10)]) // para pegar uma string aleatória do words array fiz um math.random para pegar algum indice
