import React from 'react/addons';

let App = React.createClass({
  displayName : 'App',
  render() {
    var st = this.state;
    return (
      <div {...this.props} className="app">
        <p>App</p>
      </div>
    );
  }
});

export default App;