import { autor } from "./autor";

export class libro {
    private titulo:string= "";
    private tipo:string="";
    private editorial="";
    private año:number=0;

    constructor(nacionalidad:string,titulo:string,tipo:string,editorial:string,año:number)
    {
        
        this.titulo=titulo;
        this.tipo=tipo;
        this.editorial=editorial;
        this.año=año;

    }
    private get_titulo():string{
        return this.titulo;
    }
    private get_tipo():string{
        return this.tipo;
    }
    private get_editorial():string{
        return this.editorial;
    }
    private get_año():number{
        return this.año;
    }

    private set_titulo(titulo:string){
        this.titulo=titulo;
    }
    private set_tipo(tipo:string){
        this.tipo=tipo;
    }
    private set_editorial(editorial:string){
        this.editorial=editorial;
    }
    private set_año(año:number){
        this.año=año;
    }



}