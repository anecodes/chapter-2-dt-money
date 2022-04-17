import styled from "styled-components";

export const Container = styled.form`
  h2 {
    color: var(--text-title);
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  input {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    border-radius: 0.25rem;

    border: 1px solid #d7d7d7;
    background: #e7e9ee;

    font-weight: 400;
    font-size: 1rem;

    &::placeholder {
      color: var(--text-body);
    }

    //* Todo input, a partir do segundo, receberá um margin-top acima dele.
    & + input {
      margin-top: 1rem;
    }
  }

  //* Especificação para que esse estilo seja aplicado apenas em botão do tipo 'submit'
  button[type="submit"] {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    background: var(--green);
    color: #fff;
    border-radius: 0.25rem;
    border: 0;
    font-size: 1rem;
    font-weight: 600;
    margin-top: 1.5rem;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;

export const TransactionTypeContainer = styled.div`
  margin: 1rem 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;
`;

//* Definição de um tipo para as propriedades de RadioBox que serão utilizadas (isActive, por exemplo)
interface RadioBoxProps {
  isActive: boolean;
  activeColor: "green" | "red";
}

const colors = {
  green: "#33cc95",
  red: "#e52e4d",
};
//* No TypeScript, usa-se a funcionalidade "generic", que são componentes que podem ser
//* capazes de "funcionar" em vários tipos, podendo ser reutilizado.
//* Aqui, esse tipo é passado como parâmetro da seguinte forma: styled.button<RadioBoxProps>
export const RadioBox = styled.button<RadioBoxProps>`
  height: 4rem;
  border: 1px solid #d7d7d7;
  border-radius: 0.25rem;

  //* Aqui peguei as props de RadioBoxProps. Se activeColor for true, a cor fica #33cc95 ou #e52e4d,
  //* se for false, fica transparente.
  //* Não precisa colocar chaves na condição porque na arrow function o return é automático.
  background: ${(props) =>
    props.isActive ? colors[props.activeColor] : "transparent"};

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    border-color: #aaa;
  }

  img {
    width: 20px;
    height: 20px;
  }

  span {
    display: inline-block;
    margin-left: 1rem;
    font-size: 1rem;
    color: var(--text-title);
  }
`;
