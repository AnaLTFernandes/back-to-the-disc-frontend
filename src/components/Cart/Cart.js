import { useState } from "react";
import { Link } from "react-router-dom";
import ProductCart from "./ProductCart.js";
import CheckoutCart from "./CheckoutCart.js";
import {
  CartContainer,
  Title,
  ItemsCart,
  Checkout,
  Total,
  Span,
} from "./CartStyle";

export default function Cart({ cart, setCart }) {
  const price = cart
    .map((item) => Number(item.price) * item.quantity)
    .reduce((prev, curr) => prev + curr, 0);

  const [total, setTotal] = useState(price);

  return (
    <>
      <CartContainer>
        <Title>CARRINHO DE COMPRAS</Title>
        <Link to="/historic">HISTÓRICO</Link>

        {cart.length === 0 ? (
          <ItemsCart>
            <Span>
              <p>Ainda não há produtos no seu carrinho!</p>
            </Span>
          </ItemsCart>
        ) : (
          <>
            {cart.map((product, index) => (
              <ProductCart
                key={index}
                cart={cart}
                setCart={setCart}
                total={total}
                setTotal={setTotal}
                product={product}
              />
            ))}

            <Checkout>
              <Total>
                <h1>Total</h1>
                <h2>R${Number(total).toFixed(2).replace(".", ",")}</h2>
              </Total>

              <CheckoutCart cart={cart} setCart={setCart} />
            </Checkout>
          </>
        )}
      </CartContainer>
    </>
  );
}
