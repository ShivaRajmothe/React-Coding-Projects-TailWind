import Profile from "./Profile";
import Interest from "./Interest";
import Settings from "./Settings";
import { useState } from "react";

const TabForm =() => {
    const [activeTab, setActiveTab] = useState(0);
    const [errors, setErrors] = useState({});
    const[data, setData] = useState({
        name: "Shivaraj",
        email: "shivaraj@example.com",
        age: "25",
        interests: ["Coding", "Sports", "Travel"],
       theme: "light"
    })

  const tabs = [
    
    {name: "Profile", component: Profile, validate: () => {
      const err ={};
      if(!data.name || data.name.length < 2){
      err.name = "Name must be at least 2 characters long";
      }
      if(!data.email || !/\S+@\S+\.\S+/.test(data.email)){
        err.email = "Invalid email address";
      }
      if(!data.age || isNaN(data.age) || data.age < 18){
        err.age = "Age must be a number and at least 18";
      }
      setErrors(err);
      return err.name || err.email || err.age ? false : true;
    }},

    {name: "Interest", component: Interest, validate: () => {
      const err ={};
      if(!data.interests || data.interests.length === 0){
        err.interests = "Please select at least one interest";
      }
      setErrors(err);
      return err.interests ? false : true;
    }},

    {name: "Settings", component: Settings , validate: () => {
      const err ={};
      if(!data.theme){
        err.theme = "Please select a theme";
      }
      setErrors(err);
      return err.theme ? false : true;
    }}
  ];
  const ActiveComponent = tabs[activeTab].component;

  const handleNext = () => {
    if(tabs[activeTab].validate()){
        setActiveTab((prev) => prev + 1);
    }  
  }

  const handlePrevious = () => {
   if(tabs[activeTab].validate()){
        setActiveTab((prev) => prev - 1);
    }
  }
  const handleSave = () => {
    console.log(data);
  }
  return (
   <div className="w-full max-w-2xl mx-auto mt-10">
    <div className="flex border-b border-gray-200  rounded-t-lg shadow-sm">
       {
        tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`flex-1 py-3 px-6 text-center font-medium transition-all duration-300 ease-in-out ${
              activeTab === index
                ? 'text-blue-600 border-b-2 border-blue-600 bg-blue-50'
                : 'text-gray-600 hover:text-gray-800 hover:bg-gray-50'
            }`}
          >
            {tab.name}
          </button>
        ))
       }
    </div>
    <div className="w-full h-[400px] p-6 border border-t-0 border-gray-200 bg-white rounded-b-lg shadow-sm">
        <ActiveComponent data={data} setData={setData} errors={errors}/>
    </div>
{activeTab > 0 && (
      <div className="p-4 text-center"> 
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handlePrevious}>
            Previous
        </button>
      </div>
    )}
    {activeTab < tabs.length - 1 && (
      <div className="p-4 text-center"> 
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleNext}>
            Next
        </button>
      </div>
    )}
    {activeTab === tabs.length - 1 && (
      <div className="p-4 text-center"> 
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleSave}>
            Save Changes
        </button>
      </div>
    )}
   </div>
   
  );
}   

export default TabForm