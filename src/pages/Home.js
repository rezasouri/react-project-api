import axios from "axios";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    fetch("http://localhost:3001/", {
      method: "GET",
    })
      .then((response) => {
        console.log("response: ", response);
        return response.json();
      })
      .then((responseJson) => {
        console.log("responseJson: ", responseJson);
      });
  }, []);
  
  // axios({
  //   url:"http://localhost:3001",
  //   method:"GET",
  //   // headers:{},
  //   // data:{}
  // }).then(response=>{
  //   console.log(response);
  // }).catch((e)=>{

  // }).finally(()=>{

  // })
  return <div>Home</div>;
};
export default Home;
