import React, { Component } from 'react';
import { Progress } from 'reactstrap';
import third from './images/progress/third.png'
import ModalTips from './ModalTips';

class ThirdPage extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }

    render(){
        const {handleChange, trap, shipping_cost, shipping_time, shipping_Requirement ,province } = this.props;
        return(
            <>
            <div className="text-center">50%</div>
                <Progress animated value="50" />
                <h2>Shipping Information</h2>


            <div className = "parent">
                <div className = "form-child">
                <label>
                    <legend>Cost of Shipping ($)</legend>
                    <input 
                        type="text"
                        name="shipping_cost"
                        value={shipping_cost}
                        onChange={handleChange('shipping_cost')}
                        placeholder="Cost of Shipping"
                    />
                </label>
                <label>
                    <legend>Attention Check</legend>   
                    <input 
                        type="text"
                        name="Check"
                        value={trap}
                        onChange={handleChange('trap')}
                        placeholder="Please type ATTENTION"
                    />
                    <legend>Shipping Time (days)</legend>   
                    <input 
                        type="text"
                        name="shipping_time"
                        value={shipping_time}
                        onChange={handleChange('shipping_time')}
                        placeholder="Time to Ship"
                    />
                </label>
                <label>
                    <legend>Shipping Requirements</legend>
                    <input 
                        type="text"
                        name="shipping_Requirement"
                        value={shipping_Requirement}
                        onChange={handleChange('shipping_Requirement')}
                        placeholder="Requirements of Shipping e.g. fragile warning"
                    />
                </label>
                <label>
                    <legend>Province</legend>
                    <input 
                        type="text"
                        name="province"
                        value={province}
                        onChange={handleChange('province')}
                        placeholder="What Province will you ship from?"
                    />
                </label>
                <button className="Back" onClick={this.back}>
                    « Back
                </button>
                <button className="Next" onClick={this.continue}>
                    Next »
                </button>
                </div>
                <div>
                <div className = "modal-child">
                    <ModalTips text = "Multiple fields have been recommended answers. Please feel free to adjust accordingly"/>
                    </div>
                    <div className =''>
                    <img src = {third}classname="horizontal-children-img" height="300px"/>
                    </div>
                </div>
                </div>
            </>
        );
    }
}

export default ThirdPage;