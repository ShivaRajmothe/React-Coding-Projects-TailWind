const Interest = ({data, setData , errors}) => {
    const {interests} = data;

    const handleChange = (e, item) => {
        if(e.target.checked){
            setData((prev) => ({...prev, interests: [...prev.interests, item]}))
        }else{
            setData((prev) => ({...prev, interests: prev.interests.filter(i => i !== item)}))
        }
    }
    return <div className="pt-5 flex flex-col gap-4">
        <label> <input type="checkbox" name="coding" checked={interests.includes("Coding")} onChange={(e) => handleChange(e, "Coding")} />Coding</label>
        <label> <input type="checkbox" name="sports" checked={interests.includes("Sports")} onChange={(e) => handleChange(e, "Sports")} />Sports</label>

        <label> <input type="checkbox" name="travel" checked={interests.includes("Travel")} onChange={(e) => handleChange(e, "Travel")} />Travel</label>
{errors.interests && <p className="text-red-500 text-sm mt-1">{errors.interests}</p>}
    </div>

}

export default Interest


