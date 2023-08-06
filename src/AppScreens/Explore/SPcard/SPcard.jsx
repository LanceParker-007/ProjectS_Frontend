import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions, Rating } from "@mui/material";

const SPcard = ({ name, description, cardImgUrl, SPrating }) => {
  //Making Description short according to viewport
  const [shortDescription, setShortDescription] = useState("");

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      const maxLength = width >= 768 ? 28 : 19; // Adjust the values as per your requirements
      const slicedDescription =
        description.length > maxLength
          ? description.slice(0, maxLength) + "..."
          : description;
      setShortDescription(slicedDescription);
    };

    handleResize(); // Call the function initially
    window.addEventListener("resize", handleResize); // Add event listener for window resize

    return () => {
      window.removeEventListener("resize", handleResize); // Clean up the event listener
    };
  }, [description]);

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={cardImgUrl}
          alt="green iguana"
        />
        <CardContent style={{ height: "10rem" }}>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {shortDescription}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          <Rating
            name="read-only"
            value={SPrating}
            readOnly
            defaultValue={2}
            size="small"
          />
        </Button>
      </CardActions>
    </Card>
  );
};

export default SPcard;
