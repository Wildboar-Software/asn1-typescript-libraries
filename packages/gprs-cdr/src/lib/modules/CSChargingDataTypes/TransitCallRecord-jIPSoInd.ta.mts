/* eslint-disable */
import {
    type INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary TransitCallRecord_jIPSoInd
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TransitCallRecord-jIPSoInd ::= INTEGER {
 *    lRN-NP-Database        ( 1 ),
 *    switchingSystemData    ( 2 ),
 *    incomingsignaling      ( 3 ),
 *    unknown                ( 9 )
 * }
 * ```
 */
export
type TransitCallRecord_jIPSoInd = INTEGER;

/**
 * @summary TransitCallRecord_jIPSoInd_lRN_NP_Database
 * @constant
 * @type {number}
 */
export
const TransitCallRecord_jIPSoInd_lRN_NP_Database: TransitCallRecord_jIPSoInd = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TransitCallRecord_jIPSoInd_lRN_NP_Database
 * @constant
 * @type {number}
 */
export
const lRN_NP_Database: TransitCallRecord_jIPSoInd = TransitCallRecord_jIPSoInd_lRN_NP_Database; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TransitCallRecord_jIPSoInd_switchingSystemData
 * @constant
 * @type {number}
 */
export
const TransitCallRecord_jIPSoInd_switchingSystemData: TransitCallRecord_jIPSoInd = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TransitCallRecord_jIPSoInd_switchingSystemData
 * @constant
 * @type {number}
 */
export
const switchingSystemData: TransitCallRecord_jIPSoInd = TransitCallRecord_jIPSoInd_switchingSystemData; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TransitCallRecord_jIPSoInd_incomingsignaling
 * @constant
 * @type {number}
 */
export
const TransitCallRecord_jIPSoInd_incomingsignaling: TransitCallRecord_jIPSoInd = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TransitCallRecord_jIPSoInd_incomingsignaling
 * @constant
 * @type {number}
 */
export
const incomingsignaling: TransitCallRecord_jIPSoInd = TransitCallRecord_jIPSoInd_incomingsignaling; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TransitCallRecord_jIPSoInd_unknown
 * @constant
 * @type {number}
 */
export
const TransitCallRecord_jIPSoInd_unknown: TransitCallRecord_jIPSoInd = 9; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TransitCallRecord_jIPSoInd_unknown
 * @constant
 * @type {number}
 */
export
const unknown: TransitCallRecord_jIPSoInd = TransitCallRecord_jIPSoInd_unknown; /* SHORT_NAMED_INTEGER_VALUE */

export
const _decode_TransitCallRecord_jIPSoInd: $.ASN1Decoder<TransitCallRecord_jIPSoInd> = $._decodeInteger;

export
const _encode_TransitCallRecord_jIPSoInd: $.ASN1Encoder<TransitCallRecord_jIPSoInd> = $._encodeInteger;

/* eslint-enable */
