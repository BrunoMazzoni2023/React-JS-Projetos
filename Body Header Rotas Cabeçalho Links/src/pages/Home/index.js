import { Link } from 'react-router-dom';
function Home() {
    return (
      <div>
        <h1>Bem vindo a Pagina Home</h1>
        <span>Home Grove Street welcome to janrock it is leet's good </span> <br/> <br/>    
        <Link to="/sobre">Sobre</Link> <br/>    <br/>   
        <Link to="/contato">Contato</Link>
      </div>
    );
  }
  
  export default Home;
  