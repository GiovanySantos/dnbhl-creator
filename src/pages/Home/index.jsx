import React from "react";
import { Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Home = () => {
  const StartButton = styled.button`
    margin-top: 30px;
    background: #101010;
    color: #fafafa;
    width: 230px;
    height: 70px;
    border: none;
    :hover {
      background: #222222;
    }
  `;
  const Title = styled.h1`
    font-size: 72px;
  `;
  return (
    <Container className='pt-5 pb-5'>
      <Row className='d-flex justify-content-center align-items-center text-center'>
        <Title>Do not believe his lies creator tool</Title>
        <Link to="/puzzlecreator">
          <StartButton>Start</StartButton>
        </Link>
      </Row>
    </Container>
  );
};

export default Home;
