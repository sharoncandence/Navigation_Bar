import React from "react";
import {
    Nav,
    NavLink,
    Bars,
    NavBtn,
    NavBtnLink,
} from './Elements';


const Navbar = () => {
    return (
        <>
            <Nav>
            <Bars />

            <Nav>
                <NavLink to='/Home' activeStyle>
                    Home
                </NavLink>
                <NavLink to='/About' activeStyle>
                    About
                </NavLink>
                <NavLink to='/Books' activeStyle>
                    Books
                </NavLink>
                <NavLink to='/Shop' activeStyle>
                    Shop
                </NavLink>
                <NavLink to='/Contacts' activeStyle>
                    Contacts
                </NavLink>
                <NavLink to='/Login' activeStyle>
                    Login
                </NavLink>
                <NavLink to='/Register' activeStyle>
                    Register
                </NavLink>
            </Nav>
                {/* Second Nav */}
             {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
           
        <NavBtn>
          <NavBtnLink to='/signin'>SignIn</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};
                
export default Navbar;