export function btnSubir(btnSubir){
    window.addEventListener("scroll", () =>{
        if (document.documentElement.scrollTop >=240){
            btnSubir.style.display="block";
        }else{
            btnSubir.style.display="none";
        }
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