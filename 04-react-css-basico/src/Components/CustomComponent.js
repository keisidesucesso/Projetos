import React from "react";
import styles from "./CustomComponent.module.css";

const CustomComponent = () => {
	return (
		<div>
			<h1 className={styles.my_title}>Meu componente com CSS personalizado.</h1>
		</div>
	);
};

export default CustomComponent;
