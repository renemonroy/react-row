# react-row
React component created to build complex layouts based on rows and columns (optionally resizable) throught the use of **flex**.

## Overview
The idea is simple. You add children components to a `<Row />` and each child will be appended into columns. Each `<Column />` act as container where its dimension is calculated automatically by changing flex values.

Requires **react-draggable** to support resizing and the code is written using ES6 with Babel. A module blunder like Webpack will be needed.

## Usage
Simply add as immediate children all those components that you want to be in different columns.

```javascript
  'use strict';
  
  import React from 'react/addons';
  import Row from './row.js';
  
  let Example = React.createClass({
    displayName : 'Example',
    render() {
      return (
        <div className="example">
          <Row>
            <section>My block 1</section>
            <section>My block 2</section>
            <section>My block 3</section>
          </Row>
        </div>
      );
    }
  });
  
  module.exports = Example;
```

The code above will render something like this:

```html
  <div class="example">
    <div class="row">
      <div class="column" style="flex : 1">
        <section>My block 1</section>
      </div>
      <div class="column" style="flex : 1">
        <section>My block 2</section>
      </div>
      <div class="column" style="flex : 1">
        <section>My block 3</section>
      </div>
    </div>
  </div>
```

## Props

* **resizable** - To make all columns resizable inside a Row. Is set `false` by default.

```javascript
  <div className="app">
    <Row resizable="true">
      <p>Column 1</p>
      <p>Column 2</p>
      <p>Column 3</p>
    </Row>
  </div>
```

* **rowName** - To remember the width of each columns, just add a rowName to each row component. This uses localStorage to cache values.

```javascript
  <div className="app">
    <Row rowName="first-row">
      <p>Column 1</p>
      <p>Column 2</p>
      <p>Column 3</p>
    </Row>
  </div>
```

* **colWidth** - Pass a `colWidth` in px to immediate child component to set an initial width to a column and make all others flexible. This will work only the first time if `rowName` is set to remember dimensions.

```javascript
  <div className="app">
    <Row>
      <p>Column 1</p>
      <p colWidth="100">Column 2</p>
      <p>Column 3</p>
    </Row>
  </div>
```

## Example

To run the example you need [Node.js](https://nodejs.org/) installed and [Webpack](http://webpack.github.io/) dev server.

1. On the example folder run `npm install` to install dev dependencies and loaders.
2. And then exec `webpack-dev-server --progress --colors`, this will run a server on `localhost:8080`.
