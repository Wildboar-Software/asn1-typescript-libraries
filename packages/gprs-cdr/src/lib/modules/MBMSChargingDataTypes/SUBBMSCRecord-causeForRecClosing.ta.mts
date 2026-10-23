/* eslint-disable */
import {
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SUBBMSCRecord_causeForRecClosing
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SUBBMSCRecord-causeForRecClosing ::= INTEGER {
 *    normalRelease                 ( 0 ),
 *    abnormalRelease               ( 4 ),
 *    volumeLimit                   ( 16 ),
 *    timeLimit                     ( 17 ),
 *    maxChangeCond                 ( 19 ),
 *    managementIntervention        ( 20 ),
 *    listofDownstreamNodeChange    ( 59 )
 * }
 * ```
 */
export
type SUBBMSCRecord_causeForRecClosing = INTEGER;

/**
 * @summary SUBBMSCRecord_causeForRecClosing_normalRelease
 * @constant
 * @type {number}
 */
export
const SUBBMSCRecord_causeForRecClosing_normalRelease: SUBBMSCRecord_causeForRecClosing = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SUBBMSCRecord_causeForRecClosing_normalRelease
 * @constant
 * @type {number}
 */
export
const normalRelease: SUBBMSCRecord_causeForRecClosing = SUBBMSCRecord_causeForRecClosing_normalRelease; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SUBBMSCRecord_causeForRecClosing_abnormalRelease
 * @constant
 * @type {number}
 */
export
const SUBBMSCRecord_causeForRecClosing_abnormalRelease: SUBBMSCRecord_causeForRecClosing = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SUBBMSCRecord_causeForRecClosing_abnormalRelease
 * @constant
 * @type {number}
 */
export
const abnormalRelease: SUBBMSCRecord_causeForRecClosing = SUBBMSCRecord_causeForRecClosing_abnormalRelease; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SUBBMSCRecord_causeForRecClosing_volumeLimit
 * @constant
 * @type {number}
 */
export
const SUBBMSCRecord_causeForRecClosing_volumeLimit: SUBBMSCRecord_causeForRecClosing = 16; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SUBBMSCRecord_causeForRecClosing_volumeLimit
 * @constant
 * @type {number}
 */
export
const volumeLimit: SUBBMSCRecord_causeForRecClosing = SUBBMSCRecord_causeForRecClosing_volumeLimit; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SUBBMSCRecord_causeForRecClosing_timeLimit
 * @constant
 * @type {number}
 */
export
const SUBBMSCRecord_causeForRecClosing_timeLimit: SUBBMSCRecord_causeForRecClosing = 17; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SUBBMSCRecord_causeForRecClosing_timeLimit
 * @constant
 * @type {number}
 */
export
const timeLimit: SUBBMSCRecord_causeForRecClosing = SUBBMSCRecord_causeForRecClosing_timeLimit; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SUBBMSCRecord_causeForRecClosing_maxChangeCond
 * @constant
 * @type {number}
 */
export
const SUBBMSCRecord_causeForRecClosing_maxChangeCond: SUBBMSCRecord_causeForRecClosing = 19; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SUBBMSCRecord_causeForRecClosing_maxChangeCond
 * @constant
 * @type {number}
 */
export
const maxChangeCond: SUBBMSCRecord_causeForRecClosing = SUBBMSCRecord_causeForRecClosing_maxChangeCond; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SUBBMSCRecord_causeForRecClosing_managementIntervention
 * @constant
 * @type {number}
 */
export
const SUBBMSCRecord_causeForRecClosing_managementIntervention: SUBBMSCRecord_causeForRecClosing = 20; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SUBBMSCRecord_causeForRecClosing_managementIntervention
 * @constant
 * @type {number}
 */
export
const managementIntervention: SUBBMSCRecord_causeForRecClosing = SUBBMSCRecord_causeForRecClosing_managementIntervention; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SUBBMSCRecord_causeForRecClosing_listofDownstreamNodeChange
 * @constant
 * @type {number}
 */
export
const SUBBMSCRecord_causeForRecClosing_listofDownstreamNodeChange: SUBBMSCRecord_causeForRecClosing = 59; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SUBBMSCRecord_causeForRecClosing_listofDownstreamNodeChange
 * @constant
 * @type {number}
 */
export
const listofDownstreamNodeChange: SUBBMSCRecord_causeForRecClosing = SUBBMSCRecord_causeForRecClosing_listofDownstreamNodeChange; /* SHORT_NAMED_INTEGER_VALUE */

export
const _decode_SUBBMSCRecord_causeForRecClosing: $.ASN1Decoder<SUBBMSCRecord_causeForRecClosing> = $._decodeInteger;

export
const _encode_SUBBMSCRecord_causeForRecClosing: $.ASN1Encoder<SUBBMSCRecord_causeForRecClosing> = $._encodeInteger;

/* eslint-enable */
