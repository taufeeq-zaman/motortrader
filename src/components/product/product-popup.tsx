
import { useRouter } from 'next/router';
import { ROUTES } from '@utils/routes';
import { useUI } from '@contexts/ui.context';
import Button from '@components/ui/button';
import usePrice from '@framework/product/use-price';
import { useTranslation } from 'next-i18next';

export default function ProductPopup() {
  const { t } = useTranslation('common');
  const {
    modalData: { data },
    closeModal,
  } = useUI();
  const router = useRouter();

  const { price } = usePrice({
    amount: data.sale_price ? data.sale_price : data.price,
    baseAmount: data.price,
    currencyCode: 'BDT',
  });
  const { slug, image, name, fuel, transmission, mileage } = data;





  function navigateToProductPage() {
    closeModal();
    router.push(`${ROUTES.PRODUCT}/${slug}`, undefined, {
      locale: router.locale,
    });
  }





  return (
    <div className="rounded-lg bg-white">
      <div className="flex flex-col lg:flex-row w-full md:w-[650px] lg:w-[960px] mx-auto overflow-hidden">
        <div className="flex-shrink-0 flex items-center justify-center w-full lg:w-430px max-h-430px lg:max-h-full overflow-hidden bg-gray-300">
          <img
            src={
              image?.original ??
              '/assets/placeholder/products/product-thumbnail.svg'
            }
            alt={name}
            className="lg:object-cover lg:w-full lg:h-full"
          />
        </div>

        <div className="flex flex-col p-5 md:p-8 w-full">
          <div className="pb-5">
            <div
              className="mb-2 md:mb-2.5 block -mt-1.5"
              onClick={navigateToProductPage}
              role="button"
            >
              <h2 className="text-heading text-lg md:text-xl lg:text-2xl font-semibold hover:text-black">
                {name}
              </h2>
            </div>

            <div className="flex items-center mt-3">
              <div className="text-heading font-semibold text-base md:text-xl lg:text-2xl">
                {price}
              </div>
            </div>
          </div>

            <div className='w-full'>
              <div className='flex flex-row'>
                <ul className="w-6/12 text-sm ">
                  <li className='py-1'>
                    <span className='block w-6/12 font-bold float-left text-blacks'>Fuel:</span>
                    <span className='w-6/12'>{fuel}</span>
                  </li>
                  <li className='py-1'>
                    <span className='block w-6/12 font-bold float-left text-blacks'>Mileage:</span>
                    <span className='w-6/12'>{mileage}</span>
                  </li>
                  <li className='py-1'>
                    <span className='block w-6/12 font-bold float-left text-blacks'>Transmission:</span>
                    <span className='w-6/12'>{transmission}</span>
                  </li>
                </ul>

                <ul className='w-6/12 text-sm '>
                  <li className='py-1'>
                    <span className='block w-6/12 font-bold float-left text-blacks'>Model:</span>
                    <span>RX</span>
                  </li>
                  <li className='py-1'>
                    <span className='block w-6/12 font-bold float-left text-blacks'>Model year:</span>
                    <span className='w-6/12'>2019</span>
                  </li>
                  <li className='py-1'>
                    <span className='block w-6/12 font-bold float-left text-blacks'>Engine:</span>
                    <span className='w-6/12'>2000cc</span>
                  </li>
                </ul>
              </div>
            </div>


          <div className="pt-2 md:pt-6">

              <div className='mb-2'>    
                <Button
                    onClick={navigateToProductPage}
                    variant="mtyellow"
                    className="w-full h-11 md:h-12"
                  >
                    {t('Request MTReport')}
                </Button>
              </div>


            <Button
              onClick={navigateToProductPage}
              variant="flat"
              className="w-full h-11 md:h-12"
            >
              {t('text-view-details')}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
