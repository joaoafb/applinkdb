function config(){
    
    document.getElementById("divlogin").style.display = "none"
    document.getElementById("divreoferta").style.display = "none"
    document.getElementById("box2").style.display = "none"
    document.getElementById("box3").style.display = "none"
    document.getElementById("box1").style.display = "none"
    document.getElementById("divhome").style.display = "none"
    document.getElementById("divconfig").style.display = "block"
    document.getElementById("divbemvindo").style.display = "none"
    
}


function home(){
    document.getElementById("divlogin").style.display = "none"
    document.getElementById("divreoferta").style.display = "none"
    document.getElementById("box2").style.display = "none"
    document.getElementById("box3").style.display = "none"
    document.getElementById("box1").style.display = "none"
    document.getElementById("divhome").style.display = "block"
    document.getElementById("divconfig").style.display = "none"
    document.getElementById("divbemvindo").style.display = "none"
}


function reoferta(){
    document.getElementById("divlogin").style.display = "none"
    document.getElementById("divreoferta").style.display = "block"
    document.getElementById("box2").style.display = "none"
    document.getElementById("box3").style.display = "none"
    document.getElementById("box1").style.display = "none"
    document.getElementById("divhome").style.display = "none"
    document.getElementById("divconfig").style.display = "none"
    document.getElementById("divbemvindo").style.display = "none"
}


function login(){
    document.getElementById("divlogin").style.display = "block"
    document.getElementById("divreoferta").style.display = "none"
    document.getElementById("box2").style.display = "none"
    document.getElementById("box3").style.display = "none"
    document.getElementById("box1").style.display = "none"
    document.getElementById("divhome").style.display = "none"
    document.getElementById("divconfig").style.display = "none"
    document.getElementById("divbemvindo").style.display = "none"

    if(localStorage.getItem("adm") == "sim"){
        location.href = "../../adm/index.html"
    }
}



function aulassegunda(){
    
    document.getElementById("divhome").style.display = "none"
    document.getElementById("divsegunda").style.display = "block"
    segunda1();
    horariop();
    horarios();
    prof();
    
}
function back(){
    document.getElementById("divhome").style.display = "block"
    document.getElementById("divsegunda").style.display = "none"
}