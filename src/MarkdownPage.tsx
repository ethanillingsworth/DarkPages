import { Marked } from "marked";
import markedKatex from "marked-katex-extension";
import { useEffect, useState, type ReactNode } from "react";

import hljs from "highlight.js";

export default function MarkdownPage({ filePath = "index.md" }): ReactNode {
	const [html, setHtml] = useState("");
	useEffect(() => {
		fetch(filePath)
			.then((response) => response.text())
			.then(async (text) => {
				const marked = new Marked().use(
					markedKatex({ throwOnError: false, nonStandard: true }),
				);
				const markdownHtml: string = await marked.parse(text);

				setHtml(markdownHtml);
			});
	}, [filePath]);

	useEffect(() => {
		hljs.highlightAll();
	}, [html]);

	return (
		<div className="md">
			<div
				className="inner"
				dangerouslySetInnerHTML={{ __html: html }}
			></div>
		</div>
	);
}
