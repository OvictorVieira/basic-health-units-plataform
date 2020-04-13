import React, { Component } from 'react';
import './Navbar.scss';

import logo from '../../../assets/images/logo-bionexo-white.png';
import userImage from '../../../assets/images/user.jpg';

class Navbar extends Component {

  constructor(props) {
    super(props);

    this.state = {
      active: false,
    };

    this.toggleSidebar = this.toggleSidebar.bind(this)
  }

  toggleSidebar() {

    this.setState({
      active: !this.state.active,
    })
  }

  render() {

    return (
      <>

        <nav className='navbar navbar-main navbar-expand-lg'>

          <div className='container-fluid'>

            <div
              className='navbar-header d-flex justify-content-between align-items-center w-100'>

              <button type='button'
                      id='sidebarCollapse'
                      onClick={ this.toggleSidebar }
                      className={ this.state.active ? 'navbar-btn active ' : 'navbar-btn' }>

                <span/>
                <span/>
                <span/>

              </button>

              <div className='d-flex flex-row justify-content-center'>

                <img src={ logo } className='w-50 card-img-top' alt='Bionexo'/>

              </div>

              <div className='d-flex flex-row justify-content-center'>
                <div className='d-flex flex-column pr-4'>

                  <span className='font-weight-bold text-white'>Nome da Empresa</span>

                  <span className='font-weight-bold text-secondary'>Cnpj</span>
                </div>

                <div className='d-flex flex-row justify-content-center'>

                  <img src={ userImage } className='rounded-circle z-depth-0'
                       alt='Avatar do usuário' height='35' />

                </div>
              </div>

            </div>

          </div>

        </nav>

        <nav id='sidebar'
             className={ this.state.active ? 'flex-column justify-content-between active' : '' }>

          <div className='sidebar-header'>
            <h3>Bem vindo!</h3>
          </div>

          <div className='d-flex justify-content-center mb-5'>

            <button className='btn btn-outline-info w-50 mb-5'>
              Sair
            </button>

          </div>

        </nav>
      </>
    )
  }
}

export default Navbar;