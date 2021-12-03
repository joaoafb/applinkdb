



function adicionarsegunda(){

    let inputSequencia = document.querySelector("#inputSequencia")
let inputMateria = document.querySelector("#inputMateria")
let inputLink = document.querySelector("#inputLink")
let inputHorariop = document.querySelector("#inputHorariop")
let inputHorarios = document.querySelector("#inputHorarios")
let inputProf = document.querySelector("#inputProf")

    localStorage.setItem("sequencia", inputSequencia.value )
    localStorage.setItem("materia", inputMateria.value )
    localStorage.setItem("link", inputLink.value)
    localStorage.setItem("horariop", inputHorariop.value)
    localStorage.setItem("horarios", inputHorarios.value )
    localStorage.setItem("prof", inputProf.value )



     // Add a new document in collection "cities"
db.collection("segunda").doc(inputSequencia.value).set({
    sequencia: localStorage.getItem("sequencia"),
    materia: localStorage.getItem("materia"),
    link: localStorage.getItem("link"),
    horariop: localStorage.getItem("horariop"),
    horarios: localStorage.getItem("horarios"),
    prof: localStorage.getItem("prof"),
    data: str_data + ' às ' + str_hora,
    administrador: localStorage.getItem("administrador")

})
.then(() => {
    alert("Aula Inserida Com Sucesso!")
    location.reload()
})
.catch((error) => {
    alert("Falha ao Inserir a Aula!", error)
});
   
}

function adicionarterca(){
    let inputSequenciat = document.querySelector("#inputSequenciat")
let inputMateriat = document.querySelector("#inputMateriat")
let inputLinkt = document.querySelector("#inputLinkt")
let inputHorariopt = document.querySelector("#inputHorariopt")
let inputHorariost = document.querySelector("#inputHorariost")
let inputProft = document.querySelector("#inputProft")
    
    localStorage.setItem("sequenciat", inputSequenciat.value )
    localStorage.setItem("materiat", inputMateriat.value )
    localStorage.setItem("linkt", inputLinkt.value)
    localStorage.setItem("horariopt", inputHorariopt.value)
    localStorage.setItem("horariost", inputHorariost.value )
    localStorage.setItem("proft", inputProft.value )


     // Add a new document in collection "cities"
db.collection("terca").doc(inputSequenciat.value).set({
    sequencia: localStorage.getItem("sequenciat"),
    materia: localStorage.getItem("materiat"),
    link: localStorage.getItem("linkt"),
    horariop: localStorage.getItem("horariopt"),
    horarios: localStorage.getItem("horariost"),
    prof: localStorage.getItem("proft"),
    data: str_data + ' às ' + str_hora,
    administrador: localStorage.getItem("administrador")

})
.then(() => {
    alert("Aula Inserida Com Sucesso!")
    location.reload()
})
.catch((error) => {
    alert("Falha ao Inserir a Aula!", error)
});
   
}

function adicionarquarta(){
    let inputSequenciaq = document.querySelector("#inputSequenciaq")
let inputMateriaq = document.querySelector("#inputMateriaq")
let inputLinkq = document.querySelector("#inputLinkq")
let inputHorariopq = document.querySelector("#inputHorariopq")
let inputHorariosq = document.querySelector("#inputHorariosq")
let inputProfq = document.querySelector("#inputProfq")
    
    localStorage.setItem("sequenciaq", inputSequenciaq.value )
    localStorage.setItem("materiaq", inputMateriaq.value )
    localStorage.setItem("linkq", inputLinkq.value)
    localStorage.setItem("horariopq", inputHorariopq.value)
    localStorage.setItem("horariosq", inputHorariosq.value )
    localStorage.setItem("profq", inputProfq.value )


     // Add a new document in collection "cities"
db.collection("quarta").doc(inputSequenciaq.value).set({
    sequencia: localStorage.getItem("sequenciaq"),
    materia: localStorage.getItem("materiaq"),
    link: localStorage.getItem("linkq"),
    horariop: localStorage.getItem("horariopq"),
    horarios: localStorage.getItem("horariosq"),
    prof: localStorage.getItem("profq"),
    data: str_data + ' às ' + str_hora,
    administrador: localStorage.getItem("administrador")

})
.then(() => {
    alert("Aula Inserida Com Sucesso!")
    location.reload()
})
.catch((error) => {
    alert("Falha ao Inserir a Aula!", error)
});
   
}




