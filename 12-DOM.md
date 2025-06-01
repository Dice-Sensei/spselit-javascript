# Domain Object Model

DOM or Domain Object Model is a document - the website which we see.

Domain Object Model is build from provided `*.html` file before page is rendered to user.

## Structure

DOM is represented as a node tree. The root is website which has two direct children `doctype` and `html` then `html` has children `head` and `body` and so on creating whole website.

All these nodes can be be manipulated from **Javascript**. Not just editing current but also adding and removing them.

Note: Manipulation of DOM is resource intensive and many frameworks either manipulate virtual version and then swap it or batch changes to it.

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

Returned collection is quite specific as it **live** collection - it will get updated if another element of given type is added under element on which selection was called. Manipulation of given collection can be realized via functions.

## Manipulating values

Selected element is an object of specific type mostly [HTML Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) but it also provides all inherited properties and methods.

There are lots of properties which can be read and set.

School: We will check out only few of them.

### innerText

String representation of inner values - just string values.

In leaf nodes it can be used to edit inner value.

### style

Contains all styles (CSS).

It can be used to update styles for given element.

### classList

Collection of CSS classes associated with given element.

It can be used to add or remove classes for given element.

### children

Live collection of child nodes.

For manipulation of this collection functions must be used. But it is possible to add new elements and remove existing.
