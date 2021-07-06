import classes from './HomeBanner.module.css';

const HomeBanner = () => {
	return (
		<section className={classes.HomeBanner}>
			<img src="../.../..//images/adeola-web.jpg" alt="AdeOla" />
			<div className={classes.HomeBannerText}>
				<h1>
					<span className={classes.Firstname}>Adenike</span>{' '}
					<span className={classes.Lastname}>& Olalekan</span>
				</h1>
			</div>
		</section>
	);
};

export default HomeBanner;
