import React from "react";
import "./MyComponentTest.css";

const MyComponentTest = ({ children }) => {
	return (
		<div>
			<h1>MyComponentTest</h1>
			<p className="my_comp_paragraph">
				Este parágrafo é do componente com uma regra mais rígida.
			</p>
			{children}
		</div>
	);
};

export default MyComponentTest;
