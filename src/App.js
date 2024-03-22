import './App.css'
import robotlogo from './assets/robotlogo.svg'
import home from './assets/home.svg'
import msgIcon from './assets/message.svg'
import addBtn from './assets/add-30.png'
import save from './assets/bookmark.svg'
import rocket from './assets/rocket.svg'
import sendBtn from './assets/send.svg'
import userIcon from './assets/user-icon.png'
import robotImgLogo from './assets/chatgptLogo.svg'

function App() {
  return (
    <div className="App">
      <div className="sideBar">
        <div className="upperside">
          <div className="upperSideTop"><img src={robotlogo} alt="Logo" className="logo" /><span className="brand">Your Summary</span></div>
            <button className="midBtn"><img src={addBtn} alt="Novo Chat" className="addBtn" />New chat</button>
            <div className="upperSideBottom">
              <button className="query"><img src={msgIcon} alt="Icone de mensagem" />Crie um resumo de um filme</button>
              <button className="query"><img src={msgIcon} alt="Icone de mensagem" />Crie um resumo para uma reunião de negocios</button>
            </div>

        </div>
          <div className="lowerSide">
            <div className="listitems"><img src={home} alt="Inicio" className="listitemsImg"/>Home</div>
            <div className="listitems"><img src={save} alt="Salvos" className="listitemsImg"/>Salvos</div>
            <div className="listitems"><img src={rocket} alt="Plano Pro" className="listitemsImg"/>Use o Plano Pro</div>
          </div>
      </div>

      <div className="main">
        <div className="chats">
          <div className="chat">
            <img src={userIcon} alt=""/><p className="text">Esse é um texto exemplo gerado automaticamente para este projeto.</p>
          </div>

          <div className="chat">
            <img src={robotImgLogo} alt=""/><p className="text">Esse é um texto exemplo gerado automaticamente para este projeto.</p>
          </div>

        </div>

        <div className="chatFooter">
          <div className="inp">
            <input type="text" name="" id="" placeholder="Enviar comando"/><button className="send"><img src={sendBtn} alt="Botão enviar" /></button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
