import React, { useState } from 'react'
import { RiFileAddLine } from "react-icons/ri"
import axios from 'axios'

export default function AddNewFruit() {

    const [name, setname] = useState(null)
    const [colour, setcolour] = useState(null)

    const addHandler = () => {
        
        const url = `https://localhost:7200/api/Fruits`;

        const data = {
        name: name,
        colour: colour
        };

        axios.post(url, data)
        .then(response => {
            // Handle the response
            console.log(response.data);
        })
        .catch(error => {
            // Handle the error
            console.error(error);
        });
    }

  return (
    <>
        <div className='add-card'>

        <div className='column card-button-group-2'>
            <h3> Add new fruit </h3>

            <div className='card-button-group'>
                <input className='text' placeholder={'name'} onChange={ (event) => setname(event.target.value) } />
                <input className='text' placeholder={'colour'} onChange={ (event) => setcolour(event.target.value) } />
            </div>
        </div>

        <div className='column card-button-group'>
            <div className='card-button add' onClick={ addHandler }> <RiFileAddLine /> </div>
        </div>  

        </div>
    </>
  )
}
