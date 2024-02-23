import "../App.css";
import { useEffect, useState } from "react";
import styled from "styled-components";

const ProgressContainer = styled.div`
  width: 100%;
  height: 3px;
  background: transparent;
  //position: fixed;
  //top: 0;
  z-index: 999999;
`;
const ProgressBar = styled.div`
  height: 3px;
  background: #FC8574;
  width: ${(props) => props.width || 0}%;
`;
const ProgressText = styled.span`
  font-size: 1rem;
`;

const ScrollIndicator = ({ color, showText }) => {
  const [progressWidth, setProgressWidth] = useState(0);
  useEffect(() => {
    window.onscroll = () => {
      const winScroll =
        document.body.scrollTop || document.documentElement.scrollTop;
      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      setProgressWidth(scrolled);
    };
  }, []);

  return (
    <ProgressContainer>
      <ProgressBar width={progressWidth} color={color}>
        {showText && (
          <ProgressText width={progressWidth}>{`${Math.round(
            progressWidth
          )}%`}</ProgressText>
        )}
      </ProgressBar>
    </ProgressContainer>
  );
};

export default ScrollIndicator;
