import Layout from "@components/layout/layout";
import Container from "@components/ui/container";
import NewPosts from "@components/my-account/new-posts";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function Posts() {
	return (
		<Container>
			<NewPosts />
		</Container>
		
		
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
