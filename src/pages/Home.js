import { Button, Container, Grid, TextField, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import Item from "../components/item";

const Home = () => {
  // const controller = new AbortController();
  const [data, setData] = useState([]);
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const [errors, setErrors] = useState([]);
  const [disabled, setDisabled] = useState(false);
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
  let status;
  const add = () => {
    setDisabled(true);
    console.log(image, title, price);
    fetch("http://localhost:3001/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        image: image,
        title: title,
        price: price,
      }),
    })
      .then((response) => {
        status = response.status;
        return response.json();
      })
      .then((responseJson) => {
        if (status === 201) {
          setData(responseJson.data);
        } else if (status === 400) {
          setErrors(responseJson.errors);
        }
        setDisabled(false);
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
      <Grid container style={{ margin: 20 }}>
        <Typography style={{ margin: 20 }}>اضافه کردن عکس جدید</Typography>
        <TextField
          value={image}
          onChange={(e) => setImage(e.target.value)}
          style={{ margin: 20 }}
          label="تصویر"
          variant="outlined"
        />
        <TextField
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={{ margin: 20 }}
          label="عنوان"
          variant="outlined"
        />
        <TextField
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          style={{ margin: 20 }}
          label="قیمت"
          variant="outlined"
        />
        <Button
          disabled={disabled}
          onClick={add}
          variant="contained"
          style={{ margin: 20, width: "100px" }}
        >
          ارسال
        </Button>
      </Grid>
      {errors.map((e) => (
        <li key={e.key}>
          {e.key}:{e.errorText}
        </li>
      ))}
    </Container>
  );
};
export default Home;
