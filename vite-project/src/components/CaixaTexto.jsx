function CaixaTexto(props) {
  return (
    <>
      <div className="logincss">
        {props.but === "button" ? (
          <button className="botao-acesar">{props.valor}</button>
        ) : (
          <input type={props.but} name="" id="" placeholder={props.place} value={props.valor} />
        )}
      </div>
    </>
  );
}

export default CaixaTexto;
