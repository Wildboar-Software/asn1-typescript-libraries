/* eslint-disable */
import {
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary TermCAMELRecord_lrnSoInd
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TermCAMELRecord-lrnSoInd ::= INTEGER {
 *    lRN-NP-Database        ( 1 ),
 *    switchingSystemData    ( 2 ),
 *    incomingsignaling      ( 3 ),
 *    unknown                ( 9 )
 * }
 * ```
 */
export
type TermCAMELRecord_lrnSoInd = INTEGER;

/**
 * @summary TermCAMELRecord_lrnSoInd_lRN_NP_Database
 * @constant
 * @type {number}
 */
export
const TermCAMELRecord_lrnSoInd_lRN_NP_Database: TermCAMELRecord_lrnSoInd = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TermCAMELRecord_lrnSoInd_lRN_NP_Database
 * @constant
 * @type {number}
 */
export
const lRN_NP_Database: TermCAMELRecord_lrnSoInd = TermCAMELRecord_lrnSoInd_lRN_NP_Database; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TermCAMELRecord_lrnSoInd_switchingSystemData
 * @constant
 * @type {number}
 */
export
const TermCAMELRecord_lrnSoInd_switchingSystemData: TermCAMELRecord_lrnSoInd = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TermCAMELRecord_lrnSoInd_switchingSystemData
 * @constant
 * @type {number}
 */
export
const switchingSystemData: TermCAMELRecord_lrnSoInd = TermCAMELRecord_lrnSoInd_switchingSystemData; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TermCAMELRecord_lrnSoInd_incomingsignaling
 * @constant
 * @type {number}
 */
export
const TermCAMELRecord_lrnSoInd_incomingsignaling: TermCAMELRecord_lrnSoInd = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TermCAMELRecord_lrnSoInd_incomingsignaling
 * @constant
 * @type {number}
 */
export
const incomingsignaling: TermCAMELRecord_lrnSoInd = TermCAMELRecord_lrnSoInd_incomingsignaling; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TermCAMELRecord_lrnSoInd_unknown
 * @constant
 * @type {number}
 */
export
const TermCAMELRecord_lrnSoInd_unknown: TermCAMELRecord_lrnSoInd = 9; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TermCAMELRecord_lrnSoInd_unknown
 * @constant
 * @type {number}
 */
export
const unknown: TermCAMELRecord_lrnSoInd = TermCAMELRecord_lrnSoInd_unknown; /* SHORT_NAMED_INTEGER_VALUE */

export
const _decode_TermCAMELRecord_lrnSoInd: $.ASN1Decoder<TermCAMELRecord_lrnSoInd> = $._decodeInteger;

export
const _encode_TermCAMELRecord_lrnSoInd: $.ASN1Encoder<TermCAMELRecord_lrnSoInd> = $._encodeInteger;

/* eslint-enable */
