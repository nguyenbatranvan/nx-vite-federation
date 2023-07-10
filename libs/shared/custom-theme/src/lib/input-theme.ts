import {ThemeComponentIcondo} from "@module-fd/shared/models";

export const InputTheme: ThemeComponentIcondo = {
    defaultProps: {
    },
    variants: {
        'icondo': (theme) => ({
            input: {
                borderColor: theme.colors.green[3],
                color:'red'
            }
        })
    }
}
