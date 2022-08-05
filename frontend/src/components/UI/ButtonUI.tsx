import { FC, ReactElement } from 'react';
import { Button, ButtonProps } from '@mui/material';
// interfaces descript the type content of props object
// ?: makes the types as optional props
interface Props extends ButtonProps {
  className?: string | undefined;
  text?: string | undefined;
  variant: 'text' | 'outlined' | 'contained' | undefined;
  label?: string;
  href?: string | undefined;
  to?: string;
  openInNewTab?: boolean; // link
  underline?: 'none' | 'hover' | 'always'; // link
  color?: 'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning' | undefined;
  disabled?: boolean | undefined;
  component?: React.ElementType // comp as prop like a link
};
// <a href={href ? href : '#'}></a>
const ButtonUI: FC<Props> = ({
  className, text, variant, // href,
  color, label, underline = 'none',
  disabled, children, ...restProps
}: Props): ReactElement => {
  return (
    <Button
      className={className ? className : ' '}
      variant={variant ? variant : 'text'}
      color={color ? color : 'primary'}
      disabled={disabled ? disabled : false}
      {...{...restProps, underline}}
    >
      {children || label || text}
    </Button>
  )
};
export default ButtonUI;