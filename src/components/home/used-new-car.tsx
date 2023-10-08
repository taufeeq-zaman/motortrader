

export default function UsedNewCar({

}){
    return(
        <div className="mb-12 lg:mb-14 xl:mb-16">
            <ul className="flex flex-row">
                <li className="bg-blacks cursor-pointer text-white hover:text-blacks hover:bg-mtyellow text-xs uppercase font-bold py-[9px] px-[27px]">
                    Used Cars
                </li>
                <li className="bg-blacks cursor-pointer text-white hover:text-blacks hover:bg-mtyellow text-xs uppercase font-bold py-[9px] px-[27px]">
                    New Cars
                </li>
            </ul>
            <div className="shadow-tab">
                <div id="usedcar" className="flex flex-col md:flex-row gap-y-4 md:gap-x-4 py-[38px] px-[30px] bg-white">
                    <div>
                        <select name="" id="brand" className="h-[45px] w-full text-sm py-2.5 px-5 text-gray-400 border border-blacks">
                            <option value="one">Any Brand</option>
                        </select>
                    </div>
                    <div>
                        <select name="" id="model" className="h-[45px] w-full text-sm py-2.5 px-5 text-gray-400 border border-blacks">
                            <option value="one">Any Model</option>
                        </select>
                    </div>
                    <div>
                        <select name="" id="price" className="h-[45px] w-full text-sm py-2.5 px-5 text-gray-400 border border-blacks">
                            <option value="one">Any price</option>
                        </select>
                    </div>
                    <div>
                        <select name="" id="mileage" className="h-[45px] w-full text-sm py-2.5 px-5 text-gray-400 border border-blacks">
                            <option value="one">Any Mileage</option>
                        </select>
                    </div>
                    <div>
                        <select name="" id="location" className="h-[45px] w-full text-sm py-2.5 px-5 text-gray-400 border border-blacks">
                            <option value="one">Any Location</option>
                        </select>
                    </div>
                    <div>
                    <button className="h-[45px] text-sm bg-mtyellow text-black font-bold w-[127px] border-2 border-mtyellow hover:border-blacks hover:bg-white">Search</button>
                    </div>
                </div>
                <div id="newcar" className=" flex-row hidden gap-x-2 py-[38px] px-[30px] bg-white">
                    <div>
                        <select name="" id="brand" className="h-[45px] w-full text-sm py-2.5 px-5 text-gray-400 border border-blacks">
                            <option value="one">one</option>
                        </select>
                    </div>
                    <div>
                        <select name="" id="model" className="h-[45px] w-full text-sm py-2.5 px-5 text-gray-400 border border-blacks">
                            <option value="one">one</option>
                        </select>
                    </div>
                    <div>
                        <select name="" id="price" className="h-[45px] w-full text-sm py-2.5 px-5 text-gray-400 border border-blacks">
                            <option value="one">one</option>
                        </select>
                    </div>
                    <div>
                        <select name="" id="mileage" className="h-[45px] w-full text-sm py-2.5 px-5 text-gray-400 border border-blacks">
                            <option value="one">one</option>
                        </select>
                    </div>
                    <div>
                        <select name="" id="location" className="h-[45px] w-full text-sm py-2.5 px-5 text-gray-400 border border-blacks">
                            <option value="one">one</option>
                        </select>
                    </div>
                    <div>
                        <button className="h-[45px] text-sm bg-mtyellow text-black font-bold w-[127px] border-2 border-mtyellow hover:border-blacks hover:bg-white">Search</button>
                    </div>
                </div>
            </div>
        </div>
    )
}