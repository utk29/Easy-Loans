import {
    Button,
  InputAdornment,
  MenuItem,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
} from "@mui/material";
import React from "react";
export const UserDashboard = () => {

    const activeLoansHeader = ['Loan','Lender','EMI Amount','EasyLoan Due Date', 'Total outstanding amount','Tenure'];
    const activeLoanData=['320931','HDFC','404009','28/10/2022','47383843','12 months']
   
  return (
    <>
      <h1>Dashboard</h1>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div>
        <TextField
          id="search_type"
          select
          label="Search By"
          sx={{
            width: "7rem",
            "& .MuiInputBase-root": {
              borderTopRightRadius: "initial",
              borderBottomRightRadius: "initial",
              backgroundColor: "#F3F4F6",
            },
            "& .MuiOutlinedInput-root": {
              borderTopRightRadius: "initial",
              borderBottomRightRadius: "initial",
              backgroundColor: "#F3F4F6",
            },
          }}
          size="small"
          InputLabelProps={{
            style: { color: "#000000" },
          }}
        >
          <MenuItem
            className="w-100 p-2 justify-content-start"
            value="customer_id"
          >
            Customer Id
          </MenuItem>
          <MenuItem className="w-100 p-2 justify-content-start" value="loan_id">
            Loan Id
          </MenuItem>
          <MenuItem
            className="w-100 p-2 justify-content-start"
            value="deposit_id"
          >
            Deposit Id
          </MenuItem>
        </TextField>
        <TextField
          id="outlined-basic"
          variant="outlined"
          label="Search..."
          // placeholder="Search..."
          size="small"
          className="w-85"
          InputLabelProps={{
            style: { color: "rgb(136 137 139)" },
          }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <i
                  style={{
                    color: "#1976D2",
                    fontWeight: "bold",
                    fontSize: "larger",
                    cursor: "pointer",
                  }}
                ></i>
              </InputAdornment>
            ),
          }}
          sx={{
            "& .MuiInputBase-root": {
              borderTopLeftRadius: "initial",
              borderBottomLeftRadius: "initial",
              backgroundColor: "#F3F4F6",
            },
            "& .MuiOutlinedInput-root": {
              borderTopLeftRadius: "initial",
              borderBottomLeftRadius: "initial",
              backgroundColor: "#F3F4F6",
            },
          }}
        />
        </div>
        <div>
            
        </div>
      </div>
      <div style={{ margin:"20px 0px 15px 0px"}}>
        <div style={{display:"flex", flexDirection:"row", justifyContent:"space-between"}}> 
      <span style={{fontSize:"20px"}}>Active Loans</span>
      <Button sx={{ position:"fixed", right:"22px"}} variant="outlined">Edit</Button>
      <span>  </span>
      </div>
      <TableContainer component={Paper} sx={{marginTop:"20px"}} >
        <Table responsive sx={{borderTop:"1px solid #d9dbdf"}}>
          <TableHead>
            <TableRow>
              {activeLoansHeader?.map((header)=>  <TableCell style={{ cursor: "pointer" }}><span style={{fontWeight:"600"}}>{header}</span></TableCell>)}
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow style={{ height: "44px" }}>
              {activeLoanData?.map((headerData)=> <TableCell>{headerData}</TableCell>)}
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      </div>

      <div style={{ margin:"100px 0px 15px 0px"}}>
      <span style={{fontSize:"20px"}}>Past Loans</span>
      <TableContainer component={Paper} sx={{marginTop:"20px"}} >
        <Table responsive sx={{borderTop:"1px solid #d9dbdf"}}>
          <TableHead>
            <TableRow>
              {activeLoansHeader?.map((header)=>  <TableCell style={{ cursor: "pointer" }}><span style={{fontWeight:"600"}}>{header}</span></TableCell>)}
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow style={{ height: "44px" }}>
              {activeLoanData?.map((headerData)=> <TableCell>{headerData}</TableCell>)}
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      </div>
    </>
  );
};
