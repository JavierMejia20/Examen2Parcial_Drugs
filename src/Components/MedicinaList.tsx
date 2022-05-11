import { useEffect, useState} from 'react';

import Medicina from '../Models/Medicina';
import GreetPerson from './NiceMedicina'
import axios from 'axios';

export default function MedicinaList () {
    
    const [medicinas, setmedicinas] = useState<Medicina[]>([]);
    const [loaded, setLoaded] = useState<boolean>(false);

    async function loadmedicinas() {
        const response = await axios.get('http://localhost:3001/medicinas');
        setmedicinas(
          response.data.map((p: Medicina) => new Medicina(p.id, p.name, p.caducidad))
        );
        setLoaded(true);
    }

    useEffect(() => {
        if (!loaded) {
         loadmedicinas();
      }
    }, [medicinas, loaded]);

    const rendermedicinas = () => medicinas.map(p => (
        <div>
        <GreetPerson 
            key={p.id} 
            name={p.name} 
            caducidad={p.caducidad}
        />
        </div>
    ));

    return (
        <div>
            <div className="objetos">
            <h1 className="titulo">Lista de medicinas</h1>
                <div className="cajita">
                    {rendermedicinas()}
                </div>
            </div>
        </div>
    );
}
