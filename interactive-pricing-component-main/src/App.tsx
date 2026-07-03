import { Header } from "./Header.tsx";
import { PricingComponent } from "./PricingComponent.tsx";
import bgPattern from "./assets/bg-pattern.svg";
function App() {
	return (
		<main className="relative min-h-screen w-full bg-[hsl(230,100%,99%)] z-0">
			<img
				className="min-h-[45vh] absolute top-0 left-0 -z-1"
				src={bgPattern}
				alt=""
			/>
			<Header />
			<PricingComponent />
		</main>
	);
}

export default App;
