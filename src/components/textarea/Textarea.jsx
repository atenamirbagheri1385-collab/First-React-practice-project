import styled from "./textarea.module.css"
function Textarea(props){

    return(
        <>
        <div className={styled.Textareawrapper}>
        <div className="container">
            <label>متن</label>
        <textarea onChange={props.handlechange}></textarea>
        </div>
        </div>
        </>
    )
}
export default Textarea