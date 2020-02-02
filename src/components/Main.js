import React, { Component } from 'react';
import PersonalInfo from './PersonalInfo';
import JobDetails from './JobDetails';
import AllInfo from './AllInfo';
import ThirdPage from './ThirdPage';
import FourthPage from './FourthPage';
import Success from './Success';


export class StepForm extends Component {
    state = {
        step: 1,

        product_Nature: '',
        product_Name:'',
        price: '',
        avaliable_Online: '',
        overview: '',
        features: '',

        assembly_req:'',
        color:'',
        seller_warranty:'30', //days

        shipping_cost:'',
        trap: '',
        shipping_time:'2',
        shipping_Requirement:'fragile',
        province:'BC',

        category:'Phones & Tablets',
        Returned_period:'14-30',
        percent_opened:'10',
        percent_used:'20',
        returnable:'True',
        Notes_return:'' 

    }

    nextStep = () => {
        const { step } = this.state;

        this.setState({
            step: step + 1
        });
    }

    prevStep = () => {
        const { step } = this.state;
        this.setState({
            step: step - 1
        });
    }

    handleChange = input => e => {
        this.setState({[input]: e.target.value});

    }

    showStep = () => {
        const {
            step,

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
            trap,
            shipping_time,
            shipping_Requirement,
            province,

            category,
            Returned_period,
            percent_opened,
            percent_used,
            returnable,
            Notes_return} = this.state

        if(step === 1)
            return (<PersonalInfo 
                nextStep = {this.nextStep} 
                handleChange = {this.handleChange} 
                product_Nature={product_Nature} 
                product_Name={product_Name}
                price={price}
                price_Discount={price_Discount}
                avaliable_Online={avaliable_Online}
                overview={overview}
                features={features}
            />);
        if(step === 2)
            return (<JobDetails 
                nextStep = {this.nextStep} 
                prevStep = {this.prevStep}
                handleChange = {this.handleChange} 
                assembly_req={assembly_req} 
                color={color}
                seller_warranty={seller_warranty}
            />);
        if(step === 3)
            return (<ThirdPage 
                nextStep = {this.nextStep} 
                prevStep = {this.prevStep}
                handleChange = {this.handleChange} 
                shipping_cost={shipping_cost} 
                shipping_time={shipping_time}
                shipping_Requirement={shipping_Requirement}
                province={province}
            />);
        if(step === 4)
            return (<FourthPage 
                nextStep = {this.nextStep} 
                prevStep = {this.prevStep}
                trap = {trap}
                handleChange = {this.handleChange} 
                assembly_req={assembly_req} 
                Returned_period={Returned_period}
                percent_opened={percent_opened}
                percent_used={percent_used}
                returnable={returnable}
                Notes_return={Notes_return}
            />);
        if(step === 5)
            return (<AllInfo 
                product_Nature={product_Nature}
                product_Name={product_Name}
                price={price}
                price_Discount={price_Discount}
                avaliable_Online={avaliable_Online}
                overview={overview}
                features={features}
        
                assembly_req={assembly_req}
                color={color}
                seller_warranty={seller_warranty}
        
                shipping_cost={shipping_cost}
                shipping_time={shipping_time}
                shipping_Requirement={shipping_Requirement}
                province={province}
    
                category={category}
                Returned_period={Returned_period}
                percent_opened={percent_opened}
                percent_used={percent_used}
                returnable={returnable}
                Notes_return={Notes_return}
                prevStep = {this.prevStep}
                nextStep = {this.nextStep} 
            />);
            if(step === 6)
                return(
                    <Success/>
                )
    }

    render(){
        const { step } = this.state;
        return(
            <>
                <h2>Step {step} of 6.</h2>
                {this.showStep()}
            </>
        );
    }
}

export default StepForm;