function adicionarquinta(){
    let inputSequenciaqi = document.querySelector("#inputSequenciaqi")
let inputMateriaqi = document.querySelector("#inputMateriaqi")
let inputLinkqi = document.querySelector("#inputLinkqi")
let inputHorariopqi = document.querySelector("#inputHorariopqi")
let inputHorariosqi = document.querySelector("#inputHorariosqi")
let inputProfqi = document.querySelector("#inputProfqi")
    
    localStorage.setItem("sequenciaqi", inputSequenciaqi.value )
    localStorage.setItem("materiaqi", inputMateriaqi.value )
    localStorage.setItem("linkqi", inputLinkqi.value)
    localStorage.setItem("horariopqi", inputHorariopqi.value)
    localStorage.setItem("horariosqi", inputHorariosqi.value )
    localStorage.setItem("profqi", inputProfqi.value )


     // Add a new document in collection "cities"
db.collection("quinta").doc(inputSequenciai.value).set({
    sequencia: localStorage.getItem("sequenciaqi"),
    materia: localStorage.getItem("materiaqi"),
    link: localStorage.getItem("linkqi"),
    horariop: localStorage.getItem("horariopqi"),
    horarios: localStorage.getItem("horariosqi"),
    prof: localStorage.getItem("profqi"),
    data: str_data + ' às ' + str_hora,
    administrador: localStorage.getItem("administrador")

})
.then(() => {
    alert("Aula Inserida Com Sucesso!")
    location.reload()
})
.catch((error) => {
    alert("Falha ao Inserir a Aula!", error)
});
   
}









function adicionarsexta(){

    let inputSequenciax = document.querySelector("#inputSequenciax")
let inputMateriax = document.querySelector("#inputMateriax")
let inputLinkx = document.querySelector("#inputLinkx")
let inputHorariopx = document.querySelector("#inputHorariopx")
let inputHorariosx = document.querySelector("#inputHorariosx")
let inputProfx = document.querySelector("#inputProfx")

    localStorage.setItem("sequenciax", inputSequenciax.value )
    localStorage.setItem("materiax", inputMateriax.value )
    localStorage.setItem("linkx", inputLinkx.value)
    localStorage.setItem("horariopx", inputHorariopx.value)
    localStorage.setItem("horariosx", inputHorariosx.value )
    localStorage.setItem("profx", inputProfx.value )



     // Add a new document in collection "cities"
db.collection("sexta").doc(inputSequenciax.value).set({
    sequencia: localStorage.getItem("sequenciax"),
    materia: localStorage.getItem("materiax"),
    link: localStorage.getItem("linkx"),
    horariop: localStorage.getItem("horariopx"),
    horarios: localStorage.getItem("horariosx"),
    prof: localStorage.getItem("profx"),
    data: str_data + ' às ' + str_hora,
    administrador: localStorage.getItem("administrador")

})
.then(() => {
    alert("Aula Inserida Com Sucesso!")
    location.reload()
})
.catch((error) => {
    alert("Falha ao Inserir a Aula!", error)
});
   
}

 // Obtém a data/hora atual
 var data = new Date();

 // Guarda cada pedaço em uma variável
 var dia     = data.getDate();           // 1-31
 var dia_sem = data.getDay();            // 0-6 (zero=domingo)
 var mes     = data.getMonth();          // 0-11 (zero=janeiro)
 var ano2    = data.getYear();           // 2 dígitos
 var ano4    = data.getFullYear();       // 4 dígitos
 var hora    = data.getHours();          // 0-23
 var min     = data.getMinutes();        // 0-59
 var seg     = data.getSeconds();        // 0-59
 var mseg    = data.getMilliseconds();   // 0-999
 var tz      = data.getTimezoneOffset(); // em minutos
 
 // Formata a data e a hora (note o mês + 1)
 var str_data = dia + '/' + (mes+1) + '/' + ano4;
 var str_hora = hora + ':' + min + ':' + seg;