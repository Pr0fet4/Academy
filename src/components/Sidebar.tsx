import logo2 from '../assets/logo2.svg';
import home from '../assets/home.svg';
import money from '../assets/money.svg';
import users from '../assets/users.svg';
import { useState } from 'react';

import '../styles/sidebar.scss';
import { Link } from 'react-router-dom';

export function SideBar() {
  const [currentSection, setCurrentSection] = useState("Home");
  const section = [
    { title: "Home", icon: home, link: "home" },
    { title: "Cobranças", icon: money, link: "charge" },
    { title: "Clientes", icon: users, link: "clientes" }];

  return (
    <aside className="sidebar">
      <img className="logo-academy" src={logo2} alt="logo academy" />
      <div className="menu-options">
        {section.map(item => {
          return (
            <Link to={item.link} className="link">
              <div className={currentSection === item.title ? "current" : ""} onClick={() => setCurrentSection(item.title)}>
                <img src={item.icon} /> {item.title}
              </div>
            </Link>
          )
        })}
      </div>
      <Link to="/createCharges">
        <button className="charge-button">
          Criar cobrança
        </button>
      </Link>
    </aside>
  )
}