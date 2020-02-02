import React, { Component } from 'react';
import { Progress,Button, Form, FormGroup, Label, Input, FormText,
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle } from 'reactstrap';
import fourth from './images/progress/fourth.png'
import ModalTips from './ModalTips';


class FourthPage extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }

    render(){
        const {handleChange, assembly_req, Returned_period, percent_opened ,percent_use,returnable,Notes_return  } = this.props;
        return(
            <>
            <div className="text-center">75%</div>
                <Progress animated value="75" />
                <h2>Return Policy</h2>
                {/* <label>
                <FormGroup tag="fieldset" value ={assembly_req} onChange={handleChange('assembly_req')}>
                    <legend>Assembly Required?</legend>
                    <FormGroup check>
                    <Label check>
                        <Input type="radio" name="true/false" className = "radiobutton1" value="True"/>{' '}
                        True
                    </Label>
                    </FormGroup>
                    <FormGroup check>
                    <Label check>
                        <Input type="radio" name="true/false" className = "radiobutton1" value="False"/>{' '}
                        False
                    </Label>
                </FormGroup> </FormGroup>
                    <legend>Assembly Required?</legend>
                    <input 
                        type="text"
                        name="assembly_req"
                        value={assembly_req}
                        onChange={handleChange('Category')}
                        placeholder="Assembly Required?"
                    />
                </label> */}

            <div className = "parent">
                <div className = "form-child">

                <label>
                <legend>Return period (days)</legend>
                    <input 
                        type="text"
                        name="Returned_period"
                        value={Returned_period}
                        onChange={handleChange('Returned_period')}
                        placeholder="Return period (days)"
                    />
                </label>
                <label>
                    <legend>Percent fee for opened returns</legend>
                    <input 
                        type="text"
                        name="percent_opened"
                        value={percent_opened}
                        onChange={handleChange('percent_opened')}
                        placeholder="Percentage fee"
                    />
                </label>
                <label>
                <legend>Percent fee for used returns</legend>
                    <input 
                        type="text"
                        name="percent_use"
                        value={percent_use}
                        onChange={handleChange('percent_use')}
                        placeholder="Percentage fee"
                    />
                </label>
                <label>
                <FormGroup tag="fieldset" value ={returnable} onChange={handleChange('returnable')}>
                    <legend>Returnable?</legend>
                    <FormGroup check>
                    <Label check>
                        <Input type="radio" name="true/false" className = "radiobutton2" value="True"/>{' '}
                        True
                    </Label>
                    </FormGroup>
                    <FormGroup check>
                    <Label check>
                        <Input type="radio" name="true/false" className = "radiobutton2" value="False"/>{' '}
                        False
                    </Label>
                </FormGroup> </FormGroup>
                </label>
                <label>
                    <legend>Additional notes on return policy</legend>
                    <input 
                        type="text"
                        name="Notes_return"
                        value={Notes_return}
                        onChange={handleChange('Notes_return')}
                        placeholder="Notes on return policy"
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
                    <img src = {fourth}classname="horizontal-children-img" height="300px"/>
                    </div>
                </div>
            </div>
            </>
        );
    }
}

export default FourthPage;