import { IntroProp } from "./data";

const Intro = (props: IntroProp) => {
  return (
    <div>
      {props.isLoggedIn ? (
        <h2>
          Bismillah!!! Assalomu alaykum, {props.name}, {props.age}
        </h2>
      ) : (
        <h2>Welcome, Dear Guest!</h2>
      )}
    </div>
  );
};

export default Intro;
