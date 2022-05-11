import { SStatItem } from "./styles";

const StatItem = ({ text, count }) => (
  <SStatItem>
    <div>{text}</div>
    <p>{count}</p>
  </SStatItem>
);

export default StatItem;
