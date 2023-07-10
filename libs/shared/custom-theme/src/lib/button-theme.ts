import {ThemeComponentIcondo} from "@module-fd/shared/models";

declare module '@mantine/core' {
}

export const ButtonTheme: ThemeComponentIcondo = {
    defaultProps: {
        variant: 'icondo'
    },
    variants: {
        icondo: (theme) => ({
            root: {
                backgroundImage: theme.fn.linearGradient(
                    45,
                    theme.colors.cyan[theme.fn.primaryShade()],
                    theme.colors.teal[theme.fn.primaryShade()],
                    theme.colors.green[theme.fn.primaryShade()]
                ),
                color: theme.white,
            },
        })
    }
}
