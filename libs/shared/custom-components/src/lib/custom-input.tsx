import {createPolymorphicComponent, Input, InputProps} from "@mantine/core";
import {Variants} from "@mantine/styles";
import {FC} from "react";
import styled from "@emotion/styled";

const _InputStyled = styled(Input)``
const InputStyled = createPolymorphicComponent<'input', IProps>(_InputStyled)

interface IProps extends InputProps {
    variant?: Variants<'default' | 'filled' | 'unstyled' | 'icondo'>;
}

export const CustomInput: FC<IProps> = (props) => {
    return <InputStyled {...props}/>
}
