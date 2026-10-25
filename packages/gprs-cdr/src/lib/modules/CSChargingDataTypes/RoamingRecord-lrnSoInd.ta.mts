/* eslint-disable */
import {
    type INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary RoamingRecord_lrnSoInd
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RoamingRecord-lrnSoInd ::= INTEGER {
 *    lRN-NP-Database        ( 1 ),
 *    switchingSystemData    ( 2 ),
 *    incomingsignaling      ( 3 ),
 *    unknown                ( 9 )
 * }
 * ```
 */
export
type RoamingRecord_lrnSoInd = INTEGER;

/**
 * @summary RoamingRecord_lrnSoInd_lRN_NP_Database
 * @constant
 * @type {number}
 */
export
const RoamingRecord_lrnSoInd_lRN_NP_Database: 1 = 1 satisfies RoamingRecord_lrnSoInd; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RoamingRecord_lrnSoInd_lRN_NP_Database
 * @constant
 * @type {number}
 */
export
const lRN_NP_Database: 1 = RoamingRecord_lrnSoInd_lRN_NP_Database; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RoamingRecord_lrnSoInd_switchingSystemData
 * @constant
 * @type {number}
 */
export
const RoamingRecord_lrnSoInd_switchingSystemData: 2 = 2 satisfies RoamingRecord_lrnSoInd; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RoamingRecord_lrnSoInd_switchingSystemData
 * @constant
 * @type {number}
 */
export
const switchingSystemData: 2 = RoamingRecord_lrnSoInd_switchingSystemData; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RoamingRecord_lrnSoInd_incomingsignaling
 * @constant
 * @type {number}
 */
export
const RoamingRecord_lrnSoInd_incomingsignaling: 3 = 3 satisfies RoamingRecord_lrnSoInd; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RoamingRecord_lrnSoInd_incomingsignaling
 * @constant
 * @type {number}
 */
export
const incomingsignaling: 3 = RoamingRecord_lrnSoInd_incomingsignaling; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RoamingRecord_lrnSoInd_unknown
 * @constant
 * @type {number}
 */
export
const RoamingRecord_lrnSoInd_unknown: 9 = 9 satisfies RoamingRecord_lrnSoInd; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RoamingRecord_lrnSoInd_unknown
 * @constant
 * @type {number}
 */
export
const unknown: 9 = RoamingRecord_lrnSoInd_unknown; /* SHORT_NAMED_INTEGER_VALUE */

export
const _decode_RoamingRecord_lrnSoInd: $.ASN1Decoder<RoamingRecord_lrnSoInd> = $._decodeInteger;

export
const _encode_RoamingRecord_lrnSoInd: $.ASN1Encoder<RoamingRecord_lrnSoInd> = $._encodeInteger;

/* eslint-enable */
