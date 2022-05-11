type GreetMedicinaProps = {
    name: String,
    caducidad: string
}

export default function Medicina(Props: GreetMedicinaProps){
    return <p> Nombre: {Props.name}, Fecha de caducidad: {Props.caducidad} </p>
}