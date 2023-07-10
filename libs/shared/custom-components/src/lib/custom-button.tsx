import styled from "@emotion/styled";
import {Button, ButtonProps, createPolymorphicComponent} from "@mantine/core";
import {FC} from "react";
import {Variants} from "@mantine/styles";
interface IProps extends Omit<ButtonProps, 'variant'> {
    variant?: Variants<'filled' | 'outline' | 'light' | 'white' | 'default' | 'subtle' | 'gradient' | 'icondo'>;
}

const _ButtonStyled = styled(Button)``;
const StyledButton = createPolymorphicComponent<'button', IProps>(_ButtonStyled);


export const CustomButton: FC<IProps> = (props) => {
    return <StyledButton {...props}>
    </StyledButton>
}
