import PropTypes from "prop-types";

export default function Input({ onChange, type, id, label, name, additionalStyles }) {
    return (
        <>
            <input
                className={"px-2 py-2 bg-pink-400" + additionalStyles}
                type={type}
                id={id}
                label={label}
                name={name}
                onChange={onChange}
            />
            <span className="px-2">{label}</span>
        </>
    );
}

Input.propTypes = {
    type: PropTypes.string,
    id: PropTypes.string,
    label: PropTypes.string,
    name: PropTypes.string,
    additionalStyles: PropTypes.string,
    onChange: PropTypes.func
};
