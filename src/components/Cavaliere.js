import '../assets/cavaliere.css';
import idle from '../materiale/idle.gif';
import fight from '../materiale/fight.gif';
import dead from '../materiale/dead.gif';
import run from '../materiale/run.gif';

function Cavaliere(stato){
    // let tipo = run;
    // if(stato === 'idle'){
    //     tipo = idle;
    // }else if(stato === 'fight'){
    //     tipo = fight;
    // }else if(stato === 'dead'){
    //     tipo = dead;
    // }else if(stato === 'run'){
    //     tipo = run;
    // }
    let tipo;

    {(() => {
        if (stato === 'idle') {
            tipo = idle;
        } else if (stato === 'fight') {
            tipo = fight;
        } else if (stato === 'dead'){
            tipo = dead;
        }else if (stato === 'run'){
            tipo = run;
        }else{
            tipo = 'errore';
        }
      })()}

    return (<>
        <img className='pg' src={tipo} alt={tipo} />
    </>
    );
}
export default Cavaliere;
    