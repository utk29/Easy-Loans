import { CircularProgress, Paper } from "@mui/material";
import React, { useEffect, useState } from "react";
import GaugeChart from "react-gauge-chart";

import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
  LineChart,
  Pie,
  PieChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const AdminDashboard = () => {
  const [loader, setLoader] =useState(true);

  useEffect(()=>{
    setTimeout(()=>{
      setLoader(false);
    },2200)
  },[])
  const capitalSplitData = [
    {
      name: "Capital Lended",
      uv: 4000,
      pv: 2400,
    },
    {
      name: "Capital Recovered",
      uv: 2000,
      pv: 4798,
    },
    {
      name: "Capital Defaulted",
      uv: 2000,
      pv: 9800,
    },
  ];

  const regionWiseRecovery = [
    {
      name: "North",
      uv: 6000,
      pv: 4400,
    },
    {
      name: "South",
      uv: 3000,
      pv: 1398,
    },
    {
      name: "East",
      uv: 4000,
      pv: 6800,
    },
    {
      name: "West",
      uv: 2000,
      pv: 9800,
    },
  ];

  const data = [
    { name: "Group A", value: 400 },
    { name: "Group B", value: 125 },
    
  ];

  const COLORS = [ "#FFBB28", "#FF8042"];

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

  return (
    <>
    {
      loader ? <CircularProgress sx={{ marginTop:"20rem", marginLeft:"43rem"}}/>:
      (
        <>
      <div style={{ display: "flex", flexDirection: "row", marginTop: "40px", justifyContent:"space-between", padding:"10px 72px" }}>
        <Paper elevation={24} style={{ display: "flex", flexDirection: "column", rowGap:"85px", marginTop:"44px" }}>
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
            style={{ fontWeight: "600", textAlign: "center", fontSize: "30px" }}
          >
            Recovery Probability
          </span>
        </Paper>

        <Paper elevation={24} style={{ display: "flex", flexDirection: "column" }}>
          <BarChart width={430} height={280} data={capitalSplitData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="pv" fill="#6166e9" />
          </BarChart>
          <span
            style={{ fontWeight: "600", textAlign: "center", fontSize: "30px" }}
          >
            Capital Split
          </span>
        </Paper>
      </div>

      <div style={{ display: "flex", flexDirection: "row", marginTop: "40px",justifyContent:"space-between", padding:"10px 72px" }}>
        <Paper elevation={24} style={{ display: "flex", flexDirection: "column" }}>
          <BarChart width={430} height={280} data={regionWiseRecovery}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="pv" fill="#6166e9" />
          </BarChart>

          <span
            style={{ fontWeight: "600", textAlign: "center", fontSize: "30px" }}
          >
            Region Wise Recovery
          </span>
        </Paper>

        <Paper elevation={24}
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: "-140px",
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
            style={{ fontWeight: "600", textAlign: "center", fontSize: "30px" }}
          >
            Refinancing Type
          </span>
        </Paper>
      </div>
      </>
      )
    }

    </>
  );
};

export default AdminDashboard;
