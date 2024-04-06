/* eslint-disable react/prop-types */
import PropTypes from "prop-types";

export default function InputField({ label, type, id }) {
    return (
        <div className="m-2 ">
            <span className="font-medium">{label}</span>
            <input
                className="border-2 border-gray-500 rounded-md"
                type={type}
                id={id}
            />
        </div>
    );
}

InputField.PropTypes = {
    label: PropTypes.string,
    type: PropTypes.string,
    id: PropTypes.string,
};
