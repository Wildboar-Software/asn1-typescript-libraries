/* eslint-disable */
import {
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary TermCAMELRecord_jIPSoInd
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TermCAMELRecord-jIPSoInd ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
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
const TermCAMELRecord_jIPSoInd_lRN_NP_Database: TermCAMELRecord_jIPSoInd = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TermCAMELRecord_jIPSoInd_lRN_NP_Database
 * @constant
 * @type {number}
 */
export
const lRN_NP_Database: TermCAMELRecord_jIPSoInd = TermCAMELRecord_jIPSoInd_lRN_NP_Database; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TermCAMELRecord_jIPSoInd_switchingSystemData
 * @constant
 * @type {number}
 */
export
const TermCAMELRecord_jIPSoInd_switchingSystemData: TermCAMELRecord_jIPSoInd = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TermCAMELRecord_jIPSoInd_switchingSystemData
 * @constant
 * @type {number}
 */
export
const switchingSystemData: TermCAMELRecord_jIPSoInd = TermCAMELRecord_jIPSoInd_switchingSystemData; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TermCAMELRecord_jIPSoInd_incomingsignaling
 * @constant
 * @type {number}
 */
export
const TermCAMELRecord_jIPSoInd_incomingsignaling: TermCAMELRecord_jIPSoInd = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TermCAMELRecord_jIPSoInd_incomingsignaling
 * @constant
 * @type {number}
 */
export
const incomingsignaling: TermCAMELRecord_jIPSoInd = TermCAMELRecord_jIPSoInd_incomingsignaling; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TermCAMELRecord_jIPSoInd_unknown
 * @constant
 * @type {number}
 */
export
const TermCAMELRecord_jIPSoInd_unknown: TermCAMELRecord_jIPSoInd = 9; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TermCAMELRecord_jIPSoInd_unknown
 * @constant
 * @type {number}
 */
export
const unknown: TermCAMELRecord_jIPSoInd = TermCAMELRecord_jIPSoInd_unknown; /* SHORT_NAMED_INTEGER_VALUE */

export
const _decode_TermCAMELRecord_jIPSoInd: $.ASN1Decoder<TermCAMELRecord_jIPSoInd> = $._decodeInteger;

export
const _encode_TermCAMELRecord_jIPSoInd: $.ASN1Encoder<TermCAMELRecord_jIPSoInd> = $._encodeInteger;

/* eslint-enable */
