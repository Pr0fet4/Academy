import dolarSign from '../assets/dollarSign.svg';

import '../styles/balanceCard.scss';

export function BalanceCard() {
  return (
    <div className="balance-card">
      <img src={dolarSign} alt="dolar sign" />
      <div className="balance">
        <p>Saldo em conta</p>
        <p>R$ 0,00</p>
      </div>      
    </div>
  );
}