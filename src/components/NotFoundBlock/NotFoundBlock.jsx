import React from 'react';
import { Link } from 'react-router-dom';


function NotFoundBlock() {
    return (
        <>
            <div className="cart cart--empty">
                <h2>Страница не найден <span>😕</span></h2>
                <p style={{marginTop : "20px"}}>
                    К сожалению данная страница отсутствует у нас в магазине
                </p>
                <Link to="/" className="button button--black">
                    <span>Вернуться назад</span>
                </Link>
            </div>
        </>
    );
}

export default NotFoundBlock;