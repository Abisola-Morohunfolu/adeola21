import DateSection from './components/DateSection/DateSection';
import Header from './components/Header/Header';
import HomeBanner from './components/HomeBanner/HomeBanner';
import Location from './components/Location/Location';

function App() {
	return (
		<>
			<Header />
			<main>
				<HomeBanner />
				<DateSection />
				<Location />
			</main>
		</>
	);
}

export default App;
