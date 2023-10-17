import Login from "./login/login";
import './styles.css'
import {createTheme, ThemeProvider} from "@mui/material";
import {Route, Routes} from "react-router-dom";
import Register from "./register/register";
import Account from "./components/Account";

const theme = createTheme({
  palette: {
    primary: {
      main: '#28B498',
    },
    secondary: {
      main: '#FFFFFF'
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/signup" element={<Register/>}/>
          <Route path="/account" element={
            <Account/>
          }/>
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
