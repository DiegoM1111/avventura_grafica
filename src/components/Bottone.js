import '../assets/bottone.css';

function Bottone({title}) {
    const bottonStyle = {float: `${title}`};

    return (
        <div className='bottone' style={bottonStyle}>
            <h1>{title}</h1>
        </div>
    );
  }
  
  export default Bottone;