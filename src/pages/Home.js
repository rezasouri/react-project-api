import { Container, Grid } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import Item from "../components/item";

const Home = () => {
  // const controller = new AbortController();
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3001/", {
      method: "GET",
      // signal: controller.signal,
    })
      .then((response) => {
        console.log("response: ", response);
        return response.json();
      })
      .then((responseJson) => {
        setData(responseJson.data);
      });
  }, []);
  const onDeleteClick = (id) => {
    axios.delete(`http://localhost:3001/delete?id=${id}`).then((response) => {
      if (response.status === 201) {
        setData(response.data.data);
      }
    });
  };

  // setTimeout(() => {
  //   controller.abort();
  // }, 3000);

  // axios({
  //   url: "http://localhost:3001",
  //   method: "GET",
  //   timeout: 3000,
  //   timeoutErrorMessage: "error",
  //   // headers:{},
  //   // data:{}
  // })
  //   .then((response) => {
  //     console.log(response);
  //   })
  //   .catch((e) => {})
  //   .finally(() => {});
  return (
    <Container maxWidth="lg">
      <Grid container style={{ marginTop: 20 }}>
        {data.map((item) => (
          <Item
            key={item.id}
            image={item.image}
            title={item.title}
            price={item.price}
            onDelete={() => onDeleteClick(item.id)}
          />
        ))}
      </Grid>
    </Container>
  );
};
export default Home;
