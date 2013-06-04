// JavaScript Document

function cearCookie(nombre, valor, caducidad){
  document.cookie= nombre + "=" + escape(valor)
		//+ (( caducidad==null ) ? "" : ("; expires=" + caducidad.toGMTString()))+
                + (( caducidad==null ) ? "" : ("; expires=" + caducidad))+
		  (( true ) ? ";path=" + "/" : "" )
}

function leerCookie(nombre) {
  
	var buscamos= nombre + "=";//Tracking

	if(document.cookie.length > 0){
      i = document.cookie.indexOf(buscamos);
      
  		if( i!=-1 ){
    		i+= buscamos.length;  //22
    		j= document.cookie.indexOf(";", i);
    		if( j==-1 )	j= document.cookie.length;
    		return unescape(document.cookie.substring(i, j));
  		}
	}else{
    return false;
  }

}

// Lee o crea tracking
var cargarPag = function (){
  var temp='';
  var pag_ant;
  var dias = 30; //dÃ­as a los que caduca la cookie

	if(leerCookie("Tracking")==false){
      //console.log("NO ENCONTRO NADA TRAKING");
      var cad = new Date(new Date().setTime(new Date().getTime()+dias*24*60*60*1000)); // 30 days
      var fexp = cad.toGMTString();

		if(document.referrer == ""){      
      temp += 'http://';
      temp += '-URL='+document.location;
      temp += '-COOKF='+hoy();
      temp += '-EXPIRATEDATE='+fexp;
      temp += '||';
		}else {
      temp += document.referrer;
      temp += '-URL='+document.location;
      temp += '-COOKF='+hoy();
      temp += '-EXPIRATEDATE='+fexp;
      temp += '||';
		}
    //console.log('temp',temp);
		cearCookie("Tracking",temp,fexp);

	}else{
    //console.log("ENCONTRO TRAKING");

    var cooarray = unescape(leerCookie("Tracking")).split('||');
    track = unescape(cooarray[cooarray.length-2]).split('-COOKF=');

    // console.log('trackkkk for split',track);
    // console.log('track[1]',track[1]);

    cookf = track[1].split('-EXPIRATEDATE=');

    if(cookf[0]!=hoy()){
        var urltot="";
        var p="";
        for(var i=0;i<cooarray.length-1;i++){         
         p1=unescape(cooarray[i]).split('-EXPIRATEDATE=');
         urltot+=p1[0]+"||";         
        }
        if(document.referrer != ""){
          temp=urltot+document.referrer+"-URL="+document.location+"-COOKF="+hoy()+"-EXPIRATEDATE="+cookf[1]+"||";
        }else{
          temp=urltot+document.location+"-COOKF="+hoy()+"-EXPIRATEDATE="+cookf[1]+"||";
        }

    }else{
        var urltot="";
        var p="";
        for(var i=0;i<cooarray.length-2;i++){
         p1=unescape(cooarray[i]).split('-EXPIRATEDATE=');
         urltot+=p1[0]+"||";
       }
        temp=urltot+track[0]+"-URL="+document.location+"-COOKF="+cookf[0]+"-EXPIRATEDATE="+cookf[1]+"||";
    }
		cearCookie("Tracking",temp,cookf[1]);
	}
}

var cargar = function(){
    if(leerCookie("Tracking")){
      document.getElementById('tracking_url').value = leerCookie("Tracking");
    }
}

// function setCookieGratis(){
// 	//alert(leerCookie("InfoGratis"))
// 	if(leerCookie("InfoGratis")=="" || leerCookie("InfoGratis")==undefined){
// 		//var ahora=new Date();
// 		//var manana=new Date(ahora.getTime()+1000*60*60*24)
// 		//cearCookie("InfoGratis","losDefensores",manana);
// 		//document.getElementById('nuevo').value="1";
// 	}else{
// 		//alert("Entro");
// 		document.getElementById('nuevo').value="0";
// 	}
// 	//cearCookie("Tracking","",null);
// }


// function setCookieInformation(){
// 	if(leerCookie("Info1800")=="" || leerCookie("Info1800")==undefined){
// 		//var ahora=new Date();
// 		//var manana=new Date(ahora.getTime()+1000*60*60*24)
// 		//cearCookie("Info1800","www.1800thelaw2.com",manana);
// 		//document.getElementById('new').value="1";
// 	}else{
// 		document.getElementById('new').value="0";
// 	}
// 	//cearCookie("Tracking","",null);
// }



function hoy(){
    var f = new Date();
    dia = f.getDate();
    mes = f.getMonth() +1;
    anno = f.getFullYear();

    if (dia <10) dia = "0" + dia;
    if (mes <10) mes = "0" + mes;
    fechaHoy = dia + "/" + mes + "/" + anno;
    return fechaHoy;
}