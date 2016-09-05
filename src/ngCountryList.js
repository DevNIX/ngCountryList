(function() {
  'use strict';

  angular.module('ngCountryList', []);

  angular.module('ngCountryList').factory('$countryList', ngCountryList);

  ngCountryList.$inject = [];

  function ngCountryList() {
    var data = [
      { "code": "AF", "name": "Afghanistan" },
      { "code": "AX", "name": "Åland Islands" },
      { "code": "AL", "name": "Albania", "continent": "EU" },
      { "code": "DZ", "name": "Algeria" },
      { "code": "AS", "name": "American Samoa" },
      { "code": "AD", "name": "Andorra", "continent": "EU" },
      { "code": "AO", "name": "Angola" },
      { "code": "AI", "name": "Anguilla" },
      { "code": "AQ", "name": "Antarctica" },
      { "code": "AG", "name": "Antigua and Barbuda" },
      { "code": "AR", "name": "Argentina" },
      { "code": "AM", "name": "Armenia" },
      { "code": "AW", "name": "Aruba" },
      { "code": "AU", "name": "Australia" },
      { "code": "AT", "name": "Austria", "continent": "EU" },
      { "code": "AZ", "name": "Azerbaijan" },
      { "code": "BS", "name": "Bahamas" },
      { "code": "BH", "name": "Bahrain" },
      { "code": "BD", "name": "Bangladesh" },
      { "code": "BB", "name": "Barbados" },
      { "code": "BY", "name": "Belarus", "continent": "EU" },
      { "code": "BE", "name": "Belgium", "continent": "EU" },
      { "code": "BZ", "name": "Belize" },
      { "code": "BJ", "name": "Benin" },
      { "code": "BM", "name": "Bermuda" },
      { "code": "BT", "name": "Bhutan" },
      { "code": "BO", "name": "Bolivia, Plurinational State of" },
      { "code": "BQ", "name": "Bonaire, Sint Eustatius and Saba" },
      { "code": "BA", "name": "Bosnia and Herzegovina", "continent": "EU" },
      { "code": "BW", "name": "Botswana" },
      { "code": "BV", "name": "Bouvet Island" },
      { "code": "BR", "name": "Brazil" },
      { "code": "IO", "name": "British Indian Ocean Territory" },
      { "code": "BN", "name": "Brunei Darussalam" },
      { "code": "BG", "name": "Bulgaria", "continent": "EU" },
      { "code": "BF", "name": "Burkina Faso" },
      { "code": "BI", "name": "Burundi" },
      { "code": "KH", "name": "Cambodia" },
      { "code": "CM", "name": "Cameroon" },
      { "code": "CA", "name": "Canada" },
      { "code": "CV", "name": "Cape Verde" },
      { "code": "KY", "name": "Cayman Islands" },
      { "code": "CF", "name": "Central African Republic" },
      { "code": "TD", "name": "Chad" },
      { "code": "CL", "name": "Chile" },
      { "code": "CN", "name": "China" },
      { "code": "CX", "name": "Christmas Island" },
      { "code": "CC", "name": "Cocos (Keeling) Islands" },
      { "code": "CO", "name": "Colombia" },
      { "code": "KM", "name": "Comoros" },
      { "code": "CG", "name": "Congo" },
      { "code": "CD", "name": "Congo, the Democratic Republic of the" },
      { "code": "CK", "name": "Cook Islands" },
      { "code": "CR", "name": "Costa Rica" },
      { "code": "CI", "name": "Côte d'Ivoire" },
      { "code": "HR", "name": "Croatia", "continent": "EU" },
      { "code": "CU", "name": "Cuba" },
      { "code": "CW", "name": "Curaçao" },
      { "code": "CY", "name": "Cyprus", "continent": "EU" },
      { "code": "CZ", "name": "Czech Republic", "continent": "EU" },
      { "code": "DK", "name": "Denmark", "continent": "EU" },
      { "code": "DJ", "name": "Djibouti" },
      { "code": "DM", "name": "Dominica" },
      { "code": "DO", "name": "Dominican Republic" },
      { "code": "EC", "name": "Ecuador" },
      { "code": "EG", "name": "Egypt" },
      { "code": "SV", "name": "El Salvador" },
      { "code": "GQ", "name": "Equatorial Guinea" },
      { "code": "ER", "name": "Eritrea" },
      { "code": "EE", "name": "Estonia", "continent": "EU" },
      { "code": "ET", "name": "Ethiopia" },
      { "code": "FK", "name": "Falkland Islands (Malvinas)" },
      { "code": "FO", "name": "Faroe Islands", "continent": "EU" },
      { "code": "FJ", "name": "Fiji" },
      { "code": "FI", "name": "Finland", "continent": "EU" },
      { "code": "FR", "name": "France", "continent": "EU" },
      { "code": "GF", "name": "French Guiana" },
      { "code": "PF", "name": "French Polynesia" },
      { "code": "TF", "name": "French Southern Territories" },
      { "code": "GA", "name": "Gabon" },
      { "code": "GM", "name": "Gambia" },
      { "code": "GE", "name": "Georgia" },
      { "code": "DE", "name": "Germany", "continent": "EU" },
      { "code": "GH", "name": "Ghana" },
      { "code": "GI", "name": "Gibraltar", "continent": "EU" },
      { "code": "GR", "name": "Greece", "continent": "EU" },
      { "code": "GL", "name": "Greenland" },
      { "code": "GD", "name": "Grenada" },
      { "code": "GP", "name": "Guadeloupe" },
      { "code": "GU", "name": "Guam" },
      { "code": "GT", "name": "Guatemala" },
      { "code": "GG", "name": "Guernsey" },
      { "code": "GN", "name": "Guinea" },
      { "code": "GW", "name": "Guinea-Bissau" },
      { "code": "GY", "name": "Guyana" },
      { "code": "HT", "name": "Haiti" },
      { "code": "HM", "name": "Heard Island and McDonald Mcdonald Islands" },
      { "code": "VA", "name": "Holy See (Vatican City State)", "continent": "EU" },
      { "code": "HN", "name": "Honduras" },
      { "code": "HK", "name": "Hong Kong" },
      { "code": "HU", "name": "Hungary", "continent": "EU" },
      { "code": "IS", "name": "Iceland", "continent": "EU" },
      { "code": "IN", "name": "India" },
      { "code": "ID", "name": "Indonesia" },
      { "code": "IR", "name": "Iran, Islamic Republic of" },
      { "code": "IQ", "name": "Iraq" },
      { "code": "IE", "name": "Ireland", "continent": "EU" },
      { "code": "IM", "name": "Isle of Man", "continent": "EU" },
      { "code": "IL", "name": "Israel" },
      { "code": "IT", "name": "Italy", "continent": "EU" },
      { "code": "JM", "name": "Jamaica" },
      { "code": "JP", "name": "Japan" },
      { "code": "JE", "name": "Jersey" },
      { "code": "JO", "name": "Jordan" },
      { "code": "KZ", "name": "Kazakhstan" },
      { "code": "KE", "name": "Kenya" },
      { "code": "KI", "name": "Kiribati" },
      { "code": "KP", "name": "Korea, Democratic People's Republic of" },
      { "code": "KR", "name": "Korea, Republic of" },
      { "code": "KW", "name": "Kuwait" },
      { "code": "KG", "name": "Kyrgyzstan" },
      { "code": "LA", "name": "Lao People's Democratic Republic" },
      { "code": "LV", "name": "Latvia", "continent": "EU" },
      { "code": "LB", "name": "Lebanon" },
      { "code": "LS", "name": "Lesotho" },
      { "code": "LR", "name": "Liberia" },
      { "code": "LY", "name": "Libya" },
      { "code": "LI", "name": "Liechtenstein", "continent": "EU" },
      { "code": "LT", "name": "Lithuania", "continent": "EU" },
      { "code": "LU", "name": "Luxembourg", "continent": "EU" },
      { "code": "MO", "name": "Macao" },
      { "code": "MK", "name": "Macedonia, the Former Yugoslav Republic of", "continent": "EU" },
      { "code": "MG", "name": "Madagascar" },
      { "code": "MW", "name": "Malawi" },
      { "code": "MY", "name": "Malaysia" },
      { "code": "MV", "name": "Maldives" },
      { "code": "ML", "name": "Mali" },
      { "code": "MT", "name": "Malta", "continent": "EU" },
      { "code": "MH", "name": "Marshall Islands" },
      { "code": "MQ", "name": "Martinique" },
      { "code": "MR", "name": "Mauritania" },
      { "code": "MU", "name": "Mauritius" },
      { "code": "YT", "name": "Mayotte" },
      { "code": "MX", "name": "Mexico" },
      { "code": "FM", "name": "Micronesia, Federated States of" },
      { "code": "MD", "name": "Moldova, Republic of", "continent": "EU" },
      { "code": "MC", "name": "Monaco", "continent": "EU" },
      { "code": "MN", "name": "Mongolia" },
      { "code": "ME", "name": "Montenegro", "continent": "EU" },
      { "code": "MS", "name": "Montserrat" },
      { "code": "MA", "name": "Morocco" },
      { "code": "MZ", "name": "Mozambique" },
      { "code": "MM", "name": "Myanmar" },
      { "code": "NA", "name": "Namibia" },
      { "code": "NR", "name": "Nauru" },
      { "code": "NP", "name": "Nepal" },
      { "code": "NL", "name": "Netherlands", "continent": "EU" },
      { "code": "NC", "name": "New Caledonia" },
      { "code": "NZ", "name": "New Zealand" },
      { "code": "NI", "name": "Nicaragua" },
      { "code": "NE", "name": "Niger" },
      { "code": "NG", "name": "Nigeria" },
      { "code": "NU", "name": "Niue" },
      { "code": "NF", "name": "Norfolk Island" },
      { "code": "MP", "name": "Northern Mariana Islands" },
      { "code": "NO", "name": "Norway", "continent": "EU" },
      { "code": "OM", "name": "Oman" },
      { "code": "PK", "name": "Pakistan" },
      { "code": "PW", "name": "Palau" },
      { "code": "PS", "name": "Palestine, State of" },
      { "code": "PA", "name": "Panama" },
      { "code": "PG", "name": "Papua New Guinea" },
      { "code": "PY", "name": "Paraguay" },
      { "code": "PE", "name": "Peru" },
      { "code": "PH", "name": "Philippines" },
      { "code": "PN", "name": "Pitcairn" },
      { "code": "PL", "name": "Poland", "continent": "EU" },
      { "code": "PT", "name": "Portugal", "continent": "EU" },
      { "code": "PR", "name": "Puerto Rico" },
      { "code": "QA", "name": "Qatar" },
      { "code": "RE", "name": "Réunion" },
      { "code": "RO", "name": "Romania", "continent": "EU" },
      { "code": "RU", "name": "Russian Federation", "continent": "EU" },
      { "code": "RW", "name": "Rwanda" },
      { "code": "BL", "name": "Saint Barthélemy" },
      { "code": "SH", "name": "Saint Helena, Ascension and Tristan da Cunha" },
      { "code": "KN", "name": "Saint Kitts and Nevis" },
      { "code": "LC", "name": "Saint Lucia" },
      { "code": "MF", "name": "Saint Martin (French part)" },
      { "code": "PM", "name": "Saint Pierre and Miquelon" },
      { "code": "VC", "name": "Saint Vincent and the Grenadines" },
      { "code": "WS", "name": "Samoa" },
      { "code": "SM", "name": "San Marino", "continent": "EU" },
      { "code": "ST", "name": "Sao Tome and Principe" },
      { "code": "SA", "name": "Saudi Arabia" },
      { "code": "SN", "name": "Senegal" },
      { "code": "RS", "name": "Serbia", "continent": "EU" },
      { "code": "SC", "name": "Seychelles" },
      { "code": "SL", "name": "Sierra Leone" },
      { "code": "SG", "name": "Singapore" },
      { "code": "SX", "name": "Sint Maarten (Dutch part)" },
      { "code": "SK", "name": "Slovakia", "continent": "EU" },
      { "code": "SI", "name": "Slovenia", "continent": "EU" },
      { "code": "SB", "name": "Solomon Islands" },
      { "code": "SO", "name": "Somalia" },
      { "code": "ZA", "name": "South Africa" },
      { "code": "GS", "name": "South Georgia and the South Sandwich Islands" },
      { "code": "SS", "name": "South Sudan" },
      { "code": "ES", "name": "Spain", "continent": "EU" },
      { "code": "LK", "name": "Sri Lanka" },
      { "code": "SD", "name": "Sudan" },
      { "code": "SR", "name": "Suriname" },
      { "code": "SJ", "name": "Svalbard and Jan Mayen" },
      { "code": "SZ", "name": "Swaziland" },
      { "code": "SE", "name": "Sweden", "continent": "EU" },
      { "code": "CH", "name": "Switzerland", "continent": "EU" },
      { "code": "SY", "name": "Syrian Arab Republic" },
      { "code": "TW", "name": "Taiwan, Province of China" },
      { "code": "TJ", "name": "Tajikistan" },
      { "code": "TZ", "name": "Tanzania, United Republic of" },
      { "code": "TH", "name": "Thailand" },
      { "code": "TL", "name": "Timor-Leste" },
      { "code": "TG", "name": "Togo" },
      { "code": "TK", "name": "Tokelau" },
      { "code": "TO", "name": "Tonga" },
      { "code": "TT", "name": "Trinidad and Tobago" },
      { "code": "TN", "name": "Tunisia" },
      { "code": "TR", "name": "Turkey" },
      { "code": "TM", "name": "Turkmenistan" },
      { "code": "TC", "name": "Turks and Caicos Islands" },
      { "code": "TV", "name": "Tuvalu" },
      { "code": "UG", "name": "Uganda" },
      { "code": "UA", "name": "Ukraine", "continent": "EU" },
      { "code": "AE", "name": "United Arab Emirates" },
      { "code": "GB", "name": "United Kingdom", "continent": "EU" },
      { "code": "US", "name": "United States" },
      { "code": "UM", "name": "United States Minor Outlying Islands" },
      { "code": "UY", "name": "Uruguay" },
      { "code": "UZ", "name": "Uzbekistan" },
      { "code": "VU", "name": "Vanuatu" },
      { "code": "VE", "name": "Venezuela, Bolivarian Republic of" },
      { "code": "VN", "name": "Viet Nam" },
      { "code": "VG", "name": "Virgin Islands, British" },
      { "code": "VI", "name": "Virgin Islands, U.S." },
      { "code": "WF", "name": "Wallis and Futuna" },
      { "code": "EH", "name": "Western Sahara" },
      { "code": "YE", "name": "Yemen" },
      { "code": "ZM", "name": "Zambia" },
      { "code": "ZW", "name": "Zimbabwe" }
    ];

    var nameMap = {};
    var codeMap = {};

    data.forEach(function(country) {
      nameMap[country.name.toLowerCase()] = country.code;
      codeMap[country.code.toLowerCase()] = country.name;
    });

    var service = {
      getCode            : getCode,
      getName            : getName,
      getNames           : getNames,
      getCodes           : getCodes,
      getDataByContinent : getDataByContinent,
      getData            : getData
    };
    return service;

    function getCode(name) {
      return nameMap[name.toLowerCase()];
    }

    function getName(code) {
      return codeMap[code.toLowerCase()];
    }

    function getNames() {
      return data.map(function(country) {
        return country.name;
      });
    }

    function getCodes() {
      return data.map(function(country) {
        return country.code;
      });
    }

    function getDataByContinent(continentCode) {
      return data.filter(function(country) {
        if (country.continent === continentCode) {
          return true;
        } else {
          return false;
        }
      });
    }

    function getData() {
      return data;
    }
  }

})();
