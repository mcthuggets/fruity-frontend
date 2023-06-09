import React, { useState, useEffect } from 'react'
import axios from 'axios'
//
import Fruit from './Fruit'
import AddNewFruit from './AddNewFruit'

export default function FruitList() {

    const [fruitList, setFruitList] = useState(null)
    const [fruitComponents, setFruitComponents] = useState(null)

    useEffect(() => {
        axios.get('https://localhost:7200/api/Fruits')
          .then(response => {
            setFruitList(response.data)
          })
          .catch(error => {
            console.error(error);
          });
      }, []);
      

      useEffect(() => {
        if (fruitList) {
          setFruitComponents(fruitList.map((fruit, index) => <Fruit key={index} props={fruit} />));
        }
      }, [fruitList]);

  return (
    <>
        <AddNewFruit />

        {fruitComponents}
    </>
  )
}
