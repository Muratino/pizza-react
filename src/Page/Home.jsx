import React from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'



import Sort from '../components/Sort/Sort';
import Categories from '../components/Categories/Categories';
import Skeleton from '../components/Skeleton/Skeleton';
import PizzaBlock from '../components/PizzaBlock/PizzaBlock';
import Pagination from '../components/Pagination/Pagination';
import FormButton from '../components/FormButton/FormButton';
import { Error } from './index';

import { fetchAllPizza } from '../components/redux/Slice/fetchPizza';
import { filterSelect, setCurrentPage} from '../components/redux/Slice/filterSlice';

function Home() {
    const { categoryPizza, sortPizza, currentPage, searchValue } = useSelector(filterSelect);
    const { arrPizza, status } = useSelector(state => state.pizza);
    const dispatch = useDispatch();

    const getPizza = async () => {
        const category = categoryPizza > 0 ? `category=${categoryPizza}` : '';
        const search = searchValue ? `search=${searchValue}` : '';

        dispatch(fetchAllPizza({
            category,
            search,
            sortPizza,
            currentPage
        }));

        // window.scrollTo(0, 0);
    }

    useEffect(() => {
        getPizza();
    }, [categoryPizza, sortPizza.sort, searchValue, currentPage]); // eslint-disable-line

    const onChangePage = React.useCallback((num) => {
        dispatch(setCurrentPage(num)); // eslint-disable-next-line
    }, []) 

    const filterArr = arrPizza.map(val => (<PizzaBlock key={val.id} {...val} />)); // eslint-disable-next-line
    const loadingArr = status === "loading" ? [... new Array(6)].map((_, el) => <Skeleton key={el} />) : filterArr; 
    

    // console.log(categoryPizza);
    // console.log('ren');
    return (
        <div className='container'>
            <div className="content__top">
                <Categories />
                <Sort sortPizza={sortPizza}/>
            </div>
            <h2 className="content__title">Все пиццы</h2>
            {
                status === "error"
                    ? <Error />
                    : <div className="content__items"> {loadingArr} </div>
            }
            <div className='pagination__block'>
                <Pagination onPageChange={onChangePage} />
                <FormButton />
            </div>
        </div>
    );
}

export default Home;