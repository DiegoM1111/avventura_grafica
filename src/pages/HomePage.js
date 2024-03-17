import Riquadro from "../components/Riquadro";
import Bottone from '../components/Bottone';
import '../App.css';

function HomePage() {
    return (
        <>
            <div className="separatore"></div>
            
            <div className="container sfondo">
                
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