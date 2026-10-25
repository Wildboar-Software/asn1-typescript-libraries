/* eslint-disable */
import {
    type INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary MTCallRecord_jIPSoInd
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MTCallRecord-jIPSoInd ::= INTEGER {
 *    lRN-NP-Database        ( 1 ),
 *    switchingSystemData    ( 2 ),
 *    incomingsignaling      ( 3 ),
 *    unknown                ( 9 )
 * }
 * ```
 */
export
type MTCallRecord_jIPSoInd = INTEGER;

/**
 * @summary MTCallRecord_jIPSoInd_lRN_NP_Database
 * @constant
 * @type {number}
 */
export
const MTCallRecord_jIPSoInd_lRN_NP_Database = 1 satisfies MTCallRecord_jIPSoInd; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary MTCallRecord_jIPSoInd_lRN_NP_Database
 * @constant
 * @type {number}
 */
export
const lRN_NP_Database = MTCallRecord_jIPSoInd_lRN_NP_Database satisfies MTCallRecord_jIPSoInd; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary MTCallRecord_jIPSoInd_switchingSystemData
 * @constant
 * @type {number}
 */
export
const MTCallRecord_jIPSoInd_switchingSystemData = 2 satisfies MTCallRecord_jIPSoInd; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary MTCallRecord_jIPSoInd_switchingSystemData
 * @constant
 * @type {number}
 */
export
const switchingSystemData = MTCallRecord_jIPSoInd_switchingSystemData satisfies MTCallRecord_jIPSoInd; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary MTCallRecord_jIPSoInd_incomingsignaling
 * @constant
 * @type {number}
 */
export
const MTCallRecord_jIPSoInd_incomingsignaling = 3 satisfies MTCallRecord_jIPSoInd; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary MTCallRecord_jIPSoInd_incomingsignaling
 * @constant
 * @type {number}
 */
export
const incomingsignaling = MTCallRecord_jIPSoInd_incomingsignaling satisfies MTCallRecord_jIPSoInd; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary MTCallRecord_jIPSoInd_unknown
 * @constant
 * @type {number}
 */
export
const MTCallRecord_jIPSoInd_unknown = 9 satisfies MTCallRecord_jIPSoInd; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary MTCallRecord_jIPSoInd_unknown
 * @constant
 * @type {number}
 */
export
const unknown = MTCallRecord_jIPSoInd_unknown satisfies MTCallRecord_jIPSoInd; /* SHORT_NAMED_INTEGER_VALUE */

export
const _decode_MTCallRecord_jIPSoInd: $.ASN1Decoder<MTCallRecord_jIPSoInd> = $._decodeInteger;

export
const _encode_MTCallRecord_jIPSoInd: $.ASN1Encoder<MTCallRecord_jIPSoInd> = $._encodeInteger;

/* eslint-enable */
