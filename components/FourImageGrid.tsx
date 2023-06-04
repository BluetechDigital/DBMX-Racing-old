import {FC} from "react";
import {motion} from "framer-motion";
import {fadeInUp, stagger} from "../animations/animations";
import FourImageGridCard from "./Cards/FourImageGridCard";

interface IProps {
	title: string;
	servicesGrid: [
		{
			id: string;
			title: string;
			link: {
				url: string;
				title: string;
				target: string;
			};
			image: {
				altText: string;
				sourceUrl: string;
				mediaDetails: {
					height: number;
					width: number;
				};
			};
		}
	];
}

const FourImageGrid: FC<IProps> = ({title, servicesGrid}) => {
	return (
		<section className="py-12 bg-pureBlack md:pt-16 md:pb-20">
			<div className="container px-4 mx-auto">
				<div className="flex flex-wrap items-end mb-10 -mx-4">
					<div className="w-full max-w-xl px-4 mb-6 xl:w-3/5 sm:mb-0">
						<motion.h2
							variants={fadeInUp}
							className="text-3xl font-bold text-white md:text-4xl"
						>
							{title}
						</motion.h2>
					</div>
				</div>
				<motion.div
					variants={stagger}
					className="flex flex-col items-center -mx-4 sm:grid sm:grid-cols-2"
				>
					{servicesGrid?.length > 0 ? (
						servicesGrid.map((item: any, keys: any) => (
							<FourImageGridCard
								key={keys}
								link={item?.link}
								title={item?.title}
								image={item?.image}
							/>
						))
					) : (
						<></>
					)}
				</motion.div>
			</div>
		</section>
	);
};

export default FourImageGrid;
