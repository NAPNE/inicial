document.addEventListener("DOMContentLoaded", () => {
    
    var $html = document.getElementsByTagName('html')[0];
    var $checkbox = document.getElementById("activate-button-perfil");
    var $checkbox2 = document.getElementById("activate-button-perfil-2");

        $checkbox.addEventListener('change', function() {
            if (this.checked) {
                document.querySelector(".listaFerramentas").setAttribute("aria-hidden", true);
                document.querySelector(".listaFerramentas").setAttribute("style", "display: none;");
              } else {
                document.querySelector(".listaFerramentas").setAttribute("aria-hidden", false);
                document.querySelector(".listaFerramentas").setAttribute("style", "display: gride;");
              }
        });

        $checkbox2.addEventListener('change', function() {
          if (this.checked) {
              document.querySelector(".listaFerramentas2").setAttribute("aria-hidden", true);
              document.querySelector(".listaFerramentas2").setAttribute("style", "display: none;");
            } else {
              document.querySelector(".listaFerramentas2").setAttribute("aria-hidden", false);
              document.querySelector(".listaFerramentas2").setAttribute("style", "display: gride;");
            }
      });
    
});


