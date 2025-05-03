import { Link } from "react-router-dom";

export default function Header() {
    return (
        <div className="bg-gray-800 text-white py-4 px-6 fixed top-0 w-full z-50">
          <Link to="/" className="py-5 text-2xl font-bold">
                Gustalb MDB
          </Link>
        </div>
    );
}
