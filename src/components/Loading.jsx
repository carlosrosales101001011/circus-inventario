import React from 'react';
import { ProgressSpinner } from 'primereact/progressspinner';
import { Modal } from 'react-bootstrap';

export const Loading = ({ show }) => {
	return (
		<Modal show={show} size='sm' centered>
			<ProgressSpinner />
		</Modal>
	);
};
