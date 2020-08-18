import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: ${(props) => props.justify || "center"};
  align-items: ${(props) => props.align || "center"};
  flex-direction: ${(props) => props.direction || "row"};
  width: ${(props) => props.width || "100%"};
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  border: 2px solid black;
  background-color: black;
  /* width: 50%; */
`;
export const Cell = styled.div`
  /* width: ${(props) => props.width};
  height: ${(props) => props.height}; */
  width: 10px;
  height: 10px;
  background-color: ${(props) => props.background};
  border: solid lightgray;
  border-width: thin;
  grid-column: ${(props) => props.col || 0};
  grid-row: ${(props) => props.row || 0};
`;
