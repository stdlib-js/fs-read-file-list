/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var tape = require( 'tape' );
var proxyquire = require( 'proxyquire' );
var IS_BROWSER = require( '@stdlib/assert-is-browser' );
var readFile = require( '@stdlib/fs-read-file' ).sync;
var noop = require( '@stdlib/utils-noop' );
var readFileList = require( './../lib/async.js' );


// VARIABLES //

// Don't run tests in the browser...for now...
var opts = {
	'skip': IS_BROWSER // FIXME
};


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof readFileList, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns an error if not provided a string array', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		NaN,
		null,
		true,
		void 0,
		[],
		[ 'beep', null ],
		{},
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			readFileList( value, noop );
		};
	}
});

tape( 'the function returns an error if not provided a string array (options)', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		NaN,
		null,
		true,
		void 0,
		[],
		[ 'beep', null ],
		{},
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			readFileList( value, {}, noop );
		};
	}
});

tape( 'the function returns an error if provided a callback argument which is not a function', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		NaN,
		null,
		true,
		void 0,
		[],
		{}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			readFileList( [ 'beep' ], value );
		};
	}
});

tape( 'the function returns an error if provided a callback argument which is not a function (options)', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		NaN,
		null,
		true,
		void 0,
		[],
		{}
	];
	t.end();

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	function badValue( value ) {
		return function badValue() {
			readFileList( [ 'beep' ], {}, value );
		};
	}
});

tape( 'the function reads the entire contents of each file in a file list', opts, function test( t ) {
	var expected;

	expected = [
		{
			'file': __filename,
			'data': readFile( __filename )
		},
		{
			'file': __filename,
			'data': readFile( __filename )
		}
	];
	readFileList( [ __filename, __filename ], onFiles );

	function onFiles( error, actual ) {
		if ( error ) {
			t.ok( false, error.message );
		}
		t.deepEqual( expected, actual, 'returns file contents' );

		t.end();
	}
});

tape( 'the function reads the contents of each file in a file list using provided options (string)', opts, function test( t ) {
	var expected;

	expected = [
		{
			'file': __filename,
			'data': readFile( __filename, 'utf8' )
		}
	];
	readFileList( [ __filename ], 'utf8', onFiles );

	function onFiles( error, actual ) {
		if ( error ) {
			t.ok( false, error.message );
		}
		t.deepEqual( expected, actual, 'returns file contents' );
		t.end();
	}
});

tape( 'the function reads the contents of each file in a file list using provided options (object)', opts, function test( t ) {
	var expected;

	expected = [
		{
			'file': __filename,
			'data': readFile( __filename, {
				'encoding': 'utf8'
			})
		}
	];
	readFileList( [ __filename ], {
		'encoding': 'utf8'
	}, onFiles );

	function onFiles( error, actual ) {
		if ( error ) {
			t.ok( false, error.message );
		}
		t.deepEqual( expected, actual, 'returns file contents' );
		t.end();
	}
});

tape( 'if the function encounters an error, the function returns the error', opts, function test( t ) {
	readFileList( [ 'beepboopbapbop' ], onFiles );

	function onFiles( error ) {
		t.equal( error instanceof Error, true, 'returns an error: '+error.message );

		t.end();
	}
});

tape( 'if the function encounters an error, the function returns the error (string options)', opts, function test( t ) {
	readFileList( [ 'beepboopbapbop' ], 'utf8', onFiles );

	function onFiles( error ) {
		t.equal( error instanceof Error, true, 'returns an error: '+error.message );
		t.end();
	}
});

tape( 'if the function encounters an error, the function returns the error (object options)', opts, function test( t ) {
	readFileList( [ 'beepboopbapbop' ], {
		'encoding': 'utf8'
	}, onFiles );

	function onFiles( error ) {
		t.equal( error instanceof Error, true, 'returns an error: '+error.message );
		t.end();
	}
});

tape( 'if the function encounters an error indicating too many files are open, the function will retry reading a file', opts, function test( t ) {
	var readFileList;
	var expected;
	var count;

	count = 0;
	readFileList = proxyquire( './../lib/async.js', {
		'@stdlib/fs-read-file': read
	});

	expected = [
		{
			'file': __filename,
			'data': readFile( __filename )
		},
		{
			'file': __filename,
			'data': readFile( __filename )
		}
	];

	readFileList( [ __filename, __filename ], onFiles );

	function read() {
		var clbk;
		var flg;

		clbk = arguments[ arguments.length-1 ];

		count += 1;
		flg = count % 2;
		if ( count < 8 ) {
			setTimeout( onError, 0 );
		} else {
			setTimeout( onRead, 0 );
		}

		function onError() {
			var err;
			if ( flg ) {
				err = new Error( 'Too many files open in the current process.' );
				err.code = 'EMFILE';
			} else {
				err = new Error( 'Too many files open across entire system.' );
				err.code = 'ENFILE';
			}
			clbk( err );
		}

		function onRead() {
			clbk( null, readFile( __filename ) );
		}
	}

	function onFiles( error, actual ) {
		if ( error ) {
			t.ok( false, error.message );
		}
		t.deepEqual( expected, actual, 'returns file contents' );
		t.end();
	}
});

tape( 'if the function exceeds the maximum number of retries, the function returns an error', opts, function test( t ) {
	var readFileList = proxyquire( './../lib/async.js', {
		'@stdlib/fs-read-file': read,
		'./config.json': {
			'max_retries': 10,
			'max_delay': 5
		}
	});

	readFileList( [ __filename, __filename ], onFiles );

	function read() {
		var clbk = arguments[ arguments.length-1 ];

		setTimeout( onError, 0 );

		function onError() {
			var err = new Error( 'Too many files open in the current process.' );
			err.code = 'EMFILE';
			clbk( err );
		}
	}

	function onFiles( error ) {
		if ( error ) {
			t.ok( true, error.message );
		} else {
			t.ok( false, 'expected an error' );
		}
		t.end();
	}
});

tape( 'the function returns the first encountered error', opts, function test( t ) {
	var readFileList;
	var count;
	var list;

	readFileList = proxyquire( './../lib/async.js', {
		'@stdlib/fs-read-file': read
	});
	count = 0;

	list = [
		__filename,
		__filename,
		__filename,
		__filename,
		__filename,
		__filename,
		__filename,
		__filename,
		__filename
	];
	readFileList( list, onFiles );

	function read() {
		var clbk = arguments[ arguments.length-1 ];

		count += 1;
		if ( count > 1 ) {
			setTimeout( onError, 0 );
		} else {
			setTimeout( onRead, count*5 );
		}

		function onError() {
			clbk( new Error( 'beep' ) );
		}

		function onRead() {
			clbk( null, readFile( __filename ) );
		}
	}

	function onFiles( error ) {
		if ( error ) {
			t.ok( true, error.message );
		} else {
			t.ok( false, 'expected an error' );
		}
		t.end();
	}
});
