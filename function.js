// Passando função como parâmetro
var produto = { nome: 'Sapato', preco: 100 };

var calcularImposto = function(preco){
	return preco * 0.1;
};

var calcularPreco = function(produto, imposto){
	return produto.preco + imposto(produto.preco);
};

var preco = calcularPreco(produto, calcularImposto);

console.log(preco);


// Retornando um função

var retornandoFuncao = function(){
	return function(){
		return "Olá";
	};
};

console.log(retornandoFuncao()());