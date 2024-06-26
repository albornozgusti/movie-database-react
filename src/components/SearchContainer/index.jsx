import PropTypes from 'prop-types';
import { useEffect, useState } from "react";
import Button from "../Button";
import FilterContainer from "../FilterContainer";
import { LiaFilterSolid } from "react-icons/lia";
import { FaSearch, FaHistory } from "react-icons/fa";
import InputField from "../input-field";

const SearchContainer = ({searchParams, setSearchParams, setResults}) => {
    const [showFilters, setShowFilters] = useState(true);

    console.log(searchParams)
    const {title, releaseYear, type} = searchParams;
    const toggleFilters = () => {
        setShowFilters(!showFilters);
    };

    const handleChange = (target) => {
        const {id, value} = target;
        setSearchParams({
            ...searchParams,
            [id]: value
        })
    }

    return (
        <nav id="contenido" className="mt-16 px-2 flex flex-col">
            <div id="busqueda" className="flex flex-row">
                <InputField
                    className="flex-initial w-64"
                    label="Titulo: "
                    type="text"
                    id="title"
                    onChange={e=>handleChange(e.target)}
                />
                <Button
                    className="flex-initial w-64"
                    type="button"
                    id="btnBuscar"
                    value="Buscar"
                    label="Buscar"
                    icon={<FaSearch />}
                    onClick={() => console.log('presione buscar')}
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
                {showFilters && <FilterContainer searchParams={searchParams} setSearchParams={setSearchParams}/>}
            </div>
        </nav>
    );
};

SearchContainer.propTypes = {
    searchParams: PropTypes.shape({
        title: PropTypes.string,
        releaseYear: PropTypes.string,
        type: PropTypes.string    
    }),
    setSearchParams: PropTypes.func,
    setResults: PropTypes.func,
    
}

export default SearchContainer;
