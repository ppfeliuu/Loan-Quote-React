import React, { Component } from 'react';

class FormQuote extends Component {
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
 
export default FormQuote;