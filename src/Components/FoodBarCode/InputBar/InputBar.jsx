import { useState } from "react";
import ProductData from "../ProductData/ProductData";

const InputBar = () => {
    const [input, setInput] = useState("");
    const handleInput = (input) => {
        setInput(input);
    }

    const [productfound, setProductFound] = useState("");
    const [clicked, setClicked] = useState(false);

    const Clicked = async () => {
        setClicked(true);
        const response = await fetch(` https://world.openfoodfacts.org/api/v2/product/${input}.json`);
        const Data = await response.json();
        setProductFound(Data.product);

        console.log(Data.product);
    }

   

    return (
        <div className="rounded-[10px] w-[50%] sm:w-[95%] sm:mt-[24%] mt-[4%] p-3 px-5 mb-[5%] mx-auto">
            <div >

                <label htmlFor="barcode" className=" font-medium uppercase sm:text-[15px]">Enter&#160;Barcode&#160;:</label><br />

                <div className="flex flex-row justify-start gap-3 py-3">

                    <input type="text" placeholder="Enter your barcode" className=" focus:outline-none border w-[75%] text-[17px] p-3 rounded-[10px]" onChange={(e) => { handleInput(e.target.value) }} value={input} />

                    <button className="p-2 w-[22%] text-white bg-black font-medium text-[16px] rounded-[10px]" onClick={() => Clicked()}>Search</button>

                </div>
            </div>

           {
            productfound && <ProductData productfound={productfound}/> 
           }
           {
            productfound === undefined && 
            <div className="my-[4%] text-[18px] font-medium">
                <p>Product Not Found</p>
            </div>
           }

        </div>
    )
}

export default InputBar;