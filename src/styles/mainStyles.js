import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-wrap: ${(props) => props.wrap};
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
  width: ${(props) => props.width};
`;

export const Cell = styled.div`
  width: 7px;
  height: 7px;
  background-color: ${(props) => props.background};
  border: solid lightgray;
  border-width: thin;
  grid-column: ${(props) => props.col || 0};
  grid-row: ${(props) => props.row || 0};
`;
