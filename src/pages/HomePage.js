import Layout from "../components/Layout";

function HomePage() {
    return (
        <Layout 
            pageTitle = "DOVE ANDARE ?"
            leftBotton = {true}
            bottonTitle1 = "SINISTRA"
            pagePath1 = "nulla"
            rightBotton = {true}
            bottonTitle2 = "DESTRA"
            pagePath2 = "malintenzionato"
        ></Layout>
    );
}
export default HomePage;






// import Riquadro from "../components/Riquadro";
// import Bottone from '../components/Bottone';
// import background from '../materiale/image3.png';

// function HomePage() {
//     const sfondo = {
//         backgroundImage: `url(${background})`,
//         height: "400px",
//         backgroundPosition: "center",
//         backgroundRepeat: "no-repeat",
//         backgroundSize: "cover",
//         position: "relative",
//     };

//     return (
//         <>
//             <div className="separatore"></div>
            
//             <div className="container">
//             {/* <div style={containerStyle}> */}
                
//                 <div className="row">
//                     <div className="col-4"></div>
                    
//                     <div className="col-4">
//                         <Riquadro title="DOVE ANDARE ?"></Riquadro>
//                     </div>

//                     <div className="col-4"></div>
//                 </div>

//                 {/* dove avvengono le scene */}
//                 <div className="row">
//                     <div className="col-2"></div>

//                     <div className="col-8" style={sfondo}></div>

//                     <div className="col-2"></div>
//                 </div>

//                 <div className="row">
//                     <div className="col-1"></div>

//                     <div className="col-3">
//                         <Bottone title="SINISTRA" path="nulla"></Bottone>
//                     </div>

//                     <div className="col-4"></div>

//                     <div className="col-3">
//                         <Bottone title="DESTRA" path="malintenzionato"></Bottone>
//                     </div>

//                     <div className="col-1"></div>
//                 </div>
//             </div>
//         </>
//     );
//   }
  
//   export default HomePage;