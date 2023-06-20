import './index.css';

const Botao = (props) => {
    return(
        <button>{props.children}</button>
    )
}

export default Botao

// Tudo que estiver entre a abertura e o fechamento do botao
// Será passado por conta da propriedade Children. Ex: imagens e icones
