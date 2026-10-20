/* eslint-disable */
import {
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary MOCallRecord_lrnSoInd
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MOCallRecord-lrnSoInd ::= INTEGER {
 *    lRN-NP-Database        ( 1 ),
 *    switchingSystemData    ( 2 ),
 *    incomingsignaling      ( 3 ),
 *    unknown                ( 9 )
 * }
 * ```
 */
export
type MOCallRecord_lrnSoInd = INTEGER;

/**
 * @summary MOCallRecord_lrnSoInd_lRN_NP_Database
 * @constant
 * @type {number}
 */
export
const MOCallRecord_lrnSoInd_lRN_NP_Database: MOCallRecord_lrnSoInd = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary MOCallRecord_lrnSoInd_lRN_NP_Database
 * @constant
 * @type {number}
 */
export
const lRN_NP_Database: MOCallRecord_lrnSoInd = MOCallRecord_lrnSoInd_lRN_NP_Database; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary MOCallRecord_lrnSoInd_switchingSystemData
 * @constant
 * @type {number}
 */
export
const MOCallRecord_lrnSoInd_switchingSystemData: MOCallRecord_lrnSoInd = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary MOCallRecord_lrnSoInd_switchingSystemData
 * @constant
 * @type {number}
 */
export
const switchingSystemData: MOCallRecord_lrnSoInd = MOCallRecord_lrnSoInd_switchingSystemData; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary MOCallRecord_lrnSoInd_incomingsignaling
 * @constant
 * @type {number}
 */
export
const MOCallRecord_lrnSoInd_incomingsignaling: MOCallRecord_lrnSoInd = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary MOCallRecord_lrnSoInd_incomingsignaling
 * @constant
 * @type {number}
 */
export
const incomingsignaling: MOCallRecord_lrnSoInd = MOCallRecord_lrnSoInd_incomingsignaling; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary MOCallRecord_lrnSoInd_unknown
 * @constant
 * @type {number}
 */
export
const MOCallRecord_lrnSoInd_unknown: MOCallRecord_lrnSoInd = 9; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary MOCallRecord_lrnSoInd_unknown
 * @constant
 * @type {number}
 */
export
const unknown: MOCallRecord_lrnSoInd = MOCallRecord_lrnSoInd_unknown; /* SHORT_NAMED_INTEGER_VALUE */

export
const _decode_MOCallRecord_lrnSoInd: $.ASN1Decoder<MOCallRecord_lrnSoInd> = $._decodeInteger;

export
const _encode_MOCallRecord_lrnSoInd: $.ASN1Encoder<MOCallRecord_lrnSoInd> = $._encodeInteger;

/* eslint-enable */
