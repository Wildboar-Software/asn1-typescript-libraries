/* eslint-disable */
import {
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary LocationRoutingNumberSourceIndicator
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LocationRoutingNumberSourceIndicator  ::=  INTEGER {
 *    lRN-NP-Database        ( 1 ),
 *    switchingSystemData    ( 2 ),
 *    incomingsignaling      ( 3 ),
 *    unknown                ( 9 )}
 * ```
 */
export
type LocationRoutingNumberSourceIndicator = INTEGER;

/**
 * @summary LocationRoutingNumberSourceIndicator_lRN_NP_Database
 * @constant
 * @type {number}
 */
export
const LocationRoutingNumberSourceIndicator_lRN_NP_Database: LocationRoutingNumberSourceIndicator = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary LocationRoutingNumberSourceIndicator_lRN_NP_Database
 * @constant
 * @type {number}
 */
export
const lRN_NP_Database: LocationRoutingNumberSourceIndicator = LocationRoutingNumberSourceIndicator_lRN_NP_Database; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary LocationRoutingNumberSourceIndicator_switchingSystemData
 * @constant
 * @type {number}
 */
export
const LocationRoutingNumberSourceIndicator_switchingSystemData: LocationRoutingNumberSourceIndicator = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary LocationRoutingNumberSourceIndicator_switchingSystemData
 * @constant
 * @type {number}
 */
export
const switchingSystemData: LocationRoutingNumberSourceIndicator = LocationRoutingNumberSourceIndicator_switchingSystemData; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary LocationRoutingNumberSourceIndicator_incomingsignaling
 * @constant
 * @type {number}
 */
export
const LocationRoutingNumberSourceIndicator_incomingsignaling: LocationRoutingNumberSourceIndicator = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary LocationRoutingNumberSourceIndicator_incomingsignaling
 * @constant
 * @type {number}
 */
export
const incomingsignaling: LocationRoutingNumberSourceIndicator = LocationRoutingNumberSourceIndicator_incomingsignaling; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary LocationRoutingNumberSourceIndicator_unknown
 * @constant
 * @type {number}
 */
export
const LocationRoutingNumberSourceIndicator_unknown: LocationRoutingNumberSourceIndicator = 9; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary LocationRoutingNumberSourceIndicator_unknown
 * @constant
 * @type {number}
 */
export
const unknown: LocationRoutingNumberSourceIndicator = LocationRoutingNumberSourceIndicator_unknown; /* SHORT_NAMED_INTEGER_VALUE */

export
const _decode_LocationRoutingNumberSourceIndicator: $.ASN1Decoder<LocationRoutingNumberSourceIndicator> = $._decodeInteger;

export
const _encode_LocationRoutingNumberSourceIndicator: $.ASN1Encoder<LocationRoutingNumberSourceIndicator> = $._encodeInteger;

/* eslint-enable */
