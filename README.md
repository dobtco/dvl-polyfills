dvl-polyfills
=====

Polyfills that make our sites at least *usable* in IE8.

1. `cp credentials.json.example credentials.json` and set AWS key & secret
2. `npm install` to install deps
3. `grunt` to concatenate, uglify, and upload to S3

## Usage

### At the bottom of `<head>`:

```
<!--[if lt IE 9]><script src="//d2yxgjkkbvnhdt.cloudfront.net/dist/shim.js"></script><![endif]-->
```

### At the bottom of `<body>`:

```
<!--[if lt IE 9]><script src="//d2yxgjkkbvnhdt.cloudfront.net/dist/polyfills.js"></script><![endif]-->
```
