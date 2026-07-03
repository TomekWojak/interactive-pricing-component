import { Header } from "./Header.tsx";
import bgPattern from "./assets/bg-pattern.svg";
function App() {
	return (
		<main className="relative min-h-screen w-full">
			<img className="min-h-[30vh] absolute -z-1" src={bgPattern} alt="" />
			<Header />
		</main>
	);
}

export default App;
