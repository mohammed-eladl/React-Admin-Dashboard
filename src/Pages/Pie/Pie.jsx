import DesignPie from "./DesignPie";
import Header from "../../components/Header/Header";
import { Box } from "@mui/material";
export const Pie = () => {
  return (
    <Box>
      <Header title="Pie Chart" subTitle={undefined} />
      <DesignPie />
    </Box>
  );  
};
