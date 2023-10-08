import Layout from "@components/layout/layout";
import AccountLayout from "@components/my-account/account-layout";
import NewPosts from "@components/my-account/new-posts";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function Posts() {
	return (
		<AccountLayout>
			<NewPosts />
		</AccountLayout>
	);
}

Posts.Layout = Layout;

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
