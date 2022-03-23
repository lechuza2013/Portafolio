function agregarData(results){
    console.log(results, "Soy mostrarResultados");
    const contenedor = document.querySelector(".insert-proyecto");
    const template = document.querySelector(".template-proyecto");

    for (const r of results.items) {
        // Nombre del proyecto
        const tituloEl = template.content.querySelector(".nombre-del-proyecto");
        tituloEl.textContent = r.fields.titulo;

        // Descripción del proyecto
        const descriptionEl = template.content.querySelector(".descripcion-del-proyecto");
        descriptionEl.textContent = r.fields.description;

        //Url direccionada al clickear 'Ver más'
        const linkEl = template.content.querySelector(".link-proyecto")
        linkEl.href = r.fields.url;

        //Imagen del proyecto
        const imagenEl = template.content.querySelector(".imagen-proyecto");
        const imgId = r.fields.imagen.sys.id;
        const img = getImg(imgId, results);
        const imgUrl = img.fields.file.url;
        imagenEl.src = "https:"+imgUrl;
        
    const clone = document.importNode(template.content, true);
    contenedor.appendChild(clone);
    }
}
function getImg(id, data){
    return data.includes.Asset.find((i)=>{
        return i.sys.id == id;
    })
}


function main() {
    fetch("https://preview.contentful.com/spaces/hzt4dv7mpeq7/environments/master/entries?access_token=mxsSx-pGGFB-QG_Hvtpd7TQkkLqNbzdTiEM2py4udDE")
    .then((res)=>{
        return res.json();
    })
    .then((data)=>{
      agregarData(data)
    });
}


main();
