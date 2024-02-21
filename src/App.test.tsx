import { render } from '@testing-library/react';
import App from './App';

vi.mock('react-router-dom', () => {
    const originalModule = vi.importActual('react-router-dom');

    return {
        __esModule: true,
        ...originalModule,
        useNavigate: vi.fn(),
        useLocation: vi.fn().mockReturnValue({ pathname: '/' })
    };
});

test('Should render the app', () => {
    const view = render(<App />);
    expect(view).toMatchSnapshot();
});
