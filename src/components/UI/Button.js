
function Button({title, onClickCallback}){
    return (<div>
        <button onClick={onClickCallback}>
            {title}
        </button>
    </div>);
}

export default Button;