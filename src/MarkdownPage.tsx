import { marked } from "marked";
import { useEffect, useState, type ReactNode } from "react";

export default function MarkdownPage({ filePath = "index.md" }): ReactNode {
    const [html, setHtml] = useState("");
    useEffect(() => {
        fetch(filePath)
            .then((response) => response.text())
            .then(async (text) => {
                const markdownHtml: string = await marked.parse(text);
                setHtml(markdownHtml);
            });
    }, [filePath]);

    return (
        <div
            className="dp:md"
            dangerouslySetInnerHTML={{ __html: html }}
        />
    );
}
