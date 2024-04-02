export default function InputField({label, type, id}) {
    return (
        <div className="m-2 ">
            <span className="font-medium">{label}</span>
            <input className="border-2 border-gray-500 rounded-md" type={type} id={id} />
        </div>
    );
}
