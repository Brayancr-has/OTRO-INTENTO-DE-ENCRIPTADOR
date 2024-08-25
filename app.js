//--------Selecionar elementos-----
const BotonEncriptar = document.querySelector(".btn-encriptar");
const txtEncriptar = document.querySelector(".text-area");
const aviso = document.querySelector(".terminos");
const respuesta =document.querySelector(".text-area-copy");
const contenido = document.querySelector(".avisos");
const CImagen = document.querySelector(".imagen");
const btnCopiar = document.querySelector(".btn-copiar");
const btnDesencriptar = document.querySelector(".btn-desencriptar")

//--------Boton de encrptar-------
BotonEncriptar.addEventListener("click", e=>{
    e.preventDefault();
    let texto = txtEncriptar.value;
    let txt = texto.normalize("NFD").replace( /[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, " " );

   if(texto == ""){
        aviso.style.backgroud = "#0A3871";
        aviso.style.color = "#0a3871";
        aviso.style.fontWeight = "800";
        aviso.textContent = "El campo de texto no debe estar vacío";

        setTimeout(()=>{
            aviso.removeAttribute("style");
        },1500);


    }

    else if(texto !== txt){
        aviso.style.backgroud = "#0A3871";
        aviso.style.color = "#0a3871";
        aviso.style.fontWeight = "800";
        aviso.textContent = "No debe tener acentos y caracteres especiales";

        setTimeout(()=>{
            aviso.removeAttribute("style");
        },1500);


    }

    else if(texto !== texto.toLowerCase()){
        aviso.style.backgroud = "#0A3871";
        aviso.style.color = "#0a3871";
        aviso.style.fontWeight = "800";
        aviso.textContent = "El texto debe ser todo en minuscula";

        setTimeout(()=>{
            aviso.removeAttribute("style");
        },1500);

    }
    else{

        texto = texto.replace(/e/mg, "enter");
        texto = texto.replace(/o/mg, "ober");
        texto = texto.replace(/i/mg, "imes");
        texto = texto.replace(/a/mg, "ai");
        texto = texto.replace(/u/mg, "ufat");

        respuesta.innerHTML = texto;
        btnCopiar.style.visibility = "inherit";
        contenido.remove();
        CImagen.remove();
    }
    
});

//--------Boton de desencrptar-------
btnDesencriptar.addEventListener("click", e=>{
    e.preventDefault();
    let texto = txtEncriptar.value;
    let txt = texto.normalize("NFD").replace( /[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, " " );

   if(texto == ""){
        aviso.style.backgroud = "#0A3871";
        aviso.style.color = "#0a3871";
        aviso.style.fontWeight = "800";
        aviso.textContent = "El campo de texto no debe estar vacío";

        setTimeout(()=>{
            aviso.removeAttribute("style");
        },1500);


    }

    else if(texto !== txt){
        aviso.style.backgroud = "#0A3871";
        aviso.style.color = "#0a3871";
        aviso.style.fontWeight = "800";
        aviso.textContent = "No debe tener acentos y caracteres especiales";

        setTimeout(()=>{
            aviso.removeAttribute("style");
        },1500);


    }

    else if(texto !== texto.toLowerCase()){
        aviso.style.backgroud = "#0A3871";
        aviso.style.color = "#0a3871";
        aviso.style.fontWeight = "800";
        aviso.textContent = "El texto debe ser todo en minuscula";

        setTimeout(()=>{
            aviso.removeAttribute("style");
        },1500);

    }
    else{

        texto = texto.replace(/ente/mg, "e");
        texto = texto.replace(/ober/mg, "o");
        texto = texto.replace(/imes/mg, "i");
        texto = texto.replace(/ai/mg, "a");
        texto = texto.replace(/ufat/mg, "u");

        respuesta.innerHTML = texto;
        btnCopiar.style.visibility = "inherit";
        contenido.remove();
        CImagen.remove();
    }
    
});

//--------Boton de copiar-------
btnCopiar.addEventListener("click", e=>{
    e.preventDefault();
    let copiar = respuesta;
    copiar.select();
    document.execCommand("copy");
})