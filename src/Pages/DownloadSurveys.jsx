import React, { useState, useEffect } from 'react'
import axios from 'axios'
import DisplaySurvey from '../Components/DownloadSurveys/DisplaySurvey'

export default function DownloadSurveys() {

  const [surveyData, setSurveyData] = useState([])
  const [surveyUiList, setSurveyUiList] = useState()

  useEffect( () => {
    axios.get('https://localhost:7200/api/Surveys')
      .then(response => {
        setSurveyData(response.data) // Handle the response data here
      })
      .catch(error => {
        console.error('Error:', error);
      })
  }, [])
  
  useEffect(() => {

    setSurveyUiList(
      surveyData.map( (survey, index) => <DisplaySurvey key={index} props={survey} />)
    )

  }, [surveyData])
  

  return (
    <>
        {surveyUiList}
    </>
  )
}
