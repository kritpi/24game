import './Game24PageCssStyle/PageCount.css'

function PageCount(props) {
    return (
        <div className='CountBody'>
            <div className='pg-count'>NUMBER {props.pageCount} / 3</div>
        </div>
    );
}

export default PageCount;