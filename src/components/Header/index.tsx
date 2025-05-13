import React from 'react'
import LogoSection from "./LogoSection";
import NavBar from "./NavBar";
import AuthButtons from './AuthButtons';
const Header = () => {
  return (
    <header className="h-[90px] flex justify-between items-center py-[20px] px-[80px]">
        <LogoSection/>
        <NavBar/>
        <AuthButtons/>
    </header>
  )
}

export default Header