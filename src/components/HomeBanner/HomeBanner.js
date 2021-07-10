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
			<a
				href="https://res.cloudinary.com/abisola/image/upload/v1625893957/Wedding-Program_b1zlpz.jpg"
				download="adeola-program"
				className={classes.Link}
				target="_blank"
				rel="noreferrer"
			>
				download the program
			</a>
		</section>
	);
};

export default HomeBanner;
