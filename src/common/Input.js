import styled from "styled-components";

function Input({ ...otherProps }) {
  return <Wapper {...otherProps}></Wapper>;
}

export default Input;

const Wapper = styled.input`
  width: 25vw;
  height: 50px;
  font-size: 20px;
  text-align: center;
  color: var(--grayEscuro);
  background-color: var(--white);
  border-radius: 15px;
  margin-bottom: 20px;
  padding: 15px;
  border: solid 1px var(--grayEscuro);

  &::placeholder {
    color: var(--grayEscuro);
  }

  @media (max-width: 1200px) {
    width: 300px;
  }
`;
