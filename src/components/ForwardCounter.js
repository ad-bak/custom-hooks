import Card from "./Card";
import useCounter from "../hooks/use-counter";

const ForwardCounter = () => {
  const counter = useCounter("plus");

  return <Card>{counter}</Card>;
};

export default ForwardCounter;
