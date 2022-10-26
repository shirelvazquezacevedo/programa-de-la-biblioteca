export class prestamo{
    private inicio:number=0;
    private fin:number=0;
    constructor(inicio:number,fin:number)
    {
        this.inicio=inicio;
        this.fin=fin;
    }
    private get_inicio():number{

        
        return this.inicio;
    }
    private get_fin():number{
        return this.fin;
    }

    private set_inicio(inicio:number){
        this.inicio=inicio;
    }
    private set_fin(fin:number){
        this.fin=fin;
    }

}