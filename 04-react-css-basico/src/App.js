import React, { useState } from "react";
import MyComponentTest from "./Components/MyComponentTest";
import CustomComponent from "./Components/CustomComponent";

const App = () => {
	const [greenTitle, setGreenTitle] = useState(true);
	const bTeste = true;

	return (
		<div>
			<h1>App.js Title</h1>
			<p>Paragraph in App.js</p>

			<MyComponentTest />

			<p style={{ color: "#EA5F08", background: "#06F1E2", padding: "50px" }}>
				Inline CSS Paragraph
			</p>

			<p
				style={
					bTeste
						? { color: "#D205F7", background: "yellow" }
						: { color: "#5E0217", background: "#BB9A86" }
				}
			>
				Dynamic Inline CSS Paragraph
			</p>

			{/* CSS com Classes Dinâmicas */}
			<h2 className={greenTitle ? "green-title" : "title"}>
				Dynamic Class CSS Title
			</h2>
			<CustomComponent />
		</div>
	);
};

export default App;
