
const ProductData = ({ productfound }) => {
    return (
        <div className="w-[60%] mx-auto mt-[2%] border rounded-[10px] p-3 px-5 mb-[5%]">
            <div>
                <div className="flex flex-row gap-2 text-[20px]">
                    <p className="text-gray-500">Name&#160;:</p>
                    <h1 className=" font-medium">{productfound.product.generic_name}</h1>
                </div>

                <img src={productfound.product.image_front_url} alt="Img" className="w-[300px] h-[300px] rounded-[10px] my-[2%]" />

                {/* <div className="flex flex-col gap-1">

                    <div className="flex flex-row gap-3 items-center">
                        <p>Fat&#160;:</p>
                        <p>{productfound.product.nutrient_levels.fat}</p>
                    </div>

                    <div className="flex flex-row gap-3 items-center">
                        <p>Salt&#160;:</p>
                        <p>{productfound.product.nutrient_levels.salt}</p>
                    </div>

                    <div className="flex flex-row gap-3 items-center">
                        <p>Saturated&#160;Fat&#160;:</p>
                        <p>{productfound.product.nutrient_levels.saturated - fat}</p>
                    </div>

                    <div className="flex flex-row gap-3 items-center">
                        <p>Sugars&#160;:</p>
                        <p>{productfound.product.nutrient_levels.sugars}</p>
                    </div>

                </div> */}
            </div>
        </div>
    )
}

export default ProductData;