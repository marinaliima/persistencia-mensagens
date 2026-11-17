// Exercício 1.1

console.log("————————————————————————————————————————————————————————————");

console.log("Aquecimento: Serializando Objetos com JSON.stringify\n");

const historicoMensagens = [
    { id: 1, usuario: "mari", texto: "oii"},
    { id: 2, usuario: "helo", texto: "oi bom dia"}
];

const conteudoSalvar = JSON.stringify(historicoMensagens, null, 2);

console.log(conteudoSalvar);
console.log("\nTipo da variável:", typeof conteudoSalvar);

console.log("\n————————————————————————————————————————————————————————————");

// Exercício 1.2

console.log("Desserialização e Tratamento de JSON Quebrado com try/catch\n");

const jsonValido = '[{"id": 10, "usuario": "Lucas", "texto": "Teste"}]';
const jsonConvertido = JSON.parse(jsonValido);
const jsonQuebrado = '[{ id: 10, quebrado: sim '; // aspas e chaves faltando

try {
    const jsonConvertidoErrado = JSON.parse(jsonQuebrado);
} catch (erro) {
    console.error("Alerta: JSON corrompido! Detalhes:", erro.message);
};

console.log("\n————————————————————————————————————————————————————————————");
