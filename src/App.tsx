import React from 'react';
import './App.css';
import MedicinaList from './Components/MedicinaList';
import CreatePersonForm from './Components/CreateMedicinaForm';
import UpdatePersonForm from './Components/UpdatePersonForm';

    
    function App() {
      return (
        <div className="App">      
            <div className="contenido-principal">
              <div className="formulario" >
              <h1 className="titulo">Formularios</h1>

                <div className="cajita2">

                <br/>
                <CreatePersonForm />
                <br/>
                <hr />
                <br/>

                <h1>Actualizar</h1>
                <br/>
                <UpdatePersonForm /> 
                <br/>
                <hr />

                </div>
            </div>


            <div>
              <MedicinaList />
            </div>
          </div>
        </div>
      );
    }

export default App;
