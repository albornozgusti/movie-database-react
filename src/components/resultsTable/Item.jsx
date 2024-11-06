import PropTypes from "prop-types";
import Button from "../Button";

const Item = ({itemData}) =>{
  const {
    Poster,
    Title,
    Type,
    Year,
    imdbID
  } = itemData;
  return(
    <div className="flex flex-row mx-6 my-6 max-w-md border-solid border-2 p-2 grow place-content-around content-center">
      <img className="max-w-48 max-h-48" src={Poster}/>
      <div className="flex flex-col text-xl mx-1">
        <p className="my-1">Titulo:{Title}</p>
        <p className="my-1">Año de lanzamiento: {Year}</p>
        <p className="my-1">Tipo: {Type}</p>
        <Button label="Ver mas" />
      </div>
    </div>
  );
}

Item.propTypes = {
  itemData: PropTypes.object.isRequired
}

export default Item;