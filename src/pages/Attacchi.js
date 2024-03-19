import Layout from "../components/Layout";
import fight from '../materiale/fight.gif';
import enemyFight from '../materiale/enemy_fight.gif';

function Azione(){
    return (
        <>
            {/* cavaliere */}
            <img className='pg pgSinistra' src={fight} alt="fight"></img>

            <img className="pg enemy enemyFight" src={enemyFight} alt="enemy_fight"></img>
        </>
    );
}

function Attacchi(){
    return<>
        <Layout 
            pageTitle = "ATTACHI!"
            azioneSchermo = {<Azione/>}
            leftBotton = {true}
            bottonTitle1 = "COLPO DA MAESTRO!"
            pagePath1 = "vittoria"
            rightBotton = {true}
            bottonTitle2 = "SONO UNA SCHIAPPATA"
            pagePath2 = "morte"
        ></Layout>
    </>;
}
export default Attacchi;
    