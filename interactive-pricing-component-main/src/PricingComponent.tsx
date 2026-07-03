import { useState } from "react";
import sliderBg from "./assets/icon-slider.svg";

export function PricingComponent() {
	const [price, setPrice] = useState(0);
	const [toggleValue, setToggleValue] = useState(false);

	const max = 32;
	const percents = (price / max) * 100;

	return (
		<section className="px-4">
			<div className="bg-white px-2 py-6 rounded-lg shadow-md">
				<p className="text-center text-[hsl(225,20%,60%)] font-semibold uppercase text-xs tracking-widest">
					100k PAGEVIEVS
				</p>
				<div className="slider-box group my-8 relative">
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
				<div className="price-info flex justify-center items-center gap-2">
					<span className="text-[1.8rem] font-black text-[hsl(227,35%,25%)]">
						${price}.00
					</span>
					<span className="text-[hsl(225,20%,60%)]">/ month</span>
				</div>
				<div className="switch-box my-10 flex justify-center gap-5 text-[0.85rem]">
					<span className="text-[hsl(225,20%,60%)]">Monthly Billing</span>
					<button
						className="billing-toggler relative w-12 h-6 bg-[hsl(226,33%,88%)] rounded-full cursor-pointer hover:bg-[hsl(174,86%,45%)] transition-colors duration-300"
						onClick={() => setToggleValue(!toggleValue)}>
						<span
							className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full transition-[left] duration-300"
							style={{ left: toggleValue ? "28px" : "4px" }}></span>
					</button>
					<p className="text-[hsl(225,20%,60%)]">
						Yearly Billing
						<span className="ml-2 discount font-bold px-2 py-1 bg-[hsl(0,89%,96%)] text-[hsl(15,100%,70%)] rounded-full text-[0.7rem]">
							-25%
							{/* dodać tutaj czytanie szerokości ekranu!! */}
						</span>
					</p>
				</div>
			</div>
		</section>
	);
}
