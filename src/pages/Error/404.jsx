import "./404.scss";
import { Link } from "react-router-dom";
import backgroundImg10 from '../../assets/images/error.png'; 

const Error = () => {
  document.title = 'Tesla NIT Patna | 404 Error';

  return (
    <div className="error_container">
      <img className="error_img" src={backgroundImg10} alt="error"></img>
      <h1 className="error_head">404</h1>
      <p className="error_line">Oops! Página não encontrada.</p>
      <Link to={"/"} className="error_btn">Voltar!</Link>
    </div>
  )
}

export default Error;