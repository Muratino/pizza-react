import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { MainPage, Home} from '../../Page';

const Carts = React.lazy(() => import('../../Page/Carts'));
const NotFound = React.lazy(() => import('../../Page/NotFound'));

function App() {

  return (
    <Routes>
      <Route path='/' element={<MainPage />} >
        <Route path='' element={<Home />} />
        <Route path='carts' element={
          <React.Suspense fallback={<div>Идет загрузка...</div>}>
            <Carts />
          </React.Suspense>
        } />
        <Route path='*' element={
          <React.Suspense fallback={<div>Идет загрузка...</div>}>
            <NotFound />
          </React.Suspense>
        } />
      </Route>
    </Routes>

  );
}

export default App;
