import patternCircles from "./assets/pattern-circles.svg";
export function Header() {
	return (
		<header className="relative z-0 px-10 py-20 text-center">
			<img
				className="absolute left-1/2 top-1/2 -translate-1/2 -z-1"
				src={patternCircles}
				alt=""
			/>
			<h1 className="z-10 font-bold text-lg md:text-xl lg:text-3xl xl:text-[2.2rem] mb-3">
				Simple, traffic-based pricing
			</h1>
			<p className="text-md font-medium md:text-lg text-[hsl(225,20%,60%)]">
				Sign up for our 30-day trial. No credit card requaired
			</p>
		</header>
	);
}
