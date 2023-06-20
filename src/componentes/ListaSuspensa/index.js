import './index.css';

function ListaSuspensa(props){
    console.log(props.itens)
    return(
        <div className='lista-suspensa'>
            <label>{props.label}</label>
            <select required={props.obrigatorio}>
                {/* Para cada item retorna uma opção */}
                {props.itens.map((item,index) => {
                return <option key={index}>{item}</option>
                })}
            </select> 
        </div>
    )
}

export default ListaSuspensa