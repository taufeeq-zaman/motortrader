import Button from "@components/ui/button";
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
									<select className="min-h-12 transition duration-200 ease-in-out focus:outline-none h-11 md:h-12 rounded-md py-2.5 px-9 bg-white border text-blacks border-blacks focus:border-mtyellow" name="brand" id="brand">
										<option value="Mercedes">Mercedes</option>
										<option value="Toyota">Toyota</option>
										<option value="Porshe">Porshe</option>
										<option value="Audi">Audi</option>
										<option value="BMw">BMw</option>
									</select>
								</div>
								<div className="flex flex-col gap-y-1">
									<label htmlFor="brand">Model</label>
									<select className="min-h-12 transition duration-200 ease-in-out focus:outline-none h-11 md:h-12 rounded-md py-2.5 px-9 bg-white border text-blacks border-blacks focus:border-mtyellow" name="model" id="model">
										<option value="">Option</option>
									</select>
								</div>
								<div className="flex flex-col gap-y-1">
									<label htmlFor="brand">Model Year</label>
									<select className="min-h-12 transition duration-200 ease-in-out focus:outline-none h-11 md:h-12 rounded-md py-2.5 px-9 bg-white border text-blacks border-blacks focus:border-mtyellow" name="model-year" id="model-year">
										<option value="2023">2023</option>
										<option value="2022">2022</option>
										<option value="2021">2021</option>
										<option value="2020">2020</option>
										<option value="2019">2019</option>
										<option value="2018">2018</option>
									</select>
								</div>
								<div className="flex flex-col gap-y-1">
									<label htmlFor="brand">Registration Year</label>
									<select className="min-h-12 transition duration-200 ease-in-out focus:outline-none h-11 md:h-12 rounded-md py-2.5 px-9 bg-white border text-blacks border-blacks focus:border-mtyellow" name="registration" id="registration">
										<option value="Unregistered">Unregistered</option>
										<option value="2023">2023</option>
										<option value="2022">2022</option>
										<option value="2021">2021</option>
										<option value="2020">2020</option>
										<option value="2019">2019</option>
										<option value="2018">2018</option>
									</select>
								</div>
								<div className="flex flex-col gap-y-1">
									<label htmlFor="brand">Condition</label>
									<select className="min-h-12 transition duration-200 ease-in-out focus:outline-none h-11 md:h-12 rounded-md py-2.5 px-9 bg-white border text-blacks border-blacks focus:border-mtyellow" name="condition" id="condition">
										<option value="new">New</option>
										<option value="old">Old</option>
									</select>
								</div>
								<div className="flex flex-col gap-y-1">
									<label htmlFor="brand">Type</label>
									<select className="min-h-12 transition duration-200 ease-in-out focus:outline-none h-11 md:h-12 rounded-md py-2.5 px-9 bg-white border text-blacks border-blacks focus:border-mtyellow" name="type" id="type">
										<option value="sedan">Sedan</option>
										<option value="hatch">Hatch</option>
										<option value="wagon">Wagon</option>
										<option value="microbus">Microbus</option>
										<option value="suv-crossover">SUV/Crossover</option>
										<option value="pickup">Pickup</option>
										<option value="sports">Sports</option>
										<option value="bus-truck-commercial">Bus/Truck/Commercial</option>
										<option value="convertable">Convertable</option>
									</select>
								</div>
								<div className="flex flex-col gap-y-1">
									<label htmlFor="brand">Transmission</label>
									<select className="min-h-12 transition duration-200 ease-in-out focus:outline-none h-11 md:h-12 rounded-md py-2.5 px-9 bg-white border text-blacks border-blacks focus:border-mtyellow" name="transmission" id="transmission">
										<option value="automatic">Automatic</option>
										<option value="semi-automatic">Semi-automatic</option>
										<option value="manual">Manual</option>
									</select>
								</div>
								<div className="flex flex-col gap-y-1">
									<label htmlFor="brand">Fuel Type</label>
									<select className="min-h-12 transition duration-200 ease-in-out focus:outline-none h-11 md:h-12 rounded-md py-2.5 px-9 bg-white border text-blacks border-blacks focus:border-mtyellow" name="fuel-type" id="fuel-type">
										<option value="octane">Octane</option>
										<option value="octane-hybrid">Octane(Hybrid)</option>
										<option value="petrol">Petrol</option>
										<option value="diesel">Diesel</option>
										<option value="diesel-hybrid">Diesel(Hybrid)</option>
										<option value="cng">CNG</option>
										<option value="lpg">LPG</option>
									</select>
								</div>
								<div className="flex flex-col gap-y-1">
									<label htmlFor="brand">Mileage</label>
									<input name="mileage" id="mileage" type="text" className="min-h-12 transition duration-200 ease-in-out focus:outline-none h-11 md:h-12 rounded-md py-2.5 px-9 bg-white border text-blacks border-blacks focus:border-mtyellow" />
								</div>
								<div className="flex flex-col gap-y-1">
									<label htmlFor="brand">Color</label>
									<input name="color" id="color" type="text" className="min-h-12 transition duration-200 ease-in-out focus:outline-none h-11 md:h-12 rounded-md py-2.5 px-9 bg-white border text-blacks border-blacks focus:border-mtyellow" />
								</div>
								<div className="flex flex-col gap-y-1">
									<label htmlFor="brand">Engine Capacity</label>
									<input name="capacity" id="capacity" type="text" className="min-h-12 transition duration-200 ease-in-out focus:outline-none h-11 md:h-12 rounded-md py-2.5 px-9 bg-white border text-blacks border-blacks focus:border-mtyellow" />
								</div>
								<div className="flex flex-col gap-y-1">
									<label htmlFor="brand">Doors</label>
									<select className="min-h-12 transition duration-200 ease-in-out focus:outline-none h-11 md:h-12 rounded-md py-2.5 px-9 bg-white border text-blacks border-blacks focus:border-mtyellow" name="door" id="door">
										<option value="5">5</option>
										<option value="4">4</option>
										<option value="3">3</option>
										<option value="2">2</option>
										<option value="1">1</option>
									</select>
								</div>
								<div className="flex flex-col gap-y-1">
									<label htmlFor="brand">Seats</label>
									<select className="min-h-12 transition duration-200 ease-in-out focus:outline-none h-11 md:h-12 rounded-md py-2.5 px-9 bg-white border text-blacks border-blacks focus:border-mtyellow" name="seat" id="seat">
										<option value="1">1</option>
										<option value="2">2</option>
										<option value="3">3</option>
										<option value="4">4</option>
										<option value="5">5</option>
										<option value="6">6</option>
										<option value="7">7</option>
										<option value="8">8</option>
										<option value="9">9</option>
										<option value="10">10</option>
										<option value="11">11</option>
										<option value="12">12</option>
										<option value="13">13</option>
										<option value="14">14</option>
										<option value="15">15</option>
										<option value="16">16</option>
										<option value="17">17</option>
									</select>
								</div>
								<div className="flex flex-col gap-y-1">
									<label htmlFor="brand">Papers & Documents</label>
									<select className="min-h-12 transition duration-200 ease-in-out focus:outline-none h-11 md:h-12 rounded-md py-2.5 px-9 bg-white border text-blacks border-blacks focus:border-mtyellow" name="paper" id="paper">
										<option value="none">None</option>
										<option value="uptodate">Up to Date</option>
										<option value="failed">Failed</option>
									</select>
								</div>
								<div className="flex flex-col gap-y-1">
									<label htmlFor="brand">Location</label>
									<select className="min-h-12 transition duration-200 ease-in-out focus:outline-none h-11 md:h-12 rounded-md py-2.5 px-9 bg-white border text-blacks border-blacks focus:border-mtyellow" name="location" id="location">
										<option value="dhaka">Dhaka</option>
										<option value="Chittagong">Chittagong</option>
										<option value="khulna">Khulna</option>
										<option value="mymensingh">Mymensingh</option>
										<option value="rangpur">Rangpur</option>
										<option value="sylhet">Sylhet</option>
										<option value="barishal">Barishal</option>
										<option value="rajshahi">Rajshahi</option>
									</select>
								</div>
								<div className="flex flex-col gap-y-1">
									<label htmlFor="brand">Price</label>
									<input name="price" id="price" type="text" className="min-h-12 transition duration-200 ease-in-out focus:outline-none h-11 md:h-12 rounded-md py-2.5 px-9 bg-white border text-blacks border-blacks focus:border-mtyellow" />
								</div>
								<div className="flex flex-col gap-y-1">
									<label htmlFor="brand">What Car do you drive</label>
									<input name="drive" id="drive" type="text" className="min-h-12 transition duration-200 ease-in-out focus:outline-none h-11 md:h-12 rounded-md py-2.5 px-9 bg-white border text-blacks border-blacks focus:border-mtyellow" />
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
										<input type="text" className="min-h-12 transition duration-200 ease-in-out focus:outline-none h-11 md:h-12 rounded-md py-2.5 px-9 bg-white border text-blacks border-blacks focus:border-mtyellow" />
									</div>
								</div>
								<div className="flex flex-col gap-y-1">
									<div className="flex flex-col gap-y-1">
										<label htmlFor="brand">Email</label>
										<input type="text" className="min-h-12 transition duration-200 ease-in-out focus:outline-none h-11 md:h-12 rounded-md py-2.5 px-9 bg-white border text-blacks border-blacks focus:border-mtyellow" />
									</div>
								</div>
								<div className="flex flex-col gap-y-1">
									<div className="flex flex-col gap-y-1">
										<label htmlFor="brand">Phone</label>
										<input type="text" className="min-h-12 transition duration-200 ease-in-out focus:outline-none h-11 md:h-12 rounded-md py-2.5 px-9 bg-white border text-blacks border-blacks focus:border-mtyellow" />
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
