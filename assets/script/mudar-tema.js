function alterarTema() {
    var select = document.getElementById("list-options");
    var temaSelecionado = select.options[select.selectedIndex].value;
    var conteudo = document.getElementById("list");
  
    conteudo.classList.remove("List-market", "List-shopping", "List-book", "List-material", "List-other");
    
    conteudo.className = "";
   
    conteudo.classList.add(temaSelecionado);
}
