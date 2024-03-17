import Riquadro from "./Riquadro";
import Bottone from './Bottone';
import Cavaliere from "./Cavaliere";
import background from '../materiale/image3.png';

function Layout({pageTitle, rightBotton, bottonTitle1, pagePath1, leftBotton, bottonTitle2, pagePath2}) {
    // rightBotton e leftBotton sono dei booleani
    // se sono true compaiono nella schermata
    const sfondo = {
        backgroundImage: `url(${background})`,
        height: "400px",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        position: "relative",
    };

    return (
        <>
            <div className="separatore"></div>
            
            <div className="container">
                <div className="row">
                    <div className="col-4"></div>
                    
                    <div className="col-4">
                        <Riquadro title={pageTitle}></Riquadro>
                    </div>

                    <div className="col-4"></div>
                </div>

                {/* dove avvengono le scene */}
                <div className="row">
                    <div className="col-2"></div>

                    <div className="col-8" style={sfondo}>
                        <Cavaliere posizione = {pageTitle}></Cavaliere>
                    </div>

                    <div className="col-2"></div>
                </div>

                <div className="row">
                    <div className="col-1"></div>

                    <div className="col-3">
                        {/* se leftBotton è true allora esegue ciò che c'è a destra del && */}
                        {leftBotton && <Bottone bottonName={bottonTitle1} path={pagePath1}></Bottone>}
                    </div>

                    <div className="col-4"></div>

                    <div className="col-3">
                        {rightBotton && <Bottone bottonName={bottonTitle2} path={pagePath2}></Bottone>}
                    </div>

                    <div className="col-1"></div>
                </div>
            </div>
        </>
    );
  }
  
  export default Layout;