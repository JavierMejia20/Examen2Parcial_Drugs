export default class Medicina {
   
    public id: string;
    public name: string;
    public laboratory: string;
    public description: string;
    public image: string;

    constructor(id: string, name: string, laboratory: string, description: string, image: string) {
        this.id = id
        this.name = name
        this.laboratory = laboratory
        this.description = description
        this.image = image
    }
}