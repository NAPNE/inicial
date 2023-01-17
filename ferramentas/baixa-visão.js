document.addEventListener("DOMContentLoaded", () => {
    /* console.log("entrou aqui"); */
    var $html = document.getElementsByTagName('html')[0];
    var ids = ["#sobre-texto", "#contato ul", ".qm", ".tituloIntegrantes", ".int", ".quemsomos", ".vocesabe", "vcsabe"];
    var $checkbox = document.getElementById("baixa-visao");
    /* console.log($checkbox); */

    ids.forEach(id=>{
        var elemento = document.querySelector(id);
        var size = window.getComputedStyle(elemento, null).getPropertyValue('font-size');
        size = parseFloat(size);

        $checkbox.addEventListener('change', function() {
            if (this.checked) {
                elemento.style.fontSize = (size + 7) + "px";
              } else {
                elemento.style.fontSize = (size - 0) + "px";
              }
        });
    });
});

