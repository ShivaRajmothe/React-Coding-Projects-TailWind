import { useState } from "react";

const Header = (props) => {
    const[name, setName] = useState("Shiva"); // state variable to store the name

    return (
        <div>
            <h1 className="text-3xl font-bold text-center p-4">Welcome, {name} from {props.country}</h1>
            <div className="flex justify-center">
                <button className="font-bold px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-gray-700 transition cursor-pointer" onClick={() => setName("OM")}>Change Name</button>
            </div>
        </div>
    )
}

export default Header;