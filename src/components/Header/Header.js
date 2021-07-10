import classes from './Header.module.css';

const Header = () => {
	return (
		<header className={classes.HeaderNav}>
			<div className={classes.Logo}>
				<span>A</span>
				<span>/</span>
				<span>O</span>
			</div>
			<nav className={classes.Nav}>
				<a href="#location">location</a>
				<a href="#gift_registry">gift registry</a>
			</nav>
			<div className={classes.Date}>
				<span>10</span>
				<span>/</span>
				<span>07</span>
			</div>
		</header>
	);
};

export default Header;
