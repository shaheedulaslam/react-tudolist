import React,{Component} from "react";
    

class  Welcome extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
         <h1 className="text-center text-success">{this.props.title}</h1>
         <h4 className="text-center">Students Tudo List</h4>
            </div>
                
        )
    }
}
export default Welcome;