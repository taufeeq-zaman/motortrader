


export default function ServiceRates ({

}){
    return( 
        <div className="bg-gray-100 mb-12 lg:mb-14 xl:mb-16 py-12">
            <div className="flex items-center justify-center -mt-2 pb-0.5 mb-4 md:mb-5 lg:mb-6 2xl:mb-7 3xl:mb-8">
                <h2 className="text-lg md:text-xl lg:text-2xl 2xl:text-3xl xl:leading-10 font-bold text-heading">Service rates</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-y-4 md:gap-x-4 justify-items-center">
                <div className="flex w-full md:w-auto flex-col gap-y-2 bg-white py-[35px] px-[28px]">
                    <div>
                        <span className="icon fa fa-tags"></span>
                    </div>
                    <div className="flex flex-col gap-y-2">
                        <h3 className="text-blacks text-xl font-bold">Buy Token(s)</h3>
                        <p>Token system to buy extra post(s)</p>
                    </div>
                    <div>
                        <table className="table-auto">
                            <tbody> 
                                <tr>
                                    <td className="py-2">1 Token</td>
                                    <td className="py-2 pl-8">90 Taka</td>
                                </tr>
                                <tr>
                                    <td className="py-2">5 Tokens</td>
                                    <td className="py-2 pl-8">400 Taka</td>
                                </tr>
                                <tr>
                                    <td className="py-2">10 Token</td>
                                    <td className="py-2 pl-8">750 Taka</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="flex w-full md:w-auto flex-col gap-y-2 bg-white py-[35px] px-[28px]">
                    <div>
                        <span className="icon fa fa-thumb-tack"></span>
                    </div>
                    <div className="flex flex-col gap-y-2">
                        <h3 className="text-blacks text-xl font-bold">Boost a Post(s)</h3>
                        <p>Boost system to publish post on top</p>
                    </div>
                    <div>
                        <table>
                            <tbody> 
                                <tr>
                                    <td className="py-2">“Urgent” 7 days validity</td>
                                    <td className="py-2 pl-8"> 	300 Taka</td>
                                </tr>
                                <tr>
                                    <td className="py-2">“MT Bump” 14 days validity</td>
                                    <td className="py-2 pl-8"> 	500 Taka</td>
                                </tr>
                                <tr>
                                    <td className="py-2">“Top MT” 1 month validity</td>
                                    <td className="py-2 pl-8"> 	900 Taka</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="flex w-full md:w-auto md:max-w-[363px] flex-col gap-y-2 bg-white py-[35px] px-[28px]">
                    <div>
                        <span className="icon fa fa-tags"></span>
                    </div>
                    <div className="flex flex-col gap-y-2">
                        <h3 className="text-blacks text-xl font-bold">Contact For Advertisement</h3>
                        <p>Don’t hestiate to ask us something, Our customer support team always ready to 
                            help you, they will support you 24/7.</p>
                    </div>
                    <div>

                    </div>
                </div>
            </div>
        </div>
    )
}
