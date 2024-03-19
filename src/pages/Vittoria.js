import Layout from "../components/Layout";
import fight from '../materiale/fight.gif';
import enemyDead from '../materiale/enemy_dead.gif';

function Azione(){
    return (
        <>
            {/* cavaliere */}
            <img className='pg pgSinistra' src={fight} alt="fight"></img>

            <img className="pg enemy enemyLose" src={enemyDead} alt="enemy_dead"></img>
        </>
    );
}

function Vittoria(){
    return <>
        <Layout 
            pageTitle = "VITTORIA!"
            azioneSchermo = {<Azione/>}
            leftBotton = {false}
            bottonTitle1 = "..."
            pagePath1 = "..."
            rightBotton = {true}
            bottonTitle2 = "RICOMINCIA"
            pagePath2 = "" //torna alla home
        ></Layout>
    </>;
}
export default Vittoria;
    