import React from "react";
import './Navbar.scss';

import logo from '../../../../assets/images/logo-bionexo-white.png';
import userImage from '../../../../assets/images/user.jpg';

function Navbar() {

  return (
    <>
      <nav className="navbar navbar-main navbar-expand-lg">

        <div className="container-fluid">

          <div className="navbar-header d-flex justify-content-between align-items-center w-100">

            <div>
              <button className="btn custom-toggler d-flex flex-column" type="button" data-toggle="collapse" aria-label="Toggle navigation">

                <span className="navbar-toggler-icon"></span>

              </button>
            </div>

            <div className='d-flex flex-row justify-content-center'>

              <img src={ logo } className='w-50 card-img-top' alt='Bionexo'/>

            </div>

            <div className='d-flex flex-row justify-content-center'>
              <div className='d-flex flex-column pr-4'>

                <span className='font-weight-bold text-white'>Nome da Empresa</span>

                <span className='font-weight-bold text-secondary'>Cnpj</span>
              </div>

              <div className='d-flex flex-row justify-content-center'>

                <img src={ userImage } className="rounded-circle z-depth-0"
                     alt="Avatar do usuário" height="35" />

              </div>
            </div>

          </div>

        </div>

      </nav>
    </>
  );
}

export default Navbar;