function fazGet(url){
    let request = new XMLHttpRequest();
    request.open("GET", url, false);
    request.send();
    return request.responseText;
}

function criaLinha(pizza){
    linha = document.createElement("tr");
    tdId = document.createElement("td");
    tdNome = document.createElement("td");
    tdDesc = document.createElement("td");
    tdPreco = document.createElement("td");
    tdSelec = document.createElement("td");

    tdId.innerHTML = pizza.id;
    tdNome.innerHTML = pizza.Nome;
    tdDesc.innerHTML = pizza.Descrição;
    tdPreco.innerHTML = pizza.Preço;
    tdSelec.innerHTML = `<a key="`+pizza.id+`" href="#" id="carrinho">+</a>`;

    linha.appendChild(tdId);
    linha.appendChild(tdNome);
    linha.appendChild(tdDesc);
    linha.appendChild(tdPreco);
    linha.appendChild(tdSelec);

    return linha;
}

function main(){
    data = fazGet("http://localhost:21262");
    pizzas = JSON.parse(data);
    tabela = document.getElementById("tabela");

    pizzas.forEach(element => {
        let linha = criaLinha(element);
        tabela.appendChild(linha);
    });
}

main();

atualizarCarrinho = () =>{
    console.log(items);
}

var links = document.getElementById("carrinho");

for(var i = 0; i < links.length; i++){
    links[i].addEventListener("click", function(){
        let key = this.getAttribute('key');
        items[key].quantidade++;
        atualizarCarrinho();
        return false;
    });
    console.log(links);
}