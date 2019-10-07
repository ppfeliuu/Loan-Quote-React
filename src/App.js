import React, { Component, Fragment } from 'react';

import './normalize.css';
import './skeleton.css';

import FormQuote from './components/FormQuote';
import Results from '././components/Results';
import { calculateTotal } from './helpers';
import Message from './components/Message';
import Spinner from './components/Spinner';

class App extends Component {

  state = {
    total: '',
    quantity: '',
    time: '',
    cargando: false
  }

  datosPrestamo = (quantity, time) => {
    const total = calculateTotal(quantity, time);

    this.setState({
      cargando: true
    }, () => {
      setTimeout(() => {
        this.setState({
          total,
          quantity,
          time,
          cargando: false
        })
      },3000)
    })
  }

  render() {
    const {total, quantity, time, cargando} = this.state;

    // Load conditional component
    let componente;

    if(total === '' && !cargando) {
      componente = <Message />
    } else if(cargando){
        componente = <Spinner />
    }else {
      componente = <Results 
                      total={total}
                      quantity={quantity}
                      time={time}
                  />  
    }

  return (
      <Fragment>
        <h1>Loan quote</h1>
        <div className="container">
          <FormQuote 
            datosPrestamo={this.datosPrestamo}
          />  
          <div className="msg">
              {componente}            
          </div>
        </div>
      </Fragment>
    );
  }
}

export default App;
