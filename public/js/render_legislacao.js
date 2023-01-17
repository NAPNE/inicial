const sheetID = "1M0sMut2ZKFDOTpcAXGE-Sezjy6cZfJtJjmq31Bix4pw"
const url = "https://docs.google.com/spreadsheets/d/"
const query1 = `/gviz/tq?gid=563637404`

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
    
    var legislacaoDiv = document.getElementsByClassName('renderLegislacao')[0];
    legislacaoDiv.innerHTML = "";

    var docID = "";
    var fixedDocLink = "";

    //console.log(rows);

    rows.forEach(legislacao => {

        docID = legislacao.c[3].v.split("file/d/")[1].split("/view")[0];
        fixedDocLink = `https://drive.google.com/uc?export=view&id=${docID}`;

        //console.log(fixedDocLink);

        legislacaoDiv.innerHTML = legislacaoDiv.innerHTML + `<div>
        <div class="quemsomos" id="text-grande-sobre-noticia">
            <ul>
                <li>
                    <div class="ret"></div>
                </li>
                <li>
                    <p class="nomeNoticia">${legislacao.c[2].v}</p>
                </li>
            </ul>
        </div>
    
        <div class="quemsomostexto" id="sobre-texto-noticia">
            <p><a href="${fixedDocLink}" target="__blank">Link para <i>Download</i></a>
            </p>
        </div>
    </div>`;
        
        
    });


    
    
});