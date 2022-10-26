import{ autor }from "./autor"
import { Copia } from "./copia"
import { lector } from "./lector"
import { libro } from "./libro"
const shirel=new autor("shirel ","mexico ",18_09_2006)
console.log(shirel);

const principito=new libro("peruana","El principito","novela","Berenice",1943)
console.log(principito);

const ShirelVazquez=new lector(2006,"Shirel Vazquez Acevedo",5574881198,"Venustiano Carranza 177",12345678)
console.log(ShirelVazquez);

const Diablo= new libro("mexico","Diablo guardian","novela","Javier velasco",2016)
console.log(Diablo);
