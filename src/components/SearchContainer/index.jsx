import { useState } from "react";
import Button from "../Button";
import FilterContainer from "../FilterContainer";
import { LiaFilterSolid } from "react-icons/lia";
import { FaSearch, FaHistory } from "react-icons/fa";
import InputField from "../InputField";

const SearchContainer = () => {
    const [showFilters, setShowFilters] = useState(false);

    const toggleFilters = () => {
        setShowFilters(!showFilters);
    };
    console.log(showFilters);
    return (
        <nav id="contenido" className="mt-16">
            <div id="busqueda">
                <InputField label="Titulo: " type="text" id="textoBusqueda"/>
                <Button
                    type="button"
                    id="btnBuscar"
                    value="Buscar"
                    label="Buscar"
                    icon={<FaSearch />}
                />
                <Button
                    type="button"
                    id="btnHistorial"
                    value="Historial de Búsqueda"
                    label="Historial de búsquedas"
                    icon={<FaHistory />}
                />
                <br />
                <Button
                    type="button"
                    id="filtro"
                    label="Filtros"
                    onClick={toggleFilters}
                    icon={<LiaFilterSolid />}
                />
                {showFilters && <FilterContainer />}
            </div>
        </nav>
    );
};

export default SearchContainer;
