import { PrivateRoutes, AuthRoutes } from "routes";
import { useRoutes } from 'react-router-dom';

const App: React.FC<{}>  = () =>  {
	const routes = useRoutes([PrivateRoutes, AuthRoutes]);
	
	return routes;
}

export default App;
