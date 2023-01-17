const sheetID = "1M0sMut2ZKFDOTpcAXGE-Sezjy6cZfJtJjmq31Bix4pw"
const url = "https://docs.google.com/spreadsheets/d/"
const query1 = `/gviz/tq?gid=408064390`

const endpoint1 = `${url}${sheetID}${query1}`;
const endpoint2 = `${url}${sheetID}${query1}`;

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
    rows.splice(0,1);

    rows.forEach(inicio => {

        const divInicio = document.getElementById("sobre-texto");

            divInicio.innerHTML = divInicio.innerHTML + `<p>${inicio.c[2].v}</p>` 

    });
});

fetch(endpoint2)
.then(response => response.text())
.then(data => {

    //console.log(data);
    const temp = data.substring(47).slice(0,-2);
    //console.log(temp);
    const json = JSON.parse(temp);
    //console.log(json);
    const rows = json.table.rows;
    //console.log(rows);
    rows.splice(0,1);


    rows.forEach(integrantes => {

        const divIntegrante = document.getElementById("integrantesRender");

            divIntegrante.innerHTML = divIntegrante.innerHTML + `<li>
                <h4>${integrantes.c[3].v}</h4>
                <h6>
                    <p>${integrantes.c[4].v}</p>
                </h6>
            </li>` 

    });
    
});

