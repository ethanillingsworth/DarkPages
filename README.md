# DarkPagesMD

A javascript library that turns the default README.md viewer of Github Pages into a dark version.

## Setup

To get started import the javascript file into a module like this

global.js
```js
import { DarkPages } from "./dark.js";
// or
import { DarkPages } from "https://ethanillingsworth.github.io/DarkPagesMd/dark.js";
```

Then call the init function, this will display README.md on the default path.

global.js
```js
import { DarkPages } from "https://ethanillingsworth.github.io/DarkPagesMd/dark.js";

DarkPages.init()
```

Import the css and global.js to index.html

index.html
```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script type="module" src="global.js"></script>
    <link rel="stylesheet" href="https://ethanillingsworth.github.io/DarkPagesMd/dark.css">
</head>

<body>

</body>

</html>
```


## Add more pages

if you want more pages just create more markdown and html files and add tabs in your javascript file from before

Sample.md
```md
# Sample
Sacréfice de gériboire de cimonaque de sacrament 
de saintes fesses d'enfant d'chienne de cibolac 
de p'tit Jésus de mautadine d'ostifie de câlisse.
```

Create html file with the same name (case sensitive) and import your js file (in this case global.js)

Sample.html
```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script type="module" src="global.js"></script>
    <link rel="stylesheet" href="https://ethanillingsworth.github.io/DarkPagesMd/dark.css">
</head>

<body>

</body>

</html>

```

Now all thats left to do is to add to the tab list, this can be done with DarkPages.addTab,
followed by the text, and link to the html file

global.js
```js
import { DarkPages } from "https://ethanillingsworth.github.io/DarkPagesMd/dark.js";

DarkPages.init()
DarkPages.addTab("Sample", "../Sample.html")
```