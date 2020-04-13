import React, { Component } from 'react';
import './Navbar.scss';

import logo from '../../../assets/images/logo-bionexo-white.png';
import userImage from '../../../assets/images/user.jpg';
import searchIcon from '../../../assets/images/search-icon.png';
import searchIconWhite from '../../../assets/images/search-icon-white.png';

class Navbar extends Component {

  constructor(props) {
    super(props);

    this.state = {
      showSidebar: false,
      showSearchBox: false,
    };

    this.showSidebar = this.showSidebar.bind(this)
    this.showSearchBox = this.showSearchBox.bind(this)
  }

  showSidebar() {

    this.setState({
      showSidebar: !this.state.showSidebar,
    })
  }

  showSearchBox() {

    this.setState({
      showSearchBox: !this.state.showSearchBox,
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
                     onClick={ this.showSearchBox }
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

                  <span className='font-weight-bold text-white'>Nome da Empresa</span>

                  <span className='font-weight-bold text-secondary'>Cnpj</span>
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

            <button className='btn btn-outline-info w-50 mb-5'>
              Sair
            </button>

          </div>

        </nav>

        <div className={ this.state.showSearchBox ? 'input-group mb-3 search-box' : 'd-none' }>

          <div className='input-group-prepend'>
            <button className='btn btn-outline-secondary btn-search' type='button'>
              <img src={ searchIconWhite } className='z-depth-0 search'
                   alt='Pesquisar' height='18' />
            </button>
          </div>

          <input type='text' className='form-control btn-search pl-0' placeholder='Busca' aria-label='' aria-describedby='basic-addon1' />
        </div>
      </>
    )
  }
}

export default Navbar;