import { useDispatch, useSelector } from 'react-redux';
import { amountCount, onDelete } from './productListSlice';

export default function Cart() {
    const cart = useSelector((state) => state.shopping.cart);
    const dispatch = useDispatch();
    return (
    <>
        <h2>Shopping Cart</h2>

        <form>
            <ul>
                {cart.map((product) => (
                    <li key={product.id}>
                        {product.title} - {product.price}원 X {product.amount}
                        <button type='button' onClick={() => dispatch(onDelete(product.id))}>Remove</button>
                        <input type='number' name='amount' value={product.amount} onChange={(event)=>
                        {   
                            const amount = event.target.value;
                            dispatch(amountCount({ id: product.id, _amount: amount }))
                        }

                        }></input>
                    </li>
                ))}
            </ul>
        </form>
    </>
    );
}
