import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import React from "react";
import ReactDOM from "react-dom";
import { ConfigProvider, Switch } from "antd";
import faIR from "antd/es/locale/fa_IR";
import "assets/styles/general.scss";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

ReactDOM.render(
	<React.StrictMode>
			<ConfigProvider locale={faIR} direction="rtl">
				<BrowserRouter>
					<App />					
				</BrowserRouter>
			</ConfigProvider>
	</React.StrictMode>,
	document.getElementById("root")
);

serviceWorkerRegistration.register();