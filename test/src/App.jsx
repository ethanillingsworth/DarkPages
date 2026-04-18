import { MarkdownPage } from "darkpages";
import "darkpages/themes/default.css";

function App() {
	return (
		<>
			<MarkdownPage filePath="https://raw.githubusercontent.com/ethanillingsworth/DarkPages/refs/heads/main/README.md"></MarkdownPage>
		</>
	);
}

export default App;
