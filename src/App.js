import React, { Component } from 'react'
import Appointments from './Appointments/Appointments'
import Hospital from './Appointments/Hospital'
import Doctors from './Appointments/Doctors'
import Sections from './Appointments/Sections'
import Home from './Home/Home'
import Footer from './Footer'

export default class App extends Component {
  render() {
    return (
      <div>
        <Home />
        <Footer />
      </div>
    )
  }
}
