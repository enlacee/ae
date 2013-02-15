


function formValid(){
	var form = document.frmLead;

	if(submitForm(form)){ //AJAX

		//var objVehicle = new objVehicle();

		//console.log(form.elements[0]);
		//data  = document.frmLead.lms_vehicle_year[0];

		for(i=0;i<form.elements.length;i++){

			if(form.elements[i].type == "text"){ //checkbox

				var name = form.elements[i].name;
				console.log(name);
				console.log('lms_vehicle_make['+i+']');

				if(name == 'lms_vehicle_make['+i+']'){
					console.log(name);
					console.log("value ",form.elements[i].value);
				}

			}

		}




		//data = $('#frmLead').serialize();
//console.log(data);


		console.log('false');
		return false;
	}



	//-----------------------------------

}




function submitForm(form){
	var flag = false;
	if(form.ajax.checked){
		flag = true;
	}
	return flag;
}