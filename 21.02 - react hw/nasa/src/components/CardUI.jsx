import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const CardUI = ({ title }) => {
  return (
    <Link to={`/${title}`}>
      <Card>
        <CardContent>
          <Typography>{title}</Typography>
        </CardContent>
      </Card>
    </Link>
  );
};

export default CardUI;
