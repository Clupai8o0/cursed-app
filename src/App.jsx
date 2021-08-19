import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/navbar";
import Footer from "./components/footer";
import Loading from "./pages/loading";
import "./sass/styles.scss";

const HomePage = lazy(() => import("./pages/homepage"));
const NotFound = lazy(() => import("./pages/notFound"));
const Adventures = lazy(() => import("./pages/adventures"));

function App() {
	return (
		<div className={`max-container`}>
			<Router>
				<Suspense fallback={<Loading />}>
					<NavBar />
					<Switch>
						<Route exact path="/" component={HomePage} />
						<Route path="/adventures" component={Adventures} />
						<Route component={NotFound} />
					</Switch>
					<Footer />
				</Suspense>
			</Router>
		</div>
	);
}

export default App;
