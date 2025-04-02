import { useDispatch, useSelector } from 'react-redux';
import { onSave } from './productListSlice';

export default function Product() {
    const productList = useSelector((state) => state.shopping.productList);
    const dispatch = useDispatch();

    const list = [];
    for (let product of productList){
        const item = <li key={product.id}>{
                product.title} - {product.price}원
                {/* 저장을 cart에 해야하는뎀 어케하지?^^ */}
                <button type='button'>Add to Cart</button>
                {/* <button type='button' onClick={() => dispatch(onSave({ id: product.id, title: product.title, price: product.price }))}>Add to Cart</button> */}
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

