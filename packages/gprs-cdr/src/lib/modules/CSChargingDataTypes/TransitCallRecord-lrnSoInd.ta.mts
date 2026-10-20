/* eslint-disable */
import {
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary TransitCallRecord_lrnSoInd
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TransitCallRecord-lrnSoInd ::= INTEGER {
 *    lRN-NP-Database        ( 1 ),
 *    switchingSystemData    ( 2 ),
 *    incomingsignaling      ( 3 ),
 *    unknown                ( 9 )
 * }
 * ```
 */
export
type TransitCallRecord_lrnSoInd = INTEGER;

/**
 * @summary TransitCallRecord_lrnSoInd_lRN_NP_Database
 * @constant
 * @type {number}
 */
export
const TransitCallRecord_lrnSoInd_lRN_NP_Database: TransitCallRecord_lrnSoInd = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TransitCallRecord_lrnSoInd_lRN_NP_Database
 * @constant
 * @type {number}
 */
export
const lRN_NP_Database: TransitCallRecord_lrnSoInd = TransitCallRecord_lrnSoInd_lRN_NP_Database; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TransitCallRecord_lrnSoInd_switchingSystemData
 * @constant
 * @type {number}
 */
export
const TransitCallRecord_lrnSoInd_switchingSystemData: TransitCallRecord_lrnSoInd = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TransitCallRecord_lrnSoInd_switchingSystemData
 * @constant
 * @type {number}
 */
export
const switchingSystemData: TransitCallRecord_lrnSoInd = TransitCallRecord_lrnSoInd_switchingSystemData; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TransitCallRecord_lrnSoInd_incomingsignaling
 * @constant
 * @type {number}
 */
export
const TransitCallRecord_lrnSoInd_incomingsignaling: TransitCallRecord_lrnSoInd = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TransitCallRecord_lrnSoInd_incomingsignaling
 * @constant
 * @type {number}
 */
export
const incomingsignaling: TransitCallRecord_lrnSoInd = TransitCallRecord_lrnSoInd_incomingsignaling; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TransitCallRecord_lrnSoInd_unknown
 * @constant
 * @type {number}
 */
export
const TransitCallRecord_lrnSoInd_unknown: TransitCallRecord_lrnSoInd = 9; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TransitCallRecord_lrnSoInd_unknown
 * @constant
 * @type {number}
 */
export
const unknown: TransitCallRecord_lrnSoInd = TransitCallRecord_lrnSoInd_unknown; /* SHORT_NAMED_INTEGER_VALUE */

export
const _decode_TransitCallRecord_lrnSoInd: $.ASN1Decoder<TransitCallRecord_lrnSoInd> = $._decodeInteger;

export
const _encode_TransitCallRecord_lrnSoInd: $.ASN1Encoder<TransitCallRecord_lrnSoInd> = $._encodeInteger;

/* eslint-enable */
