import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

import Search from '../Search/Search';
import HeaderCart from './HeaderCart';

import logo from '../../assets/img/pizza-logo.svg';


function Header() {
  const location = useLocation();

  return (
    <div className="header">
      <div className="container">
        <Link to='/' className='link__logo'>
          <div className="header__logo">
            <img width="38" src={logo} alt="Pizza logo" />
            <div>
              <h1>React Pizza</h1>
              <p>самая вкусная пицца во вселенной</p>
            </div>
          </div>
        </Link>
        {location.pathname !== '/carts' ? <Search /> : ''}
        <HeaderCart />
      </div>
    </div>
  );
}

export default Header;