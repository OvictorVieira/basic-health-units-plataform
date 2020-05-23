import React, { Component } from "react";
import SearchBox from "../search_box/searchBox";
import Cards from "../cards/cards";

class ContainerCards extends Component {

  constructor(props) {
    super(props);

    this.state = {
      institutes: props.institutes,
      getInstitutesByLocation: props.getInstitutesByLocation
    }
  }

  searchInstitutesByLocation(latitude, longitude) {

    this.state.getInstitutesByLocation(latitude, longitude)
  }

  render() {

    return(

      <div className='d-flex flex-column container-items'>
        <SearchBox searchInstitutesByLocation={ this.searchInstitutesByLocation }/>

        { this.state.institutes && <Cards institutes={ this.state.institutes }/> }
      </div>
    )
  }
}

export default ContainerCards;