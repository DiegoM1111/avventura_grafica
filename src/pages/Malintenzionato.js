import Layout from "../components/Layout";

function Malintenzionato(){
    return<>
        <Layout 
            pageTitle = "UN MALINTENZIONATO! CHE FARE ?"
            statoCavaliere= "idle"
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
    