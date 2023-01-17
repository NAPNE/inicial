function FontSize(type) {
    var ids = [".tecClass", "#text-grande-sobre-apoio1", ".desc", "#text-grande-sobre-apoio", ".descricao", ".nomeNoticia", "#sobre-texto-ta",".text-grande-sobre-noticia-apoio"];
        ids.forEach(id => {
            var elemento = document.querySelector(id);
            var size = window.getComputedStyle(elemento, null).getPropertyValue('font-size');
            size = parseFloat(size);
    
            if (type == 'aumentar') {
                console.log("clicou");
                elemento.style.fontSize = (size + 2) + "px";
            } else if (type == 'diminuir') {
                elemento.style.fontSize = (size - 2) + "px";
            }
    
        });
    }