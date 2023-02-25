import React,{Component} from "react";




class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      items : [],
      txtContent : "",
      numContent:"",
    }
  }
txtChange = (e)=>{
  this.setState({txtContent:e.target.value})
}
numChange=(e)=>{
  this.setState({numContent:e.target.value})
}
addItem =  (e)=>{
  let item = this.state.items
  item.push({name:this.state.txtContent,age:this.state.numContent});
  this.setState({items:item})
}
removeItem = (i)=>{
  if(!window.confirm("Are You Sure Want to delete ?")){
    return
  }
let item = this.state.items
item.splice(i,1);
this.setState({items:item})
}
  render(){
    const nm = this.state.txtContent
    const number = this.state.numContent
    return (
      <React.Fragment> 
        <div className="d-flex justify-content-center">
        <input type="text" className="w-50 me-2" style={{borderRadius:"10px",background:"skyblue",border:"none", height:"35px"}} onChange={this.txtChange} placeholder="  Your Name"/>
        <input type="number" className="w-50 me-2" style={{borderRadius:"10px",background:"skyblue",border:"none"}} onChange={this.numChange} placeholder="  Your Age"/>
        </div>
        <div className="d-flex justify-content-center">
        <button className="w-25 mt-2 btn btn-outline-success" style={{borderRadius:"25px"}} onClick={this.addItem}>Add</button>
        </div>
       
        
        
      <div className="mt-2">
      <ul>
        {this.state.items.map((itm,k)=>{
          return(
            <li><h4  style={{color:"#09cf"}} className="fs-6"><span className="text-dark">NAME: </span>{itm.name}</h4>
            <h4 style={{color:"#09cf"}} className="fs-6"><span className="text-dark">AGE: </span>{itm.age}</h4>
            <button onClick={()=>{this.removeItem(k)}} className="btn btn-outline-danger" style={{borderRadius:"10px", height:"35px"}}>delete</button></li>
          )
        })}
    </ul>
      </div>
    </React.Fragment>
     
    );
  }
 
}





export default App;