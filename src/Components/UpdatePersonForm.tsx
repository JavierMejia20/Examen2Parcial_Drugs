import { ChangeEvent, MouseEvent, useState } from "react";
import Medicina from "../Models/Medicina";
import axios from "axios";

export default function UpdatePersonForm() {

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

    async function handleUpdate(event: MouseEvent<HTMLButtonElement>){
        event.preventDefault();

        const medicinaToUpdate = new Medicina(id, name, caducidad);

        console.log('persona actualizada: ', medicinaToUpdate)

        await UpdateMedicina(medicinaToUpdate);

        ClearForm();

        window.alert('Medicina Actualizada!');

        window.location.reload();

    }

    async function UpdateMedicina(medicinaToUpdate: Medicina){
        await axios.put('http://localhost:3001/medicina', medicinaToUpdate, {
            headers: {
                'Content-Type': 'application/json'
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
            <button className="Boton" onClick={handleUpdate} >Update</button>
            <br />
        </form>
    );
}