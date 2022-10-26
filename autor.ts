export class autor{


    private nombre:string ="";
    private nacionalidad:string="";
    private fecha_nac:number=0;
    
    constructor(nombre:string, nacionalidad:string, fecha_nac:number)
    {
        this.nombre=nombre;
        this.nacionalidad=nacionalidad;
        this.fecha_nac=fecha_nac;
    }
private get_nombre():string{
    return this.nombre;
}
private get_nacionalidad():string{
    return this.nacionalidad;
}
private get_fecha_nac():number{
    return this.fecha_nac;
}

private set_nombre(nombre:string){
    this.nombre=nombre;
}
private set_nacionalidad(nacionalidad:string){
    this.nacionalidad=nacionalidad;
}
private set_fecha_nac(fecha_nac:number){
    this.fecha_nac=fecha_nac;
}

}