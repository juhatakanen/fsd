import React from 'react'

const Course = ({course}) => {
    return (
        <div>
            <Header course={course.name} />
            <Content parts={course.parts} />
            {/* <Total/> */}
        </div>
    )
}

const Header = ({course}) => {
    return (
      <div>
        <h1>
          {course}
        </h1>
      </div>
    )
  }
  
  const Content = ({parts}) => {
    return (
      <div>
        <ul>
          {parts.map(part =>
          <Part key={part.id} part={part.name} exercises={part.exercises} />)}
        </ul>
      </div>
    )
  }

  const Part = ({part, exercises}) => {
    return (
      <>
      <li>
          <p>{part} {exercises}</p>
          </li>
      </>
    )
  }
  
  
    // const Total = (props) => {
    //   return (
    //     <div>
    //       <p>Number of exercises {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}</p>
    //     </div>
    //   )
    //   }
      

export default Course