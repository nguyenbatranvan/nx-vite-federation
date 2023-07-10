import {CSSObject} from "@mantine/styles/lib/tss";
import {ContextStylesParams, MantineTheme} from "@mantine/styles/lib/theme/types/MantineTheme";

export interface ThemeComponentIcondo {
    defaultProps?: Record<string, any> | ((theme: MantineTheme) => Record<string, any>);
    classNames?: Record<string, string>;
    styles?: Record<string, CSSObject> | ((theme: MantineTheme, params: any, context: ContextStylesParams) => Record<string, CSSObject>);
    variants?: Record<PropertyKey, (theme: MantineTheme, params: any, context: ContextStylesParams) => Record<string, CSSObject>>;
    sizes?: Record<PropertyKey, (theme: MantineTheme, params: any, context: ContextStylesParams) => Record<string, CSSObject>>;
}
