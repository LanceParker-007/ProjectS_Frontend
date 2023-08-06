import React from "react";
import SP from "./Service_Providers.json";
import SPcard from "./SPcard/SPcard";
import { Container, Grid } from "@mui/material";
import BottomNavigation from "../bottomNav/BottomNavigation";

const Explore = () => {
  // Generate top 3 picks for a particular user
  const randomSPs = [];

  for (let i = 0; i < 3; i++) {
    const randomSP = Math.floor(Math.random() * 10) + 1; // Generate a random number between 1 and 100
    randomSPs.push(randomSP);
  }

  //Shuffle the array - Temporary
  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  };

  const shuffledSp = SP;
  shuffleArray(shuffledSp);

  //---------------------------
  return (
    <>
      <h1>Explore! Find new SP</h1>
      <section className="top3_SP">
        {randomSPs.map((randomSp, index) => (
          <div key={index}>Hello {randomSp}</div>
        ))}
      </section>
      <Container maxWidth="xl">
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {shuffledSp.map((item, index) => (
            <Grid
              item
              xs={2}
              sm={2}
              md={3}
              lg={4}
              key={index}
              justifyContent="space-between"
            >
              <SPcard
                key={index}
                name={item.name}
                description={item.description}
                cardImgUrl={item.photos[0]}
                SPrating={item.rating}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
      <div style={{ marginBottom: "6rem" }}></div>
      <BottomNavigation />
    </>
  );
};

export default Explore;
