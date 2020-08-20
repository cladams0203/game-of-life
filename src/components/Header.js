import React from "react";
import { useHistory } from "react-router-dom";
import { Container } from "../styles/mainStyles";

function Header() {
  const history = useHistory();

  return (
    <Container
      width={"100%"}
      wrap={"wrap"}
      justify={"space-evenly"}
      className="header"
    >
      <h1 className="heading">Conway's Game of Life</h1>
      <p onClick={() => history.push("/")} className="links">
        Home
      </p>
      <p onClick={() => history.push("/game-history")} className="links">
        Game Info
      </p>
    </Container>
  );
}
export default Header;
