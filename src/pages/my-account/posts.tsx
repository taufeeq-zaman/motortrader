import Layout from "@components/layout/layout";
import Button from "@components/ui/button";
import AccountLayout from "@components/my-account/account-layout";
import { motion } from 'framer-motion';
import { fadeInTop } from '@utils/motion/fade-in-top';
import Link from '@components/ui/link';
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useWindowSize } from '@utils/use-window-size';
import { useTranslation } from 'next-i18next';
import { useSsrCompatible } from '@utils/use-ssr-compatible';
import {useUI} from "@contexts/ui.context";
export default function Posts() {
	const { width } = useSsrCompatible(useWindowSize(), { width: 0, height: 0 });
	const { t } = useTranslation('common');
	const { openModal, setModalView, setModalData } = useUI();
	function handlePopupView() {
		setModalData({ data: "product" });
		setModalView('SERVICE_VIEW');
		return openModal();
	}
	return (
		<AccountLayout>
			    <>
					<div className="flex flex-row items-center justify-between mb-6  xl:mb-8">
						<h2 className="text-lg font-bold md:text-xl xl:text-2xl text-heading ">
							{t('text-orders')}
						</h2>
							<Button
								variant="mtyellow"
								type="submit"
								className="h-13"
							>
								{t("New Post")}
							</Button>
					</div>
					<div className="mb-6 flex flex-row">
						<p>You have not submitted any posts get. Remaining 1 free post(s).</p>
						<span className="cursor-pointer" onClick={handlePopupView}>+</span>
					</div>
					<motion.div
						layout
						initial="from"
						animate="to"
						exit="from"
						//@ts-ignore
						variants={fadeInTop(0.35)}
						className={`w-full flex flex-col`}
					>
						{width >= 1025 ? (

						<table>
							<thead className="text-sm lg:text-base">
							<tr>
								<th className="p-4 font-semibold bg-gray-100 text-heading ltr:text-left rtl:text-right ltr:first:rounded-tl-md rtl:first:rounded-tr-md">
								{t('text-order')}
								</th>
								<th className="p-4 font-semibold bg-gray-100 text-heading ltr:text-left rtl:text-right lg:text-center">
								{t('text-date')}
								</th>
								<th className="p-4 font-semibold bg-gray-100 text-heading ltr:text-left rtl:text-right lg:text-center">
								{t('text-status')}
								</th>
								<th className="p-4 font-semibold bg-gray-100 text-heading ltr:text-left rtl:text-right lg:text-center">
								{t('Car Brand')}
								</th>
								<th className="p-4 font-semibold bg-gray-100 text-heading ltr:text-left rtl:text-right ltr:lg:text-right rtl:lg:text-left ltr:last:rounded-tr-md rtl:last:rounded-tl-md">
								{t('text-actions')}
								</th>
							</tr>
							</thead>
							<tbody className="text-sm lg:text-base">
							<tr className="border-b border-gray-300 last:border-b-0">
								<td className="px-4 py-5 ltr:text-left rtl:text-right">
								<Link
									href="/my-account/orders/3203"
									className="underline hover:no-underline text-body"
								>
									#3203
								</Link>
								</td>
								<td className="px-4 py-5 ltr:text-left rtl:text-right lg:text-center text-heading">
								March 18, 2021
								</td>
								<td className="px-4 py-5 ltr:text-left rtl:text-right lg:text-center text-heading">
									<span className="bg-lime-400 py-1 px-1 rounded-md">Completed</span>	
								</td>
								<td className="px-4 py-5 ltr:text-left rtl:text-right lg:text-center text-heading">
								Toyota
								</td>
								<td className="px-4 py-5 ltr:text-right rtl:text-left text-heading">
								<Link
									href="/my-account/orders/3203"
									className="text-sm leading-4 bg-heading text-white px-4 py-2.5 inline-block rounded-md hover:text-white hover:bg-gray-600"
								>
									{t('button-view')}
								</Link>
								<Link
									href="/my-account/orders/3203"
									className="text-sm ml-2 leading-4 bg-heading text-white px-4 py-2.5 inline-block rounded-md hover:text-white hover:bg-gray-600"
								>
									{t('Edit')}
								</Link>
								<Link
									href="/my-account/orders/3203"
									className="text-sm ml-2 leading-4 bg-heading text-white px-4 py-2.5 inline-block rounded-md hover:text-white hover:bg-gray-600"
								>
									{t('Delete')}
								</Link>
								</td>
							</tr>
							<tr className="border-b border-gray-300 last:border-b-0">
								<td className="px-4 py-5 ltr:text-left rtl:text-right">
								<Link
									href="/my-account/orders/3204"
									className="underline hover:no-underline text-body"
								>
									#3204
								</Link>
								</td>
								<td className="px-4 py-5 ltr:text-left rtl:text-right lg:text-center text-heading">
								March 18, 2021
								</td>
								<td className="px-4 py-5 ltr:text-left rtl:text-right lg:text-center text-heading">
									<span className="bg-lime-400 py-1 px-1 rounded-md">Completed</span>	
								</td>
								<td className="px-4 py-5 ltr:text-left rtl:text-right lg:text-center text-heading">
								Mercedes
								</td>
								<td className="px-4 py-5 ltr:text-right rtl:text-left text-heading">
								<Link
									href="/my-account/orders/3204"
									className="text-sm leading-4 bg-heading text-white px-4 py-2.5 inline-block rounded-md hover:text-white hover:bg-gray-600"
								>
									{t('button-view')}
								</Link>
								<Link
									href="/my-account/orders/3203"
									className="text-sm ml-2 leading-4 bg-heading text-white px-4 py-2.5 inline-block rounded-md hover:text-white hover:bg-gray-600"
								>
									{t('Edit')}
								</Link>
								<Link
									href="/my-account/orders/3203"
									className="text-sm ml-2 leading-4 bg-heading text-white px-4 py-2.5 inline-block rounded-md hover:text-white hover:bg-gray-600"
								>
									{t('Delete')}
								</Link>
								</td>
							</tr>
							</tbody>
						</table>
						) : (
						<div className="w-full space-y-4">
							<ul className="flex flex-col px-4 pt-5 pb-6 space-y-5 text-sm font-semibold border border-gray-300 rounded-md text-heading">
							<li className="flex items-center justify-between">
								{t('text-order')}
								<span className="font-normal">
								<Link
									href="/my-account/orders/3203"
									className="underline hover:no-underline text-body"
								>
									#3203
								</Link>
								</span>
							</li>
							<li className="flex items-center justify-between">
								{t('text-date')}
								<span className="font-normal">March 18, 2021</span>
							</li>
							<li className="flex items-center justify-between">
								{t('text-status')}
								<span className="font-normal">Completed</span>
							</li>
							<li className="flex items-center justify-between">
								{t('text-total')}
								<span className="font-normal">Toyota</span>
							</li>
							<li className="flex items-center justify-between">
								{t('text-actions')}
								<span className="font-normal">
								<Link
									href="/my-account/orders/3203"
									className="text-sm leading-4 bg-heading text-white px-4 py-2.5 inline-block rounded-md hover:text-white hover:bg-gray-600"
								>
									{t('button-view')}
								</Link>
								<Link
									href="/my-account/orders/3203"
									className="text-sm ml-2 leading-4 bg-heading text-white px-4 py-2.5 inline-block rounded-md hover:text-white hover:bg-gray-600"
								>
									{t('Edit')}
								</Link>
								<Link
									href="/my-account/orders/3203"
									className="text-sm ml-2 leading-4 bg-heading text-white px-4 py-2.5 inline-block rounded-md hover:text-white hover:bg-gray-600"
								>
									{t('Delete')}
								</Link>
								</span>
							</li>
							</ul>
							<ul className="flex flex-col px-4 pt-5 pb-6 space-y-5 text-sm font-semibold border border-gray-300 rounded-md text-heading">
							<li className="flex items-center justify-between">
								{t('text-order')}
								<span className="font-normal">
								<Link
									href="/my-account/orders/3204"
									className="underline hover:no-underline text-body"
								>
									#3204
								</Link>
								</span>
							</li>
							<li className="flex items-center justify-between">
								{t('text-date')}
								<span className="font-normal">March 18, 2021</span>
							</li>
							<li className="flex items-center justify-between">
								{t('text-status')}
								<span className="font-normal">Completed</span>
							</li>
							<li className="flex items-center justify-between">
								{t('text-total')}
								<span className="font-normal">Mercedes</span>
							</li>
							<li className="flex items-center justify-between">
								{t('text-actions')}
								<span className="font-normal">
								<Link
									href="/my-account/orders/3204"
									className="text-sm leading-4 bg-heading text-white px-4 py-2.5 inline-block rounded-md hover:text-white hover:bg-gray-600"
								>
									{t('button-view')}
								</Link>
								<Link
									href="/my-account/orders/3203"
									className="text-sm ml-2 leading-4 bg-heading text-white px-4 py-2.5 inline-block rounded-md hover:text-white hover:bg-gray-600"
								>
									{t('Edit')}
								</Link>
								<Link
									href="/my-account/orders/3203"
									className="text-sm ml-2 leading-4 bg-heading text-white px-4 py-2.5 inline-block rounded-md hover:text-white hover:bg-gray-600"
								>
									{t('Delete')}
								</Link>
								</span>
							</li>
							</ul>
						</div>
						)}
					</motion.div>
    			</>
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
