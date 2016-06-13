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

// Utilizando um função como método, declarada dentro do objeto
var pessoa = {
	nome: "Fernando",
	idade: 28,
	getIdade: function(){ 
		return this.idade; 
	}
};

console.log(pessoa.getIdade());

// Exemplo 2
var getIdade = function(){
	return this.idade;
};

var pessoa2 = {
	nome: "Zeca",
	idade: 20,
	getIdade: getIdade
};

console.log(pessoa2.getIdade());


// Invocando uma função com call e apply

var pessoa3 = {
	nome: "Pessoa 3",
	idade: 40
};

console.log(getIdade.call(pessoa3));


