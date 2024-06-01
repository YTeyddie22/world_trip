import styles from "./Sidebar.module.css";
import Logo from "../Logo/Logo";
import AppNav from "../AppNav/AppNav";
import Footer from "../Footer/Footer";
function SideBar() {
	return (
		<div className={styles.sidebar}>
			<Logo />
			<AppNav />

			<p>List of cities</p>
			<Footer />
		</div>
	);
}

export default SideBar;
