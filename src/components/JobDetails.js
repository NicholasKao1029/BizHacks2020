import React, { Component } from 'react';
import { Progress,Button, Form, FormGroup, Label, Input, FormText,
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle} from 'reactstrap';
import ModalTips from './ModalTips';
import autofill from './images/autofill.svg'
import second from './images/progress/first.png'

class JobDetails extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }

    render(){
        const {handleChange, assembly_req, color, seller_warranty} = this.props;
        return(
            <>
            <div className="text-center">25%</div>
                <Progress animated value="25" />
                <h2>Model Details</h2>

            <div className = "parent">
                <div className = "form-child">

                <div>
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
                </div>

                <label>
                <legend>Color</legend>
                    <input 
                        type="text"
                        name="color"
                        value={color}
                        onChange={handleChange('color')}
                        placeholder="Color"
                    />
                </label>

                <label>
                <legend>Warrantity (days)</legend>
                    <input  
                        type="text"
                        name="seller_warranty"
                        value={seller_warranty}
                        onChange={handleChange('seller_warranty')}
                        placeholder="Period of warrantity (days)"
                        defaultValue = "30"
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
                    <ModalTips text = "The field Warrantity (days) has been autofilled for you based on your previous products."/>
                    </div>
                    <div className =''>
                    <img src = {second}classname="horizontal-children-img" height="300px"/>
                    </div>
                </div>
            </div>
            
            
            </>
        );
    }
}

export default JobDetails;