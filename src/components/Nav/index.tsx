import React from 'react';
import { Link } from 'react-router-dom'
import { NavContent } from './styles';
import LogoAfya from '../../assets/img/logo.png'
// import { toast } from 'react-toastify';

const Nav: React.FC = () => {
  // function handleToast() {
  //   toast.success('Tudo certo');
  // }
  return (
    <NavContent>
      <Link to="/">
        <img src={LogoAfya} alt="Logo da empresa" />
      </Link>
      <div className="nav-content">
        <Link to='/'>Home</Link>
        <Link to='/'>Home</Link>
        <Link to='/'>Home</Link>
        <Link to='/'>Home</Link>
        <Link to='/contact'>Contato</Link>
        {/* <button onClick={handleToast}>Toast!</button> */}
      </div>
    </NavContent>
  );
}

export default Nav;