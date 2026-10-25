/* eslint-disable */
import {
    type INTEGER
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
const LocationRoutingNumberSourceIndicator_lRN_NP_Database = 1 satisfies LocationRoutingNumberSourceIndicator; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary LocationRoutingNumberSourceIndicator_lRN_NP_Database
 * @constant
 * @type {number}
 */
export
const lRN_NP_Database = LocationRoutingNumberSourceIndicator_lRN_NP_Database satisfies LocationRoutingNumberSourceIndicator; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary LocationRoutingNumberSourceIndicator_switchingSystemData
 * @constant
 * @type {number}
 */
export
const LocationRoutingNumberSourceIndicator_switchingSystemData = 2 satisfies LocationRoutingNumberSourceIndicator; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary LocationRoutingNumberSourceIndicator_switchingSystemData
 * @constant
 * @type {number}
 */
export
const switchingSystemData = LocationRoutingNumberSourceIndicator_switchingSystemData satisfies LocationRoutingNumberSourceIndicator; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary LocationRoutingNumberSourceIndicator_incomingsignaling
 * @constant
 * @type {number}
 */
export
const LocationRoutingNumberSourceIndicator_incomingsignaling = 3 satisfies LocationRoutingNumberSourceIndicator; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary LocationRoutingNumberSourceIndicator_incomingsignaling
 * @constant
 * @type {number}
 */
export
const incomingsignaling = LocationRoutingNumberSourceIndicator_incomingsignaling satisfies LocationRoutingNumberSourceIndicator; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary LocationRoutingNumberSourceIndicator_unknown
 * @constant
 * @type {number}
 */
export
const LocationRoutingNumberSourceIndicator_unknown = 9 satisfies LocationRoutingNumberSourceIndicator; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary LocationRoutingNumberSourceIndicator_unknown
 * @constant
 * @type {number}
 */
export
const unknown = LocationRoutingNumberSourceIndicator_unknown satisfies LocationRoutingNumberSourceIndicator; /* SHORT_NAMED_INTEGER_VALUE */

export
const _decode_LocationRoutingNumberSourceIndicator: $.ASN1Decoder<LocationRoutingNumberSourceIndicator> = $._decodeInteger;

export
const _encode_LocationRoutingNumberSourceIndicator: $.ASN1Encoder<LocationRoutingNumberSourceIndicator> = $._encodeInteger;

/* eslint-enable */
