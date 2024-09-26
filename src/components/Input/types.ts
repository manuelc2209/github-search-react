export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    value?: string;
    className?: string;
    onChange?: (ev: React.ChangeEvent<HTMLInputElement>) => void;
    onKeyDown?: (ev: React.KeyboardEvent<HTMLInputElement>) => void;
}
