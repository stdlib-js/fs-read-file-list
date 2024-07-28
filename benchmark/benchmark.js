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

var bench = require( '@stdlib/bench-harness' );
var pkg = require( './../package.json' ).name;
var readFileList = require( './../lib' );


// VARIABLES //

var FILE_LIST = [
	__filename,
	__filename,
	__filename
];


// MAIN //

bench( pkg, function benchmark( b ) {
	var i;

	i = 0;
	b.tic();

	return next();

	function next() {
		i += 1;
		if ( i <= b.iterations ) {
			return readFileList( FILE_LIST, done );
		}
		b.toc();
		b.pass( 'benchmark finished' );
		b.end();
	}

	function done( error ) {
		if ( error ) {
			b.fail( error.message );
		}
		next();
	}
});

bench( pkg+':sync', function benchmark( b ) {
	var out;
	var i;

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		out = readFileList.sync( FILE_LIST );
		if ( out instanceof Error ) {
			b.fail( out.message );
		}
	}
	b.toc();
	if ( out instanceof Error ) {
		b.fail( 'something went wrong' );
	} else {
		b.pass( 'benchmark finished' );
	}
	b.end();
});
