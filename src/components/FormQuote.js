import React, { useState, Fragment } from "react";
import { calculateTotal } from '../helpers';

/* class FormQuote extends Component {
    state = { 
        quantity: '',
        time: ''
    }

    updateState = (e) => {
        this.setState({
            [e.target.name] : Number(e.target.value)
        });
    }

    handleSubmit = () => {
        const { quantity, time } = this.state;

        const noValid = !quantity || !time;
        
        return noValid;
    }

    loanCalculate = (e) => {
        e.preventDefault();

        const { quantity, time } = this.state;

        this.props.datosPrestamo(quantity, time);
    }

    render() { 
        

        return ( 
            <form onSubmit={this.loanCalculate}>
                <div>
                    <label>Loan amount:</label>
                    <input onChange={this.updateState} 
                        type="number" 
                        name="quantity" 
                        className="u-full-width" placeholder="e.g. 300€" />
                </div>
                <div>
                    <label>To pay in:</label>
                    <select name="time" className="u-full-width" onChange={this.updateState}>
                        <option value="">Months</option>
                        <option value="3">3 Months</option>
                        <option value="6">6 Months</option>
                        <option value="12">12 Months</option>
                        <option value="24">24 Months</option>
                    </select>
                </div>

                <div>                    
                    <input 
                        disabled={this.handleSubmit()}
                        type="submit" 
                        value="Calculate" 
                        className="u-full-width button-primary" />
                </div>
            </form>
         );
    }
}
 
export default FormQuote; */

const FormQuote = ({ cantidad, setCantidad, plazo, setPlazo, total, setTotal, setLoad }) => {
  const [error, setError] = useState(false);

  const calcularPrestamo = e => {
    e.preventDefault();

    //Validar
    if (cantidad === 0 || plazo === "") {
      setError(true);
      return;
    }

    setError(false);
    //Cotizacion

    //Habilitar Spinner
    setLoad(true);

    setTimeout(() => {
        const total = calculateTotal(cantidad, plazo)    
        setTotal(total);
        setLoad(false);
    }, 3000);    
  };

  return (
    <Fragment>
      <form onSubmit={calcularPrestamo}>
        <div className="row">
          <div>
            <label>Loan amount:</label>
            <input
              className="u-full-width"
              type="number"
              placeholder="€ 3000"
              onChange={e => setCantidad(parseInt(e.target.value))}
            />
          </div>
          <div>
            <label>To pay in:</label>
            <select className="u-full-width" onChange={e => setPlazo(parseInt(e.target.value))}>
              <option value="">Select months</option>
              <option value="3">3 months</option>
              <option value="6">6 months</option>
              <option value="12">12 months</option>
              <option value="24">24 months</option>
            </select>
          </div>
          <div>
            <input
              type="submit"
              value="Calculate"
              className="button-primary u-full-width"
            />
          </div>
        </div>
      </form>
      {(error) ? <p className="error">All fields are required</p> : null }
      
    </Fragment>
  );
};

export default FormQuote;
