import React,{Component} from "react";
import loading from './loading.gif';

export class Spinner extends Component{
    render(){
        return(
            <div className="spin text-center">
             <img src={loading} alt="loading" className="img size:2%"/>
            </div>
        )
    }
}

export default Spinner;
