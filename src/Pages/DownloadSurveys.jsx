import React, { useState, useEffect } from 'react'
import axios from 'axios'
import DisplaySurvey from '../Components/DownloadSurveys/DisplaySurvey'
import { AiOutlineDownload } from "react-icons/ai";
import { CSVLink, CSVDownload } from 'react-csv'

export default function DownloadSurveys() {

  const [surveyData, setSurveyData] = useState([])
  const [surveyUiList, setSurveyUiList] = useState()

  //get survey responses from db
  useEffect( () => {
    axios.get('https://localhost:7200/api/Surveys')
      .then(response => {
        setSurveyData(response.data) // Handle the response data here
      })
      .catch(error => {
        console.error('Error:', error);
      })
  }, [])
  

  //set ui
  useEffect(() => {

    setSurveyUiList(
      surveyData.map( (survey, index) => <DisplaySurvey key={index} props={survey} />)
    )

  }, [surveyData])

  const handleDownload = () => {


    console.log('hi from download');
  };

  return (
    <>
        <div className='download-card'>

        <div className='column card-button-group-2'>
            <h3> Download survey responses </h3>
        </div>

        <div className='column card-button-group'>
            <CSVLink className='card-button download' data={surveyData} filename={'surveys.csv'}>  <AiOutlineDownload /> </CSVLink>
        </div>  

        </div>

        {surveyUiList}
    </>
  )
}
