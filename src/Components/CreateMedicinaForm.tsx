import { ChangeEvent, MouseEvent, useState } from "react";
import Medicina from "../Models/Medicina";
import axios from "axios";


export default function CreateMedicinaForm() {

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
    async function handleSave(event: MouseEvent<HTMLButtonElement>){
        event.preventDefault();

        const MedicinaToCreate = new Medicina(id, name, laboratory, description, image);

        console.log('Medicinaa creada: ', MedicinaToCreate)

        await CreateMedicina(MedicinaToCreate);

        ClearForm();

        window.alert('Medicina Created!');

        window.location.reload();

    }

    async function CreateMedicina(MedicinaToCreate: Medicina){
        await axios.post('http://localhost:3001/drugs/', MedicinaToCreate, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }

    async function handleDelete(event: MouseEvent<HTMLButtonElement>){
        event.preventDefault();

        console.log('Medicina eliminada: ', id)

        await DeleteMedicina(id);

        ClearForm();

        window.alert('Medicina Eliminada!');

        window.location.reload();

    }

    async function DeleteMedicina(id: string){
        await axios.delete('http://localhost:3001/drugs/'+ id, {
            headers: {
                'Content-Type': 'Access-Control-Allow-Origin'
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
            <input type="text" placeholder="Nombre" value={name} onChange={handleNameChange} />
            <br />
            <input type="text" placeholder="Laboratorio" value={laboratory} onChange={handleLaboratoryChange} />
            <br />
            <input type="text" placeholder="Descripción" value={description} onChange={handleDescriptionChange} />
            <br />
            <input type="text" placeholder="Imagen" value={image} onChange={handleImageChange} />
            <br />
            <br />
            <button className="Boton" onClick={handleSave} >Save</button>
            <button className="Boton" onClick={handleDelete} >Delete</button>
            <br />
        </form>
    );
}