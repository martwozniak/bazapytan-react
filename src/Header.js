import React, { Component } from 'react'
import './Header.css';
export default class Header extends Component {
    render() {
        return (
            <div className="header__">
                <div className="logo__">
                <span>BAZAPYTAŃ.PL</span>
                </div>
                <div className="search__">
                    <input className="search__main" placeholder="Szukaj..."/>
                </div>
                <div className="menu__">
                    <ul className="menu__ul">
                        <li>
                            <p>Kwalifikacje</p>
                        </li>
                        
                        <li>
                            <p>Arkusze</p>
                        </li>
                        
                        <li>
                            <p>Kontakt</p>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}
