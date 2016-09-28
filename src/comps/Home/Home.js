import React, { Component } from 'react'
import { Link, browserHistory } from 'react-router'
import { observer } from 'mobx-react'
import { observable } from 'mobx'
import axios from 'axios'
import './Home.styl'

import userStore from '../stores/UserStore'

@observer
export default class Home extends Component {

  render() {
    return(
      <div className="Home">
        <h1>home</h1>
      </div>
    )
  }
}
