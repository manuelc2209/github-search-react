import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import { List, UserCard } from './components';
import { GlobalStyle } from './styles';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
    <>
        <GlobalStyle />
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="search" element={<List />} />
                <Route path="user" element={<UserCard />} />
            </Routes>
        </BrowserRouter>
    </>
);
