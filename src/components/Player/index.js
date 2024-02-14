import './player.css'

const Player = ({ name, ficha, battle, statusBatalha, descansar }) => {
    function lutar(){
        battle()
    }

    function regenerar(){
        descansar()
    }
    
    return (
        <section className='player'>
            <h1 className='name'>{name}</h1>
            <div className='infos'>
                <p>hp: {ficha[0].hp}</p>
                <p>exp: {ficha[0].exp}</p>
            </div>
            <div className='status'>
                <p className='status_field'>str: {ficha[0].str}</p>
                <p className='status_field'>dex: {ficha[0].dex}</p>
                <p className='status_field'>int: {ficha[0].int}</p>
                <p className='status_field' >res: {ficha[0].res}</p>
                <p className='status_field'>car: {ficha[0].car}</p>
            </div>
            <div className='item'>
                <p>Primary: <span>{ficha[1].item}</span></p>
                <p>Damage: <span>{ficha[1].damage}</span></p>
            </div>
            <div className='item'>
                <p>secondary: <span>{ficha[2].item}</span></p>
                <p>block: <span>{ficha[2].block}</span></p>
            </div>
            <div className='buttons'>
                <button type='button' onClick={lutar} disabled={!statusBatalha}>lutar</button>
                <button type='button' onClick={regenerar} disabled={statusBatalha}>descansar</button>
            </div>
        </section>
    )
}

export default Player