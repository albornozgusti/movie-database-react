import { useState } from "react";
import Input from "../Input";
import Button from "../Button";
import InputField from "../input-field";

export default function FilterContainer({searchParams, setSearchParams}) {
    
    const {releaseYear, type} = searchParams;
    
    const handleClick = () =>{
        setSearchParams({
            ...searchParams,
            releaseYear: '',
            type: ''
        })
    }

    const handleChange = (target) => {
        const {id, value} = target;
        setSearchParams({
            ...searchParams,
            [id]: value
        })
    }
    return (
        <div className="px-4 mx-4 rounded-b-lg bg-slate-800">
            <div>
                <br/>
                <InputField
                    label="Año de lanzamiento: " 
                    type="text" 
                    id="releaseYear"
                    value={releaseYear}
                    onChange={e=>handleChange(e.target)}
                    />
                <br />
                <span>Tipo: (serie o pelicula) </span>
                <br />
                <Input
                    type="radio"
                    name="type"
                    id="pelicula"
                    value="movie"
                    label="Pelicula"
                />
                <br />
                <Input
                    type="radio"
                    name="type"
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
                    onClick={() => handleClick()}
                />
                <br />
            </div>
        </div>
    );
}
