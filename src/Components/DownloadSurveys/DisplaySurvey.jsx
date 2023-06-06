import React from 'react'

export default function(survey) {

    const id = survey.props.id
    const q1 = survey.props.question1
    const q2 = survey.props.question2
    const q3 = survey.props.question3
    const q4 = survey.props.question4
    const q5 = survey.props.question5
    const q6 = survey.props.question6

  return (
    <>
    <div className='card-2'>

        <h3 className='survey-h3'> id : {id} </h3>
        
        <div className='box-2'>
            <p> Q1: {q1} </p>
            <p> Q2: {q2} </p>
            <p> Q3: {q3} </p>
            <p> Q4: {q4} </p>
            <p> Q5: {q5} </p>
            <p> Q6: {q6} </p>
        </div>
    </div>
    </>
  )
}
