import React, { Component } from 'react';
import './Navbar.scss';

import logo from '../../../assets/images/logo-bionexo-white.png';
import userImage from '../../../assets/images/user.jpg';
import searchIcon from '../../../assets/images/search-icon.png';

class Navbar extends Component {

  constructor(props) {
    super(props);

    this.state = {
      showSidebar: false,
      companyName: props.companyName,
      companyCnpj: props.companyCnpj
    };

    this.showSidebar = this.showSidebar.bind(this)
  }

  showSidebar() {

    this.setState({
      showSidebar: !this.state.showSidebar,
    })
  }

  render() {

    return (
      <>

        <nav className='navbar navbar-main navbar-expand-lg'>

          <div className='container-fluid'>

            <div
              className='navbar-header d-flex justify-content-between align-items-center w-100'>

              <div className='d-flex flex-row justify-content-center'>

                <div className='d-flex flex-column pr-3 justify-content-center '>

                  <button type='button'
                          id='sidebarCollapse'
                          onClick={ this.showSidebar }
                          className={ this.state.showSidebar ? 'navbar-btn active ' : 'navbar-btn' }>

                    <span/>
                    <span/>
                    <span/>

                  </button>
                </div>

                <div id='search'
                     className='d-flex flex-column justify-content-center pl-3'>

                  <img src={ searchIcon } className='z-depth-0 search'
                       alt='Botão de pesquisa' height='25' />
                </div>

              </div>

              <div className='d-flex flex-row justify-content-center'>

                <img src={ logo } className='w-50 card-img-top' alt='Bionexo'/>

              </div>

              <div className='d-flex flex-row justify-content-center'>
                <div id='companyName' className='d-flex flex-column pr-3 justify-content-center '>

                  <span className='font-weight-bold text-white'> { this.state.companyName } </span>

                  <span className='font-weight-bold text-secondary'>{ this.state.companyCnpj }</span>
                </div>

                <div className='d-flex flex-column justify-content-center pl-3'>

                  <img src={ userImage } className='rounded-circle z-depth-0'
                       alt='Avatar do usuário' height='35' />

                </div>
              </div>

            </div>

          </div>

        </nav>

        <nav id='sidebar'
             className={ this.state.showSidebar ? 'flex-column justify-content-between active' : '' }>

          <div className='sidebar-header'>
            <h3>Bem vindo!</h3>
          </div>

          <div className='d-flex justify-content-center mb-5'>

            { /*{ TODO Criar o botão de Sair, buscar no git pois já foi implementado }*/ }

          </div>

        </nav>
      </>
    )
  }
}

export default Navbar;