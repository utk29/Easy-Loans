import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepButton from "@mui/material/StepButton";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import {
  Checkbox,
  FormControlLabel,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
} from "@mui/material";

const steps = ["Select Loans", "Configure", "Review"];

const LoginConfigStep = ({ modalOpen, modalClose }) => {
  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState({});

  const totalSteps = () => {
    return steps.length;
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? // It's the last step, but not all steps have been completed,
          // find the first step that has been completed
          steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStep = (step) => () => {
    setActiveStep(step);
  };

  const handleComplete = () => {
    const newCompleted = completed;
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
    handleNext();
  };

  const handleReset = () => {
    // setActiveStep(0);
    // setCompleted({});
    // modalClose(false)
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Stepper nonLinear activeStep={activeStep}>
        {steps.map((label, index) => (
          <Step key={label} completed={completed[index]}>
            <StepButton color="inherit" onClick={handleStep(index)}>
              {label}
            </StepButton>
          </Step>
        ))}
      </Stepper>
      <div>
        {allStepsCompleted() ? (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}>
              All steps completed - you&apos;re finished
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              <Box sx={{ flex: "1 1 auto" }} />
              <Button onClick={() => modalClose(false)}>Done</Button>
            </Box>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1, py: 1 }}>
              Step {activeStep + 1}
            </Typography>
            {activeStep === 0 ? (
              <Box
                sx={{
                  borderColor: "#f4f4f4",
                  border: "1px solid grey",
                  height: "20rem",
                  width: "25rem",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <h3>Active Loans</h3>
                <FormControlLabel
                  sx={{ float: "right", marginRight: "-10px" }}
                  control={<Checkbox />}
                  label="Select All"
                />

                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    columnGap: "20px",
                  }}
                >
                  <Box
                    sx={{
                      backgroundColor: "#ccd1d1",
                      width: "8rem",
                      height: "6rem",
                    }}
                  >
                    <FormControlLabel
                      sx={{ float: "right", marginRight: "-10px" }}
                      control={<Checkbox />}
                    />
                  </Box>
                  <Box
                    sx={{
                      backgroundColor: "#ccd1d1",
                      width: "8rem",
                      height: "6rem",
                    }}
                  >
                    <FormControlLabel
                      sx={{ float: "right", marginRight: "-10px" }}
                      control={<Checkbox />}
                    />
                  </Box>
                  <Box
                    sx={{
                      backgroundColor: "#ccd1d1",
                      width: "8rem",
                      height: "6rem",
                    }}
                  >
                    <FormControlLabel
                      sx={{ float: "right", marginRight: "-10px" }}
                      control={<Checkbox />}
                    />
                  </Box>
                </div>
                <TableContainer component={Paper}>
                  <Table sx={{ minWidth: 300 }} aria-label="simple table">
                    <TableHead>
                      <TableRow>
                        <TableCell align="right">Lender</TableCell>
                        <TableCell align="right">
                          Total Outstanding Amount
                        </TableCell>
                        <TableCell align="right">Started On</TableCell>
                        <TableCell align="right">Tenure</TableCell>
                        <TableCell align="right">EMI Amount</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      <TableRow>
                        <TableCell align="right">Vivek</TableCell>
                        <TableCell align="right">75030</TableCell>
                        <TableCell align="right">12/07/2022</TableCell>
                        <TableCell align="right">12 Months</TableCell>
                        <TableCell align="right">5552</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TableContainer>
              </Box>
            ) : activeStep === 1 ? (
              <Box
                sx={{
                  borderColor: "#f4f4f4",
                  border: "1px solid grey",
                  height: "20rem",
                  width: "25rem",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <h3>Set Parameteres</h3>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    marginTop: "10px",
                  }}
                >
                  <span
                    style={{
                      fontSize: "18px",
                      fontWeight: "500",
                      alignSelf: "center",
                    }}
                  >
                    Transaction Date:
                  </span>
                  <TextField
                    sx={{ marginLeft: "15px" }}
                    size="small"
                    label="days before due date"
                    onChange={(e) => e.target.value}
                  />
                </div>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    marginTop: "10px",
                  }}
                >
                  <span
                    style={{
                      fontSize: "18px",
                      fontWeight: "500",
                      alignSelf: "center",
                    }}
                  >
                    Transaction Date:
                  </span>
                  <TextField
                    sx={{ marginLeft: "15px" }}
                    size="small"
                    label="days after due date"
                    onChange={(e) => e.target.value}
                  />
                </div>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    marginTop: "10px",
                  }}
                >
                  <span
                    style={{
                      fontSize: "16px",
                      fontWeight: "500",
                      alignSelf: "center",
                    }}
                  >
                    Convenince Charges:
                  </span>
                  <span
                    style={{
                      fontSize: "12px",
                      fontWeight: "500",
                      alignSelf: "center",
                      display: "flex",
                      flexDirection: "column",
                      marginLeft: "5px",
                    }}
                  >
                    <span>{"200 (EMI Amount <= 50,000)"} </span>{" "}
                    <span>{"300 (50,000 <EMI Amount <= 1,00,000)"}</span>{" "}
                    <span> {"400 (EMI Amount > 1,00,000)"}</span>{" "}
                  </span>
                </div>
              </Box>
            ) : (
              <Box
                sx={{
                  borderColor: "#f4f4f4",
                  border: "1px solid grey",
                  height: "20rem",
                  width: "25rem",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <h3>Review</h3>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    marginTop: "15px",
                  }}
                >
                  <span
                    style={{
                      fontSize: "16px",
                      fontWeight: "500",
                      alignSelf: "center",
                    }}
                  >
                    Loan Selected:
                  </span>
                  <span
                    style={{
                      fontSize: "12px",
                      fontWeight: "500",
                      alignSelf: "center",
                      marginLeft: "20px",
                    }}
                  >
                    3{" "}
                  </span>
                </div>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    marginTop: "15px",
                  }}
                >
                  <span
                    style={{
                      fontSize: "16px",
                      fontWeight: "500",
                      alignSelf: "center",
                    }}
                  >
                    Transaction Date
                  </span>
                  <span
                    style={{
                      fontSize: "12px",
                      fontWeight: "500",
                      alignSelf: "center",
                      marginLeft: "20px",
                    }}
                  >
                    2 days before due date{" "}
                  </span>
                </div>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    marginTop: "15px",
                  }}
                >
                  <span
                    style={{
                      fontSize: "16px",
                      fontWeight: "500",
                      alignSelf: "center",
                    }}
                  >
                    Repayment to EasyLoans:
                  </span>
                  <span
                    style={{
                      fontSize: "12px",
                      fontWeight: "500",
                      alignSelf: "center",
                      marginLeft: "20px",
                    }}
                  >
                    15 days after due date{" "}
                  </span>
                </div>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    marginTop: "15px",
                  }}
                >
                  <span
                    style={{
                      fontSize: "16px",
                      fontWeight: "500",
                      alignSelf: "center",
                    }}
                  >
                    Total Convenience Charges:
                  </span>
                  <span
                    style={{
                      fontSize: "12px",
                      fontWeight: "500",
                      alignSelf: "center",
                      marginLeft: "20px",
                    }}
                  >
                    600{" "}
                  </span>
                </div>
              </Box>
            )}
            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              <Button
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
              >
                Back
              </Button>
              <Box sx={{ flex: "1 1 auto" }} />
              <Button onClick={handleNext} sx={{ mr: 1 }}>
                Next
              </Button>
              {activeStep !== steps.length &&
                (completed[activeStep] ? (
                  <Typography
                    variant="caption"
                    sx={{ display: "inline-block" }}
                  >
                    Step {activeStep + 1} already completed
                  </Typography>
                ) : (
                  <Button onClick={handleComplete}>
                    {completedSteps() === totalSteps() - 1
                      ? "Finish"
                      : "Complete Step"}
                  </Button>
                ))}
            </Box>
          </React.Fragment>
        )}
      </div>
    </Box>
  );
};

export default LoginConfigStep;
