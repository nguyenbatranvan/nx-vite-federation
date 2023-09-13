import styled from '@emotion/styled';

import {MantineWrap} from "@module-fd/shared/mantine-wrapper";
import {CustomButton} from "@module-fd/shared/custom-components";
import {useBearStore} from "@module-fd/shared/state";
import {testUtil} from "@share-core/utils";


export function App() {
  const {count}=useBearStore();
  const test=()=>{
    testUtil()
  }
  return (
    <MantineWrap>
      <CustomButton onClick={test}>
        Button Remote Cart {count}
      </CustomButton>
    </MantineWrap>
  );
}

export default App;
