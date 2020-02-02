import React, { Component } from 'react';
import { Progress } from 'reactstrap';
import PicCarousel from './PicCarousel';
import fourth from './images/progress/fourth.png'

class AllInfo extends Component {

    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }
    render(){
        const { step,

            product_Nature,
            product_Name,
            price,
            price_Discount,
            avaliable_Online,
            overview,
            features,
    
            assembly_req,
            color,
            seller_warranty, //days
    
            shipping_cost,
            shipping_time,
            shipping_Requirement,
            province,
    
            category,
            Returned_period,
            percent_opened,
            percent_used,
            returnable, } = this.props;
        return(
            <>
                <div className="text-center">99%</div>
                <Progress value="99" />
                <div clasName ="All-parent">
                <div className ="info">
                <h2>Here is the information you entered:</h2>
                Product Nature: <b>{product_Nature}</b><br />
                Product Name: <b>{product_Name}</b><br />
                Price: <b>{price}</b><br />
                Job: <b>{price_Discount}</b><br />
                Online Avaliability: <b>{avaliable_Online}</b><br />
                Overview: <b>{overview}</b><br />
                Features: <b>{features}</b><br />

                Assembly Required: <b>{assembly_req}</b><br />
                Color: <b>{color}</b><br />
                Warranty: <b>{seller_warranty}</b><br />

                Shipping Cost: <b>{shipping_cost}</b><br />
                Shipping Time: <b>{shipping_time}</b><br />
                Shipping Requirements: <b>{shipping_Requirement}</b><br />
                Province: <b>{province}</b><br />

                Category: <b>{category}</b><br />
                Return policy: <b>{Returned_period}</b><br />
                Percentage Opened: <b>{percent_opened}</b><br />
                Percentage Used: <b>{percent_used}</b><br />
                returnable: <b>{returnable}</b><br />
                <button className="Back" onClick={this.back}>
                    « Back
                </button>
                <button className="Next" onClick={this.continue}>
                    Confirm!
                </button>
                </div>
                <div className ='modal-change'>
                    <img src = {fourth}classname="horizontal-children-img" height="300px"/>
                </div>
                </div>
            </>
        );
    }
}

export default AllInfo;