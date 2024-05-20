import Button from "@mui/material/Button";
import { DownloadOutlined } from "@mui/icons-material";
import { Box, Stack } from "@mui/material";
import RowOne from "./Row_One";
import RowTwo from "./Row_Two";
import RowThree from "./Row_Three";
import Header from "../../components/Header/Header";

const Dashboard = () => {
  return (
    <Box>
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Header
          isDashboard={true}
          title={"DASHBOARD"}
          subTitle={"Welcome to your dashboard"}
        />

        <Box sx={{ textAlign: "right", mb: 1.3 }}>
          <Button
            sx={{ padding: "6px 8px", textTransform: "capitalize" }}
            variant="contained"
            color="primary"
          >
            <DownloadOutlined />
            Download Reports
          </Button>
        </Box>
      </Stack>

      <RowOne />
      <RowTwo />
      <RowThree />
    </Box>
  );
};

export default Dashboard;
