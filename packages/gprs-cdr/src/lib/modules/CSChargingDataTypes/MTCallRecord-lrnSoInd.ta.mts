/* eslint-disable */
import {
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary MTCallRecord_lrnSoInd
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MTCallRecord-lrnSoInd ::= INTEGER {
 *    lRN-NP-Database        ( 1 ),
 *    switchingSystemData    ( 2 ),
 *    incomingsignaling      ( 3 ),
 *    unknown                ( 9 )
 * }
 * ```
 */
export
type MTCallRecord_lrnSoInd = INTEGER;

/**
 * @summary MTCallRecord_lrnSoInd_lRN_NP_Database
 * @constant
 * @type {number}
 */
export
const MTCallRecord_lrnSoInd_lRN_NP_Database: MTCallRecord_lrnSoInd = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary MTCallRecord_lrnSoInd_lRN_NP_Database
 * @constant
 * @type {number}
 */
export
const lRN_NP_Database: MTCallRecord_lrnSoInd = MTCallRecord_lrnSoInd_lRN_NP_Database; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary MTCallRecord_lrnSoInd_switchingSystemData
 * @constant
 * @type {number}
 */
export
const MTCallRecord_lrnSoInd_switchingSystemData: MTCallRecord_lrnSoInd = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary MTCallRecord_lrnSoInd_switchingSystemData
 * @constant
 * @type {number}
 */
export
const switchingSystemData: MTCallRecord_lrnSoInd = MTCallRecord_lrnSoInd_switchingSystemData; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary MTCallRecord_lrnSoInd_incomingsignaling
 * @constant
 * @type {number}
 */
export
const MTCallRecord_lrnSoInd_incomingsignaling: MTCallRecord_lrnSoInd = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary MTCallRecord_lrnSoInd_incomingsignaling
 * @constant
 * @type {number}
 */
export
const incomingsignaling: MTCallRecord_lrnSoInd = MTCallRecord_lrnSoInd_incomingsignaling; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary MTCallRecord_lrnSoInd_unknown
 * @constant
 * @type {number}
 */
export
const MTCallRecord_lrnSoInd_unknown: MTCallRecord_lrnSoInd = 9; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary MTCallRecord_lrnSoInd_unknown
 * @constant
 * @type {number}
 */
export
const unknown: MTCallRecord_lrnSoInd = MTCallRecord_lrnSoInd_unknown; /* SHORT_NAMED_INTEGER_VALUE */

export
const _decode_MTCallRecord_lrnSoInd: $.ASN1Decoder<MTCallRecord_lrnSoInd> = $._decodeInteger;

export
const _encode_MTCallRecord_lrnSoInd: $.ASN1Encoder<MTCallRecord_lrnSoInd> = $._encodeInteger;

/* eslint-enable */
