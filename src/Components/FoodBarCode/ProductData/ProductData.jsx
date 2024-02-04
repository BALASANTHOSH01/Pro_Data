
const ProductData = ({ productfound }) => {
    return (
        <div className=" mx-auto mt-[2%] border rounded-[10px] px-2 mb-[5%]">
            <img src={productfound.image_url} alt="ProductImg" className="w-[50%] mx-auto max-h-[250px] min-h-[200px] my-[2%]" />

            <div className="flex flex-col gap-2 bg-white mt-[4%] rounded-[10px] p-3 px-5">

                <div className="flex flex-row gap-2 text-[18px]">
                    <p className="text-gray-500">Code&#160;:</p>
                    <p>{productfound.code}</p>
                </div>
                <div className="flex flex-row gap-2 text-[18px]">
                    <p className="text-gray-500">Name&#160;:</p>
                    <p className=" font-medium">{productfound.product_name}</p>
                </div>
                <div className="flex flex-row gap-2 text-[18px]">
                    <p className="text-gray-500">Brand&#160;:</p>
                    <p className=" font-medium">{productfound.brands}</p>
                </div>

                {
                    productfound.origins &&
                    <div className="flex flex-row gap-2 text-[18px]">
                        <p className="text-gray-500">Origin&#160;:</p>
                        <p className=" font-medium">{productfound.origins}</p>
                    </div>
                }


                <h1 className="text-[18px] text-gray-500">Nutrients&#160;Level&#160;:</h1>
                <div className=" ml-[5%] flex flex-col gap-1">

                    {
                        productfound.nutriments.fat &&
                        <div className="flex flex-row gap-2 text-[18px]">
                            <p className="text-gray-500">Fat&#160;:</p>
                            <p className=" font-medium">{productfound.nutriments.fat.toFixed(1)}&#160;g</p>
                        </div>
                    }

                    {
                        productfound.nutriments.carbohydrates &&
                        <div className="flex flex-row gap-2 text-[18px]">
                            <p className="text-gray-500">Carbohydrates&#160;:</p>
                            <p className=" font-medium">{productfound.nutriments.carbohydrates.toFixed(1)}&#160;g</p>
                        </div>
                    }

                    {
                        productfound.nutriments.proteins &&
                        <div className="flex flex-row gap-2 text-[18px]">
                            <p className="text-gray-500">Proteins&#160;:</p>
                            <p className=" font-medium">{productfound.nutriments.proteins.toFixed(1)}&#160;g</p>
                        </div>
                    }

                    {
                        productfound.nutriments.salt &&
                        <div className="flex flex-row gap-2 text-[18px]">
                            <p className="text-gray-500">Salt&#160;:</p>
                            <p className=" font-medium">{productfound.nutriments.salt.toFixed(1)}&#160;g</p>
                        </div>
                    }

                    {
                        productfound.nutriments.sugars &&
                        <div className="flex flex-row gap-2 text-[18px]">
                            <p className="text-gray-500">Sugar&#160;:</p>
                            <p className=" font-medium">{productfound.nutriments.sugars.toFixed(1)}&#160;g</p>
                        </div>
                    }

                </div>
            </div>
        </div>
    )
}

export default ProductData;