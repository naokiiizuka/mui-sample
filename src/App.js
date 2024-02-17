/* App.js */
import * as React from "react";
import { Button } from "@mui/material";
/* ↓これ追加 */
import styled from "@emotion/styled";

/* ↓これ追加 */
const TextButton = styled(Button)`
  text-transform: none;
`;

const  App = () => {
  return (
    <>
      {/* ↓タグを「TextButton」に変更 */}
      <TextButton>text</TextButton>
      <Button variant="contained">contained</Button>
      <Button variant="outlined">outlined</Button>
    </>
  );
};

export default App;