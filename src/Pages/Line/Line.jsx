import { Box } from "@mui/material"
import DesignLine from "./DesignLine"
import Header from "../../components/Header/Header";
export const Line = () => {
  return (
  <Box>
    <Header title="Line Chart" subTitle={undefined} />
      <DesignLine/>
  </Box>
  
  )
}
