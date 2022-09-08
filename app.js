function seleccionar(link){
    var opciones = document.querySelectorAll("#links a");
    opciones[0].className ="";
    opciones[1].className ="";
    opciones[2].className ="";
    opciones[3].className ="";
    opciones[4].className ="";
    link.className = "seleccionado";

    var x = document.getElementById("nav");
    x.className="";
}

// Menu Resposive
function responsiveMenu(){
    var x = document.getElementById("nav");
    if (x.className===""){
        x.className = "resposive";
    } else {
        x.className = "";
    }
}

//Animaciones Skills
window.onscroll = function(){
    efectoHabilidades()
};

function efectoHabilidades(){
var skills= document.getElementById("skills");
var distancia_skills= windows.innerHeight - skills.getBoundingClientRect().top;
if (distancia_skills >=300){
    document.getElementById("html") .classList.add("barraprogreso1");
    document.getElementById("js") .classList.add("barraprogreso2");
    document.getElementById("bd") .classList.add("barraprogreso3");
    document.getElementById("ps") .classList.add("barraprogreso4");
    document.getElementById("ingles") .classList.add("barraprogreso5");
}
}