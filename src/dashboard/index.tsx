"use client";

import { useEffect, useState } from "react";

const Dashboard = () => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");


  return (
    <div>
      <div>{date}</div>
      <div>{time}</div>
    </div>
  );
};

export default Dashboard;
