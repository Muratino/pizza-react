import React from 'react';
import { useRef, useCallback, useState } from 'react';
import debounce from 'lodash.debounce'
import { useDispatch } from 'react-redux';

import { setSearchValue } from '../redux/Slice/filterSlice';

function Search() {
    const dispatch = useDispatch();
    const [valueRed, setValueRed] = useState('');
    const myRef = useRef();

    const testDebounce = useCallback(
        debounce((str) => {
            dispatch(setSearchValue(str));
        }, 500),
        [],
    );

    const onClear = () => {
        dispatch(setSearchValue(''));
        setValueRed('');
        myRef.current.focus();
    }

    const setValue = (e) => {
        setValueRed(e.target.value);
        testDebounce(e.target.value);
    }


    return (
        <div className='search__block'>
            {
                valueRed ? <svg
                    className="feather feather-x search__svg"
                    onClick={onClear}
                    fill="none" height="24"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg">
                    <line x1="18" x2="6" y1="6" y2="18" />
                    <line x1="6" x2="18" y1="6" y2="18" />
                </svg>
                    :
                    <svg
                        className='search__svg'
                        height="512px"
                        id="Layer_1"
                        version="1.1"
                        viewBox="0 0 512 512"
                        width="512px"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M448.3,424.7L335,311.3c20.8-26,33.3-59.1,33.3-95.1c0-84.1-68.1-152.2-152-152.2c-84,0-152,68.2-152,152.2  s68.1,152.2,152,152.2c36.2,0,69.4-12.7,95.5-33.8L425,448L448.3,424.7z M120.1,312.6c-25.7-25.7-39.8-59.9-39.8-96.3  s14.2-70.6,39.8-96.3S180,80,216.3,80c36.3,0,70.5,14.2,96.2,39.9s39.8,59.9,39.8,96.3s-14.2,70.6-39.8,96.3  c-25.7,25.7-59.9,39.9-96.2,39.9C180,352.5,145.8,338.3,120.1,312.6z" />
                    </svg>
            }
            <input
                ref={myRef}
                onChange={setValue}
                value={valueRed}
                className='search__input'
                placeholder='Поиск пиццы...'
                name='search' />

        </div >
    );
}

export default Search;