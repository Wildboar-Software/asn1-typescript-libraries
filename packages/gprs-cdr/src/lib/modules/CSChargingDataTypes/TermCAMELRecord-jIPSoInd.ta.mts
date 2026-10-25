/* eslint-disable */
import {
    type INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary TermCAMELRecord_jIPSoInd
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TermCAMELRecord-jIPSoInd ::= INTEGER {
 *    lRN-NP-Database        ( 1 ),
 *    switchingSystemData    ( 2 ),
 *    incomingsignaling      ( 3 ),
 *    unknown                ( 9 )
 * }
 * ```
 */
export
type TermCAMELRecord_jIPSoInd = INTEGER;

/**
 * @summary TermCAMELRecord_jIPSoInd_lRN_NP_Database
 * @constant
 * @type {number}
 */
export
const TermCAMELRecord_jIPSoInd_lRN_NP_Database = 1 satisfies TermCAMELRecord_jIPSoInd; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TermCAMELRecord_jIPSoInd_lRN_NP_Database
 * @constant
 * @type {number}
 */
export
const lRN_NP_Database = TermCAMELRecord_jIPSoInd_lRN_NP_Database satisfies TermCAMELRecord_jIPSoInd; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TermCAMELRecord_jIPSoInd_switchingSystemData
 * @constant
 * @type {number}
 */
export
const TermCAMELRecord_jIPSoInd_switchingSystemData = 2 satisfies TermCAMELRecord_jIPSoInd; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TermCAMELRecord_jIPSoInd_switchingSystemData
 * @constant
 * @type {number}
 */
export
const switchingSystemData = TermCAMELRecord_jIPSoInd_switchingSystemData satisfies TermCAMELRecord_jIPSoInd; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TermCAMELRecord_jIPSoInd_incomingsignaling
 * @constant
 * @type {number}
 */
export
const TermCAMELRecord_jIPSoInd_incomingsignaling = 3 satisfies TermCAMELRecord_jIPSoInd; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TermCAMELRecord_jIPSoInd_incomingsignaling
 * @constant
 * @type {number}
 */
export
const incomingsignaling = TermCAMELRecord_jIPSoInd_incomingsignaling satisfies TermCAMELRecord_jIPSoInd; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TermCAMELRecord_jIPSoInd_unknown
 * @constant
 * @type {number}
 */
export
const TermCAMELRecord_jIPSoInd_unknown = 9 satisfies TermCAMELRecord_jIPSoInd; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TermCAMELRecord_jIPSoInd_unknown
 * @constant
 * @type {number}
 */
export
const unknown = TermCAMELRecord_jIPSoInd_unknown satisfies TermCAMELRecord_jIPSoInd; /* SHORT_NAMED_INTEGER_VALUE */

export
const _decode_TermCAMELRecord_jIPSoInd: $.ASN1Decoder<TermCAMELRecord_jIPSoInd> = $._decodeInteger;

export
const _encode_TermCAMELRecord_jIPSoInd: $.ASN1Encoder<TermCAMELRecord_jIPSoInd> = $._encodeInteger;

/* eslint-enable */
