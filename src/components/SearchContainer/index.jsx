import { useState } from "react";
import Button from "../Button";
import FilterContainer from "../FilterContainer";
import { LiaFilterSolid } from "react-icons/lia";
import { FaSearch, FaHistory } from "react-icons/fa";
import InputField from "../input-field";

const SearchContainer = () => {
    const [showFilters, setShowFilters] = useState(true);

    const toggleFilters = () => {
        setShowFilters(!showFilters);
    };
    return (
        <nav id="contenido" className="mt-16 flex flex-col">
            <div id="busqueda" className="flex flex-row">
                <InputField
                    className="flex-initial w-64"
                    label="Titulo: "
                    type="text"
                    id="textoBusqueda"
                />
                <Button
                    className="flex-initial w-64"
                    type="button"
                    id="btnBuscar"
                    value="Buscar"
                    label="Buscar"
                    icon={<FaSearch />}
                />
                <Button
                    className="flex-initial w-64"
                    type="button"
                    id="btnHistorial"
                    value="Historial de Búsqueda"
                    label="Historial de búsquedas"
                    icon={<FaHistory />}
                />
                <br />
            </div>
            <div className="flex flex-col mt-4 mx-2">
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
