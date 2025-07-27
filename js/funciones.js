export function btnSubir(){
    window.onscroll = function() {
        if (document.documentElement.scrollTop >=240){
            document.querySelector(".btn-subir").style.display="block";
        }else{
            document.querySelector(".btn-subir").style.display="none";
        }
    }
}

export function pulsoSobreMi(sobreMi,h1SobreMi){
    sobreMi.addEventListener("click",()=>{
        h1SobreMi.classList.remove("pulso");
        void h1SobreMi.offsetWidth;
        h1SobreMi.classList.add("pulso");
    });
}

export function pulsoSkills(skills,h2Skills){
    skills.addEventListener("click",()=>{
        h2Skills.classList.remove("pulso");
        void h1SobreMi.offsetWidth;
        h2Skills.classList.add("pulso");
    });
}

export function pulsoContacto(contacto,h2Contacto){
    contacto.addEventListener("click",()=>{
        h2Contacto.classList.remove("pulso");
        void h2Contacto.offsetWidth;
        h2Contacto.classList.add("pulso");
    });
}