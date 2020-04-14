import searchIconWhite from "../../../../assets/images/search-icon-white.png";
import React from "react";

function SearchBox() {

  return (
    <div className='input-group mb-3 search-box'>

      <div className='input-group-prepend'>
        <button className='btn btn-outline-secondary btn-search' type='button'>
          <img src={ searchIconWhite } className='z-depth-0 search'
               alt='Pesquisar' height='18' />
        </button>
      </div>

      <input type='text' className='form-control btn-search pl-0' placeholder='Busca' aria-label='' aria-describedby='basic-addon1' />
    </div>
  );
}

export default SearchBox;