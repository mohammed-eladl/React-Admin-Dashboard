import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Box } from "@mui/material";
import { columns, rows } from "./dataContacts";

const Contacts = () => {
  return (
    <>
      
      <Box sx={{ height: "100auto", width: "90%", mx: "auto" }}>
        <DataGrid
          slots={{
            toolbar: GridToolbar,
          }}
          rows={rows}
          // @ts-ignore
          columns={columns}
        />
      </Box>
    </>
  );
};

export default Contacts;
