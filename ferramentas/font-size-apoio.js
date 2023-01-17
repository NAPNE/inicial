function FontSize(type) {
    var ids = [".apoioClass", ".nomeNoticia", ".text-grande-sobre-noticia",".text-grande-sobre-noticia-apoio", ".filme", ".sobre-texto-apoio", ".nomeNoticia", ".text-grande-sobre"];
        ids.forEach(id => {
            var elemento = document.querySelectorAll(id);

            for (let i = 0; i < elemento.length; i++) {
                
                var size = window.getComputedStyle(elemento[i], null).getPropertyValue('font-size');
                size = parseFloat(size);
        
                if (type == 'aumentar') {
                    //console.log("clicou");
                    elemento[i].style.fontSize = (size + 2) + "px";
                } else if (type == 'diminuir') {
                    elemento[i].style.fontSize = (size - 2) + "px";
                }
                
            }
            
        });
    }