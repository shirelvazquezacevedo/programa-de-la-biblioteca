export class lector{
    private noNegocio:number=0;
    private nombre:string="";
    private telefono:number=0;
    private direccion:string="";
    private TC:number=0;


    constructor(noNegocio:number,nombre:string,telefono:number,direccion:string,TC:number)
    {
        this.noNegocio=noNegocio;
        this.nombre=nombre;
        this.telefono=telefono;
        this.direccion=direccion;
        this.TC=TC;
    }
    private get_noNegocio():number{
        return this.noNegocio;
    }
    private get_nombre():string{
        return this.nombre;
    } 
    private get_telefono():number{
        return this.telefono;
    }
    private get_direccion():string{
        return this.direccion;
    }
    private get_TC():number{
        return this.TC;
    }




    private set_noNegoci(noNegocio:number){
        this.noNegocio=noNegocio;
    }
    private set_nombre(nombre:string){
        this.nombre=nombre;
    }
    private set_telefono(telefono:number){
        this.telefono=telefono;
    }
    private set_direccion(direccion:string){
        this.direccion=direccion;
    }
    private set_TC(TC:number){
        this.TC=TC;
    }
   

}