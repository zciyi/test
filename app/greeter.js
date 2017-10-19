"use strict";
import React, {Component} from 'react'
import config from './config.json';
import styles from './greeter.less'

class Greeter extends Component{
  render() {
    return (
      <div className={styles.root}>
        {config.tip}
      </div>
    );
  }
}

export default Greeter