import { useEffect } from "react";
import "./App.css";
import sampleMarkdown from "./sample.md";

// import MarkdownPage from "darkpages";

function App() {
    useEffect(() => {
        document.title = "DarkPages Test";
    }, []);
    return <>{/* <MarkdownPage filePath={sampleMarkdown}></MarkdownPage> */}</>;
}

export default App;
