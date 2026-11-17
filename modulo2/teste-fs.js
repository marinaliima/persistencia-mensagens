// Exercício 1.1

console.log("————————————————————————————————————————————————————————————");

console.log("Criando a Pasta data e Salvando Dados em Disco\n");

import { mkdir, writeFile } from "node:fs/promises";

const mensagens = [
    { mensagem: "oiii" },
    { mensagem: "bom dia" }
];

async function salvarHistorico(lista) {
    await mkdir(new URL("./data/", import.meta.url), { recursive: true });
    const caminhoArquivo = new URL("./data/mensagens-teste.json", import.meta.url);
    await writeFile(caminhoArquivo, JSON.stringify(lista, null, 2), "utf8");
};

salvarHistorico(mensagens);

console.log("\n————————————————————————————————————————————————————————————");