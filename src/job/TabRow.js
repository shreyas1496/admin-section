import React from 'react';

class TabRow extends React.Component {
  state = {
    exapand: false
  }
  render() {
    const { list } = this.props;
    const { exapand } = this.state;
    return (
      <ul>
        {
          list.map(({ partCode, desc, level, nestedParts}) => <li key={partCode}>
          <div>
            <span style={{ border: '0.5px solid', padding: '2px'}}>{level}</span>
            <span style={{ border: '0.5px solid', padding: '2px'}}>{partCode}</span>
            <span style={{ border: '0.5px solid', padding: '2px'}}>{desc}</span>
            {
              nestedParts && <span><button onClick={() => this.setState({ exapand: !exapand})}>{exapand ? '-' : '+'}</button></span>
            }
          </div>
          {
            nestedParts && exapand && <TabRow list={nestedParts} />
          }
          </li>)
        }
      </ul>
    )
  }
}

export default TabRow;
