const sheetID = "1M0sMut2ZKFDOTpcAXGE-Sezjy6cZfJtJjmq31Bix4pw"
const url = "https://docs.google.com/spreadsheets/d/"
const query1 = `/gviz/tq?gid=0`

const endpoint1 = `${url}${sheetID}${query1}`;

console.log(endpoint1);

fetch(endpoint1)
.then(response => response.text())
.then(data => {

    //console.log(data);
    const temp = data.substring(47).slice(0,-2);
    //console.log(temp);
    const json = JSON.parse(temp);
    //console.log(json);
    const rows = json.table.rows;
    //console.log(rows);
    rows.splice(0,1);//Responsável por remover o título da planilha da exibição na página
    
    
    var imgID = "";
    var fixedImgLink = "";

    console.log(imgID);
    rows.forEach(noticia => {

        imgID = noticia.c[4].v.split("file/d/")[1].split("/view")[0];
        fixedImgLink = `https://drive.google.com/uc?export=view&id=${imgID}`;

        const divNoticias = document.getElementById("renderNoticias");

            divNoticias.innerHTML = divNoticias.innerHTML + `<div>
            <div class="quemsomos" id="text-grande-sobre-noticia">
                <ul>
                    <li>
                        <div class="ret"></div>
                    </li>
                    <li>
                        <p class="nomeNoticia">${noticia.c[2].v}</p>
                    </li>
                </ul>
            </div>
        
            <div class="quemsomostexto" id="sobre-texto-noticia">
                <p>${noticia.c[3].v}
                </p>
            </div>
            <div class="imgNoticiasPlanilha">
            <img src="${fixedImgLink}" alt="">
        </div>
        </div>` 

    });
    
});