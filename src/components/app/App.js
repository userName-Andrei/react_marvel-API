import { lazy, Suspense } from 'react';
import {BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom';
import AppHeader from "../appHeader/AppHeader";
import Spinner from '../spinner/Spinner';

const NotFoundPage = lazy(() => import('../../pages/404')),
      MainPage = lazy(() => import('../../pages/MainPage')),
      ComicsPage = lazy(() => import('../../pages/ComicsPage')),
      SingleComicPage = lazy(() => import('../../pages/singleComicPage/SingleComicPage')),
      SingleCharPage = lazy(() => import('../../pages/singleCharPage/SingleCharPage')),
      SinglePage = lazy(() => import('../../pages/SinglePage'));

const App = () => {
    return (
        <Router>
            <div className="app">
                <AppHeader/>
                <main>
                    <Suspense fallback={<Spinner/>}>
                        <Routes>
                            <Route path="/" element={<MainPage/>} />
                            <Route path='/comics' element={<ComicsPage/>} />
                                <Route path='/comics/:id' element={<SinglePage Component={SingleComicPage} dataType='comic'/>} />
                            <Route path='/characters/:id' element={<SinglePage Component={SingleCharPage} dataType='character'/>} />
                            <Route path='/react_marvel-API' element={<Navigate to='/'/>} />
                            <Route path='*' element={<NotFoundPage/>} />
                        </Routes>
                    </Suspense>
                </main>
            </div>
        </Router>
    )
}

export default App;