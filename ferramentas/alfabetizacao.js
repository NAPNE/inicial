document.addEventListener("DOMContentLoaded", () => {
    
    var $html = document.getElementsByTagName('html')[0];
    var ids = ["#sobre-texto", "#contato ul", ".qm", ".tituloIntegrantes", ".int", ".quemsomos", ".vocesabe", ".vcsabe", "#text-grande-o-que", "#menuLongo"];
    var $checkbox = document.getElementById("alfabetizacao");
    /* console.log($checkbox); */

    ids.forEach(id=>{
        var elemento = document.querySelector(id);
        var size = window.getComputedStyle(elemento, null).getPropertyValue('text-decoration');

        $checkbox.addEventListener('change', function() {
            if (this.checked) {
                elemento.style.textDecoration = "underline " + "red " + "2px";
              } else {
                elemento.style.textDecoration = "none";
              }
        });
    });
});
