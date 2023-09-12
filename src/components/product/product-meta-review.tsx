import { useState } from "react";
import { Collapse } from "@components/common/accordion";
import ReviewForm from "@components/common/form/review-form";

interface Props {
	data: any;
}

const ProductMetaReview: React.FC<Props> = ({ data }) => {
	const [expanded, setExpanded] = useState<number>(0);
	return (
		<>
			{data?.meta.map((item: any, index: any) => (
				<Collapse
					i={index}
					key={item.title}
					title={item.title}
					translatorNS="review"
					content={
						data?.meta.length === item.id ? (
							<div className='w-full'>
								<div className='flex flex-row'>
							  		<ul className="w-6/12 text-sm ">
										<li className='py-1'>
											<span className='block w-6/12 font-bold float-left text-blacks'>Brand:</span>
											<span className='w-6/12'>{data?.brand}</span>
										</li>
										<li className='py-1'>
											<span className='block w-6/12 font-bold float-left text-blacks'>Reg. Year:</span>
											<span className='w-6/12'>{data?.year}</span>
										</li>
										<li className='py-1'>
											<span className='block w-6/12 font-bold float-left text-blacks'>Body:</span>
											<span className='w-6/12'>{data?.body}</span>
										</li>
										<li className='py-1'>
											<span className='block w-6/12 font-bold float-left text-blacks'>Engine:</span>
											<span className='w-6/12'>{data?.engine}</span>
										</li>
										<li className='py-1'>
											<span className='block w-6/12 font-bold float-left text-blacks'>Mileage:</span>
											<span className='w-6/12'>{data?.mileage}</span>
										</li>
										<li className='py-1'>
											<span className='block w-6/12 font-bold float-left text-blacks'>Door:</span>
											<span className='w-6/12'>{data?.door}</span>
										</li>
										<li className='py-1'>
											<span className='block w-6/12 font-bold float-left text-blacks'>Papers:</span>
											<span className='w-6/12'>{data?.papers}</span>
										</li>
										<li className='py-1'>
											<span className='block w-6/12 font-bold float-left text-blacks'>Location:</span>
											<span className='w-6/12'>{data?.location}</span>
										</li>
							  		</ul>
			  
							  		<ul className='w-6/12 text-sm '>
								<li className='py-1'>
								  <span className='block w-6/12 font-bold float-left text-blacks'>Model:</span>
								  <span>{data?.model}</span>
								</li>
								<li className='py-1'>
								  <span className='block w-6/12 font-bold float-left text-blacks'>Model year:</span>
								  <span className='w-6/12'>{data?.year}</span>
								</li>
								<li className='py-1'>
								  <span className='block w-6/12 font-bold float-left text-blacks'>Fuel Type:</span>
								  <span className='w-6/12'>{data?.fuel}</span>
								</li>
								<li className='py-1'>
								  <span className='block w-6/12 font-bold float-left text-blacks'>Transmission:</span>
								  <span className='w-6/12'>{data?.transmission}</span>
								</li>
								<li className='py-1'>
								  <span className='block w-6/12 font-bold float-left text-blacks'>Color:</span>
								  <span className='w-6/12'>{data?.color}</span>
								</li>
								<li className='py-1'>
								  <span className='block w-6/12 font-bold float-left text-blacks'>Seats:</span>
								  <span className='w-6/12'>{data?.seats}</span>
								</li>
								<li className='py-1'>
								  <span className='block w-6/12 font-bold float-left text-blacks'>Conditions:</span>
								  <span className='w-6/12'>{data?.condition}</span>
								</li>
								<li className='py-1'>
								  <span className='block w-6/12 font-bold float-left text-blacks'>Asking Proce:</span>
								  <span className='w-6/12'>{data?.price}</span>
								</li>
							  		</ul>
								</div>
						  </div>
						) : (
							<div className='w-full'>
								<div className='flex flex-row'>
								  <ul className="w-6/12 text-sm ">
									<li className='py-1'>
										<span className='block w-6/12 font-bold float-left text-blacks'>Name:</span>
										<span className='w-6/12'>{data?.seller}</span>
									</li>
									<li className='py-1'>
										<span className='block w-6/12 font-bold float-left text-blacks'>Mobile:</span>
										<span className='w-6/12'>{data?.mobile}</span>
									</li>
									<li className='py-1'>
										<span className='block w-6/12 font-bold float-left text-blacks'>Email:</span>
										<span className='w-6/12'>{data?.email}</span>
									</li>
									<li className='py-1'>
										<span className='block w-6/12 font-bold float-left text-blacks'>Message:</span>
										<span className='w-6/12'>{data?.message}</span>
									</li>
								  </ul>
								</div>
					  		</div>
						)
					}
					expanded={expanded}
					setExpanded={setExpanded}
					variant="transparent"
				/>
			))}
		</>
	);
};

export default ProductMetaReview;
