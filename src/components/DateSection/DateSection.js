import classes from './DateSection.module.css';

const DateSection = () => {
	return (
		<section className={classes.DateSection}>
			<div className={classes.Date}>
				<h5 className={classes.DateHeading}>the date</h5>
				<p className={classes.DateText}>Saturday July 10, 2021</p>
			</div>
			<div className={classes.VenueBox}>
				<div className={classes.ImgContainer}>
					<img src="../../../images/registry.png" alt="Adeola at the registry" />
				</div>
				<div className={classes.Venue}>
					<h5 className={classes.DateHeading}>the venue</h5>
					<p className={classes.DateText}>DR K.J Nwufoh Hall IAAR&T Moor Plantation Ibadan</p>
					<button className={classes.Button}>get directions</button>
				</div>
			</div>
		</section>
	);
};

export default DateSection;
