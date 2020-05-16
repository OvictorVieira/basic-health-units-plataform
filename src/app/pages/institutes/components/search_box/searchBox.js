import React from "react";

function SearchBox() {

  return (
    <div className='input-group mb-3 search-box'>

      <div className='input-group-prepend'>
        <div className='btn btn-outline-secondary btn-search'>

        </div>
      </div>

      <span className='form-control btn-search pl-0' />

      { /*{ TODO Criar o botão de Search, buscar no git pois já foi implementado }*/ }
    </div>
  );
}

export default SearchBox;