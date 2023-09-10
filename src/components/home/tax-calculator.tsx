



export default function TaxCalculator({

}){
    return( 
        <div className="mb-12 lg:mb-14 xl:mb-16">
            <h2 className="bg-mtyellow text-lg text-blacks font-bold py-[10px] px-[20px]">Tax Calculator</h2>
            <div>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-y-4 md:gap-x-4 py-[25px] px-[18px] bg-gray-100">
                    <div className="flex flex-col gap-y-2">
                        <label htmlFor="type">Type</label>
                        <select name="type" id="" className="h-[45] text-sm py-2.5 px-5 bg-white text-gray-400 border border-blacks">
                            <option value="type">Select car type</option>
                        </select>
                    </div>
                    <div className="flex flex-col gap-y-2">
                    <label htmlFor="capacity">Engine Capacity</label>
                        <select name="capacity" id="" className="h-[45] text-sm py-2.5 px-5 bg-white text-gray-400 border border-blacks">
                            <option value="type">Select engine capacity</option>
                        </select>
                    </div>
                    <div className="flex flex-col gap-y-2">
                        <label htmlFor="">Amount of tax in taka(tk)</label>
                        <p className="text-lg text-blacks font-bold">0 tk</p>
                    </div>
                </div>
            </div>
        </div>
    )
}