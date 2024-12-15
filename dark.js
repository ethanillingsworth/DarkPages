import { marked } from "https://cdn.jsdelivr.net/npm/marked/lib/marked.esm.js";

import hljs from 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/es/highlight.min.js';

const content = document.createElement("div")
content.id = "content"

document.body.append(content)

function giveHeadingIds(headingType) {
    document.querySelectorAll(headingType).forEach((h) => {
        h.id = h.innerText.replaceAll(" ", "-").replaceAll("'", "").toLowerCase()
    })
}

fetch("./README.md")
    .then(async (res) => {
        content.innerHTML = marked.parse(await res.text())

        document.title = document.querySelector("h1").innerText

        const headingTypes = ["h1", "h2", "h3", "h4", "h5", "h6"]

        headingTypes.forEach((heading) => {
            giveHeadingIds(heading)
        })

        hljs.highlightAll();

    }) 