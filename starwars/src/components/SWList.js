import React, { useState, useEffect } from "react";
import axios from "axios";
import SWCards from "./SWCards";
import { Container, Row, Col } from 'reactstrap';

export default function SWList() {
    const [data, setData] = useState([]);

useEffect(() => {
    axios
      .get(`https://swapi.co/api/people/`)
      .then(response => {
        console.log(response.data.results);
        setData(response.data.results);
      })
      .catch(error => {
        console.log("the data was not return", error);
      });
  }, []);

 return (
  <div>
    {data.map((data)=> {
        return (
          <Container>
          <SWCards
            key={data.index}
            name={data.name}
            height={data.height}
            mass={data.mass}
            by={data.birth_year}
          />
          </Container>
        );
      })}
  </div>

   );
};