import React from 'react';
import PropTypes from 'prop-types';

class Insurance extends React.PureComponent {
	static propTypes = {
		paymentData: PropTypes.object.isRequired
	};

	_getInsuranceLength() {
        // console.log("prop types",this.props)
		const { value } = this.props.value;
		// console.log("prop types",value)
		// let amountToPay = 'NA';

		// if (value || value === 0) {
		// 	amountToPay = '$' + value.toFixed(2);
		// }

		return value.length;
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
				<span>{this._getInsuranceLength()}</span>
			</div>
		);
	}
}

export default Insurance;
