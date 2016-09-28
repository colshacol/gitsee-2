import React, { Component } from 'react'
import { Link, browserHistory } from 'react-router'
import { observer } from 'mobx-react'
import { observable } from 'mobx'
import axios from 'axios'
import './Result.styl'

import userStore from '../stores/UserStore'

@observer
export default class Result extends Component {

  render() {
    return(
      <div className="Result">

      </div>
    )
  }
}
