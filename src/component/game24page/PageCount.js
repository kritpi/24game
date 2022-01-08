import './Game24PageCssStyle/PageCount.css'

function PageCount(props) {
    return (
        <div className='CountBody'>
            <div>Number {props.pageCount} / 3</div>
        </div>
    );
}

export default PageCount;