require('../css/row.scss');

import React from 'react';
import Draggable from 'react-draggable';

/**
 * Column is used by Row to build containers around immediate children
 * components of a row. This will be automatically adjusted in size to fit
 * the entire row. Columns can have fixed width only if its has a prop
 * colWidth set.
 */
let Column = React.createClass({
  displayName : 'Column',
  getInitialState() {
    var ps = this.props;
    return { width : ps.initialWidth ? parseInt(ps.initialWidth) : null };
  },
  renderChild() {
    var col = this;
    return React.Children.map(this.props.children, (child) => {
      if ( col.props.initialWidth ) {
        return React.cloneElement(child, { colWidth : col.state.width + 'px' });
      }
      return child;
    });
  },
  render() {
    var st = this.state,
      styles = { flex : st.width ? '0 1 ' + st.width + 'px' : '1' };
    return (
      <div {...this.props} style={styles} className="column">
        { this.renderChild() }
      </div>
    );
  }
});

/**
 * Row wraps children into columns to control layouts with the help of flex
 * styles. Each column can be fixed but by default will be elastic.
 */
let Row = React.createClass({
  displayName : 'Row',
  getInitialState() {
    var ps = this.props;
    return { resizable : ps.resizable };
  },
  renderColumns(comps) {
    var row = this, cols = [],
      rowName = row.props.rowName ? row.props.rowName + '-' : '';
    comps.forEach( (comp, i) => {
      var colName = rowName + 'col-' + i,
        colWidth = comp.props.colWidth || null;
      cols.push(
        <Column key={ colName } ref={ colName } initialWidth={ colWidth } >
          { comp }
        </Column>
      );
    });
    return cols;
  },
  render() {
    var comps = this.props.children;
    return (
      <div className="row">
        { comps.length > 0 ? this.renderColumns(comps) : null }
      </div>
    );
  }
});

export default Row;