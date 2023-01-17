document.addEventListener("DOMContentLoaded", () => {
    var $html = document.getElementsByTagName('html')[0];
    var $checkbox = document.getElementById("saturacao");
    /* console.log($html);
    console.log($checkbox);
 */
    $checkbox.addEventListener("click", function() {
        $html.classList.toggle("saturacao");
    });
});

