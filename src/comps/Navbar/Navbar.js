import React, { Component } from 'react'
import { Link, browserHistory } from 'react-router'
import { observer } from 'mobx-react'
import { observable } from 'mobx'
import axios from 'axios'
import './Navbar.styl'

import userStore from '../stores/UserStore'

import SearchIcon from './search.svg'
import NavIcon from './equal.svg'

@observer
export default class Navbar extends Component {

  render() {
    return(
      <div className="Navbar">
        <p id="logo">GitSee</p>
        <div id="search">
          <input placeholder="owner/repo"/>
          <SearchIcon id="search-icon"/>
        </div>
        <NavIcon id="nav-icon"/>
      </div>
    )
  }
}
