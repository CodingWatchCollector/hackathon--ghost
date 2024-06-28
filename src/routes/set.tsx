import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { GuessGame } from "../components/games/guess";

const setsData = {
  animals: {
    games: [
      {
        type: "guess",
        data: [
          {
            question: "Where is the fox?",
            options: [
              {
                value: "hyena",
                correct: false,
                title: "Hyena",
                image: "/sets/animals/hyena.png",
              },
              {
                value: "horse",
                correct: false,
                title: "Horse",
                image: "/sets/animals/horse.png",
              },
              {
                value: "fox",
                correct: true,
                title: "fox",
                image: "/sets/animals/fox.png",
              },
            ],
          },
        ],
      },
    ],
  },
};

export const SetEnd = () => (
  <section>
    <h1>Congratulations!</h1>
    <p>
      Hooray! You've finished this set!{" "}
      <Link to="/">Go back to the set list</Link>
    </p>
  </section>
);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const loader = async ({ params }: { params: any }) => {
  return setsData[params.slug as keyof typeof setsData];
};

export const SetPage = () => {
  const { games } = useLoaderData() as (typeof setsData)[keyof typeof setsData];
  const { 0: currentGame, 1: setCurrentGame } = useState(0);

  const getCurrentGame = () => {
    switch (games[currentGame].type) {
      case "guess":
        return (
          <GuessGame
            games={games[currentGame].data}
            onEnd={() => setCurrentGame((curr) => curr + 1)}
          />
        );
    }
  };

  return currentGame < games.length ? getCurrentGame() : <SetEnd />;
};
