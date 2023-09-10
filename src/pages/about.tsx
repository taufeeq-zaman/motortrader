import Container from "@components/ui/container";
import Layout from "@components/layout/layout";
import WhyChooseUs from '@components/about/why-choose-us';
import Aboutmt from '@components/about/about-mt';
import { GetStaticProps } from "next";
import { QueryClient } from "react-query";
import { dehydrate } from "react-query/hydration";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { ROUTES } from "@utils/routes";
import { homeSixCoupons as banner } from "@framework/static/banner";
import BannerCard from "@components/common/banner-card";

export default function Home() {
	return (
		<>
			<Container>
				<BannerCard
					key={`banner--key${banner.id}`}
					banner={banner}
					href={`${ROUTES.COLLECTIONS}/${banner.slug}`}
					className="mb-12 lg:mb-14 xl:mb-16 pb-0.5 lg:pb-1 xl:pb-0"
				/>
				<Aboutmt></Aboutmt>
                <WhyChooseUs></WhyChooseUs>
			</Container>
		</>
	);
}

Home.Layout = Layout;
export const getStaticProps: GetStaticProps = async ({ locale }) => {
	const queryClient = new QueryClient();



	return {
		props: {
			dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
			...(await serverSideTranslations(locale!, [
				"common",
				"forms",
				"menu",
				"footer",
			])),
		},
		revalidate: 60,
	};
};