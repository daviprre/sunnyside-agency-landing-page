let Menu = document.getElementById("Menu__hidden");
let auxiliar = 0;

function CambiarEstado(){

    if (auxiliar ==0){
        Menu.style = "display:flex;"
        auxiliar =  1;
    }
    else{
        Menu.style = "display:none;"
        auxiliar =  0;
    }
    
}


