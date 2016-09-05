# ngCountryList
Angular country list factory based on https://github.com/fannarsh/country-list

## Examples

### Require module

```javascript
angular.module('myModule', ['ngCountryList']);
```


### Call factory from a controller

```javascript
angular.module('myModule').controller('myController', ['$countryList', function($countryList) {
	
}]);
```

## API

### $countryList.getCode(name)

#### Example
```javascript
$countryList.getCode('Spain'); // Output: 'ES'
```

### $countryList.getName(code)

#### Example
```javascript
$countryList.getName('ES'); // Output: 'Spain'
```

### $countryList.getNames()

Returns an array containing every country names.

#### Example
```javascript
$countryList.getNames();
```

### $countryList.getCodes()

Returns an array containing every country codes.

#### Example
```javascript
$countryList.getCodes();
```

### $countryList.getData()

Returns an object containing every country following the `{ "code": "ES", "name": "Spain" }` schema.

#### Example
```javascript
$countryList.getData();
```

### $countryList.getDataByContinent(continentCode)

Returns an object containing every country in the continent following the `{ "code": "ES", "name": "Spain" }` schema.

#### Example
```javascript
$countryList.getDataByContinent('EU');
```

### $countryList.getContinentByCode(countryCode)

Returns the continent code.

#### Example
```javascript
$countryList.getContinentByCode('ES'); // Output: 'EU'
```

Proudly sponsored by

[![Ecomputer](http://www.ecomputer.es/imagenes/empresa/descargas/logotipo_ecomputer_alargado_azul_min.jpg)](http://www.ecomputer.es)