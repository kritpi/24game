import './FirstPageCssStyle/TextBox.css'
function Textbox(props) {
    return (

        <label for="inp" class="inp" >
            <input type="text" id="inp" placeholder="&nbsp;" value={props.name} onChange={(e)=> props.setName(e.target.value)} />

            <span class="label">ENTER YOUR NAME</span>
            <span class="focus-bg"></span>
        </label>
    );
}

export default Textbox;