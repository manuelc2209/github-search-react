import { fireEvent, render, screen } from '@testing-library/react';
import { Button } from '.';

test('render an Button Component', () => {
    const view = render(<Button label="test" />);
    expect(view).toMatchSnapshot();
});

test('render an Button with the click mocked callback', async () => {
    const mockedClickCb = vi.fn();
    render(<Button label="test" onClick={mockedClickCb} />);
    const button = await screen.findByTestId('btn-element');

    fireEvent.click(button);

    expect(mockedClickCb).toHaveBeenCalled();
});
