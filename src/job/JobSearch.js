// https://reactjsexample.com/a-simple-and-powerful-datatable-for-react/
// https://mbrn.github.io/material-table/#/

import React from 'react';
import "./JobSearch.css";
import MaterialTable from 'material-table'

class JobSearch extends React.Component {
  state = {}
  render() {
    const {} = this.state;
    const {} = this.props;
    return (
      <div>
        <MaterialTable
            columns={[
              { title: 'MO code', field: 'mo_code' },
              { title: 'Star Number', field: 'star_no' },
              { title: 'Status', field: 'status'},
              { title: 'Last station', field: 'last_station'},
            ]}
            data={[
              { mo_code: 'MO101', star_no: 'S0L24G1 245185', status: 'In Progress', last_station: 'ZPF Testing'},
              { mo_code: 'MO102', star_no: 'S0L24G1 245185', status: 'Done', last_station: 'Before Painting inspection'}
            ]}
            actions={[
              {
                icon: 'call_made',
                onClick: (e, rowData) => {
                  this.props.history.push(`/admin/job-detail/${rowData.mo_code}`)
                }
              }
            ]}
            title="Job List"
          />
      </div>
    )
  }
}

export default JobSearch;