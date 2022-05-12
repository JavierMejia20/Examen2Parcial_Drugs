type GreetMedicinaProps = {
    name: String,
    laboratory: string,
    description: string,
    image: string,

}

export default function Medicina(Props: GreetMedicinaProps){
    return(
        <div>
            <br />
            <p> Nombre: {Props.name}, Laboratorio: {Props.laboratory}, Descripción: {Props.description}, Imagen: {Props.image} </p>
            
        </div>
    )
    
}