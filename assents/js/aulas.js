const materia1segunda = document.querySelector("#materia1segunda")
const horariop1segunda =  document.querySelector("#horariop1segunda")
const horarios1segunda = document.querySelector("#horarios1segunda")
const prof1segunda =  document.querySelector("#prof1segunda")
const entrar1segunda = document.querySelector("#entrar1segunda")
const share1segunda =  document.querySelector("#share1segunda")




function segunda1(){
    db.collection("segunda").doc("1").get().then((doc) => {
        if (doc.exists) {
            materia1segunda.innerHTML = doc.data().materia
            
        } else {
            // doc.data() will be undefined in this case
            console.log("NENHUMA DADO ENCONTRADO!");
        }
    }).catch((error) => {
        console.log("Error getting document:", error);
    });

    
}


function horariop(){
    db.collection("segunda").doc("1").get().then((doc) => {
        if (doc.exists) {
            horariop1segunda.innerHTML = doc.data().horariop
            
        } else {
            // doc.data() will be undefined in this case
            console.log("NENHUMA DADO ENCONTRADO!");
        }
    }).catch((error) => {
        console.log("Error getting document:", error);
    });
}


function horarios(){
    db.collection("segunda").doc("1").get().then((doc) => {
        if (doc.exists) {
            horarios1segunda.innerHTML = doc.data().horarios
            
        } else {
            // doc.data() will be undefined in this case
            console.log("NENHUMA DADO ENCONTRADO!");
        }
    }).catch((error) => {
        console.log("Error getting document:", error);
    });
}

function prof(){
    db.collection("segunda").doc("1").get().then((doc) => {
        if (doc.exists) {
            prof1segunda.innerText = "Prof " + doc.data().prof
            
        } else {
            // doc.data() will be undefined in this case
            console.log("NENHUMA DADO ENCONTRADO!");
        }
    }).catch((error) => {
        console.log("Error getting document:", error);
    });
}


function entrarsegunda1(){


    db.collection("segunda").doc("1").get().then((doc) => {
        if (doc.exists) {
            
            location.href = doc.data().link
        } else {
            // doc.data() will be undefined in this case
            console.log("NENHUMA DADO ENCONTRADO!");
        }
    }).catch((error) => {
        console.log("Error getting document:", error);
    });

}


