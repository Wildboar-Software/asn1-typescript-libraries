/* eslint-disable */
import {
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary MBMSCauseForRecClosing
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MBMSCauseForRecClosing  ::=  INTEGER {
 *    normalRelease                 ( 0 ),
 *    abnormalRelease               ( 4 ),
 *    volumeLimit                   ( 16 ),
 *    timeLimit                     ( 17 ),
 *    maxChangeCond                 ( 19 ),
 *    managementIntervention        ( 20 ),
 *    listofDownstreamNodeChange    ( 59 )}
 * ```
 */
export
type MBMSCauseForRecClosing = INTEGER;

/**
 * @summary MBMSCauseForRecClosing_normalRelease
 * @constant
 * @type {number}
 */
export
const MBMSCauseForRecClosing_normalRelease: MBMSCauseForRecClosing = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary MBMSCauseForRecClosing_normalRelease
 * @constant
 * @type {number}
 */
export
const normalRelease: MBMSCauseForRecClosing = MBMSCauseForRecClosing_normalRelease; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary MBMSCauseForRecClosing_abnormalRelease
 * @constant
 * @type {number}
 */
export
const MBMSCauseForRecClosing_abnormalRelease: MBMSCauseForRecClosing = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary MBMSCauseForRecClosing_abnormalRelease
 * @constant
 * @type {number}
 */
export
const abnormalRelease: MBMSCauseForRecClosing = MBMSCauseForRecClosing_abnormalRelease; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary MBMSCauseForRecClosing_volumeLimit
 * @constant
 * @type {number}
 */
export
const MBMSCauseForRecClosing_volumeLimit: MBMSCauseForRecClosing = 16; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary MBMSCauseForRecClosing_volumeLimit
 * @constant
 * @type {number}
 */
export
const volumeLimit: MBMSCauseForRecClosing = MBMSCauseForRecClosing_volumeLimit; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary MBMSCauseForRecClosing_timeLimit
 * @constant
 * @type {number}
 */
export
const MBMSCauseForRecClosing_timeLimit: MBMSCauseForRecClosing = 17; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary MBMSCauseForRecClosing_timeLimit
 * @constant
 * @type {number}
 */
export
const timeLimit: MBMSCauseForRecClosing = MBMSCauseForRecClosing_timeLimit; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary MBMSCauseForRecClosing_maxChangeCond
 * @constant
 * @type {number}
 */
export
const MBMSCauseForRecClosing_maxChangeCond: MBMSCauseForRecClosing = 19; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary MBMSCauseForRecClosing_maxChangeCond
 * @constant
 * @type {number}
 */
export
const maxChangeCond: MBMSCauseForRecClosing = MBMSCauseForRecClosing_maxChangeCond; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary MBMSCauseForRecClosing_managementIntervention
 * @constant
 * @type {number}
 */
export
const MBMSCauseForRecClosing_managementIntervention: MBMSCauseForRecClosing = 20; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary MBMSCauseForRecClosing_managementIntervention
 * @constant
 * @type {number}
 */
export
const managementIntervention: MBMSCauseForRecClosing = MBMSCauseForRecClosing_managementIntervention; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary MBMSCauseForRecClosing_listofDownstreamNodeChange
 * @constant
 * @type {number}
 */
export
const MBMSCauseForRecClosing_listofDownstreamNodeChange: MBMSCauseForRecClosing = 59; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary MBMSCauseForRecClosing_listofDownstreamNodeChange
 * @constant
 * @type {number}
 */
export
const listofDownstreamNodeChange: MBMSCauseForRecClosing = MBMSCauseForRecClosing_listofDownstreamNodeChange; /* SHORT_NAMED_INTEGER_VALUE */

export
const _decode_MBMSCauseForRecClosing: $.ASN1Decoder<MBMSCauseForRecClosing> = $._decodeInteger;

export
const _encode_MBMSCauseForRecClosing: $.ASN1Encoder<MBMSCauseForRecClosing> = $._encodeInteger;

/* eslint-enable */
