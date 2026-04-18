import { useEffect } from "react";

import { MarkdownPage } from "darkpages";
import "darkpages/themes/default.css";

function App() {
	useEffect(() => {
		document.title = "DarkPages Test";
	}, []);
	return <>{<MarkdownPage filePath="./sample.md"></MarkdownPage>}</>;
}

export default App;
