/* eslint-disable react/prop-types */
import PropTypes from "prop-types";

export default function InputField({ label, value, type, id, onChange }) {
    return (
        <div className="">
            <span className="font-medium pr-2">{label}</span>
            <input
                className="border-2 rounded-md text-slate-900"
                type={type}
                id={id}
                value={value}
                onChange={onChange}
            />
        </div>
    );
}

InputField.PropTypes = {
    label: PropTypes.string,
    type: PropTypes.string,
    id: PropTypes.string,
};
