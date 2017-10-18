const { Cell } = require('fixed-data-table-2');
const React = require('react');

class TextCell extends React.PureComponent {
  render() {
    const {data, rowIndex, columnKey, ...props} = this.props;
    return (
      <Cell {...props}>
        {data[rowIndex][columnKey]}
      </Cell>
    );
  }
};
module.exports.TextCell = TextCell;

