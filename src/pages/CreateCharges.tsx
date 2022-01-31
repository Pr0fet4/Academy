import { SideBar } from "../components/Sidebar";

export function CreateCharges() {
  return (
    <div className="create-page">
      <SideBar />
      <main> 
      <h1>// Criar Cobranças</h1>
      <div className="chargeCreateBox">
        <label>Cliente</label>
        <input type="text" placeholder="Selecione a cliente" />
        <label>Descrição</label>
        <input type="text" />
        <p>A descrição informada será impresa no boleto</p>
        <div>
          <label>Valor</label>
          <input type="number" placeholder="R$ 0,00" />
          <label>Vencimento</label>
          <input type="text" />
        </div>
        <div>
          <button>Cancelar</button>
          <button>Criar cobrança</button>
        </div>
      </div>
      </main>
    </div>


  );
}