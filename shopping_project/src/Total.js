import { useSelector } from 'react-redux';

export default function Total() {
    const cartList = useSelector((state) => state.shopping.cart);
    let result = 0 ; 
    for(let i of cartList){
        result += Number(i.price) * Number(i.amount)
    }
    
    return (
    <>
        <h2>Total</h2>
        <p>{result} 원</p>
    </>
    );
}
