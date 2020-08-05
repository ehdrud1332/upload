import React from 'react';
import styled from 'styled-components';

const H1 = styled.h1`
  color: #efb6b2;
  font-size: 1.2rem;
  letter-spacing: 2px;
  font-weight: normal;
`;

const H2 = styled.h2`
  text-align: center;
  margin-top: 60px;
  font-size: 2.6rem;
`;

const P = styled.p`
  text-align: center;
`;

const Title = () => {
    return (
        <div>
            <H1>FireGram</H1>
            <H2>Your Pictures</H2>
            <P>어서오세요. 여기는 재민 월드 입니다.</P>
        </div>
    );
};

export default Title;
