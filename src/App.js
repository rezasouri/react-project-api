import "./App.css";
import { create } from "jss";
import rtl from "jss-rtl";
import { StylesProvider, ThemeProvider, jssPreset } from "@mui/styles";
import theme from "./themes/theme";
import Ouroutes from "./routes";

// Configure JSS
const jss = create({
  plugins: [...jssPreset().plugins, rtl()],
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <StylesProvider jss={jss}>
        <Ouroutes />
      </StylesProvider>
    </ThemeProvider>
  );
}

export default App;
