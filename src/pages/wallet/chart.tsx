import { ResponsivePie } from "@nivo/pie";

function Chart({ data }: any) {
  return (
    <ResponsivePie
      data={data}
      margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
      innerRadius={0.5}
      padAngle={0.7}
      cornerRadius={3}
      activeOuterRadiusOffset={8}
      borderWidth={1}
      borderColor={{ from: "color", modifiers: [["darker", 0.2]] }}
      arcLinkLabelsSkipAngle={10}
      arcLinkLabelsTextColor="#333333"
      arcLinkLabelsThickness={2}
      arcLinkLabelsColor={{ from: "color" }}
      arcLabelsSkipAngle={10}
    />
  );
}

export default Chart;
