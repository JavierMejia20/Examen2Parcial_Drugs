import { ChangeEvent, MouseEvent, useState } from "react";
import Medicina from "../Models/Medicina";
import axios from "axios";


export default function UpdatePersonForm() {

    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [laboratory, setLaboratory] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');

    function handleIdChange(event: ChangeEvent<HTMLInputElement>) {
        const newValueForId = event.target.value;
        setId(newValueForId);
    }

    function handleNameChange(event: ChangeEvent<HTMLInputElement>) {
        const newValueForName = event.target.value;
        setName(newValueForName);
    }

    function handleLaboratoryChange(event: ChangeEvent<HTMLInputElement>) {
        const newValueForLaboratory = event.target.value;
        setLaboratory(newValueForLaboratory);
    }
    function handleDescriptionChange(event: ChangeEvent<HTMLInputElement>) {
        const newValueForDescription = event.target.value;
        setDescription(newValueForDescription);
    }
    function handleImageChange(event: ChangeEvent<HTMLInputElement>) {
        const newValueForImage = event.target.value;
        setImage(newValueForImage);
    }

    async function handleUpdate(event: MouseEvent<HTMLButtonElement>){
        event.preventDefault();

        const medicinaToUpdate = new Medicina(id, name, laboratory, description, image);

        console.log('persona actualizada: ', medicinaToUpdate)

        await UpdateMedicina(medicinaToUpdate);

        ClearForm();

        window.alert('Medicina Actualizada!');

        window.location.reload();

    }

    async function UpdateMedicina(medicinaToUpdate: Medicina){
        await axios.put('http://localhost:3001/drugs/', medicinaToUpdate, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }
    function ClearForm(){
        setId('');
        setName('');
        setLaboratory('');
        setDescription('');
        setImage('');
    }

    return (
        <form >
            <input type="text" placeholder="ID" value={id} onChange={handleIdChange} />
            <br />
            <input type="text" placeholder="Name" value={name} onChange={handleNameChange} />
            <br />
            <input type="text" placeholder="Laboratorio" value={laboratory} onChange={handleLaboratoryChange} />
            <br />
            <input type="text" placeholder="Descripción" value={description} onChange={handleDescriptionChange} />
            <br />
            <input type="text" placeholder="Imagen" value={image} onChange={handleImageChange} />
            <br />
            <br />
            <br />
            <button className="Boton" onClick={handleUpdate} >Update</button>
            <br />
        </form>
    );
}