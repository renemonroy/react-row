# react-row
React component created to build complex layouts based on rows and columns (optionally resizable) throught the use of **flex**.

## Overview
The idea is simple. You add children components to a `<Row />` and each child will be appended into columns. Each `<Column />` act as container where its dimension is calculated automatically by changing flex values. Requires **react/addons** if `resizable` prop is set to `true`.

## Usage
Simply add as immediate children all those components that you want to be in different columns.

```javascript
  'use strict';
  
  import React from 'react/addons';
  import Row from './row.js';
  
  let Example = React.createClass({
    displayName : `Example`,
    render() {
      <div className="example">
        <Row>
          <section>My block 1</section>
          <section>My block 2</section>
          <section>My block 3</section>
        </Row>
      </div>
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
