import * as variables from "./variables.js";
import * as funciones from "./funciones.js";

funciones.btnSubir();

const sobreMi = variables.sobreMi;
const h1SobreMi = variables.h1SobreMi;
funciones.pulsoSobreMi(sobreMi,h1SobreMi);

const skills = variables.skills;
const h2Skills = variables.h2Skills;
funciones.pulsoSkills(skills,h2Skills);

const contacto = variables.contacto;
const h2Contacto = variables.h2Contacto;
funciones.pulsoContacto(contacto,h2Contacto);
