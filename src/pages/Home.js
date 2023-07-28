import { common } from "@mui/material/colors";
import axios from "axios";
import { useEffect } from "react";

const Home = () => {
  const controller = new AbortController();
  // useEffect(() => {
  //   fetch("http://localhost:3001/", {
  //     method: "GET",
  //     signal: controller.signal,
  //   })
  //     .then((response) => {
  //       console.log("response: ", response);
  //       return response.json();
  //     })
  //     .then((responseJson) => {
  //       console.log("responseJson: ", responseJson);
  //     });
  // }, []);
  setTimeout(() => {
    controller.abort();
  }, 3000);

  axios({
    url: "http://localhost:3001",
    method: "GET",
    timeout: 3000,
    timeoutErrorMessage: "error",
    // headers:{},
    // data:{}
  })
    .then((response) => {
      console.log(response);
    })
    .catch((e) => {})
    .finally(() => {});
  return <div>Home</div>;
};
export default Home;
