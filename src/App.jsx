import "./App.css";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Header from "./components/Header";
import CardsSection from "./components/CardsSection";
import Card from "./components/Card";
import {cardsData} from "./data";
import {useState} from "react";

function App() {
	const [cartCount, setCartCount] = useState(0);

	return (
		<div>
			<Nav cartCount={cartCount} />
			<Header />
			<CardsSection>
				{cardsData.map((e, i) => (
					<Card cardProps={e} key={i + 1} cartCount={cartCount} setCartCount={setCartCount} />
				))}
			</CardsSection>

			<Footer />
		</div>
	);
}

export default App;
