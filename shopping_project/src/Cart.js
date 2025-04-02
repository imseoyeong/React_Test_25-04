import { useSelector } from 'react-redux';

export default function Cart() {
    const cart = useSelector((state) => state.shopping.cart);

    return (
    <>
        <h2>Shopping Cart</h2>

        <form>
            <ul>
                {cart.map((product) => (
                    <li key={product.id}>
                        {product.title} - {product.price}원 X 개수
                        <button type='button'>Remove</button>
                        <input type='number'></input>
                    </li>
                ))}
            </ul>
        </form>
    </>
    );
}
