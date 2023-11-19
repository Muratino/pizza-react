import React from 'react';

function Error() {
    return (
        <div className='container'>
            <div
                style={{ marginTop: "50px", marginBottom: '50px' }} 
                className="cart cart--empty">
                <h2>Произошла ошибка <span>😕</span></h2>
                <p style={{ marginTop: "20px" }}>
                    Наши администраторы уже занимается этой проблемой
                </p>
                {/* <Link to="/" className="button button--black">
                    <span>Вернуться назад</span>
                </Link> */}
            </div>
        </div>
    );
}

export default Error;