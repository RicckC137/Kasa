import { Routes, Route } from 'react-router-dom';
import Main from '../pages/Main/main';
import About from '../pages/About/about';
import Error from '../pages/Error/error';
import Owner from '../pages/Owner/owner';

function Router() {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Main/>} />
                <Route path='/Owner/:id' element={<Owner/>} />
                <Route path='/About' element={<About/>} />
                <Route path='*' element={<Error/>} />
            </Routes>
        </div>
    )
}

export default Router