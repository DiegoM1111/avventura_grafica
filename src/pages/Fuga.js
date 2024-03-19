import Layout from "../components/Layout";

function Fuga(){
    return <>
        <Layout 
            pageTitle = "SCAMPATO PERICOLO!"
            statoCavaliere= "run"
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
    