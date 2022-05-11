import { ChangeEvent, MouseEvent, useState } from "react";
import Medicina from "../Models/Medicina";
import axios from "axios";

export default function CreateMedicinaForm() {

    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [caducidad, setcaducidad] = useState('');

    function handleIdChange(event: ChangeEvent<HTMLInputElement>) {
        const newValueForId = event.target.value;
        setId(newValueForId);
    }

    function handleNameChange(event: ChangeEvent<HTMLInputElement>) {
        const newValueForName = event.target.value;
        setName(newValueForName);
    }

    function handlecaducidadChange(event: ChangeEvent<HTMLInputElement>) {
        const newValueForcaducidad = event.target.value;
        setcaducidad(newValueForcaducidad);
    }

    async function handleSave(event: MouseEvent<HTMLButtonElement>){
        event.preventDefault();

        const MedicinaToCreate = new Medicina(id, name, caducidad);

        console.log('Medicinaa creada: ', MedicinaToCreate)

        await CreateMedicina(MedicinaToCreate);

        ClearForm();

        window.alert('Medicina Created!');

        window.location.reload();

    }

    async function CreateMedicina(MedicinaToCreate: Medicina){
        await axios.post('http://localhost:3001/medicina', MedicinaToCreate, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }

    async function handleDelete(event: MouseEvent<HTMLButtonElement>){
        event.preventDefault();

        console.log('Medicinaa eliminada: ', id)

        await DeleteMedicina(id);

        ClearForm();

        window.alert('Medicina Eliminada!');

        window.location.reload();

    }

    async function DeleteMedicina(id: string){
        await axios.delete('http://localhost:3001/medicina/'+ id, {
            headers: {
                'Content-Type': 'Access-Control-Allow-Origin'
            }
        });
    }

    function ClearForm(){
        setId('');
        setName('');
        setcaducidad('');
    }

    return (
        <form >
            <input type="text" placeholder="ID" value={id} onChange={handleIdChange} />
            <br />
            <input type="text" placeholder="Name" value={name} onChange={handleNameChange} />
            <br />
            <input type="text" placeholder="caducidad" value={caducidad} onChange={handlecaducidadChange} />
            <br />
            <br />
            <button className="Boton" onClick={handleSave} >Save</button>
            <button className="Boton" onClick={handleDelete} >Delete</button>
            <br />
        </form>
    );
}