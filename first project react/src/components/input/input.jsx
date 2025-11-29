import styled from "./input.module.css";
function Input(props){
    console.log(props);
    
    return(
        <>
       
          <div  className={styled.inputWrapper}>
            <div className="container">
             
        <label >{props.labal}</label>
        <input name={props.name}
         onChange={props.handlechange} 
        type="text" />
        
    </div>
    </div>
        </>
    )
}
export default Input