import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Routes, Route, useNavigate, Link } from "react-router-dom";
import { styled } from '@mui/material/styles';
import Login from './component/Login';
import UserSignPage from './component/userSignPage';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import HomeIcon from '@mui/icons-material/Home';
import AddIcon from '@mui/icons-material/Add';
import SettingsIcon from '@mui/icons-material/Settings';
import { IconContext } from "react-icons";
import { CgChevronLeftO } from 'react-icons/cg';
import './App.css';
import styles from "./page.module.css";
import MainList from './component/MainList';
import zIndex from '@mui/material/styles/zIndex';




function App() {

  const [movies, setMovies] = useState([]);
  const [havemoney, sethavemoney] = useState(0)
  const [buyinfo, setbuyinfo] = useState([]);
  const [soldinfo, setsoldinfo] = useState([]);
  const navLogin = useNavigate();

  

  function addbuyinfo(newbought) {
    setbuyinfo([...buyinfo, newbought])
  }

  function addsoldinfo(newsold) {
    setsoldinfo([...soldinfo, newsold])
  }

  const [signeduserId, setsigneduserId] = useState([
    { accountName: 'a', password: '1', id: 'hash' },
  ]);

  const addMovie = (movie) => {
    setMovies([
      ...movies,
      movie
    ]);
  };

  const addUser = (user) => {
    setsigneduserId([
      ...signeduserId,
      user
    ]);
  };

  const additeminshop = (user) => {
  };

  const addcharge = (chargeamount) => {
    sethavemoney(havemoney + chargeamount)
  }

  const spendmoney = (spendamount) => {
    sethavemoney(havemoney - spendamount)
  }

  function goToMainPage() {
    console.log("main!")
    navLogin("/");
  }

  function goToLoginPage() {
    console.log("login!")
    navLogin("/login");
  }




  return (
      <div   className={styles.container}  >
        {/* <ButtonAppBar></ButtonAppBar> */}
        {/* <SimpleBottomNavigation></SimpleBottomNavigation> */}

        <div  style={{minHeight: "60px", minWidth: "2000px", backgroundColor: "white", display: "flex", position: "fixed"}}>
          <img   
            src='/assetss/full-logo.png'
            style={{maxHeight: "60px", maxWidth: "60px"}}
            onClick={goToMainPage}
          >
          </img>

          <img   
            src='/assetss/icon/icon-user.png'
            style={{maxHeight: "60px", maxWidth: "60px"}}
            onClick={goToLoginPage}
          >
          </img>
        </div>

        <br></br><br></br><br></br><br></br>

        <Routes>
          <Route path="/" element={<MainList   />} exact />
          <Route path="/login" element={<Login />} exact />
        </Routes>

        <SimpleBottomNavigation></SimpleBottomNavigation>
      </div>
  );
}


export function ButtonAppBar() {

  const navigate = useNavigate();

  return (

    <div  style={{minHeight: "100px"}}>
      <Box    style={{minHeight: "100px", minWidth: "600px", zIndex: 9999}}     sx={{ position: "fixed", flexGrow: 1 }}>
        {/* <span onClick={() => navigate("/")}>Picocon</span> */}
        {window.location.pathname === "/" ? "" :
          <div className="return">
            <IconContext.Provider value={{ color: "#000000", className: "global-class-name", size: "3em" }}>
              <CgChevronLeftO onClick={() => navigate(-1)} />
            </IconContext.Provider>
          </div>
        }
      </Box>
    </div>

  );
}

export function SimpleBottomNavigation() {
  const [value, setValue] = useState(0);

  let navigate = useNavigate();

  const changehandler = (event, newValue) => {
    navigate(newValue);
    setValue(newValue);

    // console.log("newValue : ", newValue);
  };

  return (
    <>
      <Box sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => changehandler(event, newValue)}
        >
          <BottomNavigationAction
            selected
            value="/"
            label="Home"
            icon={<HomeIcon />}
          />
          <BottomNavigationAction
            value="/search"
            label="Favorites"
            icon={<AddIcon />}
          ></BottomNavigationAction>
          <BottomNavigationAction
            
            icon={<SettingsIcon />}
          />
        </BottomNavigation>
      </Box>
    </>
  );
}




export default App;
