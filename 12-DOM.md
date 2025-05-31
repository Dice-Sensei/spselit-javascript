# Domain Object Model

DOM or Domain Object Model is a document - the website which we see. It is tree like structure from nodes which can be manipulated from **Javascript**.

Domain Object Model is build from provided `*.html` file before page is rendered to user.

## Selecting values

Nodes can be selected by many functions. Recommended way is to use
`querySelector()` other options are `getElementById()`, `getElementsByTagName()` and many more. These functions are available on top of `document` - selecting values from whole document or on specific elements - selecting values from children of given element.

### querySelector()

Query selector is using [CSS selector](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_selectors) to select elements (nodes) from document. This provides many options for targeting specific elements.

Query selector allows to select one (first) element via `document.querySelector()` or all of them via `document.querySelectorAll()`.

Example:

    const item = document.querySelector(".operator");
    const links = document.querySelectorAll("a");

### getElementById()

It is possible to select one specific node via `document.getElementById()`. IDs have to be unique for whole document.

Example:

    const item = document.getElementById("clear-all-btn");

### getElementsByTagName()

This function selects all elements of given type.

Example:

    const item = document.getElementsByTagName("a");

Returned collection is quite specific as it **live** collection - it will get updated if another element of given type is added under element on which selection was called. Manipulation of given collection can be realized same way as it was **array**.
