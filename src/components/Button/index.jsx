import PropTypes from "prop-types";

export default function Button({icon, type, id, label, name, onClick }) {
    return (
        <button
            className="px-2 py-2 mx-1 rounded-lg border border-blue-950 bg-gray-400 hover:bg-gray-50"
            type={type}
            id={id}
            label={label}
            name={name}
            onClick={onClick}
        >
            {icon}{label}
        </button>
    );
}

Button.propTypes = {
    type: PropTypes.string,
    id: PropTypes.string,
    label: PropTypes.string,
    name: PropTypes.string,
};
