import {rem} from "@mantine/core";
import {ThemeComponentIcondo} from "@module-fd/shared/models";

export const SliderTheme: ThemeComponentIcondo = {
    defaultProps: {
    },

    variants: {
        "icondo": (theme) => ({
                track: {
                    backgroundColor:
                        theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.blue[1],
                },
                mark: {
                    width: rem(6),
                    height: rem(6),
                    borderRadius: rem(6),
                    transform: `translateX(-${rem(3)}) translateY(-${rem(2)})`,
                    borderColor: theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.blue[1],
                },
                markFilled: {
                    borderColor: theme.colors.blue[6],
                },
                markLabel: {fontSize: theme.fontSizes.xs, marginBottom: rem(5), marginTop: 0},
                thumb: {
                    height: rem(16),
                    width: rem(16),
                    backgroundColor: theme.white,
                    borderWidth: rem(1),
                    boxShadow: theme.shadows.sm,
                }
        })
    }
}
