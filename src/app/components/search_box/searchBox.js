import React, { Component } from "react";
import '../../components/search_box/searchBox.scss'
import searchIconWhite from "../../../assets/images/search-icon-white.png";

class SearchBox extends Component {

  render() {

    return (
      <div className='input-group mb-3 search-box'>

        <div className='input-group-prepend'>
          <button className='btn btn-outline-secondary btn-search' type='button'>
            <img src={ searchIconWhite }
                 className='z-depth-0 search'
                 alt='Pesquisar' height='18'
            />
          </button>
        </div>

        <input type='text'
               className='form-control btn-search pl-0'
               placeholder='Latitude, Longitude'
               aria-label='Botão de busca: Insira Latitude, Longitude'
               aria-describedby='basic-addon1'
        />
      </div>
    );
  }
}

export default SearchBox;