import React, { Fragment } from 'react';
import { AppRoute } from './settings/routes';
import { ToastContainer } from 'react-toastify';

const App: React.FC = () => {
	return (
		<Fragment>
			<AppRoute />
			<ToastContainer
				autoClose={6000}
				hideProgressBar={true}
				newestOnTop
				closeOnClick
				rtl={false}
				draggable
				pauseOnHover
			/>
		</Fragment>
	);
};

export default App;
