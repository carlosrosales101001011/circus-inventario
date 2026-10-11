import React from 'react';
import ReactDOM from 'react-dom/client';
import { PrimeReactProvider } from 'primereact/api';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'primereact/resources/themes/lara-light-cyan/theme.css';
import 'primereact/resources/primereact.css';
import 'primeicons/primeicons.css';
import './styles.css';
import './locale';
import { ViewInventario } from './ViewInventario';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<PrimeReactProvider>
			<ViewInventario />
		</PrimeReactProvider>
	</React.StrictMode>
);
