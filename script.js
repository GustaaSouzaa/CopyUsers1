function calcular() {
  // Obtendo os dados do formulário
  let numero_de_entrada = document.querySelector("input[name='numero_de_entrada']").value;
  let total_itens = document.querySelector("input[name='total_itens']").value;

  // Verificando se os dados são válidos
  if (numero_de_entrada < 0 || total_itens <= 0) {
    alert("O número de entrada e o total de itens devem ser maiores que zero.");
    return;
  }

  // Calculando o resultado da pesquisa
  let resultado = (1 - numero_de_entrada / total_itens) * 100;

  // Exibindo o resultado na tela
  let popUp = window.open("", "Resultado", "width=300,height=200");
  popUp.document.body.innerHTML = `Para o número ${numero_de_entrada} em um total de ${total_itens}, o resultado da pesquisa é ${resultado}%.`;
  popUp.focus();
