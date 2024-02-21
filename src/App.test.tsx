import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

jest.mock('react-router-dom', () => {
    const originalModule = jest.requireActual('react-router-dom');

    return {
        __esModule: true,
        ...originalModule,
        useNavigate: jest.fn(),
        useLocation: jest.fn().mockReturnValue({ pathname: '/' })
    };
});

test('Should render the app', () => {
    const view = render(<App />);
    expect(view).toMatchSnapshot();
});
