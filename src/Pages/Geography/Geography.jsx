import DesignGeo from "./DesignGeo";
import Header from "../../components/Header/Header";
import { Box } from "@mui/material";
export const Geography = () => {
  return (
    <Box>
      <Header title={"Geo"} subTitle={undefined} />
      <DesignGeo />
    </Box>
  );
};
