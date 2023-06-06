import React, { useState } from 'react'
import { RiDeleteBin2Line, RiEditLine } from "react-icons/ri";
import axios from 'axios'

export default function Fruit({props}) {

    const id = props.id
    const name = props.name
    const colour = props.colour

    const [userId, setUserId] = useState(id)
    const [userColour, setUserColour] = useState(colour)

    const editHandler = () => {

        const url = `https://localhost:7200/api/Fruits/${id}`;

        const data = {
          id: userId,
          name: name,
          colour: userColour
        };
    
        axios.put(url, data)
          .then(response => {
            // Handle the response
            console.log(response.data);
          })
          .catch(error => {
            // Handle the error
            console.error(error);
          });
    }

    const deleteHandler = () => {

        const url = `https://localhost:7200/api/Fruits/${id}`;
    
        axios.delete(url)
          .then(response => {
            // Handle the response
            console.log(response.data);
          })
          .catch(error => {
            // Handle the error
            console.error(error);
          });
    }

    const titleStyle = { textShadow: `2px 2px 0 ${colour}` }

  return (
    <>
        <div className='card'>

        <div className='column card-button-group-2'>
            <h3 style={titleStyle}> {name} </h3>

            <div className='card-button-group'>
                <input className='text' placeholder={id} onChange={ (event) => setUserId(event.target.value) }/>
                <input className='text' placeholder={colour} onChange={ (event) => setUserColour(event.target.value) } />
            </div>
        </div>

        <div className='column card-button-group'>
            <div className='card-button update' onClick={ editHandler }> <RiEditLine /> </div>
            <div className='card-button delete'> <RiDeleteBin2Line onClick={ deleteHandler } /> </div>
        </div>  

        </div>
    </>
  )
}
