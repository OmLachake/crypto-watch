import styled from "styled-components";
import { css } from "styled-components";

// Colors Used
const green = "#03ff03";

const theme = "dark";
//const theme = 'light';
export const lightTheme = theme === "light";

export const color = lightTheme ? "white" : "#061a44";
export const color2 = lightTheme ? "white" : "#010e2c";
export const color3 = lightTheme ? "#09f010" : "#42ff3a";

if (lightTheme) {
  document.body.style.background = "#e1eaee";
  document.body.style.color = "#061a44";
}

export const lightBlueBackground = `background-color: ${color}`;
export const backgroundColor2 = `background-color: ${color2};`;
export const greenBackgroundColor = `background-color: ${color3};`;

export const fontColorGreen = `color: #03A9F4`;
export const fontColorWhite = `color: white`;
export const subtleBoxShadow = `box-shadow: 0px 0px 5px 1px ${
  lightTheme ? "#a9b6ff" : "#121d5b"
}`;
export const greenBoxShadow = `box-shadow: 0px 0px 4px 2px #5fff17`;
export const redBoxShadow = `box-shadow: 0px 0px 2px 2px #e41111`;

export const fontSizeBig = "font-size: 2em";
export const fontSize1 = "font-size: 1.5em;";
export const fontSize2 = "font-size: 1.0em";
export const fontSize3 = "font-size: .75em";
export const textAlignCenter = "text-align: center;";

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
  font-family: "Baron", sans-serif;
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
  padding: 5px;
  color: ${color3};
  ${fontSize1}
  :hover {
    ${greenBoxShadow}
  }
`;

export const CoinsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 20px;
  margin-top: 40px;
`;

export const CoinTile = styled.div`
  ${subtleBoxShadow}
  ${lightBlueBackground}
  padding:10px;

  :hover {
    ${(props) =>
      props.favorite ? redBoxShadow : props.selectable ? greenBoxShadow : null}
    cursor:pointer;
  }
`;
export const CoinHeaderGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export const CoinSymbol = styled.div`
  justify-self: right;
`;

export const CoinSearch = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 6fr;
`;

export const Input = styled.input`
  ${backgroundColor2}
  color:#1163c9;
  ${greenBoxShadow}
  ${fontSize1}
  padding:10px 20px;
`;

export const PriceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, minmax(300px, 1fr));
  grid-gap: 20px;
  margin-top: 40px;
`;

export const PriceTile = styled(CoinTile)`
  ${(props) =>
    props.compact &&
    css`
      ${fontSize3}
      display:flex;
      justify-content: space-between;
    `}
  ${(props) =>
    props.currentFavorite &&
    css`
      ${greenBoxShadow}
      pointer-events:none;
    `}
`;