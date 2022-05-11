export default class Medicina {
   
    public id: string;
    public name: string;
    public caducidad: string;

    constructor(id: string, name: string, caducidad: string) {
        this.id = id
        this.name = name
        this.caducidad = caducidad
    }
}