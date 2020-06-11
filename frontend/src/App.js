import React from 'react';
import {connect} from 'react-redux'
import {BrowserRouter} from 'react-router-dom'
import Routes from './Routes'
import './App.css'
import {Template} from './components/MainComponents'
import Header from './components/partiais/Header'
import Footer from './components/partiais/Footer'

const Page = (props) => {
  return(
    <BrowserRouter>
      <Template>
        <Header/>
        <Routes/>
        <Footer/>
      </Template>
    </BrowserRouter>
  )
}

const mapStateToProps = state => ({user:state.user})
const mapDispatchToProps = dispatch => {
  return{

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Page)