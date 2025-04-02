import { Link, Outlet } from "react-router-dom";

export default function MainLayout() {
    return (
    <>
        <h1>Shopping</h1>
        <ul className='menu-list'>
            <li><Link to='/product'>상품보기</Link></li>
            <li><Link to='/cart'>장바구니</Link></li>
            <li><Link to='/total'>결제금액보기</Link></li>
        </ul>
        <Outlet/>
    </>
    );
}
