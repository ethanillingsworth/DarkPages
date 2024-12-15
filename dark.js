import { marked } from "https://cdn.jsdelivr.net/npm/marked/lib/marked.esm.js";

import hljs from 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/es/highlight.min.js';

const content = document.createElement("div")
content.id = "content"

function giveHeadingIds(headingType) {
    document.querySelectorAll(headingType).forEach((h) => {
        h.id = h.innerText.replaceAll(" ", "-").replaceAll("'", "").toLowerCase()
    })
}

console.log("This site is running DarkPagesMD v1.0.1 https://github.com/ethanillingsworth/DarkPagesMD")

export class DarkPages {
    static tabList = []

    static init() {
        const tabL = document.createElement("div")
        tabL.id = "tabList"

        document.body.append(tabL)
        document.body.append(content)
        this.fetchPage()
    }

    static addTab(text, pathToMd) {
        this.tabList.push({ text: text, href: pathToMd })
        this.refreshTabList()
    }

    static refreshTabList() {
        const tabL = document.getElementById("tabList")

        tabL.innerHTML = ""

        this.tabList.forEach((tab) => {
            const t = document.createElement("a")
            t.innerText = tab.text
            t.href = tab.href

            tabL.append(t)
        })
    }

    static fetchPage() {
        let file = window.location.href.replace(".html", ".md")

        // if not an md file assume README.md
        if (window.location.href.endsWith("index.html")) {
            file = "../README.md"
        }

        if (!window.location.href.endsWith(".html")) {
            file = window.location.href + "/README.md"
        }


        fetch(file)
            .then(async (res) => {
                content.innerHTML = marked.parse(await res.text())

                if (document.querySelector("h1")) {

                    document.title = document.querySelector("h1").innerText
                }

                const headingTypes = ["h1", "h2", "h3", "h4", "h5", "h6"]

                headingTypes.forEach((heading) => {
                    giveHeadingIds(heading)
                })

                hljs.highlightAll();

            })
    }

}