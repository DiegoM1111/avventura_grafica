import Riquadro from "./Riquadro";
import Bottone from './Bottone';

function Layout({pageTitle, azioneSchermo, rightBotton, bottonTitle1, pagePath1, leftBotton, bottonTitle2, pagePath2}) {
    // rightBotton e leftBotton sono dei booleani
    // se sono true compaiono nella schermata

    return (
        <>
            <Riquadro title={pageTitle}></Riquadro>

            <div className="container">
                <div className="gameContainer">
                    {azioneSchermo}
                </div>
            </div>
            
            <div className="leftBotton">
                {leftBotton && <Bottone bottonName={bottonTitle1} path={pagePath1}></Bottone>}
            </div>
            
            <div className="rightBotton">
                {rightBotton && <Bottone bottonName={bottonTitle2} path={pagePath2}></Bottone>}
            </div>
        </>
    );
  }
  
  export default Layout;