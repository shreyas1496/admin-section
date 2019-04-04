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
              { title: 'Sr.NO', field: 'srno' },
              { title: 'Station Name', field: 'station_name' },
              { title: 'Status', field: 'status'},
              { title: 'Time', field: 'time'},
              { title: 'Operator', field: 'operator'},
            ]}
            data={[
              { srno: '1', station_name: 'NDE assembly & Fitment', status: 'Done', time: '11.55 AM', operator: 'abc' },
              { srno: '2', station_name: 'Electrical', status: 'Done', time: '11.55 AM', operator: 'pqr' },
              { srno: '3', station_name: 'ZPF Testing', status: 'In Progress', time: '14.55 AM', operator: 'zxc' },
              { srno: '4', station_name: 'Final Assembly', status: '', time: '', operator: '' },
              { srno: '5', station_name: 'Before Painting Inspection', status: '', time: '', operator: '' },
            ]}
            title="Job List"
          />
      </div>
    )
  }
}

export default JobSearch;