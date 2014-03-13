QUnit.test( "normalize", function( assert ) {
	assert.strictEqual( normalize( 4111111111111111 ), "4111111111111111" );
	assert.strictEqual( normalize( "4111 1111 1111 1111" ), "4111111111111111" );
	assert.strictEqual( normalize( "4111-1111-1111-1111" ), "4111111111111111" );
	assert.strictEqual( normalize( "4111.1111.1111.1111" ), "4111111111111111" );
});