import Layout from "../components/Layout";
import idle from '../materiale/idle.gif';
import enemyIdle from '../materiale/enemy_idle.gif';

function Azione(){
    return (
        <>
            {/* cavaliere */}
            <img className='pg pgSinistra' src={idle} alt="idle"></img>

            <img className="pg enemy enemyLontano" src={enemyIdle} alt="enemy_idle"></img>
        </>
    );
}

function Malintenzionato(){
    return<>
        <Layout 
            pageTitle = "UN MALINTENZIONATO! CHE FARE ?"
            azioneSchermo = {<Azione/>}
            leftBotton = {true}
            bottonTitle1 = "COMBATTI"
            pagePath1 = "attacchi"
            rightBotton = {true}
            bottonTitle2 = "FUGGI"
            pagePath2 = "fuga"
        ></Layout>
    </>;
}
export default Malintenzionato;
    