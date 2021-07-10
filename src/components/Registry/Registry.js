import classes from './Registry.module.css';

const Registry = () => {
	return (
		<section className={classes.Registry}>
			<div>
				<h4 className={classes.Heading}>gift registry</h4>
				<p className={classes.Paragraph}>
					Please know that your presence on our special day is the greatest present of all! However,
					if you do wish to celebrate with a gift, cash gifts would be appreciated.
				</p>
			</div>
			<div className={classes.Account}>
				<div>
					<h6>Morohunfolu Olalekan</h6>
					<p>2081433283</p>
					<p>UBA</p>
				</div>
				<div>
					<h6>Adenike Adefioye</h6>
					<p>1020297349</p>
					<p>Polaris Bank</p>
				</div>
			</div>
		</section>
	);
};

export default Registry;
