import "./index.css";
import MainContainer from "./components/mainContainer/MainContainer";
import Progress from "./components/progress/Progress";
import { Upload } from "./components/upload/Upload";

function App() {
	return (
		<section className="container">
			<MainContainer />
			<Upload />
			<Progress />
		</section>
	);
}

export default App;
