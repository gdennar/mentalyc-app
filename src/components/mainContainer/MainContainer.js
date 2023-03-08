import React from "react";
import classes from "./MainContainer.module.css";
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import logo from "../../assets/mentalyc-logo.png";
import { AiOutlineQuestionCircle } from "react-icons/ai";


const MainContainer = () => {
	return (
		<>
			<header>
				<AppBar position="static">
					<Container maxWidth="xl">
						<Toolbar disableGutters>
							<img src={logo} alt="mentalyc logo" className={classes.logo}/>
						</Toolbar>
					</Container>
				</AppBar>
			</header>
			<main>
				<Container maxWidth="xl">
					<div className={classes.entry}>
						<p className={classes.text}>Hi, Maria</p>
						<AiOutlineQuestionCircle
							style={{ color: "#731054", width: "24px", height: "24px" }}
						/>
					</div>

					<h3>Upload your sessions's recordings</h3>
				</Container>
			</main>
		</>
	);
};

export default MainContainer;
