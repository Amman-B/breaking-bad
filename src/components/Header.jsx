import { AppBar, Toolbar, Typography, Box, InputBase } from "@mui/material";
import logo from "../images/logo.png";
import { makeStyles } from "@mui/styles";
import SearchIcon from "@mui/icons-material/Search";

const useStyles = makeStyles({
  logo: {
    width: 120,
  },
  toolBar: {
    background: "linear-gradient(315deg, #63d471 0%, #233329 74%);",
    justifyContent: "center",
    padding: 10,
  },
  searchBar: {
    background: "grey",
    marginLeft: 30,
    borderRadius: 10,
    padding: "0px 10px",
    width: "30%",
  },
    searchBarInput: {
    marginLeft: 35,
  },
  searchIcon: {
    position: "absolute",
    marginLeft: 2,
    marginTop: 3,
  },
});

const Header = () => {
  const classes = useStyles();
  return (
    <>
      <AppBar position="static">
        <Toolbar className={classes.toolBar}>
          <img src={logo} alt="logo" className={classes.logo} />
          <Box className={classes.searchBar}>
            <Box>
              <SearchIcon className={classes.searchIcon} />
            </Box>
            <InputBase className={classes.searchBarInput} />
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;