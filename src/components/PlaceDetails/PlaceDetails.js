import React from "react";
import {
  Box,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Chip,
} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import Rating from "@mui/material/Rating";

import useStyles from "./styles.js";

const PlaceDetails = ({ place, selected, refProp }) => {
  if (selected)
    refProp?.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  const classes = useStyles();

  return (
    <Card elevation={6}>
      <CardMedia
        style={{ height: 350 }}
        image={
          place.photo
            ? place.photo.images.large.url
            : "https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg"
        }
        title={place.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5">
          {place.name}
        </Typography>
        <Box display="flex" justifyContent="space-between" my={2}>
          <Rating name="read-only" value={Number(place.rating)} readOnly />
          <Typography component="legend" sx={{fontWeight:"bold"}}>
            {place.num_reviews} review{place.num_reviews > 1 && "s"}
          </Typography>
        </Box>
        {place?.awards?.map((award) => (
          <Box
            display="flex"
            justifyContent="space-between"
            my={1}
            alignItems="center"
          >
            <img src={award.images.small} />
            <Typography variant="subtitle2" color="textSecondary">
              {award.display_name}
            </Typography>
          </Box>
        ))}
        {place?.cuisine?.map(({ name }) => (
          <Chip
            key={name}
            size="small"
            color="warning"
            label={name}
            className={classes.chip}
          />
        ))}
        {place.address && (
          <Box sx={{ display: "flex", pt:"7px" }}>
            <LocationOnIcon color="error" sx={{ marginRight: "5px" }} />
            <Typography
              gutterBottom
              variant="body2"
              color="textSecondary"
             
              sx={{ pt: "5px" }}
            >
              {place.address}
            </Typography>
          </Box>
        )}
        {place.phone && (
          <Box sx={{ display: "flex" , pt:"7px"}}>
            <PhoneIcon color="success" sx={{ marginRight: "5px" }} />
            <Typography
              variant="body2"
              color="textSecondary"
              
            >
              {place.phone}
            </Typography>
          </Box>
        )}
      </CardContent>
    </Card>
  );
};

export default PlaceDetails;
