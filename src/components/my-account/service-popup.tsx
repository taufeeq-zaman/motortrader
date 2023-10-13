
import { useRouter } from 'next/router';
import { ROUTES } from '@utils/routes';
import { useUI } from '@contexts/ui.context';
import Button from '@components/ui/button';
import usePrice from '@framework/product/use-price';
import { useTranslation } from 'next-i18next';

export default function ServicePopup() {
    const { t } = useTranslation('common');
    const {
        modalData: { data },
        closeModal,
    } = useUI();
    const router = useRouter();

    // const { price } = usePrice({
    //     amount: data.sale_price ? data.sale_price : data.price,
    //     baseAmount: data.price,
    //     currencyCode: 'BDT',
    // });
    // const { slug, name, fuel, transmission, mileage } = data;

    function navigateToProductPage() {
        closeModal();
        router.push(`${ROUTES.PRODUCT}/${slug}`, undefined, {
            locale: router.locale,
        });
    }

    return (
        <div className="rounded-lg bg-white">
            <div className="flex flex-col lg:flex-row w-full md:w-[456px] mx-auto overflow-hidden">
                <div className='py-4 px-4 bg-white rounded-md'>
                    <div className="flex w-full h-full md:w-auto flex-col grow gap-y-2 bg-gray-100 rounded-md py-[28px] px-[28px]">
                        <div className="flex flex-col gap-y-2">
                            <h3 className="text-blacks text-xl font-bold text-center">Buy Token(s)</h3>
                            <p className='text-center'>Token system to buy extra post(s)</p>
                        </div>
                        <div className="flex flex-row justify-center gap-x-20 mt-4">
                            <ul className="whitespace-nowrap">
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
                            <ul className="whitespace-nowrap">
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
                            <ul className="whitespace-nowrap">
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
            </div>
        </div>
    );
}
