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
const TermCAMELRecord_jIPSoInd_lRN_NP_Database: 1 = 1 satisfies TermCAMELRecord_jIPSoInd; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TermCAMELRecord_jIPSoInd_lRN_NP_Database
 * @constant
 * @type {number}
 */
export
const lRN_NP_Database: 1 = TermCAMELRecord_jIPSoInd_lRN_NP_Database; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TermCAMELRecord_jIPSoInd_switchingSystemData
 * @constant
 * @type {number}
 */
export
const TermCAMELRecord_jIPSoInd_switchingSystemData: 2 = 2 satisfies TermCAMELRecord_jIPSoInd; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TermCAMELRecord_jIPSoInd_switchingSystemData
 * @constant
 * @type {number}
 */
export
const switchingSystemData: 2 = TermCAMELRecord_jIPSoInd_switchingSystemData; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TermCAMELRecord_jIPSoInd_incomingsignaling
 * @constant
 * @type {number}
 */
export
const TermCAMELRecord_jIPSoInd_incomingsignaling: 3 = 3 satisfies TermCAMELRecord_jIPSoInd; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TermCAMELRecord_jIPSoInd_incomingsignaling
 * @constant
 * @type {number}
 */
export
const incomingsignaling: 3 = TermCAMELRecord_jIPSoInd_incomingsignaling; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TermCAMELRecord_jIPSoInd_unknown
 * @constant
 * @type {number}
 */
export
const TermCAMELRecord_jIPSoInd_unknown: 9 = 9 satisfies TermCAMELRecord_jIPSoInd; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TermCAMELRecord_jIPSoInd_unknown
 * @constant
 * @type {number}
 */
export
const unknown: 9 = TermCAMELRecord_jIPSoInd_unknown; /* SHORT_NAMED_INTEGER_VALUE */

export
const _decode_TermCAMELRecord_jIPSoInd: $.ASN1Decoder<TermCAMELRecord_jIPSoInd> = $._decodeInteger;

export
const _encode_TermCAMELRecord_jIPSoInd: $.ASN1Encoder<TermCAMELRecord_jIPSoInd> = $._encodeInteger;

/* eslint-enable */
