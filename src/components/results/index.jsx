import PropTypes from "prop-types";

import ResultsTable from '../resultsTable';

const Results = ({ results }) => {
    return (
        <section id="resultados" className="my-1 py-1">
            <h1>Aqui se mostrarian los resultados de la Busqueda</h1>
            <h1>para acceder a los detalles, haga click/tap en la pelicula</h1>
            <ResultsTable />
        </section>
    )
}

Results.propTypes = {
  results: PropTypes.arrayOf(PropTypes.object)
}

export default Results;