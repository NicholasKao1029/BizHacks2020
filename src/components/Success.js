import React, {Component} from 'react';
import IMG from './images/Final.png'; 

class Success extends Component{
    render(){
        return(
            <div>
                <h1>
                    Congratulations! Your company's eye to detail and consistent commitment to Best Buys MarketPlace has you on your way to becoming a certified seller. 
                </h1>
                <img src={IMG}></img>
            </div>
        )
    }
}

export default Success;