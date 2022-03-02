import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ScrollToTop from './components/scrollToTop'
import injectContext from './store/appContext';

// Views
import Details from './views/Details';
import Home from './views/Home';

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || '';

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Routes>
						<Route exact path="/" element={<Home />}></Route>
						<Route exact path="/Home" element={<Home />}></Route>
						<Route exact path="/Details" element={<Details />}></Route>
					</Routes>
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
