import Intro from "./components/intro";
import Student from "./components/student";
import StudentList from "./components/studentList";
import "./index.css";

function App() {
  const studentInfo = {
    first: "Berdiyor",
    last: "Orzikulov",
  };

  const studentList = [
    {
      first: "Berdiyor",
      last: "Orzikulov",
    },
    {
      first: "Axrorbek",
      last: "Sadullayev",
    },
    {
      first: "Murodil",
      last: "Norboyev",
    },
    {
      first: "Abbosxon",
      last: "Begmatov",
    },
    {
      first: "Abdulloh",
      last: "Rahmonov",
    },
  ];

  return (
    <div className="App">
      <Intro name="Berd" age={32} isLoggedIn={false} />
      <Student name={studentInfo} />
      <StudentList names={studentList} />
    </div>
  );
}

export default App;
