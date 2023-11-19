import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';

import { addProduct, cartitemSelect } from '../redux/Slice/cartsSlice'


function PizzaBlock({ id, imageUrl, title, sizes, price, types }) {


    const typeNames = ['тонкое', 'традиционное']; 
    const [activeTypes, setActiveTypes] = useState(0);
    const [activeSizes, setActiveSizes] = useState(0);

    const dispatch = useDispatch();
    const addedEement = useSelector(cartitemSelect(id));

    const addedCount = addedEement ? addedEement.count : 0;

    const onAdd = () => {
        const obj = {
            id,
            title,
            price,
            imageUrl,
            type: typeNames[activeTypes],
            sizes: sizes[activeSizes]
        }

        dispatch(addProduct(obj));
    }


    return (
        <>
            <div
                className="pizza-block">
                <img
                    className="pizza-block__image"
                    src={imageUrl}
                    alt="Pizza"
                />
                <h4 className="pizza-block__title">{title}</h4>
                <div className="pizza-block__selector">
                    <ul>
                        {types.map((val, y) => (
                            <li
                                key={y}
                                className={activeTypes === y ? "active" : ''}
                                onClick={() => setActiveTypes(y)}
                            >{typeNames[val]}</li>
                        ))}
                    </ul>
                    <ul>
                        {sizes.map((val, y) => (
                            <li
                                key={y}
                                className={activeSizes === y ? "active" : ''}
                                onClick={() => setActiveSizes(y)}
                            >{val} см.</li>
                        ))}

                    </ul>
                </div>
                <div className="pizza-block__bottom">
                    <div className="pizza-block__price">от {price} ₽</div>
                    <button className="button button--outline button--add" onClick={onAdd}
                    >
                        <svg
                            width="12"
                            height="12"
                            viewBox="0 0 12 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                                fill="white"
                            />
                        </svg>
                        <span>Добавить</span>
                        {addedCount > 0 && <i>{addedCount}</i>}
                    </button>
                </div>
            </div>

        </>
    );
}

export default PizzaBlock;