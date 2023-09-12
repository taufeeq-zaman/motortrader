
import { useRouter } from 'next/router';
import { ROUTES } from '@utils/routes';
import { useProductQuery } from '@framework/product/get-product';
import usePrice from '@framework/product/use-price';
import Button from '@components/ui/button';
import Carousel from '@components/ui/carousel/carousel';
import { SwiperSlide } from 'swiper/react';
import ProductMetaReview from '@components/product/product-meta-review';
import { useTranslation } from 'next-i18next';

const productGalleryCarouselResponsive = {
  '768': {
    slidesPerView: 1,
  },
  '0': {
    slidesPerView: 1,
  },
};

const ProductSingleDetails: React.FC = () => {
  const {
    query: { slug },
  } = useRouter();
  const { data, isLoading } = useProductQuery(slug as string);

  const { t } = useTranslation('common');
  const router = useRouter();
  function navigateToProductPage() {
    router.push(`${ROUTES.PRODUCT}/${slug}`, undefined, {
      locale: router.locale,
    });
  }

  const { price } = usePrice(
    data && {
      amount: data.sale_price ? data.sale_price : data.price,
      baseAmount: data.price,
      currencyCode: 'BDT',
    }
  );
  if (isLoading) return <p>Loading...</p>;


  return (
    <div className="block lg:grid grid-cols-9 gap-x-10 xl:gap-x-14 pt-7 pb-10 lg:pb-14 2xl:pb-20 items-start">
      <div className='col-span-5'>
      <Carousel
          pagination={{
            clickable: true,
          }}
          prevButtonClasses="ltr:left-6 rtl:right-6 ltr:md:left-8 rtl:md:right-8 ltr:xl:left-12 rtl:xl:right-12 ltr:2xl:left-16 rtl:2xl:right-16"
          nextButtonClasses="ltr:right-6 rtl:left-6 ltr:md:right-8 rtl:md:left-8 ltr:xl:right-12 rtl:xl:left-12 ltr:2xl:right-16 rtl:2xl:left-16"
          nextActivateId="hero-slider-next"
          prevActivateId="hero-slider-prev"
          breakpoints={productGalleryCarouselResponsive}
          className="product-gallery"
          buttonGroupClassName=""
        >
          {data?.gallery?.map((item, index: number) => (
            <SwiperSlide key={`product-gallery-key-${index}`}>
              <div className="col-span-1 transition duration-150 ease-in hover:opacity-90">
                <img
                  src={
                    item?.original ??
                    '/assets/placeholder/products/product-gallery.svg'
                  }
                  alt={`${data?.name}--${index}`}
                  className="object-cover w-full"
                />
              </div>
            </SwiperSlide>
          ))}
        </Carousel>
      </div>

      

      <div className="col-span-4 pt-8 lg:pt-0">
        <div className="mb-7">
          <h2 className="text-heading text-lg md:text-xl lg:text-2xl 2xl:text-3xl font-bold hover:text-black mb-3.5">
            {data?.name}
          </h2>
          <div className="flex items-center mt-5">
            <div className="text-heading font-bold text-base md:text-xl lg:text-2xl 2xl:text-4xl ltr:pr-2 rtl:pl-2 ltr:md:pr-0 rtl:md:pl-0 ltr:lg:pr-2 rtl:lg:pl-2 ltr:2xl:pr-0 rtl:2xl:pl-0">
              {price}
            </div>

          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-x-10 mt-5'>
              <div className='mb-2'>    
                <Button
                    onClick={navigateToProductPage}
                    variant="mtyellow"
                    className="w-full h-11 md:h-12"
                  >
                    {t('Request MTReport')}
                </Button>
              </div>
              <div className='mb-2'>    
                <Button
                    onClick={navigateToProductPage}
                    variant="flat"
                    className="w-full h-11 md:h-12"
                  >
                    {t('Share')}
                </Button>
              </div>
            </div>
        </div>
        <ProductMetaReview data={data} />
      </div>
    </div>
  );
};

export default ProductSingleDetails;
