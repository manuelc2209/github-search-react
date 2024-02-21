import { fireEvent, render, screen } from '@testing-library/react';
import { Input } from '.';

test('render an Input Component', () => {
    const view = render(<Input />);
    expect(view).toMatchSnapshot();
});

test('render an Input with a custom value', () => {
    const view = render(<Input value="123123" />);
    expect(view).toMatchSnapshot();
});

test('render an Input with the keypress mocked callbacks', async () => {
    const mockedKeypressCb = vi.fn();
    const view = render(<Input onKeyPress={mockedKeypressCb} />);
    const input = await screen.findByTestId('StyledInput');
    input.focus();
    fireEvent.keyPress(input, { key: 'a', code: 65, charCode: 65 });
    expect(view).toMatchSnapshot();
});

test('render an Input with the change mocked callbacks', async () => {
    const mockedChangeCb = vi.fn();
    const view = render(<Input onChange={mockedChangeCb} />);
    const input = await screen.findByTestId('StyledInput');
    input.focus();
    fireEvent.change(input, {
        target: { value: 'text' }
    });
    expect(view).toMatchSnapshot();
});
