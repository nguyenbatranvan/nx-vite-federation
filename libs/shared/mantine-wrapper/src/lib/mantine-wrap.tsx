import {MantineProvider} from "@mantine/core";
import {ThemeCustom} from "@module-fd/shared/custom-theme";

export const MantineWrap = ({children}) => {
  return <MantineProvider theme={ThemeCustom}>
    {children}
  </MantineProvider>
}
