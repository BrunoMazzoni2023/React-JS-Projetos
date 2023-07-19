
import { Link } from 'react-router-dom'; 

function Contato(){
    return(
        <div>
            <h1>Contato da empresa</h1>
            <span>COntado da empresa (dd) xxxxx-xxxx</span><br/> <br/>
            <Link to="/" >Voltar para a Home </Link>
        </div>
    )
}

export default Contato;