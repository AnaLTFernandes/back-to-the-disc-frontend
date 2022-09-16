import Footer from "../Footer/Footer.js";
import Header from "../Header/Header.js";
import styled from "styled-components";

export default function Cart() {
  return (
    <>
      <Header />
      <CartContainer>
        <Title>CARRINHO DE COMPRAS</Title>

        <ItemsCart>
          <ImageProduct></ImageProduct>
          <InfosProduct>
            <h2>
              NOME <p>Artista</p>
            </h2>
            <h4>Remover</h4>
          </InfosProduct>
          <Amount>
            <button>-</button>
            <div>1</div>
            <button>+</button>
          </Amount>
          <Value>R$50,00</Value>
        </ItemsCart>

        <Checkout>
          <Total>
            <h1>Total</h1>
            <h2>R$50,00</h2>
          </Total>

          <BuyerData>
            <div>
              <h2>Digite seu CEP</h2>
              <input placeholder="777.777-77"></input>
            </div>

            <div>
              <h2>Escolha a forma de pagamento</h2>
              <select>
                <option value="credit">Cartão de crédito</option>
                <option value="debit">Cartão de débito</option>
                <option value="boleto">Boleto</option>
                <option value="pix">Pix</option>
              </select>
            </div>
          </BuyerData>

          <Button>Finalizar Compra</Button>
        </Checkout>
      </CartContainer>
      <Footer />
    </>
  );
}

const CartContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  font-size: 22px;
  font-weight: 700;
  margin-top: 100px;
  margin-bottom: 30px;
`;

const ItemsCart = styled.div`
  width: 50vw;
  height: 140px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--grayExtraClaro);
  border-radius: 5px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.25);
  padding: 25px;
`;

const ImageProduct = styled.div`
  width: 100px;
  height: 100px;
  background-color: var(--grayEscuro);
  border-radius: 5px;
`;

const InfosProduct = styled.div`
  width: 50%;
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-left: 12px;

  h2 {
    margin-top: 8px;
    line-height: 25px;
    font-weight: 700;
    font-size: 20px;
  }

  h2 > p {
    font-weight: 400;
  }

  h4 {
    color: var(--red-theme);
    font-size: 16px;
    font-weight: 700;
  }
`;

const Amount = styled.div`
  width: 10vw;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;

  button {
    width: 25px;
    height: 30px;
    font-weight: 700;
    font-size: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--white);
    background-color: var(--red-theme);
    border: none;
  }

  div {
    width: 40px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--grayMedioB);
    border: solid 1px var(--graySemiEscuro);
  }

  
`;

const Value = styled.div`
  width: 10vw;
  height: 100px;
  font-weight: 700;
  display: flex;
  justify-content: end;
  align-items: center;

`;

const Checkout = styled.div`
  width: 50vw;
  height: 350px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 5px;
  background-color: var(--grayExtraClaro);
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.25);
  margin-top: 50px;
  padding: 25px;

`;

const Button = styled.div`
  width: 100%;
  height: 40px;
  font-size: 18px;
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--white);
  background-color: var(--red-theme);
  border: none;
  border-radius: 5px;
  bottom: 0;
`;

const BuyerData = styled.div`
  width: 100%;
  height: 70%;
  display: flex;
  justify-content: space-evenly;
  align-items: flex-start;
  margin-top: 50px;

  h2 {
    font-size: 19px;
    font-weight: 700;
    color: var(--grayEscuro);
    margin-bottom: 5px;
  }

  input {
    width: 100%;
    height: 35px;
    font-family: Roboto;
    font-size: 16px;
    font-weight: 700;
    color: var(--grayMedioB);
    background-color: var(--white);
    padding: 5px;
    border: solid 1px var(--graySemiEscuro);
    border-radius: 5px;
    box-sizing: border-box;
  }

  input::placeholder {
    font-size: 16px;
    font-weight: 700;
    color: var(--grayMedioB);
  }

  select {
    width: 100%;
    height: 35px;
    font-family: Roboto;
    font-size: 16px;
    font-weight: 700;
    color: var(--grayMedioB);
    background-color: var(--white);
    border-radius: 5px;
  }
`;

const Total = styled.div`
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: start;
  border-bottom: solid 2px var(--grayEscuro);

  h1 {
    margin-top: 5px;
    font-size: 22px;
    font-weight: 700;
  }

  h2 {
    margin-top: 5px;
    color: var(--red-theme);
    font-weight: 700;
  }
`;