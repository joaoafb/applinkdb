document.getElementById("box2").style.display = "none"
document.getElementById("box3").style.display = "none"
document.getElementById("box1").style.display = "none"
document.getElementById("divhome").style.display = "none"
document.getElementById("divconfig").style.display = "none"
document.getElementById("divreoferta").style.display = "none"
document.getElementById("divlogin").style.display = "none"
document.getElementById("box4").style.display = "none"
document.getElementById("alert").style.display = "none"
document.getElementById("divsegunda").style.display = "none"
document.getElementById("divterca").style.display = "none"
document.getElementById("divquarta").style.display = "none"
document.getElementById("divquinta").style.display = "none"
document.getElementById("divsexta").style.display = "none"


document.getElementById("btnadm").onclick = function (){
    localStorage.setItem("curso", "ADM")
    document.getElementById("box1").style.display = "none"
    document.getElementById("box2").style.display = "block"
}



document.getElementById("btnseg").onclick = function (){
    localStorage.setItem("curso", "Seg")
    document.getElementById("box1").style.display = "none"
    document.getElementById("box2").style.display = "block"
    document.getElementById("box3").style.display = "none"
}


function next() {
    document.getElementById("box1").style.display = "block"
    document.querySelector(".box").style.display = "none"
}






document.querySelector("#submit").onclick = function(){

    if(document.querySelector("#inputnome").value == ""){
        document.getElementById("alert").style.display = "block"
        
    }


   else{
   


    localStorage.setItem("nome", document.querySelector("#inputnome").value)
    localStorage.setItem("aparecercadastro", "nao")
    document.getElementById("box4").style.display = "none"
    document.getElementById("box2").style.display = "none"
    
    document.getElementById("box1").style.display = "none"
    document.getElementById("divbemvindo").style.display = "none"
    document.getElementById("divhome").style.display = "block"
    document.getElementById("box3").style.display = "none"

    cadUser();
   }

}