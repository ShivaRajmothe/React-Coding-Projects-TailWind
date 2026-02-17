import { Data } from "../constants";
import { useState, useEffect } from "react";

export default function ImageSlider() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const previousButton = () => {
        setCurrentIndex(!currentIndex ? Data.length - 1 : currentIndex - 1);
    }

    const nextButton = () => {
        setCurrentIndex(
            (currentIndex + 1) % Data.length
        );
    }

    useEffect(()=>
    {

        const timer = setTimeout(() =>
        {            nextButton();
        }, 5000);

        return () => clearTimeout(timer);   

    }), [currentIndex]; 
    return (
        <> 
        <h4 className="font-bold text-2xl text-center p-3">Image Slider Show</h4>
        <div className="flex justify-center items-center gap-6">
            <button className="font-bold px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-gray-700 transition cursor-pointer" onClick={() => previousButton()}> Previous</button>
            
            <img src={Data[currentIndex]} alt="Slider Image" className="w-[700px] h-[400px] object-contain" />

            <button className="font-bold px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-gray-700 transition cursor-pointer" onClick={() => nextButton()}> Next</button>

        </div>
        </>
    )


}
