import React, { Component } from 'react';
import { Progress,Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import first from './images/progress/first.png'

class PersonalInfo extends Component{
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    render(){
        const { product_Nature,product_Name, price, price_Discount,avaliable_Online,overview,features,handleChange } = this.props;
        return(
            <>
            <div className="text-center">0%</div>
                <Progress animated  />
                <h2>Product OverView</h2>
            <div classname = "parent">
                <div></div>
                <form>
                    <legend>Product Nature</legend>
                    <input 
                        className= "dropdown" 
                        list="browsers" name="browser" 
                        placeholder="What would you classify this product"  
                        onChange={handleChange('product_Nature')}/>
                   
                    <datalist id="browsers">
                        <option value="Phone"/>
                        <option value="Laptops"/>
                        <option value="Entertainment"/>
                        <option value="Figurines"/>
                        <option value="Wearables"/>
                        <option value="Other"/>
                    </datalist>
                </form>
                <legend>Product Name</legend>
                    <input 
                        type="text"
                        name="Price Discount"
                        value={product_Name}
                        placeholder="Product Name"
                        onChange={handleChange('product_Name')}
                    />
                {/* <label>
                    <input 
                        type="text"
                        name="product_Nature"
                        value={product_Nature}
                        placeholder="Product Nature"
                        onChange={handleChange('product_Nature')}
                    />
                </label> */}
                <label>
                <legend>Price</legend>
                    <input 
                        type="text"
                        name="Price you charge"
                        value={price}
                        placeholder="Price"
                        onChange={handleChange('price')}
                    />
                </label>
                <label>
                <legend>Price Discount</legend>
                    <input 
                        type="text"
                        name="Price Discount"
                        value={price_Discount}
                        placeholder="Dollar Value"
                        onChange={handleChange('price_Discount')}
                    />
                </label>
                {/* <label>
                    <input 
                        type="text"
                        name="price"
                        value={avaliable_Online}
                        placeholder="Is it Avaliable Online?"
                        onChange={handleChange('avaliable_Online')}
                    />
                </label> */}
                <label>
                <legend>Product Overview</legend>
                    <input
                        type="text"
                        className = "large-text"
                        name="price"
                        value={overview}
                        placeholder="Overview"
                        onChange={handleChange('overview')}
                    />
                </label>
                <label>
                <legend>Features</legend>
                    <input 
                        type="text"
                        name="features"
                        value={features}
                        placeholder="Features"
                        onChange={handleChange('features')}
                    />
                </label>
                <FormGroup tag="fieldset" value ={avaliable_Online} onChange={handleChange('avaliable_Online')}>
                    <legend>Avaliable Online?</legend>
                    <FormGroup check>
                    <Label check>
                        <Input type="radio" name="true/false" className = "radiobutton" value="True"/>{' '}
                        True
                    </Label>
                    </FormGroup>
                    <FormGroup check>
                    <Label check>
                        <Input type="radio" name="true/false" className = "radiobutton" value="False"/>{' '}
                        False
                    </Label>
                </FormGroup>
                
                <FormGroup>
                <legend>Upload Product Photos</legend>
                    <Label for="exampleFile"></Label>
                    <Input type="file" name="file" id="exampleFile" />
                    <FormText color="muted">
                    MarketPlace Sellers that show off their product, have a greater chance at converting a looker into a customer.
                </FormText>
                </FormGroup>
                </FormGroup>
                <button className="Next" onClick={this.continue}>
                    Next »
                </button>
                </div>
                {/* <div className = "pic-child">
                    <img src = {first}classname="horizontal-children-img" width="300px"/>
                </div> */}
                
               
            </>
        );
    }
}

export default PersonalInfo;