const Search = () => {
    return(
        <nav id="contenido">
            <div id="busqueda">
            <span>Titulo:</span><input type="text" id="textoBusqueda" />
                <input type="button" id="btnBuscar" value="Buscar" />
                <input type="button" id="btnHistorial" value="Historial de Búsqueda" /><br />
                <div className="expandible">
                    <input type="checkbox" id="filtro" /><label htmlFor="filtro">Filtros</label><br />
                    <div className="expandible-content">
                        <span>Año de lanzamiento: </span><input type="text" id="lanzamiento" /><br />
                        <span>Tipo: (serie o pelicula) </span><br />
                        <input type="radio" name="filtrops" id="pelicula" value="movie" />Pelicula<br />
                        <input type="radio" name="filtrops" id="serie" value="series" />Serie<br />
                        <input type="button" id="btnLimpiar" value="Limpiar Filtros" /><br />
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Search;