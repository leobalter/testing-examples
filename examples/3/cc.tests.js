QUnit.test( "normalize", function( assert ) {
	assert.strictEqual( normalize( 4111111111111111 ), "4111111111111111" );
	assert.strictEqual( normalize( "4111 1111 1111 1111" ), "4111111111111111" );
	assert.strictEqual( normalize( "4111-1111-1111-1111" ), "4111111111111111" );
	assert.strictEqual( normalize( "4111.1111.1111.1111" ), "4111111111111111" );
});

QUnit.test( "getBrand", function( assert ) {
	assert.strictEqual( getBrand( "5105105105105100" ), "MASTERCARD" );
	assert.strictEqual( getBrand( "341111111111111" ), "AMEX" );
	assert.strictEqual( getBrand( "3841001111222233334" ), "HIPERCARD" );
	assert.strictEqual( getBrand( "6062825607632328" ), "HIPERCARD" );

	assert.equal( getBrand( "2441111111111111" ), null);
});