import React from 'react';
import accounting from 'accounting';

export const NumberFormatMoney = ({ amount, className = 'fs-2', style }) => {
	const formattedAmount = accounting.formatMoney(amount === Infinity ? 0 : amount, {
		symbol: '',
		precision: 2,
		thousand: ',',
		decimal: '.',
		format: '%s%v',
	});

	return (
		<span className={`${className} ${amount === 0 && 'text-gray'}`} style={style}>
			{formattedAmount}
		</span>
	);
};
