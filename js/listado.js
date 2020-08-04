var gastosArray = [] ;

function showGastoslist(array){

let htmlContentToAppend = "";
for(let i = 0; i<array.length; i++){
    let  dato = array[i];

    htmlContentToAppend +=`
    <div class="persona" >
        <p> `+ dato.WHO +` </p>
        <div clas="week">
                <p>` + dato.WEEK + `</p>
            <div class="expenses">

              
            </div>
         </div>
    </div>
    `
    document.getElementById("info").innerHTML = htmlContentToAppend;
}

}

document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(JSON).then(function(resultObj){
        if (resultObj.status === "ok")
        {
            categoriesArray = resultObj.data;
            //Muestro las categorías ordenadas
            showCategoriesList(categoriesArray);
        }
    });
});