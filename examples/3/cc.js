function normalize( num ) {
	return ( num + "" ).replace( /[\s+|\.|\-]/g, "" );
}

function getBrand( num ) {
	if ( num.match( /^4\d{3}-?\d{4}-?\d{4}-?\d{4}$/ ) ) {
		return "VISA";
	} else if ( num.match( /^5[1-5]\d{2}-?\d{4}-?\d{4}-?\d{4}$/ ) ) {
		return "MASTERCARD";
	} else if ( num.match( /^3[4,7]\d{13}$/ ) ) {
		return "AMEX";
	} else if ( num.match( /^3[0,6,8]\d{12}$/ ) ) {
		return "DINERS";
	} else if ( num.match( /^(606282\d{10}(\d{3})?)|(3841\d{15})$/ ) ) {
		return "HIPERCARD";
	}
}