# Marked Capability Test Suite

## 1. Text Formatting

* **Bold Text**: **This is bold**
* *Italic Text*: *This is italic*
* ~~Strikethrough~~: (GFM extension)
* `Inline Code`: Testing `const x = 10;`

---

## 2. Lists

* [x] Completed task
  * [ ] Incomplete task
* [ ] Task with *formatting*

* sample
  * sample
* sample

1. sample
   1. eewf
2. ewgfrg

---

## 3. Blockquotes
>
> This is a single-line blockquote.
>> This is a nested blockquote.

---

## 4. Code Blocks

Testing syntax highlighting for JavaScript:

```javascript
function greet(name) {
  console.log(`Hello, ${name}!`);
}

greet('Marked User');
```

---

## 5. Tables (GFM)

| Feature   | Supported |          Notes |
| :-------- | :-------: | -------------: |
| Tables    |    Yes    |  Right-aligned |
| Alignment |    Yes    | Center-aligned |

---

## 6. Links and Images

* **Standard Link**: [Marked Documentation](https://wefwefw.rwe)
* **Image**: ![Marked Logo](https://marked.js.org/img/logo-black.a69118b0.png)

---

## 7. Mathematical Expressions (LaTeX)

Inline: $E = mc^2$

Display:
$$\frac{-b \pm \sqrt{b^2 - 4ac}}{2a}$$

---

---

## 9. Edge Cases

* Escaping: \*This should not be italic\*
* Links inside **[bold text](https://google.com)**
* `Code with **markdown** inside` (should not render bold)
