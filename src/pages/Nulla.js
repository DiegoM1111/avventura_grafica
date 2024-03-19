import Layout from "../components/Layout";
import idle from '../materiale/idle.gif';

function Azione(){
    return (
        <>
            {/* cavaliere */}
            <img className='pg centroPg' src={idle} alt="idle"></img>
        </>
    );
}

function Nulla(){
    return <>
        <Layout 
            pageTitle = "NON C'E' NULLA QUI"
            azioneSchermo = {<Azione/>}
            leftBotton = {false}
            bottonTitle1 = "..."
            pagePath1 = "..."
            rightBotton = {true}
            bottonTitle2 = "INDIETRO"
            pagePath2 = "" //torna alla home
        ></Layout>
    </>;
}
export default Nulla;
    