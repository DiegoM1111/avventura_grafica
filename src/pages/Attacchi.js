import Layout from "../components/Layout";

function Attacchi(){
    return<>
        <Layout 
            pageTitle = "ATTACHI!"
            statoCavaliere= "fight"
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
    