import React, { FunctionComponent } from "react";

import { HeaderLine } from '../components';

const App: FunctionComponent = props => (
	<>
		<HeaderLine />
		{props.children}
	</>
);

export default App;
