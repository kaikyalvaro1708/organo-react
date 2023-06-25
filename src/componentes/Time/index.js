import './time.css'

function Time(props){
    const css = {backgroundColor: props.colorSecundaria}

    return(
        // cor de fundo baseado na lista de times criada
        <section className='time' style={css}>
            <h3 style={{borderColor: props.colorPrimaria}}>{props.nome}</h3>
        </section>
    )
}

export default Time