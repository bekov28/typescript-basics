import { IntroProp } from "./data";

const Intro = (props: IntroProp) => {
  return (
    <div>
      <h2>Bismillah!!! Assalomu alaykum, {props.name}, {props.age}</h2>{" "}
    </div>
  );
};

export default Intro;
