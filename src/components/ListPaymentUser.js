import { Pagination } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import ItemListPaymentUser from "./ItemListPaymentUser";

export default function ListPaymentUser() {
  const handleChange = () => {};
  return (
    <Stack width='70%'>
      <Stack justifyContent='space-between' spacing={3} direction="row" sx={{ padding: "10px" }}>
          <ItemListPaymentUser />
          <ItemListPaymentUser />
          <ItemListPaymentUser />
          <ItemListPaymentUser />
      </Stack>
      <Stack alignItems="center" spacing={2}>
        <Pagination count={2} page={1} onChange={handleChange} />
      </Stack>
    </Stack>
  );
}
