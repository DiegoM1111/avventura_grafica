import Layout from "../components/Layout";
import idle from '../materiale/idle.gif';

function Azione(){
    return (
        <>
            {/* cavaliere */}
            <img className='pg' src={idle} alt="idle"></img>
        </>
    );
}

function HomePage() {

    return (
        <Layout 
            pageTitle = "DOVE ANDARE ?"
            azioneSchermo = {<Azione/>}
            leftBotton = {true} // c'è il bottone
            bottonTitle1 = "SINISTRA"
            pagePath1 = "nulla"
            rightBotton = {true}
            bottonTitle2 = "DESTRA"
            pagePath2 = "malintenzionato"
        ></Layout>
    );
}
export default HomePage;