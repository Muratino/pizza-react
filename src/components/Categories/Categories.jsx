import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { filterSelect, setCategoryPizza } from '../redux/Slice/filterSlice';

const categories = [
    { all: 'Все', id: 0 },
    { all: 'Мясные', id: 1 },
    { all: 'Вегетарианская', id: 2 },
    { all: 'Гриль', id: 3 },
    { all: "Острые", id: 4 },
    { all: 'Закрытые', id: 5 },
]

const Categories = React.memo(() => {
    const { categoryPizza } = useSelector(filterSelect)
    const dispatch = useDispatch();

    const setActiveClick = React.useCallback((e) => {
        dispatch(setCategoryPizza(e.target.id));
    }, [])


    const creatCategories = (arr) => {
        return (
            arr.map(val => {
                const { all, id } = val
                return (
                    <li
                        key={id}
                        id={id}
                        className={categoryPizza == id ? "active" : ''}
                        onClick={setActiveClick}
                    > {all} </li>
                )
            })
        )
    }

    return (
        <>
            <div className="categories">
                <ul>
                    {creatCategories(categories)}
                </ul>
            </div>
        </>
    );
})
export default Categories;