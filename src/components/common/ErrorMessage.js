import '../../styles/ErrorMessage.css'


const ErrorMessage = ({message}) => {
    return (<div>
        <div className={'error-message-container'}>
            {message}
        </div>
    </div>);
};

export default ErrorMessage;