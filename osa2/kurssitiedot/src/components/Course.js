import React from 'react'


const Header = ({course}) => {
    return (
      <div>
        <h1>
          {course}
        </h1>
      </div>
    )
  }
  
  const Part = ({part, exercises}) => {
    return (
      <div>
          <p>{part} {exercises}</p>
      </div>
    )
  }
  
  const Content = ({parts}) => {
    return (
      <div>
        <Part part={parts[0].name} exercises={parts[0].exercises}/>
        <Part part={parts[1].name} exercises={parts[1].exercises}/>
        <Part part={parts[2].name} exercises={parts[2].exercises}/>
      </div>
    )
    }
  
    const Total = (props) => {
      return (
        <div>
          <p>Number of exercises {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}</p>
        </div>
      )
      }
      
    const Course = ({course}) => {
        return (
            <div>
                <Header course={course.name} />
                <Content parts={course.parts} />
                {/* <Total/> */}
            </div>
        )
    }

export default Course