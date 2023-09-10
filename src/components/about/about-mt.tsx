
interface Props {
	className?: string;
}


const Aboutmt: React.FC<Props> = ({

}) => {
	return (
		<div className="grid grid-cols-1 md:grid-cols-3 justify-items-center gap-x-4 mb-12 lg:mb-14 xl:mb-16 py-12">
			<div className="max-w-[363px]">
                <div>
                    <img src="/assets/images/motortrader.png" alt="" />
                    <q className="text-xl font-bold mt-8"> We have the right products to fit your needs </q>
                    <span className="text-mtyellow text-xl font-bold">— MotorTrader</span>
                    <p className="text-ms mt-4">MotorTrader Bangladesh encompasses the only digital platform catering to potential 
                        buyers in regards to helping their needs in acquiring a new vehicle. Our platform’s 
                        soul agenda is to create an online marketplace which is transparent for both the
                         buyer and seller eradicating any doubts of legitimacy. We are a dedicated business 
                         for vehicle classifieds and our website’s simplicity and ease of use ensure 
                         potential client’s satisfaction.</p>
                </div>
            </div>
            <div className="max-w-[363px]">
                <div>
                    <img src="/assets/images/mission.png" alt="" />
                </div>
                <div className="mt-4">
                    <h3 className="text-blacks font-bold text-xl">Our Mission</h3>
                    <p className="text-blacks mt-2 ">MotorTrader is a classified website that deals with trading of motor vehicles. The main aim is to have a transparent and accessible marketplace for interested buyers and sellers.</p>
                </div>
            </div>
            <div className="max-w-[363px]">
                <div>
                    <img src="/assets/images/vision.png" alt="" />
                </div>
                <div className="mt-4">
                    <h3 className="text-blacks font-bold text-xl">Our Vision</h3>
                    <p className="text-blacks mt-2 ">MotorTrader aspires to be the biggest market place for motor vehicles online. The addition of wide range of products and services will help create value for the customers as well as the company</p>
                </div>
            </div>
		</div>
	);
};

export default Aboutmt;