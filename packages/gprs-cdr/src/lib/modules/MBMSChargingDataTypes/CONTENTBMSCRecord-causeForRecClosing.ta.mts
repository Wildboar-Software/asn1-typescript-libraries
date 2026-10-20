/* eslint-disable */
import {
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary CONTENTBMSCRecord_causeForRecClosing
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CONTENTBMSCRecord-causeForRecClosing ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type CONTENTBMSCRecord_causeForRecClosing = INTEGER;

/**
 * @summary CONTENTBMSCRecord_causeForRecClosing_normalRelease
 * @constant
 * @type {number}
 */
export
const CONTENTBMSCRecord_causeForRecClosing_normalRelease: CONTENTBMSCRecord_causeForRecClosing = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CONTENTBMSCRecord_causeForRecClosing_normalRelease
 * @constant
 * @type {number}
 */
export
const normalRelease: CONTENTBMSCRecord_causeForRecClosing = CONTENTBMSCRecord_causeForRecClosing_normalRelease; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary CONTENTBMSCRecord_causeForRecClosing_abnormalRelease
 * @constant
 * @type {number}
 */
export
const CONTENTBMSCRecord_causeForRecClosing_abnormalRelease: CONTENTBMSCRecord_causeForRecClosing = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CONTENTBMSCRecord_causeForRecClosing_abnormalRelease
 * @constant
 * @type {number}
 */
export
const abnormalRelease: CONTENTBMSCRecord_causeForRecClosing = CONTENTBMSCRecord_causeForRecClosing_abnormalRelease; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary CONTENTBMSCRecord_causeForRecClosing_volumeLimit
 * @constant
 * @type {number}
 */
export
const CONTENTBMSCRecord_causeForRecClosing_volumeLimit: CONTENTBMSCRecord_causeForRecClosing = 16; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CONTENTBMSCRecord_causeForRecClosing_volumeLimit
 * @constant
 * @type {number}
 */
export
const volumeLimit: CONTENTBMSCRecord_causeForRecClosing = CONTENTBMSCRecord_causeForRecClosing_volumeLimit; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary CONTENTBMSCRecord_causeForRecClosing_timeLimit
 * @constant
 * @type {number}
 */
export
const CONTENTBMSCRecord_causeForRecClosing_timeLimit: CONTENTBMSCRecord_causeForRecClosing = 17; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CONTENTBMSCRecord_causeForRecClosing_timeLimit
 * @constant
 * @type {number}
 */
export
const timeLimit: CONTENTBMSCRecord_causeForRecClosing = CONTENTBMSCRecord_causeForRecClosing_timeLimit; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary CONTENTBMSCRecord_causeForRecClosing_maxChangeCond
 * @constant
 * @type {number}
 */
export
const CONTENTBMSCRecord_causeForRecClosing_maxChangeCond: CONTENTBMSCRecord_causeForRecClosing = 19; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CONTENTBMSCRecord_causeForRecClosing_maxChangeCond
 * @constant
 * @type {number}
 */
export
const maxChangeCond: CONTENTBMSCRecord_causeForRecClosing = CONTENTBMSCRecord_causeForRecClosing_maxChangeCond; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary CONTENTBMSCRecord_causeForRecClosing_managementIntervention
 * @constant
 * @type {number}
 */
export
const CONTENTBMSCRecord_causeForRecClosing_managementIntervention: CONTENTBMSCRecord_causeForRecClosing = 20; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CONTENTBMSCRecord_causeForRecClosing_managementIntervention
 * @constant
 * @type {number}
 */
export
const managementIntervention: CONTENTBMSCRecord_causeForRecClosing = CONTENTBMSCRecord_causeForRecClosing_managementIntervention; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary CONTENTBMSCRecord_causeForRecClosing_listofDownstreamNodeChange
 * @constant
 * @type {number}
 */
export
const CONTENTBMSCRecord_causeForRecClosing_listofDownstreamNodeChange: CONTENTBMSCRecord_causeForRecClosing = 59; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CONTENTBMSCRecord_causeForRecClosing_listofDownstreamNodeChange
 * @constant
 * @type {number}
 */
export
const listofDownstreamNodeChange: CONTENTBMSCRecord_causeForRecClosing = CONTENTBMSCRecord_causeForRecClosing_listofDownstreamNodeChange; /* SHORT_NAMED_INTEGER_VALUE */

export
const _decode_CONTENTBMSCRecord_causeForRecClosing: $.ASN1Decoder<CONTENTBMSCRecord_causeForRecClosing> = $._decodeInteger;

export
const _encode_CONTENTBMSCRecord_causeForRecClosing: $.ASN1Encoder<CONTENTBMSCRecord_causeForRecClosing> = $._encodeInteger;

/* eslint-enable */
