import { useState } from "react";
import sliderBg from "./assets/icon-slider.svg";
import listIcon from "./assets/icon-check.svg";

export function PricingComponent() {
	const [price, setPrice] = useState(0);
	const [isYearly, setIsYearly] = useState(false);
	const max = 32;
	const percents = (price / max) * 100;

	return (
		<section className="px-4">
			<div className="bg-white rounded-lg shadow-md max-w-140 mx-auto">
				<div className="component-head px-2 py-6 sm:px-10">
					<div className="component-top sm:flex sm:flex-wrap sm:items-center">
						<p className="text-center text-[hsl(225,20%,60%)] font-semibold uppercase text-xs tracking-widest sm:w-1/2 sm:text-left sm:h-fit sm:text-sm">
							100k PAGEVIEVS
						</p>
						<div className="slider-box group my-8 relative sm:order-2 sm:w-full sm:mt-12">
							<input
								type="range"
								value={price}
								min={0}
								max={32}
								id=""
								className="slider block mx-auto appearance-none w-full h-1.75 bg-[hsl(224,65%,95%)] rounded-[5px] cursor-pointer"
								onChange={(e) => {
									setPrice(Number(e.target.value));
								}}
							/>
							<div
								className="slider-btn absolute w-8.75 h-8.75 top-1/2 left-1/2 z-3 shadow-[0_10px_30px_hsl(174,86%,45%)] pointer-events-none cursor-pointer rounded-full -translate-1/2 bg-no-repeat bg-center bg-[hsl(174,86%,45%)] group-hover:bg-[hsl(174,86%,50%)] group-active:bg-[hsl(174,88%,42%)] transition-colors duration-300"
								style={{
									left: percents + "%",
									backgroundImage: `url("${sliderBg}")`,
								}}></div>
							<div
								className="progress-bar w-1/2 absolute h-1.75 bg-[hsl(174,77%,80%)] top-0 left-0 z-2 rounded-[5px] pointer-events-none"
								style={{ width: percents + "%" }}></div>
						</div>
						<div className="price-info flex justify-center items-center gap-2 sm:w-1/2">
							<span className="text-[1.8rem] sm:text-[2.2rem] font-black text-[hsl(227,35%,25%)]">
								${isYearly ? (price * 12 * 0.75).toFixed(2) : price.toFixed(2)}
							</span>
							<span className="text-[hsl(225,20%,60%)]">/ month</span>
						</div>
					</div>
					<div className="switch-box mt-10 mb-5 flex justify-center gap-5 text-[0.85rem] sm:mt-5">
						<span className="text-[hsl(225,20%,60%)]">Monthly Billing</span>
						<button
							className="billing-toggler relative w-12 h-6 bg-[hsl(226,33%,88%)] rounded-full cursor-pointer hover:bg-[hsl(174,86%,45%)] transition-colors duration-300"
							onClick={() => setIsYearly(!isYearly)}>
							<span
								className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full transition-[left] duration-300"
								style={{ left: isYearly ? "28px" : "4px" }}></span>
						</button>
						<p className="text-[hsl(225,20%,60%)]">
							Yearly Billing
							<span className="ml-2 discount font-bold px-2 py-1 bg-[hsl(0,89%,96%)] text-[hsl(15,100%,70%)] rounded-full text-[0.7rem]">
								-25%
								<span className="hidden sm:inline"> discount</span>
							</span>
						</p>
					</div>
				</div>
				<div className="divider bg-[#d7dcea71] h-0.5"></div>
				<div className="component-body px-2 py-6 sm:flex sm:items-center sm:px-10 sm:justify-between">
					<ul className="list list-none flex flex-col items-center gap-3 text-[hsl(225,20%,60%)] sm:items-start">
						<li className="flex items-center gap-4 font-semibold text-sm">
							<img width={12} src={listIcon} alt="" />
							Unlimited websites
						</li>
						<li className="flex items-center gap-4 font-semibold text-sm">
							<img width={12} src={listIcon} alt="" />
							100% data ownership
						</li>
						<li className="flex items-center gap-4 font-semibold text-sm">
							<img width={12} src={listIcon} alt="" />
							Email reports
						</li>
					</ul>
					<button className="py-3 px-11 text-sm font-semibold block mt-5 mx-auto rounded-full text-[hsl(226,100%,87%)] bg-[hsl(227,35%,25%)] cursor-pointer hover:text-white transition-colors duration-300 sm:m-0">
						Start my trial
					</button>
				</div>
			</div>
		</section>
	);
}
