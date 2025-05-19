"use client";

import { useEffect, useState } from "react";

const Dashboard = () => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  useEffect(() => {
    setInterval(() => {
      const now = new Date();

      const times =
        now.getHours().toString().padStart(2, "0") +
        ":" +
        now.getMinutes().toString().padStart(2, "0") +
        ":" +
        now.getSeconds().toString().padStart(2, "0");

      setTime((prev) => {
        return times;
      });

      const dates = now.toLocaleDateString();
      setDate((prev) => {
        return dates;
      });
    }, 1000);
  }, []);

  return (
    <div className="p-10">
      <div
        style={{
          boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
        }}
        className="w-[300px] h-[100px] flex flex-col justify-center items-start border-none rounded-2xl px-3 py-2 gap-2"
      >
        <div className="font-bold text-xl text-gray-400">{date}</div>
        <div className="text-blue-600 font-bold text-4xl">{time}</div>
      </div>
    </div>
  );
};

export default Dashboard;
