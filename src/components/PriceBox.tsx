import Typography from "@material-ui/core/Typography";
import currencyFormatter from "currency-formatter";

interface PriceBoxProps {
  value: number;
  currency: string;
  color?: string;
}

function PriceBox({ value, currency, color = "#00000" }: PriceBoxProps) {
  const valueFormated = currencyFormatter.format(value, { code: currency });
  const l = valueFormated.length;
  return (
    <Typography style={{ fontSize: 42 - l / 1.2, color }}>
      {valueFormated}
    </Typography>
  );
}

export default PriceBox;
