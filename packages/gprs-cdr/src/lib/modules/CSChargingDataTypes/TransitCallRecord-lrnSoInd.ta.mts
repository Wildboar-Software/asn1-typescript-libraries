/* eslint-disable */
import {
    type INTEGER
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
const TransitCallRecord_lrnSoInd_lRN_NP_Database = 1 satisfies TransitCallRecord_lrnSoInd; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TransitCallRecord_lrnSoInd_lRN_NP_Database
 * @constant
 * @type {number}
 */
export
const lRN_NP_Database = TransitCallRecord_lrnSoInd_lRN_NP_Database satisfies TransitCallRecord_lrnSoInd; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TransitCallRecord_lrnSoInd_switchingSystemData
 * @constant
 * @type {number}
 */
export
const TransitCallRecord_lrnSoInd_switchingSystemData = 2 satisfies TransitCallRecord_lrnSoInd; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TransitCallRecord_lrnSoInd_switchingSystemData
 * @constant
 * @type {number}
 */
export
const switchingSystemData = TransitCallRecord_lrnSoInd_switchingSystemData satisfies TransitCallRecord_lrnSoInd; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TransitCallRecord_lrnSoInd_incomingsignaling
 * @constant
 * @type {number}
 */
export
const TransitCallRecord_lrnSoInd_incomingsignaling = 3 satisfies TransitCallRecord_lrnSoInd; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TransitCallRecord_lrnSoInd_incomingsignaling
 * @constant
 * @type {number}
 */
export
const incomingsignaling = TransitCallRecord_lrnSoInd_incomingsignaling satisfies TransitCallRecord_lrnSoInd; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TransitCallRecord_lrnSoInd_unknown
 * @constant
 * @type {number}
 */
export
const TransitCallRecord_lrnSoInd_unknown = 9 satisfies TransitCallRecord_lrnSoInd; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TransitCallRecord_lrnSoInd_unknown
 * @constant
 * @type {number}
 */
export
const unknown = TransitCallRecord_lrnSoInd_unknown satisfies TransitCallRecord_lrnSoInd; /* SHORT_NAMED_INTEGER_VALUE */

export
const _decode_TransitCallRecord_lrnSoInd: $.ASN1Decoder<TransitCallRecord_lrnSoInd> = $._decodeInteger;

export
const _encode_TransitCallRecord_lrnSoInd: $.ASN1Encoder<TransitCallRecord_lrnSoInd> = $._encodeInteger;

/* eslint-enable */
