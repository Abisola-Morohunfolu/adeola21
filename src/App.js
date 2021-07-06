import DateSection from './components/DateSection/DateSection';
import Header from './components/Header/Header';
import HomeBanner from './components/HomeBanner/HomeBanner';

function App() {
	return (
		<>
			<Header />
			<main>
				<HomeBanner />
				<DateSection />
			</main>
		</>
	);
}

export default App;
