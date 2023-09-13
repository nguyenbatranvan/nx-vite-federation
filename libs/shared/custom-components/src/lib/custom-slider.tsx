import {createPolymorphicComponent, Slider, SliderProps} from "@mantine/core";
import styled from "@emotion/styled";
import {FC} from "react";

const _StyledSlider = styled(Slider)``;
const StyledSlider = createPolymorphicComponent<'div', IProps>(_StyledSlider)

interface IProps extends SliderProps {
    variant?: 'icondo';
}

export const CustomSlider: FC<IProps> = (props) => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
  return <StyledSlider {...props}/>
}
