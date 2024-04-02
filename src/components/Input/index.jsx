import PropTypes from "prop-types";

export default function Input({ type, id, label, name }) {
    return (
        <input
            className="px-2 py-2 bg-pink-400"
            type={type}
            id={id}
            label={label}
            name={name}
        />
    );
}

Input.propTypes = {
    type: PropTypes.string,
    id: PropTypes.string,
    label: PropTypes.string,
    name: PropTypes.string,
};
