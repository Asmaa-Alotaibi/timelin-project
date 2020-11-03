import SingleBox from "./SingleBox";
import boxs from "../data";
import { ListWrapper } from "../styles";

const BoxList = () => {
  const boxList = boxs.map((e) => <SingleBox boxObject={e} />);
  return <ListWrapper> {boxList}</ListWrapper>;
};

export default BoxList;
