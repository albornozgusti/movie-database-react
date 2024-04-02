import { useState } from "react";
import Button from "../Button";
import FilterContainer from "../FilterContainer";
import {LiaFilterSolid} from "react-icons/lia"

const SearchContainer = () => {

    const [showFilters, setShowFilters] = useState(false);

    const toggleFilters = () => {
        setShowFilters(!showFilters);
    }
    console.log(showFilters);
    return(
        <nav id="contenido" className="mt-16">
            <div id="busqueda">
            <span>Titulo:</span><input type="text" id="textoBusqueda" />
                <Button type="button" id="btnBuscar" value="Buscar" label="Buscar"/>
                <Button type="button" id="btnHistorial" value="Historial de Búsqueda" label="Historial de búsquedas" /><br />
                <Button type="button" id="filtro" label="Filtros" onClick={toggleFilters} icon={<LiaFilterSolid />}/>
                {showFilters && <FilterContainer />}
            </div>
        </nav>
    )
}

export default SearchContainer;