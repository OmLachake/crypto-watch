import styled from "styled-components";
import { css } from "styled-components";

// Colors Used

const green = "#03ff03";
const blue = "#010e2c";

export const Layout = styled.div`
  padding: 40px;
`;

export const Bar = styled.ul`
  align-items: center;
  list-style: none;
  text-align: center;
  display: flex;
  gap: 2rem;
  padding: 0 10px;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const Logo = styled.div`
  font-size: 1.5rem;
`;

export const NavButton = styled.div`
  cursor: pointer;
  padding: 10px 15px;
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0);
  text-transform: capitalize;
  transition: all 0.3 ease-in-out;
  ${(props) =>
    props.active &&
    css`
      border: 1px solid ${green};
      color: #e6ffe6;
    `}

  :hover {
    text-shadow: 0px 0px 6px ${green};
    color: #e6ffe6;
  }
`;

export const ActionButton = styled.div`
  margin: 20px;
  cursor: pointer;
  color: ${green};
`;
