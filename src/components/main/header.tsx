import { useState } from "react";
import { Container } from "./container";
import { Link } from 'react-router-dom';
import '../../styles/header.css'
import logo from '../../images/logo.svg'

export const Header = () => {
    const [active, setActive] = useState('')
    return (
        <header>
            <Container>
                <nav className="navbar">
                    <div className="logo">
                        <Link to='/'><img src={logo} alt="logo" /></Link>
                    </div>
                    <ul className={`nav_links ${active}`}>
                        <li><Link to='https://coinstats.app/blog/'>Blog</Link></li>
                    </ul>
                    <div className="burger" onClick={() => active === ''? setActive('active'): setActive('')}>
                        <div className="burger_item"></div>
                        <div className="burger_item"></div>
                        <div className="burger_item"></div>
                    </div>
                </nav>
            </Container>
        </header>
    )
}