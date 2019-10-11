import React from "react";
import {
   Card, CardImg, CardText, CardBody,
   CardTitle, CardSubtitle
 } from 'reactstrap';
 import styled from "styled-components";
 import { Container, Row, Col } from 'reactstrap';

const SWCards = props => {
   return (
//     // <div className="cards" key={props.date}>
//     //   <h2>Title: {props.title}</h2>
//     //   <img className="nasaimg" alt="nasaphoto" src={props.photo} />
//     // </div>
     <Card>
       <Container >
       <CardBody>
        <div key={props.key}>
         <StyledTitle>Name: {props.name}</StyledTitle>
         <StyledSubTitle>Height: {props.height}</StyledSubTitle>
         <StyledSubTitle>Mass: {props.mass}</StyledSubTitle>
         <StyledSubTitle>Birth Year: {props.by}</StyledSubTitle>
        </div>  
       </CardBody>
       </Container>
     </Card>
 
   );
};
export default SWCards;

export const StyledTitle = styled.h1`
  font-size:39px;
`;  

export const StyledSubTitle = styled.h2`
  font-size:20px;
`;  