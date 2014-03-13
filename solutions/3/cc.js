function normalize( num ) {
	return ( num + "" ).replace( /[\s+|\.|\-]/g, "" );
}

function getBrand( num ) {
	var brand,
		brands = {
			VISA: /^4\d{3}-?\d{4}-?\d{4}-?\d{4}$/,
			MASTERCARD: /^5[1-5]\d{2}-?\d{4}-?\d{4}-?\d{4}$/,
			AMEX: /^3[4,7]\d{13}$/,
			DINERS: /^3[0,6,8]\d{12}$/,
			HIPERCARD: /^(606282\d{10}(\d{3})?)|(3841\d{15})$/
		};

	creditCardNumber = normalize( num );

	for ( brand in brands ) {
		if ( brands.hasOwnProperty( brand ) &&
				num.match( brands[ brand ] ) ) {
			return brand;
		}
	}
}