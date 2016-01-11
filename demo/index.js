'use strict';

import React from 'react';
import { render } from 'react-dom';
import MorphSearch from '../src/MorphSearch.jsx';
import styles from "./style.scss";

class Demo extends React.Component {
    constructor() {
        super();
      //setTimeout(this.handleOpen, 5000);
    }

    handleOpen = ()=>{
      this.setState({open: true});
    };

    handleClose = ()=>{
      this.setState({open: false});
    };

    state = {
        open: false
    };

    render() {
        return (
            <div>
                <h1>This is morph search test </h1>
              <span>dupa</span>
              <div style={{width:'400px', height: '50px'}}>
              <MorphSearch
                  open={this.state.open}
                  onOpen={this.handleOpen}
                  onClose={this.handleClose}
                >
                  asd asdasd
                </MorphSearch>
                </div>
            </div>
        );
    }
}

var container = document.createElement('div');
document.body.appendChild(container);
render(<Demo />, container);
