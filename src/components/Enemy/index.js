import './enemy.css'

const Enemy = ({ name, ficha }) => {
    return (
        ficha.length > 0 && <section className='enemy'>
            <div>
                <h1 className='name'>{name}</h1>
                <p>hp: {ficha[0].hp}</p>
            </div>
            <div className='status'>
                {/* Isso daqui podia ser um componente né... */}
                <p className='status_field'>str: {ficha[0].str}</p>
                <p className='status_field'>dex: {ficha[0].dex}</p>
                <p className='status_field'>int: {ficha[0].int}</p>
                <p className='status_field'>res: {ficha[0].res}</p>
                <p className='status_field'>car: {ficha[0].car}</p>
            </div>
            <div className='item'>
                <p>Primary: <span>{ficha[1].item}</span></p>
                <p>Damage: <span>{ficha[1].damage}</span></p>
            </div>
        </section>
    )
}

export default Enemy