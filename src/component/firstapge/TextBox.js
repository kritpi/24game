import './FirstPageCssStyle/TextBox.css'
function Textbox(props) {
    return (

        <label htmlFor="inp" className="inp" >
            <input type="text" id="inp" placeholder="&nbsp;" value={props.name} onChange={(e) => props.setName(e.target.value)} />
            {/* {console.log(typeof props.name)} */}
            <span className="label">ENTER YOUR NAME</span>
            <span className="focus-bg"></span>
        </label>
    );
}

export default Textbox;