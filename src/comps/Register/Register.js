import React, { Component } from 'react'
import { Link, browserHistory } from 'react-router'
import { observer } from 'mobx-react'
import { observable } from 'mobx'
import axios from 'axios'
import './Register.styl'

import userStore from '../stores/UserStore'

@observer
export default class Register extends Component {

  render() {
    return(
      <div className="Register">

      </div>
    )
  }
}
