import { BalanceCard } from "../components/BalanceCard";
import { SideBar } from "../components/Sidebar";
import { User } from "../components/User";

import search from '../assets/search.svg';
import printer from '../assets/printer.svg'

import '../styles/charge.scss';

export function Charge() {
  return (
    <div className="charge-page">
      <SideBar />
      <main>
        <div className="content">          
            <BalanceCard />
            <User />          
          <div className="charge-table">
            <div className="search">
              <input
                type="text"
                placeholder="Procurar por Nome, E-mail ou CPF"
              />
              <button>
                <img src={search} alt="Botão de busca" />
                <span>Buscar</span>
              </button>
            </div>
            <table >
              <thead>
                <tr className="table-title">
                  <th>Cliente</th>
                  <th>Descrição</th>
                  <th>Valor</th>
                  <th>Status</th>
                  <th>Vencimento</th>
                  <th>Boleto</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>Nome da Cliente</td>
                  <td>Pagamento referente à...</td>
                  <td>R$ 00.000,00</td>
                  <td>Pago</td>
                  <td>12/12/2020</td>
                  <td><img src={printer} alt="imprimir" /></td>
                </tr>
                <tr>
                  <td>Nome da Cliente</td>
                  <td>Pagamento referente à...</td>
                  <td>R$ 00.000,00</td>
                  <td>Pago</td>
                  <td>12/12/2020</td>
                  <td><img src={printer} alt="imprimir" /></td>
                </tr>
                <tr>
                  <td>Nome da Cliente</td>
                  <td>Pagamento referente à...</td>
                  <td>R$ 00.000,00</td>
                  <td>Pago</td>
                  <td>12/12/2020</td>
                  <td><img src={printer} alt="imprimir" /></td>
                </tr>
                <tr>
                  <td>Nome da Cliente</td>
                  <td>Pagamento referente à...</td>
                  <td>R$ 00.000,00</td>
                  <td>Pago</td>
                  <td>12/12/2020</td>
                  <td><img src={printer} alt="imprimir" /></td>
                </tr>
                <tr>
                  <td>Nome da Cliente</td>
                  <td>Pagamento referente à...</td>
                  <td>R$ 00.000,00</td>
                  <td>Pago</td>
                  <td>12/12/2020</td>
                  <td><img src={printer} alt="imprimir" /></td>
                </tr>
                <tr>
                  <td>Nome da Cliente</td>
                  <td>Pagamento referente à...</td>
                  <td>R$ 00.000,00</td>
                  <td>Pago</td>
                  <td>12/12/2020</td>
                  <td><img src={printer} alt="imprimir" /></td>
                </tr>
                <tr>
                  <td>Nome da Cliente</td>
                  <td>Pagamento referente à...</td>
                  <td>R$ 00.000,00</td>
                  <td>Pago</td>
                  <td>12/12/2020</td>
                  <td><img src={printer} alt="imprimir" /></td>
                </tr>
                <tr>
                  <td>Nome da Cliente</td>
                  <td>Pagamento referente à...</td>
                  <td>R$ 00.000,00</td>
                  <td>Pago</td>
                  <td>12/12/2020</td>
                  <td><img src={printer} alt="imprimir" /></td>
                </tr>
                <tr>
                  <td>Nome da Cliente</td>
                  <td>Pagamento referente à...</td>
                  <td>R$ 00.000,00</td>
                  <td>Pago</td>
                  <td>12/12/2020</td>
                  <td><img src={printer} alt="imprimir" /></td>
                </tr>
                <tr>
                  <td>Nome da Cliente</td>
                  <td>Pagamento referente à...</td>
                  <td>R$ 00.000,00</td>
                  <td>Pago</td>
                  <td>12/12/2020</td>
                  <td><img src={printer} alt="imprimir" /></td>
                </tr>
              </tbody>
            </table>
          </div>

        </div>
      </main >
    </div >
  );
}