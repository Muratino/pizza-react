import React, { useState } from 'react';
import Form from '../Form/Form';

function FormButton() {

    const [open, setOpen] = useState(false);

    const openForm = () => {
        setOpen(open => !open)
    }

    return (
        <>
            <button
                onClick={openForm}
                className='button button--cart'>
                <span>Оформить запись</span>
            </button>
            {
                open ? <Form /> : null
            }
        </>
    );
}

export default FormButton;