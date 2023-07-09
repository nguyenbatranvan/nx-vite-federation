import {MantineProvider} from "@mantine/core";
import React from "react";

export const MantineWrap = ({children}) => {
  return <MantineProvider>
    {children}
  </MantineProvider>
}
