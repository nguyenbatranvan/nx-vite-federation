import styled from '@emotion/styled';

import {MantineWrap} from "@module-fd/shared/mantine-wrapper";
import {CustomButton} from "@module-fd/shared/custom-components";
import {useBearStore} from "@module-fd/shared/state";


export function App() {
  const {count}=useBearStore();
  return (
    <MantineWrap>
      <CustomButton>
        Button Remote Cart {count}
      </CustomButton>
    </MantineWrap>
  );
}

export default App;
