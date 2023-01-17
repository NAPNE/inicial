function FontSize(type) {
    var ids = ["#text-grande-contato", "#contato-texto", ".form", ".noticiasClass"];
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