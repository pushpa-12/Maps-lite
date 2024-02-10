import React, { useState, useEffect, createRef } from "react";
import {
  CircularProgress,
  Grid,
  Typography,
  MenuItem,
  FormControl,
  Select,
} from "@mui/material";

import PlaceDetails from "../PlaceDetails/PlaceDetails";
import useStyles from "./styles.js";

const List = ({
  places,
  type,
  setType,
  childClicked,
  isLoading,
}) => {
  const [elRefs, setElRefs] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    setElRefs((refs) =>
      Array(places?.length)
        .fill()
        .map((_, i) => refs[i] || createRef())
    );
  }, [places]);

  return (
    <div className={classes.container}>
      <Typography variant="h5" sx={{ mb: "15px", fontWeight: "600" }}>
        Near By You
      </Typography>
      <FormControl className={classes.formControl}>
       
        <Select
          id="type"
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          <MenuItem value="restaurants">Restaurants</MenuItem>
          <MenuItem value="attractions">Tourist Spots</MenuItem>
        </Select>
      </FormControl>

      {isLoading ? (
        <div className={classes.loading}>
          <CircularProgress size="5rem" />
        </div>
      ) : (
        <>
          <Grid
            container
            spacing={3}
            className={classes.list}
            sx={{ mt: "10px" }}
          >
            {places?.map((place, i) => (
              <Grid ref={elRefs[i]} key={i} item xs={12}>
                <PlaceDetails
                  selected={Number(childClicked) === i}
                  refProp={elRefs[i]}
                  place={place}
                />
              </Grid>
            ))}
            { places?.length===0 && <Typography sx={{fontWeight:"bold", ml:"20px", mt:"20px"}} > No data Found</Typography>}
          </Grid>
        </>
      )}
    </div>
  );
};

export default List;
