import Link from "@components/ui/link";
import { useRouter } from 'next/router';
import Layout from "@components/layout/layout";
import AccountLayout from "@components/my-account/account-layout";
import { ROUTES } from "@utils/routes";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import Button from '@components/ui/button';
import { GetStaticProps } from "next";

export default function AccountPage() {

	const router = useRouter();
	function navigateToProductPage() {
		router.push(`${ROUTES.PRODUCT}`, undefined, {
		  locale: router.locale,
		});
	  }

	const { t } = useTranslation("common");
	return (
		<AccountLayout>
			<h2 className="text-lg md:text-xl xl:text-2xl font-bold text-heading mb-3 xl:mb-5">
				{t("text-dashboard")}
			</h2>
			<p className=" text-sm leading-7 md:text-base md:leading-loose lowercase">
				{t("text-account-dashboard")}{" "}
				<Link
					href={ROUTES.ORDERS}
					className="text-heading underline font-semibold"
				>
					{t("text-recent-orders")}
				</Link>
				, {t("text-manage-your")}{" "}
				<Link
					href={ROUTES.ACCOUNT_DETAILS}
					className="text-heading underline font-semibold"
				>
					{t("text-account-details")}
				</Link>{" "}
				{t("text-and")}{" "}
				<Link
					href={ROUTES.CHANGE_PASSWORD}
					className="text-heading underline font-semibold"
				>
					{t("text-change-your-password")}
				</Link>
				.
			</p>
			<h2 className="text-lg md:text-xl xl:text-2xl font-bold text-heading mb-3 xl:mb-5">My POSTS</h2>
			<p>You have not submitted any posts get. Remaining 1 free post(s).</p>
			<Button
              onClick={navigateToProductPage}
              variant="mtyellow"
              className="w-1/6 h-11 md:h-12 mt-4"
            >
              {t('New Post')}
            </Button>
		</AccountLayout>
	);
}

AccountPage.Layout = Layout;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
	return {
		props: {
			...(await serverSideTranslations(locale!, [
				"common",
				"forms",
				"menu",
				"footer",
			])),
		},
	};
};
