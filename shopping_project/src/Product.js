import { useDispatch, useSelector } from 'react-redux';
import { onSave } from './productListSlice';

export default function Product() {
    const productList = useSelector((state) => state.shopping.productList);
    const dispatch = useDispatch();

    const list = [];
    for (let product of productList){
        const item = <li key={product.id}>
                {product.title} - {product.price}원
                <button type='button' onClick={() => {
                    dispatch(onSave(product));
                    alert(`${product.title}가 장바구니에 담겼습니다.`)
                }}>Add to Cart</button>
            </li>;
        list.push(item);
    }

    return (
    <>
    <form>
        <ul>
            {list}
        </ul>
    </form>
    </>
    );
}

