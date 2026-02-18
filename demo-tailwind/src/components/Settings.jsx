const Settings = ({data, setData}) => {
    const {theme} = data;
    return <div className="pt-5">
        <label> <input type="radio" name="theme" checked={theme === "dark"} onChange={() => setData({...data, theme: "dark"})} />Dark Mode</label>
        <label> <input type="radio" name="theme" checked={theme === "light"} onChange={() => setData({...data, theme: "light"})} />Light Mode</label>
    </div>
}

export default Settings


