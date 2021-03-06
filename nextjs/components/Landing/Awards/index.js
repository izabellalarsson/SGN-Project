import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Title from "../../Title";
import Background from "../Background";

const AwardStyled = styled.div`
  display: flex;
  flex-direction: column;

  img {
    width: 86%;
    height: 20%;
    margin: 15px 0px 15px 30px;
    object-fit: contain;
    object-position: 50% 50%;
    background: white;
  }

  img:first-child {
    margin-top: 50px;
  }

  div:nth-child(2) {
    height: 60vh;
    width: 100%;
    margin-top: -20px;
    padding: 0;
    background: var(--main-bg);
    margin-bottom: 55px;
    align-self: flex-end;
  }

  h1 {
  }
`;
const Awards = ({ text, awards }) => {
  return (
    <AwardStyled>
      <Title text='Awards'> </Title>
      <div>
        {awards.map((award, i) => {
          return <img key={i} src={award.image} />;
        })}
      </div>
    </AwardStyled>
  );
};

Awards.propTypes = {};

export default Awards;
