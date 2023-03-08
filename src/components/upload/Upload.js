import React, { useContext, useState } from "react";
import Button from "@mui/material/Button";
import classes from "./Upload.module.css";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import AppContext from "../../store/app-context";
import { Alert } from "@mui/material";

const style = {
	position: "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	width: 650,
	heigth: 424,
	bgcolor: "#fff",
	boxShadow: 24,
	borderRadius: "16px",
	p: 4,
};

export const Upload = () => {
	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	return (
		<section className={classes.upload}>
			<Container maxWidth="xl">
				<Button
					variant="contained"
					className={classes.uploadButton}
					onClick={handleOpen}
				>
					Upload
				</Button>
				<ModalBox open={open} handleClose={handleClose} />
			</Container>
		</section>
	);
};

export const ModalBox = ({ open, handleClose }) => {
	const [selectedValue, setSelectedValue] = useState("");
	const [clientName, setClientName] = useState("");
	const [isOpen, setIsOpen] = useState(false);
	const [error, setError] = useState("");

	const { uploadHandler, selectedList } = useContext(AppContext);

	const handleSelectInput = () => {
		setIsOpen(isOpen ? false : true);
	};

	const submitHandler = (e) => {
		if (clientName.length === 0 || selectedValue.length === 0) {
			setError("Kindly input valid details");
			return;
		}
		e.preventDefault();
		const newData = {
			id: Date.now(),
			client: clientName,
			type: selectedValue,
		};
		uploadHandler(newData);
		setClientName("");
		handleClose();

		console.log(selectedList);
	};

	return (
		<div>
			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<Box sx={style} className={classes.modalBox}>
					<div className={classes.modalHeader}>
						<span onClick={handleClose}>&#10060;</span>
						{error ? (
							<Alert
								severity="error"
								className="centered"
								sx={{ mt: "1rem" }}
								onClose={() => setError("")}
							>
								{error}
							</Alert>
						) : (
							""
						)}
						<h3>Complete Your Upload</h3>
						<p>Fill in the details below to complete your upload </p>
					</div>
					<form>
						<div>
							<select
								required
								name="upload"
								id="upload"
								value={selectedValue}
								onChange={(e) => setSelectedValue(e.target.value)}
								onClick={handleSelectInput}
								className={isOpen ? classes.selectClose : classes.selectOpen}
							>
								<option value="" disabled>
									Select note type
								</option>
								<option value="Progress note">Progress note 80-left </option>
								<option value="Soap note">Soap note 80-left</option>
								<option value="EMDR ote">EMDR note 80-left</option>
								<option value="Couples therapy">
									Couples therapy note 80-left
								</option>
								<option value="Family therapy">
									Family therapy note 80-left
								</option>
							</select>
						</div>

						<div>
							<input
								required
								type="text"
								placeholder="Enter client name"
								value={clientName}
								onChange={(e) => setClientName(e.target.value)}
							/>
						</div>
						<div className={classes.buttonContainer}>
							<Button
								variant="contained"
								className={classes.submitButton}
								onClick={submitHandler}
								disabled={isOpen}
							>
								Finish Upload
							</Button>
						</div>
					</form>
				</Box>
			</Modal>
		</div>
	);
};
