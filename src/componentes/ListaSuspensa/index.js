import "./index.css";

function ListaSuspensa(props) {
  console.log(props.itens);
  return (
    <div className="lista-suspensa">
      <label>{props.label}</label>
      <select
        onChange={(evento) => props.aoAlterado(evento.target.value)}
        required={props.obrigatorio}
        value={props.value}
      >
        {/* Para cada item retorna uma opção */}
        {props.itens.map((item, index) => {
          return <option key={index}>{item}</option>;
        })}
      </select>
    </div>
  );
}

export default ListaSuspensa;
