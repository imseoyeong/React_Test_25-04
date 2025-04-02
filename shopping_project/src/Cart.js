import { useDispatch, useSelector } from 'react-redux';

export default function Cart() {
    const productList = useSelector((state) => state.shopping.productList);

    const cartList = [];
    for (let product of productList){
        const item = <li key={product.id}>{
                product.title} - {product.price}원 X 개수
                <button type='button'>Remove</button>
                <input type='number'></input>
            </li>;
        cartList.push(item);
    }

    return (
    <>
        <h2>Shopping Cart</h2>

        <form>
            <ul>
                {cartList}
            </ul>
        </form>
    </>
    );
}
