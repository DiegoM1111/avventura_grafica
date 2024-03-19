import Layout from "../components/Layout";


function Morte(){
    return <>
        <Layout 
            pageTitle = "SCONFITTA!"
            statoCavaliere= "dead"
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
    