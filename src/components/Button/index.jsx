import PropTypes from "prop-types";

export default function Button({ icon, type, id, label, name, onClick, additionalStyles }) {
    return (
        <button
            className={"flex flex-basis px-2 py-2 mx-1 rounded-lg border border-blue-950 bg-gray-700 hover:bg-gray-500 " + additionalStyles}
            type={type}
            id={id}
            name={name}
            onClick={onClick}
        >
            <div className="m-1">{icon}</div>
            <div>{label}</div>
        </button>
    );
}

Button.propTypes = {
    type: PropTypes.string,
    id: PropTypes.string,
    label: PropTypes.string,
    name: PropTypes.string,
    icon: PropTypes.any,
    onClick: PropTypes.func,
    additionalStyles: PropTypes.string,
};
