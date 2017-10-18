import { DateCell, ImageCell, LinkCell, TextCell } from '../datatableHelpers/cells';
import { Table, Column, Cell } from 'fixed-data-table-2';
import React from 'react';
import { connect } from 'react-redux';
import { fetchSurveys, fetchTotal } from '../../actions';

class PaginatedSurveyList extends React.Component {
  constructor(props){
    super(props);
  }
  componentDidMount(){
    this.props.fetchSurveys();
    //this.props.fetchTotal('surveys');
  }

  render(){
    const {surveys} = this.props;
    if(!surveys || this.props.surveys.length ==0){
       console.log("props in paginated", this.props);
       return (<div></div>);
    }
    
    //const total = this.props.pagination.total || 0;
    const total = surveys.length;

    console.log("props in paginated", this.props);
    return (
      <Table
          rowHeight={50}
          headerHeight={50}
          rowsCount={total}
          width={1000}
          height={500}
          {...this.props}>
          <Column
              header={<Cell>row Index</Cell>}
              cell={({rowIndex}) => (<Cell>{rowIndex}</Cell>)}
              fixed={true}
              width={50}
            />
          <Column
            columnKey="title"
            header={<Cell>Title</Cell>}
            cell={<TextCell data={surveys} />}
            width={100}
          />
          <Column
            columnKey="subject"
            header={<Cell>Subject</Cell>}
            cell={<TextCell data={surveys} />}
            width={200}
          />
    </Table>);
  }
}

function mapStateToProps(state){
  console.log("map state to props", state);
    return {
        surveys: state.surveys,
        pagination:  state.pagination
    }
}
export default connect(mapStateToProps,{ fetchSurveys, fetchTotal })(PaginatedSurveyList);