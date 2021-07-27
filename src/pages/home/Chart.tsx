import React, { useState, useEffect } from "react";
import { ResponsiveLine } from "@nivo/line";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const { innerWidth: width, innerHeight: height } = window;

const useStyles = makeStyles({
  container: { width: "100%", height: innerHeight / 4, marginTop: 50 },
  controls: {
    padding: 30,
    marginTop: 60,
    marginBottom: 20,
    width: "100%",
    display: "flex",
    alignItems: "baseline",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  button: {
    textTransform: "none",
  },
});

// const data = generateSeries(["1"], generateSerie().sort().map(n => n.toString()))

const data = [
  {
    id: "test",
    data: [
      {
        x: "plane",
        y: 220,
      },
      {
        x: "helicopter",
        y: 116,
      },
      {
        x: "boat",
        y: 200,
      },
      {
        x: "train",
        y: 107,
      },
      {
        x: "subway",
        y: 133,
      },
      {
        x: "bus",
        y: 274,
      },
      {
        x: "car",
        y: 246,
      },
      {
        x: "moto",
        y: 221,
      },
      {
        x: "bicycle",
        y: 291,
      },
      {
        x: "horse",
        y: 4,
      },
      {
        x: "skateboard",
        y: 132,
      },
      {
        x: "others",
        y: 220,
      },
    ],
  },
];

interface ChartControlsProps {
  onChange: (value: string) => void;
}

function ChartControls({ onChange }: ChartControlsProps) {
  const classes = useStyles();
  const [selected, setSelected] = useState("Now");

  useEffect(() => {
    onChange(selected);
  }, [selected]);

  const controls = ["Now", "1y", "5y", "10y", "30y"].map((key: string) => {
    const variant = selected === key ? "contained" : "text";
    return (
      <Button
        disableElevation
        color="primary"
        className={classes.button}
        variant={variant}
        key={key}
        onClick={() => {
          setSelected(key);
        }}
      >
        {key}
      </Button>
    );
  });
  return <div className={classes.controls}>{controls}</div>;
}

function Chart() {
  const classes = useStyles();

  return (
    <>
      <div className={classes.container}>
        <ResponsiveLine
          data={data}
          curve="catmullRom"
          areaOpacity={1}
          enableArea={true}
          margin={{ top: 5 }}
          enablePoints={false}
          enableGridX={false}
          enableGridY={false}
          lineWidth={2}
          colors={"#845CF1"}
          defs={[
            {
              id: "gradientC",
              type: "linearGradient",
              colors: [
                { offset: 0, color: "#E4E4F1" },
                { offset: 100, color: "#F1F3F4" },
              ],
            },
          ]}
          fill={[{ match: "*", id: "gradientC" }]}
        />
        <ChartControls onChange={() => {}} />
      </div>
    </>
  );
}

export default Chart;
