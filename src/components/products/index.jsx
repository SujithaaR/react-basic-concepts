import { useEffect, useState } from "react";
import ProductItem from "./components/productItem";
import './style.css';

function ProductList({name,city,listofproducts}){
    // console.log(props);
    // const{name,city}=props;

    // const flag=true;
// using function
    // function renderTextBlock(getFlag){
    //      return getFlag?(
    //         <h4>Name is {name} belongs to City {city}</h4>) : (<h4>hellow worle</h4>)
    // }


    // state
    const initialState=true

    const [flag,setFlag]=useState(initialState);
    const [count,setCount]=useState(0);
    const [changeStyle,setChangeStyle]=useState(false);
    // const [flag,setFlag]=useState(false)
    
    function handleClick(){
        setFlag(!flag)
    }
    
    function handleIncreaseCount(){
         setCount(count+1);
    }
    useEffect(()=>{
        console.log("run only once");
        setFlag(!flag)

        return()=>{
            console.log("component is unmounted->do some side effects here also");
            
        }
    },[])//this will only run on page load once

    // const renderTextBlock=flag?<h4>Name is {name} belongs to City {city}</h4>:(<h4>hellow worle</h4>)
   useEffect(()=>{
  
   if(count==10) setChangeStyle(true)
   },[count])

console.log(changeStyle);


    return (
    <div>
      
        <h3 className="title">Ecommerce Project</h3>
        <button onClick={handleClick}>toggle text</button>
        {/* <ProductItem/> */}
        {/* using ternary operator */}
        {/* {
        flag ?(
        <h4>Name is {name} belongs to City {city}</h4>) : (<h4>hellow worle</h4>)
        }

        // by using  function
         */}
         {/* {renderTextBlock(flag)} */}

           {/* by using variable */}
           {flag?<h4>Name is {name} belongs to City {city}</h4>: (<h4>hellow worle</h4>)}
           
           <div>
            <button style={{color:changeStyle?"white":"black",backgroundColor:changeStyle?"black":"white"}} onClick={handleIncreaseCount}>increase count</button>
            <p>Count is {count}</p>
           </div>

            <ul>
            {
                listofproducts.map((items,index)=>
                    <ProductItem product={items} key={index}/>
                )
            }
          
            </ul>
        
    </div>);
}
export default ProductList;