import React from 'react';
import { ResponsiveBar } from "@nivo/bar";

const data={
    data: [
      {
        ranking: "A III",
        value: 140
      },
      {
        ranking: "A II",
        value: 140
      },
      {
        ranking: "A I",
        value: 140
      },
      {
        ranking: "B III",
        value: 160
      },
      {
        ranking: "B II",
        value: 160
      },
      {
        ranking: "B I",
        value: 160
      },
      {
        ranking: "C III",
        value: 200
      },
      {
        ranking: "C II",
        value: 200
      },
      {
        ranking: "C I",
        value: 200
      },
      {
        ranking: "D III",
        value: 180
      },
      {
        ranking: "D II",
        value: 180
      },
      {
        ranking: "D I",
        value: 180
      }
    ]
  };
const AdminDashboard = () =>{
    return(
       <>
       hello
        <ResponsiveBar
          data={data.data}
          keys={["value"]}
          indexBy="ranking"
          margin={{
            top: 20,
            right: 0,
            bottom: 40,
            left: 100
          }}
          padding={0.6}
          groupMode="grouped"
          colors="#2a7ef0"
          axisTop={null}
          axisRight={null}
          enableGridX
          enableGridY
          enableLabel={false}
          axisBottom={{
            tickSize: 0,
            tickPadding: 10,
            tickRotation: 0
          }}
        />
       </>
    )
}

export default AdminDashboard