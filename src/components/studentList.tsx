import { StudentListProps } from "./data";

const StudentList = (props: StudentListProps) => {
  return (
    <div>
      StudentList:
      {props.names.map((name) => {
        return (
          <h2 key={name.first}>
            {name.first}
            {name.last}
          </h2>
        );
      })}
    </div>
  );
};

export default StudentList;
