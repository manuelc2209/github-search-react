import { UserProps } from '../../api/shared';

export interface CardProps {
    user: UserProps;
    className?: string;
    onClick?: (user: UserProps) => void;
}

export interface StyledSpanProps {
    tag?: string;
}
