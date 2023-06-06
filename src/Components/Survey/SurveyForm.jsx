import React, { useState } from 'react'
import axios from 'axios'

export default function SurveyForm() {

  const [question1, setQuestion1] = useState()
  const [question2, setQuestion2] = useState()
  const [question3, setQuestion3] = useState([])
  const [question4, setQuestion4] = useState()
  const [question5, setQuestion5] = useState()
  const [question6, setQuestion6] = useState()


  const handleOptionChange = (event) => {
    const value = event.target.value;
    const isChecked = event.target.checked;

    if (isChecked) {
      // Add the selected option to the array
      setQuestion3([...question3, value]);
    } else {
      // Remove the deselected option from the array
      setQuestion3(question3.filter(option => option !== value));
    }
  }

  function printAnswers(){

    console.log('1 : ', question1)
    console.log('2 : ', question2)
    console.log('3 : ', question3.toString())
    console.log('4 : ', question4)
    console.log('5 : ', question5)
    console.log('6 : ', question6)

    const data = {
      "id": 0,
      "question1": question1,
      "question2": question2,
      "question3": question3.toString(),
      "question4": question4,
      "question5": question5,
      "question6": question6
    }

    const url = 'https://localhost:7200/api/Surveys'

    axios.post(url, data)
    .then(response => {
        // Handle the response
        console.log(response.data);
    })
    .catch(error => {
        // Handle the error
        console.error(error.response);
    });

  }

  return (
    <>
        <div className='survey-form'>
          <div className='survey-form-questions'>

        
          <h3> What kind of weather do you like? </h3>
          <div className='answers-column'>
            
            <input type={'radio'} value='Perfectly blue skies and very hot' name='question-1' 
            onChange={ (event) =>  setQuestion1(event.target.value) }/>
            <label> Perfectly blue skies and very hot </label>

            <br />

            <input type={'radio'} value='I love the rain' name='question-1' 
              onChange={ (event) =>  setQuestion1(event.target.value) }
            />
            <label> I love the rain </label>

            <br />

            <input type={'radio'} value='Cool but sunny' name='question-1' onChange={ (event) =>  setQuestion1(event.target.value) }/>
            <label> Cool but sunny </label>

            <br />

            <input type={'radio'} value='Wintry weather, please' name='question-1' onChange={ (event) =>  setQuestion1(event.target.value) }/>
            <label> Wintry weather, please </label>
          </div>
          

          <h3> Where in the fruit bowl would you be? </h3>
          <select name="question-2" onChange={ (event) => setQuestion2(event.target.value)}>
            <option value="At the very top">At the very top</option>
            <option value="To the side">To the side</option>
            <option value="In the very centre">In the very centre</option>
            <option value="At the bottom somewhere because I don't want to be eaten">At the bottom somewhere because I don't want to be eaten</option>
          </select>

          <h3> Choose fruits that would go well with you </h3>
          <div className='answers-column'>

            <label for="Oranges"> Oranges 🍊</label>
            <input type="checkbox" name="Oranges" value="Oranges" onChange={(event) => handleOptionChange(event)}/>
            <br />
            
            <label for="Raspberries"> Raspberries </label>
            <input type="checkbox" name="Raspberries" value="Raspberries" onChange={(event) => handleOptionChange(event)} />
            <br />

            <label for="Banana"> Banana 🍌</label>
            <input type="checkbox" name="Banana" value="Banana" onChange={(event) => handleOptionChange(event)} />
            <br />

            <label for="Strawberries"> Strawberries 🍓</label>
            <input type="checkbox" name="Strawberries" value="Strawberries" onChange={(event) => handleOptionChange(event)} />
            <br />
          </div>

          <h3> What is the worst fruit? </h3>
          <input type={'text'} onChange={ (event) => setQuestion4(event.target.value) }/>

          <h3> What is your name? </h3>
          <input type={'text'}  onChange={ (event) => setQuestion5(event.target.value) } />

          <h3> What is your Social Security Number? </h3>
          <input type={'text'} onChange={ (event) => setQuestion6(event.target.value) } />
          
          </div>
        
          <button className='submit-button' onClick={ () => printAnswers() }> Submit </button>
        
        </div>

    </>
  )
}
