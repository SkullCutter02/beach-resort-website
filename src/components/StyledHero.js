import styled from "styled-components";

const styledHero = styled.header`
  min-height: 60vh;
  display: flex;
  background: url(${(props) => props.img}) center/cover no-repeat;
  justify-content: center;
  align-items: center;
`;

export default styledHero;
