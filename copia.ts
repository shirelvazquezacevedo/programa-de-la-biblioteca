import{libro} from "./libro";

import{ lector } from "./lector"

export class Copia{
    
    private fecha:number=0;
    private id:number=0;
    private estado:string="";
    private copia:any[]=[];
    
    constructor(id:number,estado:string,fecha:number,libros:any)
    {
        
        this.fecha=fecha;
        
    }
    public get_id():number{
        return this.id;
    }
    public get_estado():string{
        return this.estado;
    }

    public set_id(id:number){
        this.id=id;
    }
    public set_estado(estado:string){
        this.estado=estado;
    }
    public get_fecha ():number{
        return this.fecha;
    }
    public set_fecha(fecha:number){
        this.fecha=fecha;
    }
    



public AgregarCopia (NoCopias:number,libro :libro,Lector :lector){
        this.id++;
        let Registro={
            Registro:this.id,
            Lectro:lector,
            NumCopias:NoCopias,
            Estado: 'proceso',
            libro:libro
        };
    this.copia.push(Registro);
}
public listacopias():void{
console.log(this.copia);



    
 };
};
