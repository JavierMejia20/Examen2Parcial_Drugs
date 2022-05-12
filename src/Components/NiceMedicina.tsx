type GreetMedicinaProps = {
    name: String,
    laboratory: string,
    description: string,
    image: string,

}

export default function Medicina(Props: GreetMedicinaProps){
    return <p> Nombre: {Props.name}, Laboratorio: {Props.laboratory}, Descripción: {Props.description}, Imagen: {Props.image} </p>
}