import React, { Fragment, useState } from 'react';

import FormQuote from './components/FormQuote';
import Results from '././components/Results';

import Message from './components/Message';
import Spinner from './components/Spinner';
import Header from './components/Header';

/* class App extends Component {

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
*/



const App = () => {

  const [cantidad, setCantidad] = useState(0);
  const [plazo, setPlazo] = useState('');
  const [total, setTotal] = useState(0);
  const [load, setLoad] = useState(false);

  let componente;

  if(load) {
    componente = <Spinner />
  } else if(total === 0) {
    componente = <Message />
  } else {
    componente = <Results  total={total} time={plazo} quantity={cantidad}/>
  }

  return (
    <Fragment>
        <Header title={'Loan Quote'}/>

        <div className="container">
          <FormQuote 
            cantidad={cantidad}
            setCantidad={setCantidad}
            plazo={plazo}
            setPlazo={setPlazo}
            total={total}
            setTotal={setTotal}
            setLoad={setLoad}
          />
          <div className="mensajes">
            {componente}
          </div>
          
        </div>
    </Fragment>
  )
}

export default App;

