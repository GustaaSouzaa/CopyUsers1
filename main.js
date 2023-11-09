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
  document.querySelector("#resultado").innerHTML = `Para o número ${numero_de_entrada} em um total de ${total_itens}, o resultado da pesquisa é ${resultado}%.`;

  // Verificando se o usuário selecionou High Vertical/Middle/Random
  let classificacao = "";
  if (document.querySelector("input[name='High Vertical/Middle/Random']").checked) {
    // Comparando com o primeiro resultado e classificando
    if (resultado > 90) {
      classificacao = "High";
    } else if (60 <= resultado <= 90) {
      classificacao = "Middle";
    } else {
      classificacao = "Random";
    }

    // Exibindo a classificação na tela
    document.querySelector("#resultado").innerHTML += ` Classificação: ${classificacao}`;
  } else {
    // Se não for selecionado High Vertical/Middle/Random, limpar a classificação
    document.querySelector("#resultado").innerHTML = `Para o número ${numero_de_entrada} em um total de ${total_itens}, o resultado da pesquisa é ${resultado}%.`;
  }
}

// Adicionando o evento de clique no botão "Calcular"
document.querySelector("input[type='submit']").addEventListener("click", calcular);
