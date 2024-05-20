import { DataGrid } from "@mui/x-data-grid";
import Header from "../../components/Header/Header";
import { Box } from "@mui/material";
import { columns, rows } from "./dataInvoices";
export const Invoices = () => {
  return (
    <Box>
      <Header title="INVOICES" subTitle="List of Invoice Balances" />

      <Box sx={{ height: "100auto", width: "90%", mx: "auto" }}>
        <DataGrid
          checkboxSelection
            rows={rows}
          // @ts-ignore
          columns={columns}
        />
      </Box>
    </Box>
  );
};
