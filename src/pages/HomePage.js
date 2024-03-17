import Riquadro from "../components/Riquadro";
import Bottone from '../components/Bottone';
import '../App.css';
// import background from '../materiale/image3.png';

function HomePage() {
    // const containerStyle = {
    //     backgroundImage: `url(${background})`,
    //     width: "100%",
    //     margin: "0 auto",
    // };

    return (
        <>
            <div className="separatore"></div>
            
            <div className="container">
            {/* <div style={containerStyle}> */}
                
                <div className="row">
                    <div className="col-4"></div>
                    
                    <div className="col-4">
                        <Riquadro title="inizio"></Riquadro>
                    </div>

                    <div className="col-4"></div>
                </div>

                <div className="row">     
                    <div className="spazioImmagine"></div>
                </div>

                <div className="row">
                    <div className="col-1"></div>

                    <div className="col-3">
                        <Bottone title="sinistra"></Bottone>
                    </div>

                    <div className="col-4"></div>

                    <div className="col-3">
                        <Bottone title="destra"></Bottone>
                    </div>

                    <div className="col-1"></div>
                </div>
            </div>
        </>
    );
  }
  
  export default HomePage;