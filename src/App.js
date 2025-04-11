import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Homepage from './Pages/Homepage';
import CoinPage from './Pages/CoinPage';
import { makeStyles } from '@material-ui/core';
import CryptoContext from './CryptoContext'; 
const useStyles = makeStyles(() => ({
  App: {
    backgroundColor: "#14161a",
    color: "white",
    minHeight: "100vh",
  },
}));

function App() {
  const classes = useStyles();

  return (
    <CryptoContext> 
      <div className={classes.App}>
        <BrowserRouter>
          <Header />
          <Route exact path="/" component={Homepage} />
          <Route exact path="/coins/:id" component={CoinPage} />
        </BrowserRouter>
      </div>
    </CryptoContext>
  );
}

export default App;
