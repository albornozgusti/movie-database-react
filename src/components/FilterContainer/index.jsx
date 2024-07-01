import { useState } from "react";
import Input from "../Input";
import Button from "../Button";
import InputField from "../input-field";

export default function FilterContainer() {
    const [filters, setFilters] = useState({
        releaseYear: '',
        type: ''
    });
    return (
        <div className="px-4 mx-4 rounded-b-lg bg-slate-800">
            
            <div>
                <br/>
                <InputField label="Año de lanzamiento: " type="text" id="lanzamiento"/>
                <br />
                <span>Tipo: (serie o pelicula) </span>
                <br />
                <Input
                    type="radio"
                    name="filtrops"
                    id="pelicula"
                    value="movie"
                    label="Pelicula"
                />
                <br />
                <Input
                    type="radio"
                    name="filtrops"
                    id="serie"
                    value="series"
                    label="Serie"
                />
                <br />
                <br />
                <Button
                    additionalStyles="mt-3"
                    type="button"
                    id="btnLimpiar"
                    value="Limpiar Filtros"
                    label="Limpiar Filtros"
                    onClick={() => setFilters({
                        releaseYear: '',
                        type: ''
                    })}
                />
                <br />
            </div>
        </div>
    );
}
