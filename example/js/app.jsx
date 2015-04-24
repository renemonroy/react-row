import React from 'react';
import Row from './row.jsx';

let App = React.createClass({

  displayName : 'App',

  render() {
    var st = this.state;
    return (
      <div {...this.props} className="app">
        <Row>
          <p>Column 1</p>
          <p>Column 2</p>
          <p>Column 3</p>
        </Row>
      </div>
    );
  }
  
});

export default App;