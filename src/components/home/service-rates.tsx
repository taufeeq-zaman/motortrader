import Button from '@components/ui/button';
import { ROUTES } from '@utils/routes';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';


export default function ServiceRates (){

    const router = useRouter();
    const { t } = useTranslation('common');
    function navigateToProductPage() {
        router.push(`${ROUTES.CONTACT}`, undefined, {
          locale: router.locale,
        });
      }
    
    
    return( 
        <div className="bg-gray-100 mb-12 lg:mb-14 xl:mb-16 py-12">
            <div className="flex items-center justify-center -mt-2 pb-0.5 mb-4 md:mb-5 lg:mb-6 2xl:mb-7 3xl:mb-8">
                <h2 className="text-lg md:text-xl lg:text-2xl 2xl:text-3xl xl:leading-10 font-bold text-heading">Service rates</h2>
            </div>
            <div className="flex flex-col md:flex-row gap-y-4 md:gap-x-12 justify-center px-12">
                <div className='py-4 px-4 bg-white rounded-md'>
                    <div className="flex w-full h-full md:w-auto flex-col grow gap-y-2 bg-gray-100 rounded-md py-[28px] px-[28px]">
                        <div className="flex flex-col gap-y-2">
                            <h3 className="text-blacks text-xl font-bold text-center">Buy Token(s)</h3>
                            <p className='text-center'>Token system to buy extra post(s)</p>
                        </div>
                        <div className="flex flex-row justify-center gap-x-20 mt-4">
                            <ul>
                                <li className="py-2 font-bold text-black text-2xl">৳ 90</li>
                                <li className=" text-sm">1 Token</li>
                                <li className='mt-6'>
                                    <Button
                                        onClick={navigateToProductPage}
                                        variant="mtyellow"
                                        className="w-full h-11 md:h-12"
                                    >
                                        {t('Buy')}
                                    </Button>
                                </li>
                            </ul>
                            <ul>
                                <li className="py-2 font-bold text-black text-2xl">৳ 400</li>
                                <li className=" text-sm">5 Tokens</li> 
                                <li className='mt-6'>
                                    <Button
                                        onClick={navigateToProductPage}
                                        variant="mtyellow"
                                        className="w-full h-11 md:h-12"
                                    >
                                        {t('Buy')}
                                    </Button>
                                </li>  
                            </ul>
                            <ul>
                                <li className="py-2 font-bold text-black text-2xl">৳ 750</li>
                                <li className=" text-sm">10 Token</li>
                                <li className='mt-6'>
                                    <Button
                                        onClick={navigateToProductPage}
                                        variant="mtyellow"
                                        className="w-full h-11 md:h-12"
                                    >
                                        {t('Buy')}
                                    </Button>
                                </li>
                            </ul>

                        </div>
                    </div>
                </div>
                <div className='py-4 px-4 bg-white rounded-md'>
                    <div className="flex w-full h-full md:w-auto flex-col grow gap-y-2 bg-gray-100 rounded-md py-[28px] px-[28px]">
                        <div className="flex flex-col gap-y-2">
                            <h3 className="text-blacks text-xl font-bold text-center">Boost a Post(s)</h3>
                            <p className='text-center'>Boost system to publish post on top</p>
                        </div>
                        <div className="flex flex-row justify-center gap-x-20 mt-4">
                            <ul>
                                <li className="py-2 text-lg text-black">Urgent</li>
                                <li className="font-bold text-black text-2xl">৳ 300 </li>
                                <li className="text-sm">7 days validity</li>
                                <li className='mt-6'>
                                    <Button
                                        onClick={navigateToProductPage}
                                        variant="mtyellow"
                                        className="w-full h-11 md:h-12"
                                    >
                                        {t('Buy')}
                                    </Button>
                                </li>
                            </ul>
                            <ul>
                                <li className="py-2 text-lg text-black">MT Bump </li>
                                <li className="font-bold text-black text-2xl">৳ 500 </li>
                                <li className="text-sm">14 days validity</li>
                                <li className='mt-6'>
                                    <Button
                                        onClick={navigateToProductPage}
                                        variant="mtyellow"
                                        className="w-full h-11 md:h-12"
                                    >
                                        {t('Buy')}
                                    </Button>
                                </li>
                            </ul>
                            <ul>
                                <li className="py-2 text-lg text-black">Top MT</li>
                                <li className="font-bold text-black text-2xl">৳ 900</li>
                                <li className="text-sm">1 month validity</li>
                                <li className='mt-6'>
                                    <Button
                                        onClick={navigateToProductPage}
                                        variant="mtyellow"
                                        className="w-full h-11 md:h-12"
                                    >
                                        {t('Buy')}
                                    </Button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='py-4 px-4 bg-white rounded-md'>
                    <div className="flex w-full h-full md:w-auto md:max-w-[363px] flex-col grow justify-between gap-y-2 bg-gray-100 rounded-md py-[28px] px-[28px]">
                        <div className="flex flex-col gap-y-2">
                            <h3 className="text-blacks text-xl font-bold">Contact For Advertisement</h3>
                            <p>Don’t hestiate to ask us something, Our customer support team always ready to 
                                help you, they will support you 24/7.</p>

                        </div>
                        <div>
                            <Button
                                onClick={navigateToProductPage}
                                variant="mtyellow"
                                className="w-full h-11 md:h-12"
                            >
                                {t('Submit A Request')}
                            </Button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );

}
