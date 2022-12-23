import { CircularProgress, Paper } from "@mui/material";
import React, { useEffect, useState } from "react";
import GaugeChart from "react-gauge-chart";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import toast, { Toaster } from "react-hot-toast";
import Divider from "@mui/material/Divider";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
  Pie,
  PieChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

function createData(email, requestId, loanAmount, appPerce) {
  return { email, requestId, loanAmount, appPerce };
}

const requiredData = [
  createData("yash@gmail.com", "1-2r239", 6234.0, "24%"),
  createData("mahipal@gmail.com", "1-5x567", 434349.0, "37%"),
  createData("utk29@gmail.com", "1-7t344", 1644.0, "24%"),
  createData("salaja@gmail.com", "1-3e345", 333.7, "67%"),
  createData("credgenics@gmail.com", "1-2e455", 1436.0, "49%"),
];

const AdminDashboard = () => {
  const [loader, setLoader] = useState(true);
  const [rows, setRows]=useState(requiredData);

  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 2200);
  }, []);

  const capitalSplitData = [
    {
      name: "Lended",
      uv: 4000,
      capital: 2400,
    },
    {
      name: "Recovered",
      uv: 2000,
      capital: 4798,
    },
    {
      name: "Defaulted",
      uv: 2000,
      capital: 9800,
    },
  ];

  const regionWiseRecovery = [
    {
      name: "North",
      uv: 6000,
      capital: 4400,
    },
    {
      name: "South",
      uv: 3000,
      capital: 1398,
    },
    {
      name: "East",
      uv: 4000,
      capital: 6800,
    },
    {
      name: "West",
      uv: 2000,
      capital: 9800,
    },
  ];

  const data = [
    { name: "Group A", value: 400 },
    { name: "Group B", value: 125 },
  ];

  const COLORS = ["#FFBB28", "#FF8042"];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  const onClick =(e,r,approved)=>{
    const mapData = rows.filter((res)=>{
        if(res.requestId != r.requestId){
            return res
        }
    })
    setRows(mapData);
    console.log(mapData);
    setLoader(true);
    setTimeout(()=>{
        setLoader(false);
    },2000)

    if(!approved){
        toast.success("Loan Approved!");
    }
    else{
        toast.error("Loan Rejected!");
    }
  }
  return (
    <>
      {loader ? (
        <CircularProgress sx={{ marginTop: "20rem", marginLeft: "43rem" }} />
      ) : (
        <>
          <h1 style={{ margin: "20px" }}>Dashboard</h1>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              marginTop: "40px",
              justifyContent: "space-between",
              padding: "10px 72px",
            }}
          >
            <Paper
              elevation={24}
              style={{
                display: "flex",
                flexDirection: "column",
                rowGap: "85px",
                marginTop: "44px",
                padding: "30px 140px",
              }}
            >
              <GaugeChart
                animate={true}
                nrOfLevels={420}
                arcsLength={[0.3, 0.5, 0.2]}
                colors={["#5BE12C", "#F5CD19", "#EA4228"]}
                percent={0.67}
                textColor={"#111111"}
                arcPadding={0.02}
                animDelay={500}
                animateDuration={12000}
              />

              <span
                style={{
                  fontWeight: "600",
                  textAlign: "center",
                  fontSize: "30px",
                }}
              >
                Recovery Probability
              </span>
            </Paper>

            <Paper
              elevation={24}
              style={{
                display: "flex",
                flexDirection: "column",
                padding: "24px 80px",
              }}
            >
              <BarChart width={430} height={280} data={capitalSplitData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="capital" fill="#6166e9" />
              </BarChart>
              <span
                style={{
                  fontWeight: "600",
                  textAlign: "center",
                  fontSize: "30px",
                }}
              >
                Capital Split
              </span>
            </Paper>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              marginTop: "40px",
              justifyContent: "space-between",
              padding: "10px 72px",
            }}
          >
            <Paper
              elevation={24}
              style={{
                display: "flex",
                flexDirection: "column",
                padding: "15px 76px",
              }}
            >
              <BarChart width={430} height={280} data={regionWiseRecovery}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="capital" fill="#6166e9" />
              </BarChart>

              <span
                style={{
                  fontWeight: "600",
                  textAlign: "center",
                  fontSize: "30px",
                }}
              >
                Region Wise Recovery
              </span>
            </Paper>

            <Paper
              elevation={24}
              style={{
                display: "flex",
                flexDirection: "column",
                padding: "20px 80px",
              }}
            >
              <PieChart width={400} height={400}>
                <Pie
                  data={data}
                  cx={200}
                  cy={200}
                  labelLine={false}
                  label={renderCustomizedLabel}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {data.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
              </PieChart>

              <span
                style={{
                  fontWeight: "600",
                  textAlign: "center",
                  fontSize: "30px",
                }}
              >
                Refinancing Type
              </span>
            </Paper>
          </div>
        </>
      )}
      <span style={{ margin: "5px" }}>
        <Divider />
      </span>
      <div style={{ height: 400, margin: "20px" }}>
        <div style={{ margin: "20px" }}>Pending Request</div>
        {loader ?  <CircularProgress  sx={{ marginTop:"20rem", marginLeft:"43rem"}}/> : (
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead sx={{fontWeight:'600'}}>
                <TableRow>
                  <TableCell >Email</TableCell>
                  <TableCell >Request Id</TableCell>
                  <TableCell >Loan Amount</TableCell>
                  <TableCell >Confidense Percentage</TableCell>
                  <TableCell >Operation</TableCell>
                  
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow>
                    <TableCell>{row.email}</TableCell>
                    <TableCell >{row.requestId}</TableCell>
                    <TableCell >{row.loanAmount}</TableCell>
                    <TableCell>{row.appPerce}</TableCell>
                    <TableCell>
                        <>
                            <button onClick={(e)=>{onClick(e,row,false)}}>Approve</button>
                            <button style={{ marginLeft: "5px" }}
                            onClick={(e)=>{onClick(e,row,true)}}>
                            Cancel</button>
                        </>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </div>
      <Toaster position="top-center" reverseOrder={false} />
    </>
  );
};

export default AdminDashboard;
