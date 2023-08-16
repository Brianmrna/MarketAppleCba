import Spinner from 'react-bootstrap/Spinner';

const Loader = () => {

    return (
        <div className='loader'>
            <Spinner animation="grow" variant="primary"/>
        </div>
    )
}

export default Loader