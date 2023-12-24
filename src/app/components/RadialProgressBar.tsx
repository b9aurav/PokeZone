import React from "react";

type RadialProgressBarProps = {
  value: number;
  maxValue: number;
  text: string;
};

const RadialProgressBar: React.FC<RadialProgressBarProps> = ({
  value,
  maxValue,
  text,
}) => {
  const radius = 50;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (value / maxValue) * circumference;

  const color = value > 140 ? "#c1dd97" : value > 100 ? "#e4c25e" : "#d27f81";

  return (
    <div className="flex items-center flex-col lg:scale-75 scale-50">
      <svg
        className="progress-ring"
        width="120"
        height="120"
        style={{ transform: "rotate(-90deg)" }}
      >
        <circle
          className="progress-ring__circle"
          stroke="white"
          fill="transparent"
          strokeWidth="12"
          strokeDasharray={`${circumference - 1 * circumference} ${
            circumference - 1 * circumference
          }`}
          style={{ strokeDashoffset: offset }}
          r={radius}
          cx="60"
          cy="60"
        />
        <circle
          className="progress-ring__circle"
          stroke={color}
          fill="transparent"
          strokeWidth="12"
          strokeDasharray={`${circumference} ${circumference}`}
          style={{ strokeDashoffset: offset }}
          r={radius}
          cx="60"
          cy="60"
        />
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          stroke="white"
          strokeWidth="2px"
          dy=".3em"
          style={{
            fontSize: "20px",
            transform: "rotate(90deg)",
            transformOrigin: "center",
          }}
        >
          {value}
        </text>
      </svg>
      <label className=" text-xl mx-3 text-center">{text}</label>
    </div>
  );
};

export default RadialProgressBar;
