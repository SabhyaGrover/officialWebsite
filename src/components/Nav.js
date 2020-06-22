import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { Container } from "@material-ui/core";
import { Link, withRouter } from "react-router-dom";
import dsclogo from "../assets/dsc_logo.png";
import styled from "styled-components";
import "../components/styles/NavBar.css";
import Switch from "@material-ui/core/Switch";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import {
  orange,
  lightBlue,
  deepPurple,
  deepOrange
} from "@material-ui/core/colors";
const useStyles = makeStyles(theme => ({
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    display: "none",
    color: "#3C4858",
    [theme.breakpoints.up("sm")]: {
      display: "block"
    }
  },
  darkToggle: {
    width: 45,
    height: 23
  },
  sectionDesktop: {
    display: "none",

    [theme.breakpoints.up("md")]: {
      display: "flex"
    }
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none"
    }
  },
  button: {
    justifyContent: "space-between",
    fontSize: "1.2em",
    fontWeight: "300",
    textDecoration: "none",
    color: "black"
  },
  logo: {
    height: "30px",
    objectFit: "contain"
  }
}));

const NavAlt = props => {
  const [darkState, setDarkState] = useState(false);
  const palletType = darkState ? "dark" : "light";
  const mainPrimaryColor = darkState ? orange[500] : lightBlue[500];
  const mainSecondaryColor = darkState ? deepOrange[900] : deepPurple[500];
  const darkTheme = createMuiTheme({
    palette: {
      type: palletType,
      primary: {
        main: mainPrimaryColor
      },
      secondary: {
        main: mainSecondaryColor
      }
    }
  });
  const handleThemeChange = () => {
    setDarkState(!darkState);
  };
  window.onscroll = function() {
    if (props.location.pathname === "/") {
      scrollFunction();
    }
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > 0.08 ||
      document.documentElement.scrollTop > 0.08
    ) {
      document.getElementById("logo").style.display = "block";
      document.getElementById("text").style.display = "block";
    } else {
      document.getElementById("logo").style.display = "none";
      document.getElementById("text").style.display = "none";
    }
  }
  function noscrollfunction() {
    document.getElementById("logo").style.display = "block";
    document.getElementById("text").style.display = "block";
  }
  const classes = useStyles();
  useEffect(() => {
    if (props.location.pathname === "/") {
      scrollFunction();
    } else {
      noscrollfunction();
    }
  }, [props]);

  return (
    <ThemeProvider theme={darkTheme}>
      <div className={classes.grow}>
        <ResponsiveDiv>
          <AppBar
            position="fixed"
            style={{ backgroundColor: "white" }}
            id="appbar"
            className="fill"
          >
            <Container fixed>
              <Toolbar>
                <img
                  src={dsclogo}
                  alt="logo"
                  className={classes.logo}
                  id="logo"
                />
                <Typography
                  className={classes.title}
                  variant="h6"
                  noWrap
                  id="text"
                >
                  &nbsp; DSC TIET
                </Typography>

                <div className={classes.grow} />
                <div className={classes.sectionDesktop}>
                  <div style={{ paddingRight: "10px" }}>
                    <Link to="/" className={classes.button}>
                      Home
                    </Link>
                  </div>
                  <div style={{ paddingRight: "10px" }}>
                    <Link to="/events" className={classes.button}>
                      Events
                    </Link>
                  </div>
                  <div style={{ paddingRight: "10px" }}>
                    <Link to="/projects" className={classes.button}>
                      Projects
                    </Link>
                  </div>
                  <div style={{ paddingRight: "10px" }}>
                    <Link to="/team" className={classes.button}>
                      Team
                    </Link>
                  </div>
                  <div style={{ paddingRight: "10px" }}>
                    <Link
                      onClick={e => {
                        e.preventDefault();
                        window.location.href =
                          "https://medium.com/developer-student-clubs-tiet";
                      }}
                      target="_blank"
                      className={classes.button}
                    >
                      Blog
                    </Link>
                  </div>
                  <div style={{ paddingRight: "10px" }}>
                    <Link
                      onClick={e => {
                        e.preventDefault();
                        window.location.href = "https://raw-talent.webflow.io/";
                      }}
                      target="_blank"
                      className={classes.button}
                    >
                      Podcast
                    </Link>
                  </div>
                  <div className={classes.button}>
                    <Switch checked={darkState} onChange={handleThemeChange} />
                  </div>
                </div>
              </Toolbar>
            </Container>
          </AppBar>
        </ResponsiveDiv>
      </div>
    </ThemeProvider>
  );
};

const ResponsiveDiv = styled.div`
  @media only screen and (max-width: 1000px) {
    display: none;
  }
`;

export default withRouter(NavAlt);
