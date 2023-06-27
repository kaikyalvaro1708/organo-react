import Colaborador from "../Colaborador/";
import "./time.css";

function Time(props) {
  const css = { backgroundColor: props.colorSecundaria };

  return (
    // cor de fundo baseado na lista de times criada
    // aparece apenas o cards cadastrados
    (props.colaboradores.length > 0) ? <section className="time" style={css}>
      <h3 style={{ borderColor: props.colorPrimaria }}>{props.nome}</h3>
      <div className="colaboradores">
      {props.Colaboradores.map((colaborador) => (
        <Colaborador
          corDeFundo={props.colorPrimaria}
          key={colaborador.nome}
          nome={colaborador.nome}
          cargo={colaborador.cargo}
          imagem={colaborador.imagem}
        /> ))}
      </div> 
    </section>
    : ''
  );
}

export default Time;
