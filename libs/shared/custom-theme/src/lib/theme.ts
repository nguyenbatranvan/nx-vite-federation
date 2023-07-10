import {MantineThemeOverride} from "@mantine/styles/lib/theme/types";
import {ButtonTheme} from "./button-theme";
import {InputTheme} from "./input-theme";
import {SliderTheme} from "./slider-theme";

export const ThemeCustom: MantineThemeOverride = {
    components: {
        Button: ButtonTheme,
        Input: InputTheme,
        Slider: SliderTheme
    }
}
