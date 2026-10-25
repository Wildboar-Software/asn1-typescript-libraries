/* eslint-disable */
import {
    type INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary MOCallRecord_jIPSoInd
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MOCallRecord-jIPSoInd ::= INTEGER {
 *    lRN-NP-Database        ( 1 ),
 *    switchingSystemData    ( 2 ),
 *    incomingsignaling      ( 3 ),
 *    unknown                ( 9 )
 * }
 * ```
 */
export
type MOCallRecord_jIPSoInd = INTEGER;

/**
 * @summary MOCallRecord_jIPSoInd_lRN_NP_Database
 * @constant
 * @type {number}
 */
export
const MOCallRecord_jIPSoInd_lRN_NP_Database: MOCallRecord_jIPSoInd = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary MOCallRecord_jIPSoInd_lRN_NP_Database
 * @constant
 * @type {number}
 */
export
const lRN_NP_Database: MOCallRecord_jIPSoInd = MOCallRecord_jIPSoInd_lRN_NP_Database; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary MOCallRecord_jIPSoInd_switchingSystemData
 * @constant
 * @type {number}
 */
export
const MOCallRecord_jIPSoInd_switchingSystemData: MOCallRecord_jIPSoInd = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary MOCallRecord_jIPSoInd_switchingSystemData
 * @constant
 * @type {number}
 */
export
const switchingSystemData: MOCallRecord_jIPSoInd = MOCallRecord_jIPSoInd_switchingSystemData; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary MOCallRecord_jIPSoInd_incomingsignaling
 * @constant
 * @type {number}
 */
export
const MOCallRecord_jIPSoInd_incomingsignaling: MOCallRecord_jIPSoInd = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary MOCallRecord_jIPSoInd_incomingsignaling
 * @constant
 * @type {number}
 */
export
const incomingsignaling: MOCallRecord_jIPSoInd = MOCallRecord_jIPSoInd_incomingsignaling; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary MOCallRecord_jIPSoInd_unknown
 * @constant
 * @type {number}
 */
export
const MOCallRecord_jIPSoInd_unknown: MOCallRecord_jIPSoInd = 9; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary MOCallRecord_jIPSoInd_unknown
 * @constant
 * @type {number}
 */
export
const unknown: MOCallRecord_jIPSoInd = MOCallRecord_jIPSoInd_unknown; /* SHORT_NAMED_INTEGER_VALUE */

export
const _decode_MOCallRecord_jIPSoInd: $.ASN1Decoder<MOCallRecord_jIPSoInd> = $._decodeInteger;

export
const _encode_MOCallRecord_jIPSoInd: $.ASN1Encoder<MOCallRecord_jIPSoInd> = $._encodeInteger;

/* eslint-enable */
