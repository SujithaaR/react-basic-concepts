import styles from "./productitem.module.css";

function ButtonComponent(){
    // console.log(styles)
    return(
        <button className={styles.buttonStyle}>Click</button>
    )
}

function ProductItem({product,index}){
    return(
        <div style={{padding:"20px",border:"2px solid red",marginBottom:'12px'}} key={index}>
            <p className={styles.productTitle}>{product}</p>
            <ButtonComponent/>
        </div>
    )
}
export default ProductItem;