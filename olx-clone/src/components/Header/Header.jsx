import React, { useState } from 'react';
import {
  Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavbarText
} from 'reactstrap'; import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faChevronDown } from '@fortawesome/free-solid-svg-icons'
import Login from '../Login/Login'
function Header() {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <>
      <Login toggle={toggle} modal={isOpen}/>
      <Navbar color="light" light expand="sm" fixed='true'>
        <div className="container-fluid ContainerFluid">

          <div className="row w-100">
            <div className="col-lg-4 d-flex logoParent">
              <NavbarBrand href="/" className='ml-3 mt-4'>
                <svg width="48px" height="48px" viewBox="0 0 1024 1024" data-aut-id="icon" className="" fillRule="evenodd"><path className="rui-77aaa" d="M661.333 256v512h-128v-512h128zM277.333 298.667c117.824 0 213.333 95.531 213.333 213.333s-95.509 213.333-213.333 213.333c-117.824 0-213.333-95.531-213.333-213.333s95.509-213.333 213.333-213.333zM794.496 384l37.504 37.504 37.504-37.504h90.496v90.496l-37.504 37.504 37.504 37.504v90.496h-90.496l-37.504-37.504-37.504 37.504h-90.496v-90.496l37.504-37.504-37.504-37.504v-90.496h90.496zM277.333 426.667c-47.061 0-85.333 38.293-85.333 85.333s38.272 85.333 85.333 85.333c47.061 0 85.333-38.293 85.333-85.333s-38.272-85.333-85.333-85.333z"></path></svg>
              </NavbarBrand>
              <NavbarToggler onClick={toggle} />
              <div className='header__category'>
                <FontAwesomeIcon icon={faSearch} size="lg" className='searchIcon' />
                <input type='text' className='inputCategory' defaultValue='Karachi Sindh' />
                <FontAwesomeIcon icon={faChevronDown} size="lg" className='header__caretDown' />
              </div>
            </div>
            <div className="col-lg-6">

              <div className='header__search'>
                <input type='text' className='inputSearch' placeholder='Find Cars Mobile Phone and More' />
                <span className='header__searchParent'><FontAwesomeIcon icon={faSearch} size="lg" className='header__searchBtn'/></span>
              </div>
            </div>
            <div className="col-lg-2">
            
              <span className='header__login' onClick={toggle}>Login</span>
                <span className='header__sell' onClick={toggle}>+Sell
              </span>
            </div>
            <NavbarText>
            </NavbarText>
          </div>
        </div>
      </Navbar>
    </>
  )
}


export default Header