function pesquisar() {
    // Obtém a seção onde os resultados serão exibidos
    let section = document.getElementById
    ("resultados-pesquisa");

    let campoPesquisa = document.getElementById
    ("campo-pesquisa").value

    // se o campo pesquisa ele for uma string  sem nada
    if (!campoPesquisa) {
        section.innerHTML = "Nenhum planeta foi encontrado. Você precisa digitar o nome do planeta"
        return 
    }

    campoPesquisa = campoPesquisa.toLowerCase()

    console.log(campoPesquisa);

    // inicializa uma string vazia para amarzenar os resultados
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";

    // Itera sobre os dados e cria o HTML para cada resultado
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tags = dado.tags.toLowerCase()
        // se titulo includes campoPesquisa
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)){
            // criar um novo elemento
            resultados += `
            <div class="item-resultado">
                <h2>
                    <a href="#" target="_blank">${dado.titulo}</a>
                </h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <a href="${dado.link}" target="_blank">Saiba mais</a>
            </div>
        `;
        }
    }

    if (!resultados) {
        resultados = "<p>Nada foi encontrado.</p>"
    }
    // Atribui o HTML gerado à seção de resultados
    section.innerHTML = resultados;
}