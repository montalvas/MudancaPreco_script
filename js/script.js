
var botao = document.querySelector("input");
botao.addEventListener("click", clicar);

function clicar() {
    var p = window.prompt("Qual o preço anterior do produto?");

    if (p.indexOf(",") != -1) {
        p = p.replace(",", ".");
    }

    var preco = Number(p);

    var pa = window.prompt("Qual o preço atual do produto?");

    if (pa.indexOf(",") != -1) {
        pa = pa.replace(",", ".");  
    }

    var preco_atual = Number(pa);

    if (preco_atual > preco) {
        var diferenca = preco_atual - preco;
        var variacao = (100 * diferenca) / preco;

        var res = document.querySelector("div.res");
        res.innerHTML = `<strong style="font-size: 21px;">Analisando os valores informados:</strong><br>`;
        res.innerHTML += `O produto custava ${preco.toLocaleString("pt-BR", {style: "currency", currency: "BRL"})} e agora custa ${preco_atual.toLocaleString("pt-BR", {style: "currency", currency: "BRL"})}.<br>`;
        res.innerHTML += `Hoje o produto está mais caro.<br>`;
        res.innerHTML += `O preço subiu ${diferenca.toLocaleString("pt-BR", {style: "currency", currency: "BRL"})} em relação ao preço anterior<br>`;
        res.innerHTML += `Uma variação de ${variacao.toFixed(2)}% para cima.`;
    } 
    
    else if (preco_atual < preco) {
        var diferenca = preco - preco_atual;
        var variacao = (100 * diferenca) / preco;

        var res = document.querySelector("div.res");
        res.innerHTML = `<strong style="font-size: 21px;">Analisando os valores informados:</strong><br>`;
        res.innerHTML += `O produto custava ${preco.toLocaleString("pt-BR", {style: "currency", currency: "BRL"})} e agora custa ${preco_atual.toLocaleString("pt-BR", {style: "currency", currency: "BRL"})}.<br>`;
        res.innerHTML += `Hoje o produto está mais barato.<br>`;
        res.innerHTML += `O preço caiu ${diferenca.toLocaleString("pt-BR", {style: "currency", currency: "BRL"})} em relação ao preço anterior<br>`;
        res.innerHTML += `Uma variação de ${variacao.toFixed(2)}% para baixo.`;
    } else {
        var res = document.querySelector("div.res");
        res.innerHTML = `<strong style="font-size: 21px;">Analisando os valores informados:</strong><br>`;
        res.innerHTML += `O produto custa ${preco.toLocaleString("pt-BR", {style: "currency", currency: "BRL"})} e não houve alteração.<br>`;
    }

}