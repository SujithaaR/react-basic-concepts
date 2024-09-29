import { Component } from "react";



class ClassBasedComponent extends Component{
// render method is used to return jsx

// state-object
// defining the state-one way
state={
    // show text is a variable
    showText:false,
    changecolor:false,
    count:0,
    changeCountStyle:false,
};

handleClick=()=>{
   console.log("button clicked");
//    using the setstate method
const {showText,changecolor}=this.state;
this.setState({
    showText:!showText,
})
}
// another way
// constructor(props){
//     super(props);
//     this.state={
//         // show text is a variable
//         showText:false,
//     };
// }


handleCount=()=>{
    this.setState({
        ...this.state,
        count:this.state.count+1,
    })
}
componentDidMount(){
    console.log("run on the first render");
    this.setState({
        showText:!this.state.showText,
        changecolor:!this.state.changecolor,
    })
    
}

componentDidUpdate(prevProps,prevState){
      console.log(prevState,this.state);
     if(prevState && prevState.count !== this.state.count && this.state.count === 10){
        this.setState({
            ...this.state,
              changeCountStyle:!this.state.changeCountStyle,
        })
     }

}

    render(){
        // accessing the state
    console.log(this.state.showText)
    const {showText,changecolor,count,changeCountStyle}=this.state
        return (<div>
            {showText?<h3 style={{color:changecolor?"red":"green"}}>This is my Class Based Component</h3>:null}
            
            <button onClick={this.handleClick}>Toggle Text</button>
            <button onClick={this.handleCount}>count</button>
            <h3  style={{color:changeCountStyle?'blue':'black',fontSize:changeCountStyle?'30px':'12px'}}>count is {count}</h3>
        </div>
        );
    }
}

export default ClassBasedComponent;