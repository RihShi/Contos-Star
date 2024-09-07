function pesquisar() {

    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value;
    
    if (!campoPesquisa) {
        section.innerHTML = "<p>Você precisa digitar o numero da pagina.</p>"
        return 
    }  
    campoPesquisa = campoPesquisa.toLowerCase()

    let resultados = "";
    let titulo = ""; 
    let descricao = "";
    let tags = "";

for (let dado of dados) {

    tags = dado.tags.toLowerCase()

    if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)){
     resultados +=`
        <div class="item-resultado">
            <h2>${dado.titulo}
            </h2>
            <p class="descricao-meta">${dado.descricao}</p>

        </div>
`;
    } 
}
    if (!resultados) {
        resultados = "<p>Obrigado por acompanhar a história, se possível atualizaremos em breve</p>"
    }

    

section.innerHTML = resultados;
    }