import PasswordInput from "@components/ui/password-input";
import Button from "@components/ui/button";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { fadeInTop } from "@utils/motion/fade-in-top";
import { useTranslation } from "next-i18next";


const NewPosts: React.FC = () => {

	const { t } = useTranslation();
	return (
		<>
			<h2 className="text-lg md:text-xl xl:text-2xl font-bold text-heading mb-6 xl:mb-8">
				{t("common:text-change-password")}
			</h2>
			<motion.div
				layout
				initial="from"
				animate="to"
				exit="from"
				//@ts-ignore
				variants={fadeInTop(0.35)}
				className={`w-full flex  h-full lg:w-full flex-col`}
			>
				<form
					
					className="w-full mx-auto flex flex-col justify-center "
				>
					<div className="flex flex-col space-y-3">
                        <div className="mb-8">
							<h2 className="bg-mtyellow text-lg text-blacks py-[10px] px-[20px]">Vehicle Information</h2>
							<div className="grid grid-cols-1 md:grid-cols-4 gap-4 bg-gray-100 py-2.5 px-5">
								<div className="flex flex-col gap-y-1">
									<label htmlFor="brand">Brand</label>
									<select className="h-[48px] py-2.5 px-9 bg-white border text-blacks border-blacks focus:border-mtyellow" name="brand" id="brand">
										<option value="">Option</option>
										<option value="">Option</option>
										<option value="">Option</option>
										<option value="">Option</option>
										<option value="">Option</option>
									</select>
								</div>
								<div className="flex flex-col gap-y-1">
									<label htmlFor="brand">Model</label>
									<select className="h-[48px] py-2.5 px-9 bg-white border text-blacks border-blacks focus:border-mtyellow" name="brand" id="brand">
										<option value="">Option</option>
									</select>
								</div>
								<div className="flex flex-col gap-y-1">
									<label htmlFor="brand">Model Year</label>
									<select className="h-[48px] py-2.5 px-9 bg-white border text-blacks border-blacks focus:border-mtyellow" name="brand" id="brand">
										<option value="">Option</option>
									</select>
								</div>
								<div className="flex flex-col gap-y-1">
									<label htmlFor="brand">Registration Year</label>
									<select className="h-[48px] py-2.5 px-9 bg-white border text-blacks border-blacks focus:border-mtyellow" name="brand" id="brand">
										<option value="">Option</option>
									</select>
								</div>
								<div className="flex flex-col gap-y-1">
									<label htmlFor="brand">Condition</label>
									<select className="h-[48px] py-2.5 px-9 bg-white border text-blacks border-blacks focus:border-mtyellow" name="brand" id="brand">
										<option value="">Option</option>
									</select>
								</div>
								<div className="flex flex-col gap-y-1">
									<label htmlFor="brand">Type</label>
									<select className="h-[48px] py-2.5 px-9 bg-white border text-blacks border-blacks focus:border-mtyellow" name="brand" id="brand">
										<option value="">Option</option>
									</select>
								</div>
								<div className="flex flex-col gap-y-1">
									<label htmlFor="brand">Transmission</label>
									<select className="h-[48px] py-2.5 px-9 bg-white border text-blacks border-blacks focus:border-mtyellow" name="brand" id="brand">
										<option value="">Option</option>
									</select>
								</div>
								<div className="flex flex-col gap-y-1">
									<label htmlFor="brand">Fuel Type</label>
									<select className="h-[48px] py-2.5 px-9 bg-white border text-blacks border-blacks focus:border-mtyellow" name="brand" id="brand">
										<option value="">Option</option>
									</select>
								</div>
								<div className="flex flex-col gap-y-1">
									<label htmlFor="brand">Mileage</label>
									<input type="text" className="h-[48px] py-2.5 px-9 bg-white border text-blacks border-blacks focus:border-mtyellow" />
								</div>
								<div className="flex flex-col gap-y-1">
									<label htmlFor="brand">Color</label>
									<input type="text" className="h-[48px] py-2.5 px-9 bg-white border text-blacks border-blacks focus:border-mtyellow" />
								</div>
								<div className="flex flex-col gap-y-1">
									<label htmlFor="brand">Engine Capacity</label>
									<input type="text" className="h-[48px] py-2.5 px-9 bg-white border text-blacks border-blacks focus:border-mtyellow" />
								</div>
								<div className="flex flex-col gap-y-1">
									<label htmlFor="brand">Doors</label>
									<select className="h-[48px] py-2.5 px-9 bg-white border text-blacks border-blacks focus:border-mtyellow" name="brand" id="brand">
										<option value="">Option</option>
									</select>
								</div>
								<div className="flex flex-col gap-y-1">
									<label htmlFor="brand">Seats</label>
									<select className="h-[48px] py-2.5 px-9 bg-white border text-blacks border-blacks focus:border-mtyellow" name="brand" id="brand">
										<option value="">Option</option>
									</select>
								</div>
								<div className="flex flex-col gap-y-1">
									<label htmlFor="brand">Papers & Documents</label>
									<select className="h-[48px] py-2.5 px-9 bg-white border text-blacks border-blacks focus:border-mtyellow" name="brand" id="brand">
										<option value="">Option</option>
									</select>
								</div>
								<div className="flex flex-col gap-y-1">
									<label htmlFor="brand">Location</label>
									<select className="h-[48px] py-2.5 px-9 bg-white border text-blacks border-blacks focus:border-mtyellow" name="brand" id="brand">
										<option value="">Option</option>
									</select>
								</div>
								<div className="flex flex-col gap-y-1">
									<label htmlFor="brand">Price</label>
									<input type="text" className="h-[48px] py-2.5 px-9 bg-white border text-blacks border-blacks focus:border-mtyellow" />
								</div>
								<div className="flex flex-col gap-y-1">
									<label htmlFor="brand">What Car do you drive</label>
									<input type="text" className="h-[48px] py-2.5 px-9 bg-white border text-blacks border-blacks focus:border-mtyellow" />
								</div>
							</div>
                        </div>
						<div className="mb-8">
						<h2 className="bg-mtyellow text-lg text-blacks py-[10px] px-[20px]">Upload Car Photos</h2>
							<div className="grid grid-cols-1 md:grid-cols-4 gap-4 bg-gray-100 py-2.5 px-5">
								<div className="flex flex-col gap-y-1 border border-b-blacks">
									<div className="flex flex-col gap-y-1">
										<label htmlFor="brand">Image 1</label>
										<input type="file" name="image" id="image" />
										<div className="flex flex-row gap-x-1">
											<input type="radio" name="" id="" />
											<label htmlFor="thumbnail">Choose Thumbnail</label>
										</div>
									</div>
									<div>
										<img width="90" height="50" className="w-[90px] h-[50px] bg-center" src="../assets/images/picture-preview-icon-01.png" alt="" />
									</div>
								</div>
								<div className="flex flex-col gap-y-1 border border-b-blacks">
									<div className="flex flex-col gap-y-1">
										<label htmlFor="brand">Image 2</label>
										<input type="file" name="image" id="image" />
										<div className="flex flex-row gap-x-1">
											<input type="radio" name="" id="" />
											<label htmlFor="thumbnail">Choose Thumbnail</label>
										</div>
									</div>
									<div>
										<img width="90" height="50" className="w-[90px] h-[50px] bg-center" src="../assets/images/picture-preview-icon-01.png" alt="" />
									</div>
								</div>
								<div className="flex flex-col gap-y-1 border border-b-blacks">
									<div className="flex flex-col gap-y-1">
										<label htmlFor="brand">Image 3</label>
										<input type="file" name="image" id="image" />
										<div className="flex flex-row gap-x-1">
											<input type="radio" name="" id="" />
											<label htmlFor="thumbnail">Choose Thumbnail</label>
										</div>
									</div>
									<div>
										<img width="90" height="50" className="w-[90px] h-[50px] bg-center" src="../assets/images/picture-preview-icon-01.png" alt="" />
									</div>
								</div>
								<div className="flex flex-col gap-y-1 border border-b-blacks">
									<div className="flex flex-col gap-y-1">
										<label htmlFor="brand">Image 4</label>
										<input type="file" name="image" id="image" />
										<div className="flex flex-row gap-x-1">
											<input type="radio" name="" id="" />
											<label htmlFor="thumbnail">Choose Thumbnail</label>
										</div>
									</div>
									<div>
										<img width="90" height="50" className="w-[90px] h-[50px] bg-center" src="../assets/images/picture-preview-icon-01.png" alt="" />
									</div>
								</div>
								<div className="flex flex-col gap-y-1 border border-b-blacks">
									<div className="flex flex-col gap-y-1">
										<label htmlFor="brand">Image 5</label>
										<input type="file" name="image" id="image" />
										<div className="flex flex-row gap-x-1">
											<input type="radio" name="" id="" />
											<label htmlFor="thumbnail">Choose Thumbnail</label>
										</div>
									</div>
									<div>
										<img width="90" height="50" className="w-[90px] h-[50px] bg-center" src="../assets/images/picture-preview-icon-01.png" alt="" />
									</div>
								</div>
								<div className="flex flex-col gap-y-1 border border-b-blacks">
									<div className="flex flex-col gap-y-1">
										<label htmlFor="brand">Image 6</label>
										<input type="file" name="image" id="image" />
										<div className="flex flex-row gap-x-1">
											<input type="radio" name="" id="" />
											<label htmlFor="thumbnail">Choose Thumbnail</label>
										</div>
									</div>
									<div>
										<img width="90" height="50" className="w-[90px] h-[50px] bg-center" src="../assets/images/picture-preview-icon-01.png" alt="" />
									</div>
								</div>
								<div className="flex flex-col gap-y-1 border border-b-blacks">
									<div className="flex flex-col gap-y-1">
										<label htmlFor="brand">Image 7</label>
										<input type="file" name="image" id="image" />
										<div className="flex flex-row gap-x-1">
											<input type="radio" name="" id="" />
											<label htmlFor="thumbnail">Choose Thumbnail</label>
										</div>
									</div>
									<div>
										<img width="90" height="50" className="w-[90px] h-[50px] bg-center" src="../assets/images/picture-preview-icon-01.png" alt="" />
									</div>
								</div>
								<div className="flex flex-col gap-y-1 border border-b-blacks">
									<div className="flex flex-col gap-y-1">
										<label htmlFor="brand">Image 8</label>
										<input type="file" name="image" id="image" />
										<div className="flex flex-row gap-x-1">
											<input type="radio" name="" id="" />
											<label htmlFor="thumbnail">Choose Thumbnail</label>
										</div>
									</div>
									<div>
										<img width="90" height="50" className="w-[90px] h-[50px] bg-center" src="../assets/images/picture-preview-icon-01.png" alt="" />
									</div>
								</div>
								<div className="flex flex-col gap-y-1 border border-b-blacks">
									<div className="flex flex-col gap-y-1">
										<label htmlFor="brand">Image 9</label>
										<input type="file" name="image" id="image" />
										<div className="flex flex-row gap-x-1">
											<input type="radio" name="" id="" />
											<label htmlFor="thumbnail">Choose Thumbnail</label>
										</div>
									</div>
									<div>
										<img width="90" height="50" className="w-[90px] h-[50px] bg-center" src="../assets/images/picture-preview-icon-01.png" alt="" />
									</div>
								</div>
								<div className="flex flex-col gap-y-1 border border-b-blacks">
									<div className="flex flex-col gap-y-1">
										<label htmlFor="brand">Image 10</label>
										<input type="file" name="image" id="image" />
										<div className="flex flex-row gap-x-1">
											<input type="radio" name="" id="" />
											<label htmlFor="thumbnail">Choose Thumbnail</label>
										</div>
									</div>
									<div>
										<img width="90" height="50" className="w-[90px] h-[50px] bg-center" src="../assets/images/picture-preview-icon-01.png" alt="" />
									</div>
								</div>
							</div>
						</div>
						<div className="mb-8">
						<h2 className="bg-mtyellow text-lg text-blacks py-[10px] px-[20px]">Auction Sheet / MT Report</h2>
							<div className="grid grid-cols-1 md:grid-cols-4 gap-4 bg-gray-100 py-2.5 px-5">
								<div className="flex flex-col gap-y-1">
									<div className="flex flex-col gap-y-1">
										<label htmlFor="brand">Image 1</label>
										<input type="file" name="image" id="image" />
										<div className="flex flex-row gap-x-1">
											<input type="radio" name="" id="" />
											<label htmlFor="thumbnail">Choose Thumbnail</label>
										</div>
									</div>
								</div>
								
							</div>
						</div>
						<div className="mb-8">
						<h2 className="bg-mtyellow text-lg text-blacks py-[10px] px-[20px]">Contact Information</h2>
							<div className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-gray-100 py-2.5 px-5">
								<div className="flex flex-col gap-y-1">
									<div className="flex flex-col gap-y-1">
										<label htmlFor="brand">Name</label>
										<input type="text" className="h-[48px] py-2.5 px-9 bg-white border text-blacks border-blacks focus:border-mtyellow" />
									</div>
								</div>
								<div className="flex flex-col gap-y-1">
									<div className="flex flex-col gap-y-1">
										<label htmlFor="brand">Email</label>
										<input type="text" className="h-[48px] py-2.5 px-9 bg-white border text-blacks border-blacks focus:border-mtyellow" />
									</div>
								</div>
								<div className="flex flex-col gap-y-1">
									<div className="flex flex-col gap-y-1">
										<label htmlFor="brand">Phone</label>
										<input type="text" className="h-[48px] py-2.5 px-9 bg-white border text-blacks border-blacks focus:border-mtyellow" />
									</div>
								</div>
							</div>
						</div>
						<div className="relative">
							<Button
								type="submit"
								className="h-13 mt-3"
							>
								{t("Submit")}
							</Button>
						</div>
					</div>
				</form>
			</motion.div>
		</>
	);
};

export default NewPosts;
