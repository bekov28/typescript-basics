import { StudentProps } from "./data";


const Student = (props: StudentProps) => {
  return (
    <div>
      Student: name: {props.name.first}; fname: {props.name.last}
    </div>
  );
};

export default Student;
