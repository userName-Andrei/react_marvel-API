import error from './error.gif';

const ErrorMessage = () => {
    return (
        <img style={{display: 'block', width: '250px', height: '250px', margin: '0 auto', objectFit: 'contain'}} src={error} alt="Error 403" />
    );
}

export default ErrorMessage;