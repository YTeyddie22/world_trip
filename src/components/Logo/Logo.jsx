import styles from "./Logo.module.css";
import { Link } from "react-router-dom";

function Logo() {
	return (
		<Link to='/'>
			<img
				src='/assets/logo.png'
				alt='WorldTrip logo'
				className={styles.logo}
			/>
		</Link>
	);
}

export default Logo;
