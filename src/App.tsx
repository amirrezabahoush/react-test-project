import { PrivateRoutes, AuthRoutes } from "routes";
import { useRoutes } from 'react-router-dom';
import { ConfigContextProvider } from 'utils/configContext';
import { Switch } from "antd";
import { useState } from "react";

const App: React.FC<{}>  = () =>  {
	const routes = useRoutes([PrivateRoutes, AuthRoutes]);
	const [isPureMode, setIsPureMode] = useState(true);
	return (
		<ConfigContextProvider value={isPureMode}>
			{routes}
			<Switch 
				checkedChildren='antd' 
				unCheckedChildren='pure' 
				className='component-switcher'
				checked={isPureMode}
				onChange={e => setIsPureMode(e)}
			/>
		</ConfigContextProvider>
	);
}

export default App;
