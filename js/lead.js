

/**
*	Objectos Lead
*	FreeWay
*	@anbcopitan
*   2013-02-15
**
*/

//Ojo al pasar objh json todo =
// Lead Basico
	Objlead = function(){

		this.lms_type = 1,
		this.lms_ip ='',
		this.lms_mediacode = '',
		this.lms_subject = '',
		this.lms_gender = '',
		this.lms_firstname = '',
		this.lms_lastname = '',
		this.lms_email ='',
		this.lms_zipcode ='',
		this.lms_phone ='',
		this.lms_tracking='',
		//set
		this.lms_type = function(lms_type){
			this.lms_type = lms_type;
		}
		this.setlms_ip = function(lms_ip){
			this.lms_ip = lms_ip;
		}
		this.setlms_mediacode = function(lms_mediacode){
			this.lms_mediacode = lms_mediacode;
		}
		this.setlms_subject = function(lms_subject){
			this.lms_subject = lms_subject;
		}
		this.setlms_gender = function(lms_gender){
			this.lms_gender = lms_gender;
		}
		this.setlms_firstname = function(lms_firstname){
			this.lms_firstname = lms_firstname;
		}
		this.setlms_lastname = function(lms_lastname){
			this.lms_lastname = lms_lastname;
		}
		this.setlms_email = function(lms_email){
			this.lms_email = lms_email;
		}
		this.setlms_zipcode = function(lms_zipcode){
			this.lms_zipcode = lms_zipcode;
		}
		this.setlms_phone = function(lms_phone){
			this.lms_phone = lms_phone;
		}
		this.setlms_tracking = function(lms_tracking){
			this.lms_tracking = lms_tracking;
		}
	}
// Lead Complejo

// vehicle
objVehicle = function(){

	this.lms_vehicle_year = '',
	this.lms_vehicle_make = '',
	this.lms_vehicle_model = '',
	this.lms_vehicle_submodel = '',
	this.lms_vehicle_use = '',
	this.lms_vehicle_mileage = '',
	this.lms_vehicle_status = '',
	//set
	this.setlms_vehicle_year = function(lms_vehicle_year){
		this.lms_vehicle_year = lms_vehicle_year;
	},
	this.setlms_vehicle_make = function(lms_vehicle_make){
		this.lms_vehicle_make = lms_vehicle_make;
	},
	this.setlms_vehicle_model = function(lms_vehicle_model){
		this.lms_vehicle_model = lms_vehicle_model;
	},
	this.setlms_vehicle_submodel = function(lms_vehicle_submodel){
		this.lms_vehicle_submodel = lms_vehicle_submodel;
	},
	this.setlms_vehicle_use = function(lms_vehicle_use){
		this.lms_vehicle_use = lms_vehicle_use;
	},
	this.setlms_vehicle_mileage = function(lms_vehicle_mileage){
		this.lms_vehicle_mileage = lms_vehicle_mileage;
	},
	this.setlms_vehicle_status = function(lms_vehicle_status){
		this.lms_vehicle_status = lms_vehicle_status;
	}
}

// driver
objDriver = function(){

	this.lms_driver_relationship_applicant = '',
	this.lms_driver_gender = '',
	this.lms_driver_firstname = '',
	this.lms_driver_lastname = '',
	this.lms_driver_phone = '',
	this.lms_driver_mail = '',
	this.lms_driver_birthdate = '',
	this.lms_driver_maritalstatus = '',
	this.lms_driver_licensed = '',
	this.lms_driver_experienceyear = '',
	this.lms_driver_experiencemonth = '',
	//set
	this.setlms_driver_relationship_applicant = function(lms_driver_relationship_applicant){
		this.lms_driver_relationship_applicant = lms_driver_relationship_applicant;
	},
	this.setlms_driver_gender = function(lms_driver_gender){
		this.lms_driver_gender = lms_driver_gender;
	},
	this.setlms_driver_firstname = function(lms_driver_firstname){
		this.lms_driver_firstname = lms_driver_firstname;
	},
	this.setlms_driver_lastname = function(lms_driver_lastname){
		this.lms_driver_lastname = lms_driver_lastname;
	},
	this.setlms_driver_phone = function(lms_driver_phone){
		this.lms_driver_phone = lms_driver_phone;
	},
	this.setlms_driver_mail = function(lms_driver_mail){
		this.lms_driver_mail = lms_driver_mail;
	},
	this.setlms_driver_birthdate = function(lms_driver_birthdate){
		this.lms_driver_birthdate = lms_driver_birthdate;
	},
	this.setlms_driver_maritalstatus = function(lms_driver_maritalstatus){
		this.lms_driver_maritalstatus = lms_driver_maritalstatus;
	},
	this.setlms_driver_licensed = function(lms_driver_licensed){
		this.lms_driver_licensed = lms_driver_licensed;
	},
	this.setlms_driver_experienceyear = function(lms_driver_experienceyear){
		this.lms_driver_experienceyear = lms_driver_experienceyear;
	},
	this.setlms_driver_experiencemonth = function(lms_driver_experiencemonth){
		this.lms_driver_experiencemonth = lms_driver_experiencemonth;
	}

}

