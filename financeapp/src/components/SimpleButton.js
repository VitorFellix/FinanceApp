import { useState } from "react";

const SimpleButton = () => {
  const [name, setName] = useState("Elizabeth");

  const handleClick = (name, e) => {
    setName(name);
    console.log("sup " + name + "!", e);
    //Para nao invocar direto a funcao quando carregar a pagina, vc precisa chamar uma arrow function que vai chamar a funcao que vc quer quando clicar no botao
  };

  return (
    <div className="home">
      <p>This is a simple button</p>
      <p>Sup {name}!</p>
      <button onClick={(e) => handleClick("Beke", e.target)}>Click</button>
    </div>
  );
};

export default SimpleButton;
