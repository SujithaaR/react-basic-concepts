
import './App.css'
import ClassBasedComponent from './components/class-based-components'
import ContextButtonComponent from './components/context-concept/button';
import ContextTextComponent from './components/context-concept/text';
import FunctionalComponent from './components/functionalcomponent'
import ProductList from './components/products'
import UseReducerExample from './components/use-reducer-ex';
import Users from './components/users';

function App() {
 
  const dummyProductData=['PRODUCT 1','PRODUCT 2','PRODUCT 3'];

  return (
    <>
     <h1>React JS basics</h1>
    <UseReducerExample/>
     {/* <ContextButtonComponent/>
     <ContextTextComponent/> */}
     
     {/* <Users/> */}

     {/* <ClassBasedComponent/> */}
     {/* <FunctionalComponent/> */}
     {/* <ProductList listofproducts={dummyProductData} name="suji" city="japan"/> */}
     {/* props is a object .it send as key-values */}
    </>
  )
}

export default App
