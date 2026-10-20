/* eslint-disable */
import {
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary MTCallRecord_jIPSoInd
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MTCallRecord-jIPSoInd ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
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
const MTCallRecord_jIPSoInd_lRN_NP_Database: MTCallRecord_jIPSoInd = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary MTCallRecord_jIPSoInd_lRN_NP_Database
 * @constant
 * @type {number}
 */
export
const lRN_NP_Database: MTCallRecord_jIPSoInd = MTCallRecord_jIPSoInd_lRN_NP_Database; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary MTCallRecord_jIPSoInd_switchingSystemData
 * @constant
 * @type {number}
 */
export
const MTCallRecord_jIPSoInd_switchingSystemData: MTCallRecord_jIPSoInd = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary MTCallRecord_jIPSoInd_switchingSystemData
 * @constant
 * @type {number}
 */
export
const switchingSystemData: MTCallRecord_jIPSoInd = MTCallRecord_jIPSoInd_switchingSystemData; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary MTCallRecord_jIPSoInd_incomingsignaling
 * @constant
 * @type {number}
 */
export
const MTCallRecord_jIPSoInd_incomingsignaling: MTCallRecord_jIPSoInd = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary MTCallRecord_jIPSoInd_incomingsignaling
 * @constant
 * @type {number}
 */
export
const incomingsignaling: MTCallRecord_jIPSoInd = MTCallRecord_jIPSoInd_incomingsignaling; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary MTCallRecord_jIPSoInd_unknown
 * @constant
 * @type {number}
 */
export
const MTCallRecord_jIPSoInd_unknown: MTCallRecord_jIPSoInd = 9; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary MTCallRecord_jIPSoInd_unknown
 * @constant
 * @type {number}
 */
export
const unknown: MTCallRecord_jIPSoInd = MTCallRecord_jIPSoInd_unknown; /* SHORT_NAMED_INTEGER_VALUE */

export
const _decode_MTCallRecord_jIPSoInd: $.ASN1Decoder<MTCallRecord_jIPSoInd> = $._decodeInteger;

export
const _encode_MTCallRecord_jIPSoInd: $.ASN1Encoder<MTCallRecord_jIPSoInd> = $._encodeInteger;

/* eslint-enable */
