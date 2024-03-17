import '../assets/cavaliere.css';
import idle from '../materiale/idle.gif';
import fight from '../materiale/fight.gif';
import dead from '../materiale/dead.gif';
import run from '../materiale/run.gif';

function Cavaliere(posizione){
    let stato; 

    if(posizione === "SCAMPATO PERICOLO!"){
        stato = run;
    }else if(posizione === "SCONFITTA!"){
        stato = dead;
    }else if(posizione === "ATTACHI!"){
        stato = fight;
    }else{
        stato = idle;
    }

    // switch (posizione) {
    //     case "SCAMPATO PERICOLO!":
    //       stato = run;
    //       break;
    //     case "SCONFITTA!":
    //       stato = dead;
    //       break;
    //     case "ATTACHI!":
    //       stato = fight;
    //       break;
    //     default:
    //         stato = idle;
    //         break;
    // }

    return (<>
        <img className='pg' src={stato} alt={stato} />
    </>
    );
}
export default Cavaliere;
    