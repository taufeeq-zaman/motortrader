import { ROUTES } from '@utils/routes';
import cn from 'classnames';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import { Blog } from '@framework/types';
import {FC} from "react";
interface BlogProps {
    blog: Blog;
    className?: string;
    contactClassName?: string;
    imageContentClassName?: string;
    variant?:
        | 'grid'
        | 'gridSlim'
        | 'list'
        | 'listSmall'
        | 'gridModern'
        | 'gridModernWide'
        | 'gridTrendy'
        | 'rounded'
        | 'circle';
    imgWidth?: number | string;
    imgHeight?: number | string;
    imgLoading?: 'eager' | 'lazy';
    hideProductDescription?: boolean;
    showCategory?: boolean;
    showRating?: boolean;
    bgTransparent?: boolean;
    bgGray?: boolean;
    demoVariant?: 'ancient';
    disableBorderRadius?: boolean;
}

const BlogCard: FC<BlogProps> = ({
     blog,
     variant = 'list',
     imgWidth = 340,
     imgHeight = 440,
     imgLoading,
     demoVariant,
}) => {
    const placeholderImage = `/assets/placeholder/products/product-${variant}.svg`;
    return(
        <div className="h-full w-full min-w-[75%]">
            <a href="/blogs/online-income-in-bd" className="h-full flex flex-col">
                <div className="w-full relative pt-[56.25%] h-full">
                    <Image
                        src={blog?.image?.thumbnail ?? placeholderImage}
                        width={demoVariant === 'ancient' ? 352 : imgWidth}
                        height={demoVariant === 'ancient' ? 452 : imgHeight}
                        loading={imgLoading}
                        quality={100}
                        alt={blog?.name || 'Product Image'}
                        className={cn(`absolute top-0 h-full object-cover w-full`)} />
                </div>
                <div className="p-[10px] lg:p-[20px] flex flex-col border border-grays">
                    <div className="flex h-full">
                        <p className="text-xbaseloose lg:text-xbase text-blacks font-bold line-clamp-1">Online Income in BD</p>
                    </div>
                    <div className="pt-[20px] flex h-full">
                        <a href="/blogs/online-income-in-bd" className="text-base lg:text-xbase text-blacks underline">Read More &gt;&gt;</a>
                    </div>
                </div>
            </a>
        </div>
    );
}

export default BlogCard;
