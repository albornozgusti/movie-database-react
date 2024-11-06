import PropTypes from "prop-types";

import ResultsTable from '../resultsTable';

const Results = ({ results }) => {
    return (
      <>
            <p>Aqui se mostrarian los resultados de la Busqueda</p>
            <p>para acceder a los detalles, haga click/tap en la pelicula</p>
        <section id="resultados" className="flex flex-row flex-wrap my-1 py-1 bg-slate-600">
            <ResultsTable data={results.Search}/>
        </section>
      </>
    )
}

Results.propTypes = {
  results: PropTypes.object
}

export default Results;