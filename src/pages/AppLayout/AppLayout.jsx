//import AppNav from "../../components/AppNav/AppNav";
import SideBar from "../../components/Sidebar/SideBar";
import Map from "../../components/Map/Map";
import styles from "./AppLayout.module.css";

function AppLayout() {
	return (
		<div className={styles.app}>
			<SideBar />
			<Map />
		</div>
	);
}

export default AppLayout;
