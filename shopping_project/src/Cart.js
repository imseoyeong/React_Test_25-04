import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { onDelete } from './productListSlice';

export default function Cart() {
    const [ amount, setAmount ] = useState("");
    const cart = useSelector((state) => state.shopping.cart);
    const dispatch = useDispatch();

    // for (let i = 0; i < cart.length; i++) {
        
    // }

    return (
    <>
        <h2>Shopping Cart</h2>

        <form>
            <ul>
                {cart.map((product) => (
                    <li key={product.id}>
                        {product.title} - {product.price}원 X 개수
                        <button type='button' onClick={() => dispatch(onDelete(product.id))}>Remove</button>
                        <input type='number' name='amount' value={amount} onChange={(e) => setAmount(e.target.value)}></input>
                    </li>
                ))}
            </ul>
        </form>
    </>
    );
}
