import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ScrollToTop from './components/scrollToTop'
import injectContext from './store/appContext';
import './styles/details.css'

// Views
import DebugMenu from './views/DebugMenu';
import CDetails from './views/Character-details';
import PDetails from './views/Planet-details';
import VDetails from './views/Vehicle-details';
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
						<Route exact path="/character-details/:entityId" element={<CDetails />}></Route>
						<Route exact path="/planet-details/:entityId" element={<PDetails />}></Route>
						<Route exact path="/vehicle-details/:entityId" element={<VDetails />}></Route>
						<Route exact path="/Debug-menu" element={<DebugMenu />}></Route>
					</Routes>
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
