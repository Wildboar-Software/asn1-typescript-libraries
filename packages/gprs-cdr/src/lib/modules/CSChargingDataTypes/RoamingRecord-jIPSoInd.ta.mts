/* eslint-disable */
import {
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary RoamingRecord_jIPSoInd
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RoamingRecord-jIPSoInd ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type RoamingRecord_jIPSoInd = INTEGER;

/**
 * @summary RoamingRecord_jIPSoInd_lRN_NP_Database
 * @constant
 * @type {number}
 */
export
const RoamingRecord_jIPSoInd_lRN_NP_Database: RoamingRecord_jIPSoInd = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RoamingRecord_jIPSoInd_lRN_NP_Database
 * @constant
 * @type {number}
 */
export
const lRN_NP_Database: RoamingRecord_jIPSoInd = RoamingRecord_jIPSoInd_lRN_NP_Database; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RoamingRecord_jIPSoInd_switchingSystemData
 * @constant
 * @type {number}
 */
export
const RoamingRecord_jIPSoInd_switchingSystemData: RoamingRecord_jIPSoInd = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RoamingRecord_jIPSoInd_switchingSystemData
 * @constant
 * @type {number}
 */
export
const switchingSystemData: RoamingRecord_jIPSoInd = RoamingRecord_jIPSoInd_switchingSystemData; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RoamingRecord_jIPSoInd_incomingsignaling
 * @constant
 * @type {number}
 */
export
const RoamingRecord_jIPSoInd_incomingsignaling: RoamingRecord_jIPSoInd = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RoamingRecord_jIPSoInd_incomingsignaling
 * @constant
 * @type {number}
 */
export
const incomingsignaling: RoamingRecord_jIPSoInd = RoamingRecord_jIPSoInd_incomingsignaling; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RoamingRecord_jIPSoInd_unknown
 * @constant
 * @type {number}
 */
export
const RoamingRecord_jIPSoInd_unknown: RoamingRecord_jIPSoInd = 9; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RoamingRecord_jIPSoInd_unknown
 * @constant
 * @type {number}
 */
export
const unknown: RoamingRecord_jIPSoInd = RoamingRecord_jIPSoInd_unknown; /* SHORT_NAMED_INTEGER_VALUE */

export
const _decode_RoamingRecord_jIPSoInd: $.ASN1Decoder<RoamingRecord_jIPSoInd> = $._decodeInteger;

export
const _encode_RoamingRecord_jIPSoInd: $.ASN1Encoder<RoamingRecord_jIPSoInd> = $._encodeInteger;

/* eslint-enable */
