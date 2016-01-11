'use strict';

import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';

import objectAssign from 'react/lib/Object.assign';
import classNames from 'classnames';
import styles from './_MorphSearch.scss';
import searchIcon from './search.svg';
import closeIcon from './close.svg';
import InlineSVG from 'svg-inline-react/lib';

export default class MorphSearch extends React.Component {
    static propTypes = {
        children: PropTypes.node,
        open: PropTypes.bool,
        onOpen: PropTypes.func,
        onClose: PropTypes.func
    };

    componentDidMount(){
      this.refs.mainComponent.addEventListener("animationend", this._handleAnimationEnd, false);
    }

    _handleOpen = ()=>{
      this.props.onOpen();
      const elem = ReactDOM.findDOMNode(this);
      const bound = elem.getBoundingClientRect();

      this.setState({noAnim: true,
          style: {
            left:bound.left,
            top: bound.top,
            width: bound.width,
            height: bound.height,
            minHeight: bound.height
          }
        }
      )
    };

    _handleAnimationEnd = ()=>{
      if(!this.props.open){
        this.setState({style: {}});
      }
    };


    _handleClose = ()=>{
      this.props.onClose();
    };

    renderMorphForm(){
        return(
          <form className={styles.morphForm}>
              <input
                type="search"
                className={styles.morphInput}
                onClick={this._handleOpen}
                placeholder="Search...">
              </input>
              <button
                type="submit"
                className={styles.morphButton}
              >
                <InlineSVG src={searchIcon}/>
              </button>
          </form>
        )
    }

    renderContent(){
      return (
        <div className={styles.content}>
          {this.props.open? this.props.children: ''}
        </div>
      );
    }

    render() {
        let classes = classNames({
            [styles.morphSearch]: true,
            [styles.open]: this.props.open,
            [styles.noAnimation]: !this.state || !this.state.noAnim
        });
        return (
            <div
              className={classes}
              style={this.state? this.state.style:{}}
              ref="mainComponent">
                {this.renderMorphForm()}
                {this.renderContent()}
              <button
                onClick={this._handleClose}
                className={styles.closeButton}
              >
                <InlineSVG src={closeIcon}/>
              </button>
            </div>
        );
    }
}
