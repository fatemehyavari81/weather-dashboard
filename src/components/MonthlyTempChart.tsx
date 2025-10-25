import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";
import React from "react";
import { Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

const data = [
  { month: "January", temp: 28 },
  { month: "February", temp: 25 },
  { month: "March", temp: 22 },
  { month: "April", temp: 35 },
  { month: "May", temp: 32 },
  { month: "June", temp: 29 },
  { month: "July", temp: 22 },
  { month: "August", temp: 18 },
  { month: "September", temp: 12 },
  { month: "October", temp: 10 },
  { month: "November", temp: 15 },
  { month: "December", temp: 20 },
];

const MonthlyTempChart: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <Typography
        variant="h6"
        sx={{
          position: "absolute",
          top: 8,
          right: 16,
          fontWeight: 600,
          zIndex: 2,
        }}
      >
        {t("chartTitle")}
      </Typography>

      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={data}
          margin={{ top: 50, right: 16, left: 0, bottom: 8 }}
        >
          <defs>
            <linearGradient id="tempGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#42a5f5" stopOpacity={0.6} />
              <stop offset="100%" stopColor="#42a5f5" stopOpacity={0.1} />
            </linearGradient>
          </defs>

          {/* Only horizontal grid lines */}
          <CartesianGrid
            horizontal={true}
            vertical={false}
            strokeDasharray="4 4"
            stroke="#b0c4de"
            opacity={0.5}
          />

          <XAxis
            dataKey={t("month")}
            tick={{ fontSize: 12 }}
            axisLine={false}
            tickLine={false}
          />

          <YAxis
            tickFormatter={(value) => `${value}°C`}
            tick={{ fontSize: 12 }}
            axisLine={false}
            tickLine={false}
          />

          <Tooltip formatter={(value) => `${value}°C`} />

          <Area
            type="monotone"
            dataKey="temp"
            stroke="#3f51b5"
            strokeWidth={3}
            fill="url(#tempGradient)"
            dot={{ r: 4, strokeWidth: 2, stroke: "#3f51b5", fill: "#fff" }}
            activeDot={{ r: 6 }}
            animationBegin={200}
            animationDuration={1200}
            animationEasing="ease-in-out"
          />
        </AreaChart>
      </ResponsiveContainer>
    </>
  );
};

export default MonthlyTempChart;