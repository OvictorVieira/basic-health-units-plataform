import React, { Component } from "react";
import './Cards.scss'

class Cards extends Component {

  constructor(props) {
    super(props);

    this.state = {
      institutes: props.institutes
    }
  }

  render() {
    return (
      this.state.institutes.map(institute => (

        <a href={ '#'.concat(institute.id) } className='card-link'>
          <div className="card card-institutes">
            <div className="card-body">
              <h5 className="card-title mb-1">{ institute.id }. { institute.name }</h5>

              <p className="card-text">{ institute.address } - { institute.city }</p>

              <snap className="font-weight-bold">Telefone</snap>

              <p className="card-text">{ institute.phone }</p>
            </div>
          </div>
        </a>
      ))
    )
  }
}

export default Cards;