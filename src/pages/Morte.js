import Layout from "../components/Layout";
import dead from '../materiale/dead.gif';
import enemyFight from '../materiale/enemy_fight.gif';

function Azione(){
    return (
        <>
            {/* cavaliere */}
            <img className='pg pgLose' src={dead} alt="dead"></img>

            <img className="pg enemy enemyWin" src={enemyFight} alt="enemy_fight"></img>
        </>
    );
}

function Morte(){
    return <>
        <Layout 
            pageTitle = "SCONFITTA!"
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
export default Morte;
    