import React from 'react';
import styled, { keyframes } from 'styled-components';
import realLogo from '../images/real.png'; 

const marqueeAnimation = keyframes`
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
`;

const MarqueeContainer = styled.div`
  width: 100%;
  overflow: hidden;
  background-color: #1a1a1a;
  color: #a9b3c1;
  padding: 13px 0; /* Añade algo de padding para más espacio alrededor del texto */
  margin-bottom: 0px;
`;

const MarqueeText = styled.div`
  white-space: nowrap;
  font-size: 100px; /* Ajusta el tamaño de la fuente */
  font-weight: bold; /* Hace el texto en negrita */
  animation: ${marqueeAnimation} 40s linear infinite; /* Ajusta el tiempo según tus necesidades */
  animation-delay: -10s; /* Retrasa el inicio de la animación */
`;

const Marquee2 = () => {
  return (
    <MarqueeContainer>
      <MarqueeText>
        THE $REAL TOKEN | THE $REAL TOKEN | THE $REAL TOKEN | THE $REAL TOKEN | THE $REAL TOKEN | THE $REAL TOKEN | THE $REAL TOKEN | THE $REAL TOKEN | HE $REAL TOKEN | THE $REAL TOKEN | HE $REAL TOKEN | THE $REAL TOKEN | HE $REAL TOKEN | THE $REAL TOKEN | HE $REAL TOKEN | THE $REAL TOKEN | HE $REAL TOKEN | THE $REAL TOKEN |  THE $REAL TOKEN | THE $REAL TOKEN | THE $REAL TOKEN | THE $REAL TOKEN | THE $REAL TOKEN | THE $REAL TOKEN | THE $REAL TOKEN | THE $REAL TOKEN | THE $REAL TOKEN | THE $REAL TOKEN | THE $REAL TOKEN | THE $REAL TOKEN | THE $REAL TOKEN | THE $REAL TOKEN | THE $REAL TOKEN | THE $REAL TOKEN | THE $REAL TOKEN | THE $REAL TOKEN | THE $REAL TOKEN | THE $REAL TOKEN |
      </MarqueeText>
    </MarqueeContainer>
  );
};

export default Marquee2;
