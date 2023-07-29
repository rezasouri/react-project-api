import { Button, Grid, Typography } from "@mui/material";

const Item = ({ image, title, price, onDelete }) => {
  return (
    <Grid item lg={4} style={{ padding: 10, justifyContent: "center" }}>
      <div style={{ border: "1px solid #a1a1a1" }}>
        <img style={{ width: "100%", height: "300px" }} src={image} alt="dd" />
        <Typography variant="h6" style={{ textAlign: "center" }}>
          {price}هزار تومان
        </Typography>
        <Typography variant="body1" style={{ textAlign: "center" }}>
          {title}
        </Typography>
        <Button
          style={{ margin: "0 auto", display: "flex" }}
          variant="contained"
          onClick={onDelete}
        >
          حذف
        </Button>
      </div>
    </Grid>
  );
};
export default Item;
