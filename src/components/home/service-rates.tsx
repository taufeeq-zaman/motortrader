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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-y-4 md:gap-x-4 justify-items-center">
                <div className="flex w-full md:w-auto flex-col gap-y-2 bg-white py-[35px] px-[28px]">
                    <div>
                        <span className="icon fa fa-tags"></span>
                    </div>
                    <div className="flex flex-col gap-y-2">
                        <h3 className="text-blacks text-xl font-bold">Buy Token(s)</h3>
                        <p>Token system to buy extra post(s)</p>
                    </div>
                    <div className="flex flex-row gap-x-20">
                        <ul>
                            <li className="py-2 text-sm">1 Token</li>
                            <li className="py-2 font-bold text-xl">90 Taka</li>
                        </ul>
                        <ul>
                            <li className="py-2 text-sm">5 Tokens</li>
                            <li className="py-2 font-bold text-xl">400 Taka</li>
                        </ul>
                        <ul>
                            <li className="py-2 text-sm">10 Token</li>
                            <li className="py-2 font-bold text-xl">750 Taka</li>
                        </ul>

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
                    <div className="flex flex-row gap-x-20">
                        <ul>
                            <li className="py-2 text-sm">“Urgent” </li>
                            <li className="py-2 font-bold text-xl">300 Taka</li>
                            <li className="text-sm">7 days validity</li>
                        </ul>
                        <ul>
                            <li className="py-2 text-sm">“MT Bump” </li>
                            <li className="py-2 font-bold text-xl">500 Taka</li>
                            <li className="text-sm">14 days validity</li>
                        </ul>
                        <ul>
                            <li className="py-2 text-sm">“Top MT” </li>
                            <li className="py-2 font-bold text-xl">900 Taka</li>
                            <li className="text-sm">1 month validity</li>
                        </ul>
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
    );

}
