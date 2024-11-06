import PropTypes from 'prop-types';
import Item from "./Item";

const ResultsTable = ({data}) => {
  return(
    <>
        {data?.length ? 
        data.map(itemData => 
          <Item key={itemData.imdbID} itemData={itemData} />
        )
        : null
        }
    </>
  )
}

ResultsTable.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object)
}

export default ResultsTable;