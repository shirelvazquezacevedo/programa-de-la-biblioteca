export class multa{
    private fechaInicio:number=0;
    private fechaFin:number=0;

    constructor(fechaInicio:number,fechaFin){

        this.fechaFin=fechaFin;
        this.fechaInicio=fechaInicio;

    }
    private get_fechaInicio():number{
        return this.fechaInicio;
    }
    private get_fechaFin():number{
        return this.fechaFin;
    }
    private set_fechaInicio(fechaInicio:number){
            this.fechaInicio=fechaInicio;
    }
    private set_fechaFin(fechaFin:number){
            this.fechaFin=fechaFin;
    }
   
}