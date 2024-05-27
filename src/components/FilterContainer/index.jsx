import { useState } from "react";
import Input from "../Input";
import Button from "../Button";

export default function FilterContainer() {
    const [filters, setFilters] = useState({
        releaseYear: '',
        type: ''
    });
    return (
        <div className="px-8 mx-3 rounded-b-lg border border-blue-950 bg-gray-700">
            <div id="expandible-content" className="my-4">
                <span>Año de lanzamiento: </span>
                <input type="text" id="lanzamiento" className="mx-2"/>
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
