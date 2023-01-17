const sheetID = "1M0sMut2ZKFDOTpcAXGE-Sezjy6cZfJtJjmq31Bix4pw"
const url = "https://docs.google.com/spreadsheets/d/"
const query1 = `/gviz/tq?gid=453833846`

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
    console.log(rows);
    
    var numTitulos = 0;
    //Nova lógica de renderização para esse caso em específico


    rows[0].c.forEach(element => {
        if(element != null)  numTitulos++;
    });

    //console.log(rows.length);

    const divApoio = document.getElementById("renderApoio");
    var htmlConteudo = "";

    for(let iniRowTitulo=2; rows[0].c[iniRowTitulo] != null; iniRowTitulo++){
        
        //console.log(`Titulo: ${rows[0].c[iniRowTitulo].v}`);
        for(let iniRowConteudo = 1;/* (rows[iniRowConteudo].c[iniRowTitulo] != null) && */ (iniRowConteudo <= rows.length-1);iniRowConteudo++){

            //console.log(`Conteudo: ${rows[iniRowConteudo].c[iniRowTitulo].v}`);
            if(rows[iniRowConteudo].c[iniRowTitulo] != null){ 

                 htmlConteudo = htmlConteudo +`<ul><li><a>${rows[iniRowConteudo].c[iniRowTitulo].v}</a></li></ul>`;

            }

        }
        
        divApoio.innerHTML = divApoio.innerHTML + `
        <div class="quemsomos text-grande-sobre-noticia-apoio" >
            <ul>
                <li>
                    <div class="retinha"></div>
                </li>
                <li>
                    <p class="nomeNoticia"> ${rows[0].c[iniRowTitulo].v}</p>
                </li>
            </ul>
        </div>
        <div class="quemsomostexto sobre-texto-apoio" > ${htmlConteudo}
        </div>
        `;

        htmlConteudo = "";
        
    }
    
});