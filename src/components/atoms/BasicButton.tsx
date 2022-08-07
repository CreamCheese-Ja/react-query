import Button from "@mui/material/Button";
import { memo } from "react";

type Props = JSX.IntrinsicElements["button"];

const BasicButton: React.FC<Props> = (props) => {
  const { onClick } = props;
  return (
    <Button variant="contained" onClick={onClick}>
      取得
    </Button>
  );
};

export default memo(BasicButton);
