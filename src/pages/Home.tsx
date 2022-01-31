import { SideBar } from '../components/Sidebar';
import { BalanceCard } from '../components/BalanceCard';
import { User } from '../components/User';

import money from '../assets/money.svg';
import users from '../assets/users.svg';


import '../styles/home.scss';
import { useState } from 'react';

export function Home() {
  const [currentTab, setCurrentTab] = useState("Este mês");
  const tabs = ["Este mês", "Este ano", "Desde o início"]
  
  return (
    <div className="home-page">
      <SideBar />
      <main>
        <div className='content'>
          <div className='header'>
            <BalanceCard />
            <User />
          </div>
          <div className="time-menu">
            {tabs.map(item => {
              return (
                <button className={currentTab === item ? "currentTab" : ""} onClick={() => setCurrentTab(item)}>
                  {item}
                </button>
              )
            })}
          </div>
          <div className='container-cards'>
            <div className="card">
              <div className="header-box">
                <img src={users} alt="clientes" />
                Clientes
              </div>
              <div className="content-card">
                <div className="green-box">
                  <span>Em dia</span>
                  <span>0</span>
                </div>
                <div className="red-box">
                  <span>Inadimplentes</span>
                  <span>0</span>
                </div>
              </div>
            </div>

            <div className='card'>
              <div className="header-box">
                <img src={money} alt="clientes" />
                Cobranças
              </div>
              <div className='content-card'>
                <div className="blue-box">
                  <span>Previstas</span>
                  <span>0</span>
                </div>
                <div className="red-box">
                  <span>Vencidas</span>
                  <span>0</span>
                </div>
                <div className="green-box">
                  <span>Pagas</span>
                  <span>0</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main >
    </div >
  );
}