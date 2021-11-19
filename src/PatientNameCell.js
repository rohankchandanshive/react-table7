import PropTypes from 'prop-types';
import React from 'react';

class PatientNameCell extends React.PureComponent {
	static propTypes = {
		appointment: PropTypes.object.isRequired
	};
    
	_generatePatientNameFromAppointment() {
        
		const { appointment } = this.props;
        console.log("patient",appointment);
		return appointment.patientDemographics;
	}

	render() {
		return <span>{this._generatePatientNameFromAppointment()}</span>;
	}
}

export default PatientNameCell;
