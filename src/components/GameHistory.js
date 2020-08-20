import React from "react";
import { Container } from "../styles/mainStyles";
function GameHistory() {
  return (
    <Container direction={"column"} width={"70%"} align={"flex-start"}>
      <h1>Conway's Game of Life History</h1>
      <p>
        In late 1940, John von Neumann defined life as a creation (as a being or
        organism) which can reproduce itself and simulate a Turing machine. Von
        Neumann was thinking about an engineering solution which would use
        electromagnetic components floating randomly in liquid or gas. This
        turned out not to be realistic with the technology available at the
        time. Stanislaw Ulam invented cellular automata, which were intended to
        simulate von Neumann's theoretical electromagnetic constructions. Ulam
        discussed using computers to simulate his cellular automata in a
        two-dimensional lattice in several papers. In parallel, von Neumann
        attempted to construct Ulam's cellular automaton. Although successful,
        he was busy with other projects and left some details unfinished. His
        construction was complicated because it tried to simulate his own
        engineering design. Over time, simpler life constructions were provided
        by other researchers, and published in papers and books.
      </p>
      <p>
        Motivated by questions in mathematical logic and in part by work on
        simulation games by Ulam, among others, John Conway began doing
        experiments in 1968 with a variety of different two-dimensional cellular
        automaton rules. Conway's initial goal was to define an interesting and
        unpredictable cell automaton. For example, he wanted some configurations
        to last for a long time before dying and other configurations to go on
        forever without allowing cycles. It was a significant challenge and an
        open problem for years before experts on cellular automata managed to
        prove that, indeed, the Game of Life admitted of a configuration which
        was alive in the sense of satisfying Von Neumann's two general
        requirements. While the definitions before the Game of Life were
        proof-oriented, Conway's construction aimed at simplicity without a
        priori providing proof the automaton was alive.
      </p>
      <p>
        Conway chose his rules carefully, after considerable experimentation, to
        meet these criteria:
      </p>
      <ul>
        <li>There should be no explosive growth.</li>
        <li>
          There should exist small initial patterns with chaotic, unpredictable
          outcomes.
        </li>
        <li>
          There should be potential or von Neumann universal constructors.
        </li>
        <li>
          The rules should be as simple as possible, whilst adhering to the
          above constraints.
        </li>
      </ul>
      <p>
        The game made its first public appearance in the October 1970 issue of
        Scientific American, in Martin Gardner's "Mathematical Games" column.
        Theoretically, the Game of Life has the power of a universal Turing
        machine: anything that can be computed algorithmically can be computed
        within the Game of Life. Gardner wrote, "Because of Life's analogies
        with the rise, fall and alterations of a society of living organisms, it
        belongs to a growing class of what are called 'simulation games' (games
        that resemble real life processes)."{" "}
      </p>
      <p>
        Since its publication, the Game of Life has attracted much interest
        because of the surprising ways in which the patterns can evolve. It
        provides an example of emergence and self-organization. Scholars in
        various fields, such as computer science, physics, biology,
        biochemistry, economics, mathematics, philosophy, and generative
        sciences, have made use of the way that complex patterns can emerge from
        the implementation of the game's simple rules.[citation needed] The game
        can also serve as a didactic analogy, used to convey the somewhat
        counter-intuitive notion that design and organization can spontaneously
        emerge in the absence of a designer. For example, cognitive scientist
        Daniel Dennett has used the analogy of the Game of Life "universe"
        extensively to illustrate the possible evolution of complex
        philosophical constructs, such as consciousness and free will, from the
        relatively simple set of deterministic physical laws which might govern
        our universe.
      </p>
      <p>
        The popularity of the Game of Life was helped by its coming into being
        at the same time as increasingly inexpensive computer access. The game
        could be run for hours on these machines, which would otherwise have
        remained unused at night. In this respect, it foreshadowed the later
        popularity of computer-generated fractals. For many, the Game of Life
        was simply a programming challenge: a fun way to use otherwise wasted
        CPU cycles. For some, however, the Game of Life had more philosophical
        connotations. It developed a cult following through the 1970s and
        beyond; current developments have gone so far as to create theoretic
        emulations of computer systems within the confines of a Game of Life
        board.
      </p>
    </Container>
  );
}
export default GameHistory;
