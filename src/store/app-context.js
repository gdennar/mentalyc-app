import React, { createContext, useState } from "react";

const AppContext = createContext({
	uploadProgress: 0,
	uploadHandler: () => {},
});

export const AppContextProvider = (props) => {
	const [selectedList, setSelectedList] = useState([]);

	const uploadHandler = (newData) => {
		setSelectedList([...selectedList, newData]);
	};

	const deleteInputHandler = (id) => {
		const deleteInput = selectedList.filter((input) => input.id !== id);
		setSelectedList(deleteInput);
	};

	const values = {
		uploadHandler,
		deleteInputHandler,
		selectedList,
	};

	return (
		<AppContext.Provider value={values}>{props.children}</AppContext.Provider>
	);
};

export default AppContext;
