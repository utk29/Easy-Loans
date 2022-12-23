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
import CircularProgress from '@mui/material/CircularProgress';
import Switch from '@mui/material/Switch';
import toast, { Toaster } from "react-hot-toast";
import React, { useEffect, useState } from "react";
const label = { inputProps: { 'aria-label': 'Switch demo' } };

export const UserDashboard = () => {
  const [loader, setLoader] = useState(true);
  const [edit, setEdit] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 3000);
  }, []);

  const activeLoanData = [
    {
      loanId: '320931',
      lender: 'HDFC',
      emiAmount: '404009',
      easyLoanDueDate: '08/12/2023',
      totalOutStanding: '47383843',
      tenure: '12'
    },
    {
      loanId: '332',
      lender: 'HDFC',
      emiAmount: '404009',
      easyLoanDueDate: '12/01/2023',
      totalOutStanding: '47383843',
      tenure: '12'
    }
  ];

  const pastLoanData = [
    {
      loanId: '931',
      lender: 'IIFL',
      emiAmount: '345',
      easyLoanDueDate: '28/12/2022',
      totalOutStanding: '5554',
      tenure: '12'
    }
  ];

  const handleSave = () =>{
    if(edit){
      toast.success("Request Successfully Submit!");
      setLoader(true);
      setTimeout(() => {
        setLoader(false);
      }, 3000);
    }
    setEdit(!edit)
  }
  return (
    <div style={{'margin':'20px'}}>
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
            <MenuItem
              className="w-100 p-2 justify-content-start"
              value="loan_id"
            >
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
        <div></div>
      </div>
      <div style={{ margin: "20px 0px 15px 0px" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <span style={{ fontSize: "20px" }}>Active Loans</span>
          <Button sx={{ position: "fixed", right: "22px" }} variant="outlined"
          onClick={()=>handleSave()}>
           {edit ?  'Save'  :'Edit'}
          </Button>
          <span> </span>
        </div>

        {loader ? (
          <CircularProgress  sx={{ marginTop:"20rem", marginLeft:"43rem"}}/>
        ) : (
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 300 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="right">Loan</TableCell>
                  <TableCell align="right">Lender</TableCell>
                  <TableCell align="right">EMI Amount</TableCell>
                  <TableCell align="right">EasyLoan Due Date</TableCell>
                  <TableCell align="right">Total outstanding amount</TableCell>
                  <TableCell align="right">Tenure(months)</TableCell>
                 { edit && <TableCell align="right">Status</TableCell>}
                  
                </TableRow>
              </TableHead>
              <TableBody>
                {activeLoanData.map((row) => (
                  <TableRow
                    key={row.loanId}
                  >
                    <TableCell align="right">{row.loanId}</TableCell>
                    <TableCell align="right">{row.lender}</TableCell>
                    <TableCell align="right">{row.emiAmount}</TableCell>
                    <TableCell align="right">{row.easyLoanDueDate}</TableCell>
                    <TableCell align="right">{row.totalOutStanding}</TableCell>
                    <TableCell align="right">{row.tenure}</TableCell>
                    {edit  &&  <TableCell align="right"> <Switch {...label} defaultChecked /></TableCell>}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </div>

      <div style={{ margin: "100px 0px 15px 0px" }}>
        <span style={{ fontSize: "20px" }}>Past Loans</span>

        {loader ? (
          <CircularProgress sx={{ marginTop:"20rem", marginLeft:"43rem"}}/>
        ) : (
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 300 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="right">Loan</TableCell>
                  <TableCell align="right">Lender</TableCell>
                  <TableCell align="right">EMI Amount</TableCell>
                  <TableCell align="right">EasyLoan Due Date</TableCell>
                  <TableCell align="right">Total outstanding amount</TableCell>
                  <TableCell align="right">Tenure(months)</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {pastLoanData.map((row) => (
                  <TableRow
                    key={row.loanId}
                  >
                    <TableCell align="right">{row.loanId}</TableCell>
                    <TableCell align="right">{row.lender}</TableCell>
                    <TableCell align="right">{row.emiAmount}</TableCell>
                    <TableCell align="right">{row.easyLoanDueDate}</TableCell>
                    <TableCell align="right">{row.totalOutStanding}</TableCell>
                    <TableCell align="right">{row.tenure}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </div>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};