//coverage
objCoverage = function(){

	this.lms_coverage_bodily_injury_liability = '',
	this.lms_coverage_property_damage_liability = '',
	this.lms_coverage_uninsured_motorist_bodily_injury = '',
	this.lms_coverage_uninsured_motorist_property_demage = radio = '',
	this.lms_coverage_medical_payments = '',
	this.lms_coverage_roadside_assistance_program = '',
	this.lms_coverage_comprehensive = '',
	this.lms_coverage_colission = '',
	this.lms_coverage_colission_deductible_waiver = '',
	this.lms_coverage_rental_reimbursement = '',
	this.lms_coverage_towing = '',
	this.lms_coverage_insurance_carrier = '',
	this.lms_coverage_insurance_limits = '',
	this.lms_coverage_insurance_renewal_date = '',
	//set
	this.setlms_coverage_bodily_injury_liability = function(lms_coverage_bodily_injury_liability){
		this.lms_coverage_bodily_injury_liability = lms_coverage_bodily_injury_liability;
	},
	this.setlms_coverage_property_damage_liability = function(lms_coverage_property_damage_liability){
		this.lms_coverage_property_damage_liability = lms_coverage_property_damage_liability;
	},
	this.setlms_coverage_uninsured_motorist_bodily_injury = function(lms_coverage_uninsured_motorist_bodily_injury){
		this.lms_coverage_uninsured_motorist_bodily_injury = lms_coverage_uninsured_motorist_bodily_injury;
	},
	this.setlms_coverage_uninsured_motorist_property_demage = function(lms_coverage_uninsured_motorist_property_demage){
		this.lms_coverage_uninsured_motorist_property_demage = lms_coverage_uninsured_motorist_property_demage;
	},
	this.setlms_coverage_medical_payments = function(lms_coverage_medical_payments){
		this.lms_coverage_medical_payments = lms_coverage_medical_payments;
	},
	this.setlms_coverage_roadside_assistance_program = function(lms_coverage_roadside_assistance_program){
		this.lms_coverage_roadside_assistance_program = lms_coverage_roadside_assistance_program;
	},
	this.setlms_coverage_comprehensive = function(lms_coverage_comprehensive){
		this.lms_coverage_comprehensive = lms_coverage_comprehensive;
	},
	this.setlms_coverage_colission = function(lms_coverage_colission){
		this.lms_coverage_colission = lms_coverage_colission;
	},
	this.setlms_coverage_colission_deductible_waiver = function(lms_coverage_colission_deductible_waiver){
		this.lms_coverage_colission_deductible_waiver = lms_coverage_colission_deductible_waiver;
	},
	this.setlms_coverage_rental_reimbursement = function(lms_coverage_rental_reimbursement){
		this.lms_coverage_rental_reimbursement = lms_coverage_rental_reimbursement;
	},
	this.setlms_coverage_towing = function(lms_coverage_towing){
		this.lms_coverage_towing = lms_coverage_towing;
	},
	this.setlms_coverage_insurance_carrier = function(lms_coverage_insurance_carrier){
		this.lms_coverage_insurance_carrier = lms_coverage_insurance_carrier;
	},
	this.setlms_coverage_insurance_limits = function(lms_coverage_insurance_limits){
		this.lms_coverage_insurance_limits = lms_coverage_insurance_limits;
	},
	this.setlms_coverage_insurance_renewal_date = function(lms_coverage_insurance_renewal_date){
		this.lms_coverage_insurance_renewal_date = lms_coverage_insurance_renewal_date;
	}
}