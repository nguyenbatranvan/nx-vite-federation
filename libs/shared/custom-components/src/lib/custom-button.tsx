import styled from "@emotion/styled";
import {Button, ButtonProps, createPolymorphicComponent} from "@mantine/core";
import {FC} from "react";
import {useCounter} from "remoteShared/Hooks";

import {Variants} from "@mantine/styles";
import {useBearStore} from "shared-state";

interface IProps extends Omit<ButtonProps, 'variant'> {
  variant?: Variants<'filled' | 'outline' | 'light' | 'white' | 'default' | 'subtle' | 'gradient' | 'icondo'>;
}

const _ButtonStyled = styled(Button)``;
const StyledButton = createPolymorphicComponent<'button', IProps>(_ButtonStyled);


export const CustomButton: FC<IProps> = (props) => {
  const {bears} = useCounter()
  return <StyledButton {...props}>
    state count is {bears}
    <br/>
    {props.children}
  </StyledButton>
}
