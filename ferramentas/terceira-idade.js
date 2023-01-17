document.addEventListener("DOMContentLoaded", () => {
    
    var $html = document.getElementsByTagName('html')[0];
    var ids = ["#sobre-texto", "#contato ul", ".qm", ".tituloIntegrantes", ".int", ".quemsomos", ".vocesabe", "#text-grande-sobre", ".vcsabe", "#text-grande-o-que"];
    var $checkbox = document.getElementById("idoso");
    /* console.log($checkbox); */

    ids.forEach(id=>{
        var elemento = document.querySelector(id);
        var size = window.getComputedStyle(elemento, null).getPropertyValue('font-size');
        size = parseFloat(size);

        $checkbox.addEventListener('change', function() {
            if (this.checked) {
                elemento.style.fontSize = (size + 6) + "px";
              } else {
                elemento.style.fontSize = (size - 0) + "px";
              }
        });
    });
});










