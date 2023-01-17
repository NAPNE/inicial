document.addEventListener("DOMContentLoaded", () => {
    var $html = document.getElementsByTagName('html')[0];
    var $checkbox = document.getElementById("dark-mode");
    /* console.log($html);
    console.log($checkbox); */

    $checkbox.addEventListener("click", function() {
        //console.log("teste");
        $html.classList.toggle("dark-mode");
    });
});




