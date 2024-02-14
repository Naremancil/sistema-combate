import './gerador.css'

const Gerador = ({ escolha, statusBatalha }) => {
    
    const goblin = [
        {
          hp: 10,
          mana: 10,
          exp: 10,
          str: 2,
          dex: 1,
          int: 0,
          res: 2,
          car: 0
        },
        {
          item: 'stick',
          damage: 2,
        }
    ]
      const goblin_guerreiro = [
        {
          hp: 10,
          mana: 10,
          exp: 15,
          str: 5,
          dex: 1,
          int: 0,
          res: 2,
          car: 0
        },
        {
          item: 'dagger',
          damage: 4,
        }
    ]

    const gerarGoblin = () => {
        escolha(goblin)
    }

    const gerarGoblinGuerreiro = () => {
        escolha(goblin_guerreiro)
    }


    return (
        <section className='button-list'>
            <button onClick={gerarGoblin} disabled={statusBatalha}>Goblin</button>
            <button onClick={gerarGoblinGuerreiro} disabled={statusBatalha}>Goblin Guerreiro</button>
        </section>
    )
}

export default Gerador