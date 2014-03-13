// return a normalized CC number
function normalize( num ) {
	return ( num + "" ).replace( /[\s+]/g, "" );
}
