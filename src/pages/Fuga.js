import Layout from "../components/Layout";
import run from '../materiale/run.gif';

function Azione(){
    return (
        <>
            {/* cavaliere */}
            <img className='pg pgFuga' src={run} alt="pg_run"></img>
            {/* <img className='pg' src={run} alt="pg_run" style={animazioneFuga}></img> */}
        </>
    );
}

function Fuga(){
    return <>
        <Layout 
            pageTitle = "SCAMPATO PERICOLO!"
            azioneSchermo = {<Azione/>}
            leftBotton = {false}
            bottonTitle1 = "..."
            pagePath1 = "..."
            rightBotton = {true}
            bottonTitle2 = "INDIETRO"
            pagePath2 = "nulla" //torna alla home
        ></Layout>
    </>;
}
export default Fuga;
    