import '../assets/bottone.css';
import { Link } from 'react-router-dom';

function Bottone({bottonName, path}) {
    const pagePath = `/${path}`;

    return (
        // <div className='bottone'>
        <div>
            <Link to={pagePath}>
                <botton className='bottone'>{bottonName}</botton>
            </Link>
        </div>
    );
  }
  
  export default Bottone;