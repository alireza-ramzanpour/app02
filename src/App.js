import React from "react";

class App extends React.Component {

  name = ""
  constructor() {
    super()
    this.scores = [17, 16, 15]
    this.students = [[2, 3], [4, 3], [5, 5]]
    this.names = ["ali", "reza", "ahmad"]
    this.teachers = [{ name: "ali", family: "rezaei" }, { name: "reza", family: "alinia" }, { name: "ahmad", family: "hasani" }]
    this.rects = [{ width: 3, length: 4 }, { width: 4, length: 6 }, { width: 6, length: 8 }]
  }
  render = () => {
    return (
      <>
        {
          this.scores.map((score) => (
            <h1>{score}</h1>
          ))
        }
        {
          this.students.map((student) => (
            <h1>{student[0] * student[1]}</h1>
          ))
        }

        <ol>
          {
            this.names.map((name) => (
              <li>{name}</li>
            ))
          }
        </ol>

        <ol>
          {
            this.teachers.map((teacher) => (
              <li>{teacher.name + " " + teacher.family}</li>
            ))
          }
        </ol>

        <table border="1">
          <tr><th>{"name"}</th><th>{"family"}</th></tr>
          {
            this.teachers.map((teacher) => (
              <tr><td>{teacher.name}</td><td>{teacher.family}</td></tr>
            ))
          }
        </table>

        <table border="1">
          <tr><th>{"width"}</th><th>{"length"}</th><th>{"area"}</th></tr>
          {
            this.rects.map((rect) => (
              <tr><td>{rect.width}</td><td>{rect.length}</td><td>{rect.width * rect.length}</td></tr>
            ))
          }
        </table>


      </>
    )
  }
}
export default App