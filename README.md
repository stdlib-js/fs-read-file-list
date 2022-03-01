<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# Read File List

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Read the entire contents of each file in a file list.

<section class="installation">

## Installation

```bash
npm install @stdlib/fs-read-file-list
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm` branch][esm-url].
-   If you are using Deno, visit the [`deno` branch][deno-url].
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd` branch][umd-url].

</section>

<section class="usage">

## Usage

```javascript
var readFileList = require( '@stdlib/fs-read-file-list' );
```

#### readFileList( filepaths\[, options], clbk )

Asynchronously reads the entire contents of each file in a file list.

```javascript
readFileList( [ __filename ], onFiles );

function onFiles( error, files ) {
    if ( error ) {
        throw error;
    }
    console.dir( files );
    // => [{...}]
}
```

Each file is represented by an `object` with the following fields:

-   **file**: file path.
-   **data**: file contents as either a [`Buffer`][node-buffer] or `string`.

The function accepts the same options as [`readFile()`][@stdlib/fs/read-file].

#### readFileList.sync( filepaths\[, options] )

Synchronously reads the entire contents of each file in a file list.

```javascript
var out = readFileList.sync( [ __filename ] );
if ( out instanceof Error ) {
    throw out;
}
console.dir( out );
// => [{...}]
```

The function accepts the same options as [`readFile.sync()`][@stdlib/fs/read-file].

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var readFileList = require( '@stdlib/fs-read-file-list' );

/* Sync */

var files = readFileList.sync( [ __filename ], 'utf8' );
// returns <ObjectArray>

console.log( files instanceof Error );
// => false

files = readFileList.sync( [ 'beepboop' ], {
    'encoding': 'utf8'
});
// returns <Error>

console.log( files instanceof Error );
// => true

/* Async */

readFileList( [ __filename ], onFiles );
readFileList( [ 'beepboop' ], onFiles );

function onFiles( error, files ) {
    if ( error ) {
        if ( error.code === 'ENOENT' ) {
            console.error( 'A file does not exist.' );
        } else {
            throw error;
        }
    } else {
        console.dir( files );
    }
}
```

</section>

<!-- /.examples -->

* * *

<section class="cli">

## CLI

<section class="installation">

## Installation

To use the module as a general utility, install the module globally

```bash
npm install -g @stdlib/fs-read-file-list
```

</section>

<!-- CLI usage documentation. -->

<section class="usage">

### Usage

```text
Usage: read-file-list [options] <filepath1> <filepath2> ...

Options:

  -h,    --help                Print this message.
  -V,    --version             Print the package version.
  --enc, --encoding encoding   Encoding.
         --flag flag           Flag. Default: 'r'.
```

</section>

<!-- /.usage -->

<section class="notes">

### Notes

-   Relative file paths are resolved relative to the current working directory.
-   Errors are written to `stderr`.
-   File contents are written to `stdout` as newline-delimited JSON ([NDJSON][ndjson]).

</section>

<!-- /.notes -->

<section class="examples">

### Examples

```bash
$ read-file-list ./README.md ./package.json
{"file":"...","data":"..."}
{"file":"...","data":"..."}
```

</section>

<!-- /.examples -->

</section>

<!-- /.cli -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2022. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/fs-read-file-list.svg
[npm-url]: https://npmjs.org/package/@stdlib/fs-read-file-list

[test-image]: https://github.com/stdlib-js/fs-read-file-list/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/fs-read-file-list/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/fs-read-file-list/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/fs-read-file-list?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/fs-read-file-list.svg
[dependencies-url]: https://david-dm.org/stdlib-js/fs-read-file-list/main

-->

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/fs-read-file-list/tree/deno
[umd-url]: https://github.com/stdlib-js/fs-read-file-list/tree/umd
[esm-url]: https://github.com/stdlib-js/fs-read-file-list/tree/esm

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/fs-read-file-list/main/LICENSE

[@stdlib/fs/read-file]: https://github.com/stdlib-js/fs-read-file

[node-buffer]: https://nodejs.org/api/buffer.html

[ndjson]: http://ndjson.org/

</section>

<!-- /.links -->
