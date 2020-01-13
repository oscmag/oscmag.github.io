import React from 'react';
import { withRouter } from 'react-router-dom';

import './Towers.css';

class Towers extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      map: [],
    };
  }

  componentDidMount = () => {
    this.createMap(13, 10);
  }

  createMap = (width = 10, height = 10) => {
    const map = [];

    for (let i = 0; i < height; i++) {
      const row = [];
      for (let j = 0; j < width; j++) {
        const tile = {type: 'grass', blocked: false};
        row.push(tile);
      }
      map.push(row);
    }

    this.setState({map});
    this.addTypes(map);
  }

  addTypes = (map) => {
    let newMap = map.slice();
    const types = [
      ['', '', '', '', '', '', 'water', '', '', '', '', '', ''],
      ['', '', '', '', '', '', 'bridge', '', '', '', '', '', ''],
      ['', '', '', '', '', '', 'water', '', '', '', '', '', ''],
      ['', '', '', '', '', '', 'water', '', '', '', '', '', ''],
      ['', '', '', '', '', '', 'water', '', '', '', '', '', ''],
      ['', '', '', '', '', '', 'water', '', '', '', '', '', ''],
      ['', '', '', '', '', '', 'water', '', '', '', '', '', ''],
      ['', '', '', '', '', '', 'water', '', '', '', '', '', ''],
      ['', '', '', '', '', '', 'bridge', '', '', '', '', '', ''],
      ['', '', '', '', '', '', 'water', '', '', '', '', '', ''],
    ]

    for (let i = 0; i < map.length; i++) {
      for (let j = 0; j < map[0].length; j++) {
        if (types[i][j]) {
          newMap[i][j].type = types[i][j];
        }
      }
    }

    this.setState({map: newMap});
  }

  addTowers = (map) => {
    let newMap = map.slice();
    const types = [
      ['', '', '', '', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', '', '', '', ''],
    ];

    for (let i = 0; i < map.length; i++) {
      for (let j = 0; j < map[0].length; j++) {
        if (types[i][j]) {
          newMap[i][j].type = types[i][j];
        }
      }
    }

    this.setState({map: newMap});
  }

  render() {
    const {map} = this.state;
    return(
      <div className='wrapper'>
        <div className='towers-menu'>
          {/* <div className='s-button' onClick={this.createMap}>Create map</div> */}
        </div>
        <div className='towers-map'>
          {
            map.map((row, i) => {
              return(
                <div className='towers-row' key={i}>
                  {row.map((tile, i) => {
                    return (
                      <div className={`tile ${tile.type}`} key={i}></div>
                    )
                  })}
                </div>
              )
            })
          }
        </div>
      </div>
    );
  }
}

export default withRouter(Towers);

