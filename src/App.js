import './App.css';
import { useState } from 'react'
import Player from './components/Player'
import Enemy from './components/Enemy';
import Gerador from './components/Gerador';
import ConsoleText from './components/ConsoleText';

function App() {
  const [player, setPlayer] = useState([
  {
    max_hp: 10,
    hp: 10,
    max_mana: 10,
    mana: 10,
    exp: 0,
    str: 5,
    dex: 4,
    int: 2,
    res: 5,
    car: 3
  },
  {
    item: 'sword',
    damage: 5
  },
  {
    item: 'shield',
    block: 3
  }
  ])
  const [enemy, setEnemy] = useState([])
  const [buttonDisabler, setButton] = useState(false)
  const [mensagem, setMensagem] = useState('')

  // precisaria pensar melhor nas variáveis, algo pra melhorar o fluxo delas talvez.
  const aindaVivo = () => {
    if(enemy[0].hp <= 0) {
      setPlayer([...player, player[0].exp += enemy[0].exp])
      setMensagem(`inimigo derrotado, recebeu ${enemy[0].exp} EXP.`)
      setEnemy([])
      setButton(false)
    }
    else if(enemy[1].damage < player[2].block) return
    else {
      setPlayer([...player, player[0].hp -= (enemy[1].damage - player[2].block)])
      setMensagem(`Jogador Recebeu ${enemy[1].damage - player[2].block} de dano`)
    }
  }
  const battle = () => {
    setEnemy([...enemy, enemy[0].hp -= player[1].damage])
    aindaVivo()
  }
  const iniciarBatalha = (e) => {
    setEnemy(e)
    setButton(true)
    setMensagem('Batalha iniciada')
  }
  const descansar = () => {
    setPlayer([...player, player[0].hp = player[0].max_hp])
    setMensagem('Restaurou a vida')
  }


  return (

    // Aqui eu acho que está okay o código, curto e rápido, da pra entender bem
    <div className="App">
      <section className='battlefield'>
        <Player 
          name="Player" 
          ficha={player} 
          battle={e => battle()}
          descansar={e => descansar()}
          statusBatalha={buttonDisabler}
        />
        
        <Enemy 
          name="Goblin" 
          ficha={enemy}
        />
      </section>


      <div className='bottom-info'>
      <section className='enemy-list'>
        <Gerador
          escolha={e => iniciarBatalha(e)}
          statusBatalha={buttonDisabler}
        />
      </section>
      <section>
        <ConsoleText novaMensagem={mensagem}/>
      </section>
      </div>
    </div>
  );
}

export default App;