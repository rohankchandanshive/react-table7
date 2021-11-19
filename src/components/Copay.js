import React from 'react';
import PropTypes from 'prop-types';

class Copay extends React.PureComponent {
	static propTypes = {
		paymentData: PropTypes.object.isRequired
	};

	_getPaymentAmount() {
        // console.log("prop types",this.props)
		const { value } = this.props.value;
		let amountToPay = 'NA';

		if (value || value === 0) {
			amountToPay = '$' + value.toFixed(2);
		}

		return amountToPay;
	}

	// _getPaymentStatus() {
		// const { status, amount } = this.props.paymentData;

		// const statusForIcon = status || STATUS.PENDING;
		// const iconData = amount
		// 	? PAYMENT_STATUS_TO_ICON_DATA[statusForIcon]
		// 	: PAYMENT_STATUS_TO_ICON_DATA[STATUS.COMPLETE];

		// return <MfIcon type={iconData.type} color={iconData.color} />;
	// }

	render() {
		return (
			<div>
				<span>{this._getPaymentAmount()}</span>
			</div>
		);
	}
}

export default Copay;
