export function x121_dcc_country_code_to_iso_3166 (dcc: number): string | undefined {
    switch (dcc) {
        case (202): return "GR"; // Greece
        case (204): return "NL"; // Netherlands (Kingdom of the)
        case (205): return "NL"; // Netherlands (Kingdom of the)
        case (206): return "BE"; // Belgium
        case (208): return "FR"; // France
        case (209): return "FR"; // France
        case (210): return "FR"; // France
        case (211): return "FR"; // France
        case (212): return "MC"; // Monaco (Principality of)
        case (213): return "AD"; // Andorra (Principality of)
        case (214): return "ES"; // Spain
        case (215): return "ES"; // Spain
        case (216): return "HU"; // Hungary (Republic of)
        case (218): return "BA"; // Bosnia and Herzegovina
        case (219): return "HR"; // Croatia (Republic of)
        case (220): return "YU"; // Yugoslavia (Federal Republic of) [Note: "YU" is outdated since Yugoslavia dissolved; you might want to use "RS" for Serbia or another relevant code]
        case (222): return "IT"; // Italy
        case (223): return "IT"; // Italy
        case (224): return "IT"; // Italy
        case (225): return "VA"; // Vatican City State
        case (226): return "RO"; // Romania
        case (228): return "CH"; // Switzerland (Confederation of)
        case (229): return "CH"; // Switzerland (Confederation of)
        case (230): return "CZ"; // Czech Republic
        case (231): return "SK"; // Slovak Republic
        case (232): return "AT"; // Austria
        case (233): return "AT"; // Austria
        case (234): return "GB"; // United Kingdom of Great Britain and Northern Ireland
        case (235): return "GB"; // United Kingdom of Great Britain and Northern Ireland
        case (236): return "GB"; // United Kingdom of Great Britain and Northern Ireland
        case (237): return "GB"; // United Kingdom of Great Britain and Northern Ireland
        case (238): return "DK"; // Denmark
        case (239): return "DK"; // Denmark
        case (240): return "SE"; // Sweden
        case (242): return "NO"; // Norway
        case (243): return "NO"; // Norway
        case (244): return "FI"; // Finland
        case (246): return "LT"; // Lithuania (Republic of)
        case (247): return "LV"; // Latvia (Republic of)
        case (248): return "EE"; // Estonia (Republic of)
        case (250): return "RU"; // Russian Federation
        case (251): return "RU"; // Russian Federation
        case (255): return "UA"; // Ukraine
        case (257): return "BY"; // Belarus (Republic of)
        case (259): return "MD"; // Moldova (Republic of)
        case (260): return "PL"; // Poland (Republic of)
        case (261): return "PL"; // Poland (Republic of)
        case (262): return "DE"; // Germany (Federal Republic of)
        case (263): return "DE"; // Germany (Federal Republic of)
        case (264): return "DE"; // Germany (Federal Republic of)
        case (265): return "DE"; // Germany (Federal Republic of)
        case (266): return "GI"; // Gibraltar
        case (268): return "PT"; // Portugal
        case (269): return "PT"; // Portugal
        case (270): return "LU"; // Luxembourg
        case (272): return "IE"; // Ireland
        case (274): return "IS"; // Iceland
        case (276): return "AL"; // Albania (Republic of)
        case (278): return "MT"; // Malta
        case (280): return "CY"; // Cyprus (Republic of)
        case (282): return "GE"; // Georgia
        case (283): return "AM"; // Armenia (Republic of)
        case (284): return "BG"; // Bulgaria (Republic of)
        case (286): return "TR"; // Turkey
        case (288): return "FO"; // Faroe Islands
        case (290): return "GL"; // Greenland
        case (292): return "SM"; // San Marino (Republic of)
        case (293): return "SI"; // Slovenia (Republic of)
        case (294): return "MK"; // The Former Yugoslav Republic of Macedonia [Note: This is the old name. Now officially "North Macedonia"]
        case (295): return "LI"; // Liechtenstein (Principality of)
        case (302): return "CA"; // Canada
        case (303): return "CA"; // Canada
        case (308): return "PM"; // Saint Pierre and Miquelon (Collectivité territoriale de la République française)
        case (310): return "US"; // United States of America
        case (311): return "US"; // United States of America
        case (312): return "US"; // United States of America
        case (313): return "US"; // United States of America
        case (314): return "US"; // United States of America
        case (315): return "US"; // United States of America
        case (316): return "US"; // United States of America
        case (330): return "PR"; // Puerto Rico
        case (332): return "VI"; // United States Virgin Islands
        case (334): return "MX"; // Mexico
        case (335): return "MX"; // Mexico
        case (338): return "JM"; // Jamaica
        case (340): return "GP"; // Guadeloupe (This code represents Guadeloupe, separate code might be needed for Martinique)
        case (342): return "BB"; // Barbados
        case (344): return "AG"; // Antigua and Barbuda
        case (346): return "KY"; // Cayman Islands
        case (348): return "VG"; // British Virgin Islands
        case (350): return "BM"; // Bermuda
        case (352): return "GD"; // Grenada
        case (354): return "MS"; // Montserrat
        case (356): return "KN"; // Saint Kitts and Nevis
        case (358): return "LC"; // Saint Lucia
        case (360): return "VC"; // Saint Vincent and the Grenadines
        case (362): return "AN"; // Netherlands Antilles [Note: This code is deprecated since the dissolution of the Netherlands Antilles in 2010]
        case (363): return "AW"; // Aruba
        case (364): return "BS"; // Bahamas (Commonwealth of the)
        case (365): return "AI"; // Anguilla
        case (366): return "DM"; // Dominica (Commonwealth of)
        case (368): return "CU"; // Cuba
        case (370): return "DO"; // Dominican Republic
        case (372): return "HT"; // Haiti (Republic of)
        case (374): return "TT"; // Trinidad and Tobago
        case (376): return "TC"; // Turks and Caicos Islands
        case (400): return "AZ"; // Azerbaijani Republic
        case (401): return "KZ"; // Kazakstan (Republic of)
        case (404): return "IN"; // India (Republic of)
        case (410): return "PK"; // Pakistan (Islamic Republic of)
        case (411): return "PK"; // Pakistan (Islamic Republic of)
        case (412): return "AF"; // Afghanistan (Islamic State of)
        case (413): return "LK"; // Sri Lanka (Democratic Socialist Republic of)
        case (414): return "MM"; // Myanmar (Union of) [Note: Historically referred to as Burma]
        case (415): return "LB"; // Lebanon
        case (416): return "JO"; // Jordan (Hashemite Kingdom of)
        case (417): return "SY"; // Syrian Arab Republic
        case (418): return "IQ"; // Iraq (Republic of)
        case (419): return "KW"; // Kuwait (State of)
        case (420): return "SA"; // Saudi Arabia (Kingdom of)
        case (421): return "YE"; // Yemen (Republic of)
        case (422): return "OM"; // Oman (Sultanate of)
        case (424): return "AE"; // United Arab Emirates
        case (425): return "IL"; // Israel (State of)
        case (426): return "BH"; // Bahrain (State of)
        case (427): return "QA"; // Qatar (State of)
        case (428): return "MN"; // Mongolia
        case (429): return "NP"; // Nepal
        case (430): return "AE"; // United Arab Emirates (Abu Dhabi)
        case (431): return "AE"; // United Arab Emirates (Dubai)
        case (432): return "IR"; // Iran (Islamic Republic of)
        case (434): return "UZ"; // Uzbekistan (Republic of)
        case (436): return "TJ"; // Tajikistan (Republic of)
        case (437): return "KG"; // Kyrgyz Republic
        case (438): return "TM"; // Turkmenistan
        case (440): return "JP"; // Japan
        case (441): return "JP"; // Japan
        case (442): return "JP"; // Japan
        case (443): return "JP"; // Japan
        case (450): return "KR"; // Korea (Republic of)
        case (452): return "VN"; // Viet Nam (Socialist Republic of)
        case (453): return "HK"; // Hongkong
        case (454): return "HK"; // Hongkong
        case (455): return "MO"; // Macau
        case (456): return "KH"; // Cambodia (Kingdom of)
        case (457): return "LA"; // Lao People’s Democratic Republic
        case (460): return "CN"; // China (People’s Republic of)
        case (466): return "TW"; // Taiwan, China
        case (467): return "KP"; // Democratic People’s Republic of Korea
        case (470): return "BD"; // Bangladesh (People’s Republic of)
        case (472): return "MV"; // Maldives (Republic of)
        case (480): return "KR"; // Korea (Republic of)
        case (481): return "KR"; // Korea (Republic of)
        case (502): return "MY"; // Malaysia
        case (505): return "AU"; // Australia
        case (510): return "ID"; // Indonesia (Republic of)
        case (515): return "PH"; // Philippines (Republic of the)
        case (520): return "TH"; // Thailand
        case (525): return "SG"; // Singapore (Republic of)
        case (528): return "BN"; // Brunei Darussalam
        case (530): return "NZ"; // New Zealand
        case (534): return "MP"; // Northern Mariana Islands (Commonwealth of the)
        case (535): return "GU"; // Guam
        case (536): return "NR"; // Nauru (Republic of)
        case (537): return "PG"; // Papua New Guinea
        case (539): return "TO"; // Tonga (Kingdom of)
        case (540): return "SB"; // Solomon Islands
        case (541): return "VU"; // Vanuatu (Republic of)
        case (542): return "FJ"; // Fiji (Republic of)
        case (543): return "WF"; // Wallis and Futuna (French Overseas Territory)
        case (544): return "AS"; // American Samoa
        case (545): return "KI"; // Kiribati (Republic of)
        case (546): return "NC"; // New Caledonia (French Overseas Territory)
        case (547): return "PF"; // French Polynesia (French Overseas Territory)
        case (548): return "CK"; // Cook Islands
        case (549): return "WS"; // Samoa (Independent State of)
        case (550): return "FM"; // Micronesia (Federated States of)
        case (602): return "EG"; // Egypt (Arab Republic of)
        case (603): return "DZ"; // Algeria (People’s Democratic Republic of)
        case (604): return "MA"; // Morocco (Kingdom of)
        case (605): return "TN"; // Tunisia
        case (606): return "LY"; // Libya (Socialist People’s Libyan Arab Jamahiriya)
        case (607): return "GM"; // Gambia (Republic of the)
        case (608): return "SN"; // Senegal (Republic of)
        case (609): return "MR"; // Mauritania (Islamic Republic of)
        case (610): return "ML"; // Mali (Republic of)
        case (611): return "GN"; // Guinea (Republic of)
        case (612): return "CI"; // Côte d’Ivoire (Republic of)
        case (613): return "BF"; // Burkina Faso
        case (614): return "NE"; // Niger (Republic of the)
        case (615): return "TG"; // Togolese Republic
        case (616): return "BJ"; // Benin (Republic of)
        case (617): return "MU"; // Mauritius (Republic of)
        case (618): return "LR"; // Liberia (Republic of)
        case (619): return "SL"; // Sierra Leone
        case (620): return "GH"; // Ghana
        case (621): return "NG"; // Nigeria (Federal Republic of)
        case (622): return "TD"; // Chad (Republic of)
        case (623): return "CF"; // Central African Republic
        case (624): return "CM"; // Cameroon (Republic of)
        case (625): return "CV"; // Cape Verde (Republic of)
        case (626): return "ST"; // Sao Tome and Principe (Democratic Republic of)
        case (627): return "GQ"; // Equatorial Guinea (Republic of)
        case (628): return "GA"; // Gabonese Republic
        case (629): return "CG"; // Congo (Republic of the)
        case (630): return "CD"; // Democratic Republic of the Congo
        case (631): return "AO"; // Angola (Republic of)
        case (632): return "GW"; // Guinea-Bissau (Republic of)
        case (633): return "SC"; // Seychelles (Republic of)
        case (634): return "SD"; // Sudan (Republic of the)
        case (635): return "RW"; // Rwandese Republic
        case (636): return "ET"; // Ethiopia (Federal Democratic Republic of)
        case (637): return "SO"; // Somali Democratic Republic
        case (638): return "DJ"; // Djibouti (Republic of)
        case (639): return "KE"; // Kenya (Republic of)
        case (640): return "TZ"; // Tanzania (United Republic of)
        case (641): return "UG"; // Uganda (Republic of)
        case (642): return "BI"; // Burundi (Republic of)
        case (643): return "MZ"; // Mozambique (Republic of)
        case (645): return "ZM"; // Zambia (Republic of)
        case (646): return "MG"; // Madagascar (Republic of)
        case (647): return "RE"; // Reunion (French Department of)
        case (648): return "ZW"; // Zimbabwe (Republic of)
        case (649): return "NA"; // Namibia (Republic of)
        case (650): return "MW"; // Malawi
        case (651): return "LS"; // Lesotho (Kingdom of)
        case (652): return "BW"; // Botswana (Republic of)
        case (653): return "SZ"; // Swaziland (Kingdom of)
        case (654): return "KM"; // Comoros (Islamic Federal Republic of the)
        case (655): return "ZA"; // South Africa (Republic of)
        case (658): return "ER"; // Eritrea
        case (702): return "BZ"; // Belize
        case (704): return "GT"; // Guatemala (Republic of)
        case (706): return "SV"; // El Salvador (Republic of)
        case (708): return "HN"; // Honduras (Republic of)
        case (710): return "NI"; // Nicaragua
        case (712): return "CR"; // Costa Rica
        case (714): return "PA"; // Panama (Republic of)
        case (716): return "PE"; // Peru
        case (722): return "AR"; // Argentine Republic
        case (724): return "BR"; // Brazil (Federative Republic of)
        case (725): return "BR"; // Brazil (Federative Republic of)
        case (730): return "CL"; // Chile
        case (732): return "CO"; // Colombia (Republic of)
        case (734): return "VE"; // Venezuela (Bolivarian Republic of)
        case (736): return "BO"; // Bolivia (Republic of)
        case (738): return "GY"; // Guyana
        case (740): return "EC"; // Ecuador
        case (742): return "GF"; // Guiana (French Department of)
        case (744): return "PY"; // Paraguay (Republic of)
        case (746): return "SR"; // Suriname (Republic of)
        case (748): return "UY"; // Uruguay (Eastern Republic of)
        default: return undefined;
    }
}