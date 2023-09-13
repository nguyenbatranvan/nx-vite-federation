import styled from "@emotion/styled";
import {Button, ButtonProps, createPolymorphicComponent} from "@mantine/core";
import {ComponentProps, FC} from "react";

import {Variants} from "@mantine/styles";
import {useBearStore} from "@module-fd/shared/state";

interface IProps extends Omit<ButtonProps, 'variant'> {
  variant?: Variants<'filled' | 'outline' | 'light' | 'white' | 'default' | 'subtle' | 'gradient' | 'icondo'>;
}
type A=  Omit<ComponentProps<"button">, "ref"|"children" > & IProps;
const _ButtonStyled = styled(Button)``;
const StyledButton = createPolymorphicComponent<'button', A>(_ButtonStyled);


export const CustomButton: FC<A> = (props) => {
  const {count}=useBearStore();
  // @ts-ignore
  return <StyledButton {...props}>
    state count is {count}
    <br/>
    {props.children}
  </StyledButton>
}
