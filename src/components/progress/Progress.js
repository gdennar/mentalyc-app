import { Container } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import classes from "./Progress.module.css";
import { RiDeleteBinLine } from "react-icons/ri";
import AppContext from "../../store/app-context";

function Progress() {
	const { selectedList } = useContext(AppContext);
	return (
		<section className={classes.progress}>
			<Container maxWidth="xl">
				<div className={classes.progressList}>
					<span className={classes.listText}>
						<span className={classes.listNumber}>{selectedList.length}</span>
						{selectedList.length > 1
							? " Notes in progress"
							: " Note in progress"}
					</span>
				</div>
				<table>
					<thead>
						<tr>
							<th>Client</th>
							<th>Type</th>
							<th>ETA</th>
							<th></th>
						</tr>
					</thead>
					<tbody>
						{selectedList.map((list) => (
							<TableRow key={list.id} data={list} />
						))}
					</tbody>
				</table>
			</Container>
		</section>
	);
}

const TableRow = ({ data }) => {
	const [uploadProgress, setUploadProgress] = useState(0);
	const { deleteInputHandler } = useContext(AppContext);

	useEffect(() => {
		const interval = setInterval(() => {
			setUploadProgress((prevProgress) => {
				if (prevProgress >= 100) {
					clearInterval(interval);
					deleteInputHandler(data.id);
					return 0;
				} else {
					return prevProgress + (Math.floor(Math.random() * 5) + 1);
				}
			});
		}, 1000);

		return () => clearInterval(interval);
	}, [uploadProgress]);

	const deleteHandler = (id) => {
		deleteInputHandler(id);
	};

	return (
		<tr>
			<td className={classes.dataCLient}>{data.client}</td>
			<td className={classes.dataType}>{data.type}</td>
			<td>
				<div className={classes.progressBar}>
					<div
						className={classes.progressFill}
						style={{ width: `${uploadProgress}%` }}
					></div>
				</div>
			</td>
			<td className={classes.iconCell}>
				<RiDeleteBinLine
					onClick={() => deleteHandler(data.id)}
					style={{ color: "#FF6079", fontSize: "1.3rem" }}
				/>
			</td>
		</tr>
	);
};

export default Progress;
