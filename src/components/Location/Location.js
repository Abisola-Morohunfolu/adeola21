import classes from './Location.module.css';
const Location = () => {
	// const placeId = 'origin=place_id:ChIJVcUGAAGNORAROnd_p4s5Kh0';
	const q = 'Institute+of+Agricultural+Research+and+Training';

	return (
		<section className={classes.Location}>
			<h4 className={classes.LocationHeading}>the location</h4>
			<iframe
				title="Location"
				width="600"
				height="450"
				style={{ border: 0 }}
				loading="lazy"
				allowfullscreen
				src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBIJHwQ1v2z24-ETB-Huosk9aVJ_BZrnQY&q=${q}`}
			></iframe>
		</section>
	);
};

export default Location;
