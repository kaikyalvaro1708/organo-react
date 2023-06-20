import './index.css'

// O props é passado como parâmetro
// Props vem de propriedades
const CampoTexto = (props) =>{

    const placeholderModificado = `${props.placeholder}...`

    return(
        <div className="campo-texto">
            <label>{props.label}</label>
            <input required={props.obrigatorio} placeholder={placeholderModificado}/>
        </div>
    )
}

export default CampoTexto