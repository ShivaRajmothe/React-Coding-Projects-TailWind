const Profile = ({data, setData, errors}) => {
    const {name, email, age} = data;
    const handleChange = (e, item) => {
        setData((prev) => ({...prev, [item]: e.target.value}))
    }
    return <div className="pt-5">
        <div className="mb-4"> 
        <label className="text-gray-700 font-bold mb-2 pr-3" htmlFor="name">Name</label>
        <input type="text" id="name" className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter your name" value={name} onChange={(e) => handleChange(e, "name")} 
        />
        {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
            </div>
            <div className="mb-4"> 
        <label className="text-gray-700 font-bold mb-2 pr-3" htmlFor="email">Email</label>
        <input type="email" id="email" className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter your email" value={email} onChange={(e) => handleChange(e, "email")} />
        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>
            <div className="mb-4"> 
        <label className="text-gray-700 font-bold mb-2 pr-3" htmlFor="age">Age</label>
        <input type="number" id="age" className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter your age" value={age} onChange={(e) => handleChange(e, "age")} />
        {errors.age && <p className="text-red-500 text-sm mt-1">{errors.age}</p>}   
            </div>
       
    </div>
}

export default Profile


