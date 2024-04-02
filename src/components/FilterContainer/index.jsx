import Input from "../Input";
import Button from "../Button";

export default function FilterContainer() {
    return (
        <div className="expandible">
            
            <label htmlFor="filtro">Filtros</label>
            <br />
            <div className="expandible-content">
                <span>Año de lanzamiento: </span>
                <input type="text" id="lanzamiento" />
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
                    type="button"
                    id="btnLimpiar"
                    value="Limpiar Filtros"
                    label="Limpiar Filtros"
                />
                <br />
            </div>
        </div>
    );
}
