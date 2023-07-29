import { Grid, Typography } from "@mui/material";

const Item = ({ image, title, price }) => {
  return (
    <Grid item lg={4} style={{ padding: 10 }}>
      <img style={{ width: "100%" }} src={image} alt="dd" />
      <Typography variant="h6">{price}هزار تومان</Typography>
      <Typography variant="body1">{title}</Typography>
    </Grid>
  );
};
export default Item;
