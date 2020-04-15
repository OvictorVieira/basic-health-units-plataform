import React from "react";
import './Cards.scss'

function Cards(props) {

  return (
    <div className='institutes-box'>
      {
        props.institutes.map(institute => (

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
      }
    </div>
  )
}

export default Cards;