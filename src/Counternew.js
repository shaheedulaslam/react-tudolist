import React,{Component} from "react";




class Counternew extends Component{
    constructor (props){
    super(props)
    this.state = {
        counter : 0,
    };
}
increment(){
    setTimeout(()=>{
        this.setState((prev,props)=>({counter:prev.counter+1}))
    },1000)
}
render(){
    this.increment();
    return(
        <div>
            <p className="text-center">00:{this.state.counter}</p>
        </div>
    )
}

}
export default Counternew
